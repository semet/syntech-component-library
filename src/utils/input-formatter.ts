export type InputMode =
  | 'number'
  | 'alphabet'
  | 'alphanumeric'
  | 'currency'
  | 'decimal'
  | 'integer'
  | 'positive-number'
  | 'uppercase'
  | 'lowercase'

interface FilterOptions {
  allowNegative?: boolean
  decimalPlaces?: number
}

interface FormatOptions {
  decimalPlaces?: number
}

export function filterInput(
  value: string,
  mode: InputMode | undefined,
  options?: FilterOptions,
): string {
  if (!mode) return value // Accept everything for default mode

  switch (mode) {
    case 'number':
    case 'integer':
    case 'positive-number': {
      const allowNegative =
        mode !== 'positive-number' && options?.allowNegative !== false
      let filtered = value.replaceAll(/[^\d.-]/g, '')

      // Handle negative sign
      if (allowNegative) {
        const negativeCount = (filtered.match(/-/g) || []).length
        if (negativeCount > 1) {
          filtered = '-' + filtered.replaceAll('-', '')
        }
        if (filtered.indexOf('-') > 0) {
          filtered = '-' + filtered.replaceAll('-', '')
        }
      } else {
        filtered = filtered.replaceAll('-', '')
      }

      // For integer mode, remove decimals
      if (mode === 'integer') {
        filtered = filtered.replaceAll('.', '')
      }

      return filtered
    }

    case 'alphabet': {
      return value.replaceAll(/[^a-zA-Z\s]/g, '')
    }

    case 'alphanumeric': {
      return value.replaceAll(/[^a-zA-Z0-9\s]/g, '')
    }

    case 'currency': {
      return value.replaceAll(/[^\d.-]/g, '').replaceAll(/(?!^)-/g, '')
    }

    case 'decimal': {
      let filtered = value.replaceAll(/[^\d.-]/g, '')

      // Handle negative sign
      const allowNegative = options?.allowNegative !== false
      if (allowNegative) {
        const negativeCount = (filtered.match(/-/g) || []).length
        if (negativeCount > 1) {
          filtered = '-' + filtered.replaceAll('-', '')
        }
        if (filtered.indexOf('-') > 0) {
          filtered = '-' + filtered.replaceAll('-', '')
        }
      } else {
        filtered = filtered.replaceAll('-', '')
      }

      // Handle decimal point
      const parts = filtered.split('.')
      if (parts.length > 2) {
        filtered = parts[0] + '.' + parts.slice(1).join('')
      }

      // Limit decimal places if specified
      if (options?.decimalPlaces !== undefined && parts.length === 2) {
        filtered =
          parts[0] + '.' + parts[1].slice(0, Math.max(0, options.decimalPlaces))
      }

      return filtered
    }

    case 'uppercase': {
      return value.toUpperCase()
    }

    case 'lowercase': {
      return value.toLowerCase()
    }

    default: {
      return value
    }
  }
}

export function formatValue(
  value: string,
  mode: InputMode | undefined,
  options?: FormatOptions,
): string {
  if (!value || !mode) return value
  switch (mode) {
    case 'currency': {
      // Remove non-numeric except decimal and negative
      let numericValue = value.replaceAll(/[^\d.-]/g, '')
      if (!numericValue || numericValue === '-') return ''

      // Handle negative
      const isNegative = numericValue.startsWith('-')
      numericValue = numericValue.replace('-', '')

      // Split into integer and decimal parts
      const parts = numericValue.split('.')
      let integerPart = parts[0]
      const decimalPart = parts[1]

      // Add thousand separators
      integerPart = integerPart.replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',')

      // Combine with decimal part
      let formatted = integerPart
      // Default 2 decimal places
      if (decimalPart !== undefined) {
        const limitedDecimal =
          options?.decimalPlaces === undefined
            ? decimalPart.slice(0, 2)
            : decimalPart.slice(0, Math.max(0, options.decimalPlaces))
        formatted += '.' + limitedDecimal
      }

      return isNegative ? '-' + formatted : formatted
    }

    case 'decimal': {
      // Handle edge cases
      if (value === '.') return '0.'
      if (value === '-.') return '-0.'
      if (value.startsWith('.')) return '0' + value
      if (value === '-') return '-'

      // Format with specified decimal places
      if (options?.decimalPlaces !== undefined && value.includes('.')) {
        const parts = value.split('.')
        return (
          parts[0] + '.' + parts[1].slice(0, Math.max(0, options.decimalPlaces))
        )
      }

      return value
    }

    case 'number':
    case 'integer': {
      // Add thousand separators for display
      if (!value || value === '-') return value
      const parts = value.split('.')
      parts[0] = parts[0].replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }

    default: {
      return value
    }
  }
}

export const getRawValue = (
  formattedValue: string,
  mode: InputMode | undefined,
): string => {
  if (!mode) return formattedValue

  switch (mode) {
    case 'currency':
    case 'number':
    case 'integer': {
      return formattedValue.replaceAll(',', '')
    }

    default: {
      return formattedValue
    }
  }
}
