/* eslint-disable unicorn/no-useless-undefined */
import { describe, it, expect } from 'vitest'

import { filterInput, formatValue, getRawValue } from './input-formatter'

describe('filterInput', () => {
  describe('no mode (default)', () => {
    it('should accept any characters when mode is undefined', () => {
      expect(filterInput('abc123!@#', undefined)).toBe('abc123!@#')
      expect(filterInput('Hello World 123', undefined)).toBe('Hello World 123')
      expect(filterInput('test@email.com', undefined)).toBe('test@email.com')
    })
  })

  describe('number mode', () => {
    it('should allow numbers with decimals and negative', () => {
      expect(filterInput('123.45', 'number')).toBe('123.45')
      expect(filterInput('-123.45', 'number')).toBe('-123.45')
    })

    it('should remove non-numeric characters', () => {
      expect(filterInput('abc123def', 'number')).toBe('123')
      expect(filterInput('12a3b4c5', 'number')).toBe('12345')
    })

    it('should handle multiple decimal points', () => {
      expect(filterInput('12.34.56', 'number')).toBe('12.3456')
    })

    it('should handle multiple negative signs', () => {
      expect(filterInput('--123', 'number')).toBe('-123')
      expect(filterInput('12-3-4', 'number')).toBe('-1234')
    })

    it('should disallow negative when allowNegative is false', () => {
      expect(filterInput('-123', 'number', { allowNegative: false })).toBe(
        '123',
      )
      expect(filterInput('12-34', 'number', { allowNegative: false })).toBe(
        '1234',
      )
    })
  })

  describe('integer mode', () => {
    it('should only allow whole numbers', () => {
      expect(filterInput('123', 'integer')).toBe('123')
      expect(filterInput('-123', 'integer')).toBe('-123')
    })

    it('should remove decimal points', () => {
      expect(filterInput('123.45', 'integer')).toBe('12345')
      expect(filterInput('1.2.3', 'integer')).toBe('123')
    })

    it('should remove non-numeric characters', () => {
      expect(filterInput('abc123', 'integer')).toBe('123')
    })

    it('should handle negative numbers', () => {
      expect(filterInput('--456', 'integer')).toBe('-456')
    })
  })

  describe('positive-number mode', () => {
    it('should only allow positive numbers', () => {
      expect(filterInput('123.45', 'positive-number')).toBe('123.45')
      expect(filterInput('789', 'positive-number')).toBe('789')
    })

    it('should remove negative signs', () => {
      expect(filterInput('-123', 'positive-number')).toBe('123')
      expect(filterInput('12-34', 'positive-number')).toBe('1234')
    })

    it('should remove non-numeric characters', () => {
      expect(filterInput('abc123def', 'positive-number')).toBe('123')
    })
  })

  describe('currency mode', () => {
    it('should allow numbers with decimals and negative', () => {
      expect(filterInput('123.45', 'currency')).toBe('123.45')
      expect(filterInput('-123.45', 'currency')).toBe('-123.45')
    })

    it('should remove non-numeric characters except decimal and leading negative', () => {
      expect(filterInput('$1,234.56', 'currency')).toBe('1234.56')
      expect(filterInput('abc123def', 'currency')).toBe('123')
    })

    it('should keep negative sign only at the beginning', () => {
      expect(filterInput('-123', 'currency')).toBe('-123')
      expect(filterInput('12-34', 'currency')).toBe('1234')
    })
  })

  describe('decimal mode', () => {
    it('should allow decimal numbers', () => {
      expect(filterInput('123.45', 'decimal')).toBe('123.45')
      expect(filterInput('-123.45', 'decimal')).toBe('-123.45')
    })

    it('should handle single decimal point', () => {
      expect(filterInput('12.34.56', 'decimal')).toBe('12.3456')
    })

    it('should limit decimal places when specified', () => {
      expect(filterInput('123.456789', 'decimal', { decimalPlaces: 2 })).toBe(
        '123.45',
      )
      expect(filterInput('123.456789', 'decimal', { decimalPlaces: 4 })).toBe(
        '123.4567',
      )
    })

    it('should handle negative numbers', () => {
      expect(filterInput('--123.45', 'decimal')).toBe('-123.45')
      expect(filterInput('12-3.45', 'decimal')).toBe('-123.45')
    })

    it('should disallow negative when allowNegative is false', () => {
      expect(filterInput('-123.45', 'decimal', { allowNegative: false })).toBe(
        '123.45',
      )
    })
  })

  describe('alphabet mode', () => {
    it('should only allow letters and spaces', () => {
      expect(filterInput('Hello World', 'alphabet')).toBe('Hello World')
      expect(filterInput('JohnDoe', 'alphabet')).toBe('JohnDoe')
    })

    it('should remove numbers and special characters', () => {
      expect(filterInput('Hello123World', 'alphabet')).toBe('HelloWorld')
      expect(filterInput('Test@#$Name', 'alphabet')).toBe('TestName')
      expect(filterInput('abc123def456', 'alphabet')).toBe('abcdef')
    })

    it('should preserve spaces', () => {
      expect(filterInput('First Middle Last', 'alphabet')).toBe(
        'First Middle Last',
      )
    })
  })

  describe('alphanumeric mode', () => {
    it('should allow letters, numbers, and spaces', () => {
      expect(filterInput('User123', 'alphanumeric')).toBe('User123')
      expect(filterInput('Hello World 123', 'alphanumeric')).toBe(
        'Hello World 123',
      )
    })

    it('should remove special characters', () => {
      expect(filterInput('User@123', 'alphanumeric')).toBe('User123')
      expect(filterInput('Test!@#Name456', 'alphanumeric')).toBe('TestName456')
    })

    it('should preserve spaces', () => {
      expect(filterInput('User Name 123', 'alphanumeric')).toBe('User Name 123')
    })
  })

  describe('uppercase mode', () => {
    it('should convert to uppercase', () => {
      expect(filterInput('hello', 'uppercase')).toBe('HELLO')
      expect(filterInput('Hello World', 'uppercase')).toBe('HELLO WORLD')
      expect(filterInput('test123', 'uppercase')).toBe('TEST123')
    })

    it('should preserve already uppercase text', () => {
      expect(filterInput('ALREADY UPPER', 'uppercase')).toBe('ALREADY UPPER')
    })
  })

  describe('lowercase mode', () => {
    it('should convert to lowercase', () => {
      expect(filterInput('HELLO', 'lowercase')).toBe('hello')
      expect(filterInput('Hello World', 'lowercase')).toBe('hello world')
      expect(filterInput('TEST123', 'lowercase')).toBe('test123')
    })

    it('should preserve already lowercase text', () => {
      expect(filterInput('already lower', 'lowercase')).toBe('already lower')
    })
  })
})

describe('formatValue', () => {
  describe('no mode (default)', () => {
    it('should return value unchanged when mode is undefined', () => {
      expect(formatValue('123456', undefined)).toBe('123456')
      expect(formatValue('Hello World', undefined)).toBe('Hello World')
    })

    it('should return empty string for empty value', () => {
      expect(formatValue('', undefined)).toBe('')
    })
  })

  describe('currency mode', () => {
    it('should format with thousand separators', () => {
      expect(formatValue('1234', 'currency')).toBe('1,234')
      expect(formatValue('1234567', 'currency')).toBe('1,234,567')
      expect(formatValue('1234567.89', 'currency')).toBe('1,234,567.89')
    })

    it('should handle negative numbers', () => {
      expect(formatValue('-1234', 'currency')).toBe('-1,234')
      expect(formatValue('-1234.56', 'currency')).toBe('-1,234.56')
    })

    it('should limit decimal places to 2 by default', () => {
      expect(formatValue('1234.567', 'currency')).toBe('1,234.56')
      expect(formatValue('1234.999', 'currency')).toBe('1,234.99')
    })

    it('should respect custom decimal places', () => {
      expect(formatValue('1234.567', 'currency', { decimalPlaces: 3 })).toBe(
        '1,234.567',
      )
      expect(formatValue('1234.5', 'currency', { decimalPlaces: 4 })).toBe(
        '1,234.5',
      )
    })

    it('should return empty string for invalid input', () => {
      expect(formatValue('-', 'currency')).toBe('')
      expect(formatValue('', 'currency')).toBe('')
    })

    it('should handle zero decimal places', () => {
      expect(formatValue('1234.567', 'currency', { decimalPlaces: 0 })).toBe(
        '1,234',
      )
    })
  })

  describe('decimal mode', () => {
    it('should handle edge cases', () => {
      expect(formatValue('.', 'decimal')).toBe('0.')
      expect(formatValue('-.', 'decimal')).toBe('-0.')
      expect(formatValue('.5', 'decimal')).toBe('0.5')
      expect(formatValue('-', 'decimal')).toBe('-')
    })

    it('should limit decimal places when specified', () => {
      expect(formatValue('123.456789', 'decimal', { decimalPlaces: 2 })).toBe(
        '123.45',
      )
      expect(formatValue('123.456789', 'decimal', { decimalPlaces: 4 })).toBe(
        '123.4567',
      )
    })

    it('should handle values without decimal places option', () => {
      expect(formatValue('123.456', 'decimal')).toBe('123.456')
      expect(formatValue('-123.456', 'decimal')).toBe('-123.456')
    })

    it('should handle zero decimal places', () => {
      expect(formatValue('123.456', 'decimal', { decimalPlaces: 0 })).toBe(
        '123',
      )
    })
  })

  describe('number mode', () => {
    it('should format with thousand separators', () => {
      expect(formatValue('1234', 'number')).toBe('1,234')
      expect(formatValue('1234567', 'number')).toBe('1,234,567')
      expect(formatValue('1234567.89', 'number')).toBe('1,234,567.89')
    })

    it('should handle negative numbers', () => {
      expect(formatValue('-1234', 'number')).toBe('-1,234')
      expect(formatValue('-1234.56', 'number')).toBe('-1,234.56')
    })

    it('should handle edge cases', () => {
      expect(formatValue('-', 'number')).toBe('-')
      expect(formatValue('', 'number')).toBe('')
    })
  })

  describe('integer mode', () => {
    it('should format with thousand separators', () => {
      expect(formatValue('1234', 'integer')).toBe('1,234')
      expect(formatValue('1234567', 'integer')).toBe('1,234,567')
    })

    it('should handle negative numbers', () => {
      expect(formatValue('-1234', 'integer')).toBe('-1,234')
      expect(formatValue('-789', 'integer')).toBe('-789')
    })
  })

  describe('other modes', () => {
    it('should return value unchanged for alphabet mode', () => {
      expect(formatValue('HelloWorld', 'alphabet')).toBe('HelloWorld')
    })

    it('should return value unchanged for alphanumeric mode', () => {
      expect(formatValue('User123', 'alphanumeric')).toBe('User123')
    })

    it('should return value unchanged for uppercase mode', () => {
      expect(formatValue('HELLO', 'uppercase')).toBe('HELLO')
    })

    it('should return value unchanged for lowercase mode', () => {
      expect(formatValue('hello', 'lowercase')).toBe('hello')
    })
  })
})

describe('getRawValue', () => {
  describe('no mode (default)', () => {
    it('should return value unchanged when mode is undefined', () => {
      expect(getRawValue('123,456', undefined)).toBe('123,456')
      expect(getRawValue('Hello World', undefined)).toBe('Hello World')
    })
  })

  describe('currency mode', () => {
    it('should remove thousand separators', () => {
      expect(getRawValue('1,234', 'currency')).toBe('1234')
      expect(getRawValue('1,234,567', 'currency')).toBe('1234567')
      expect(getRawValue('1,234,567.89', 'currency')).toBe('1234567.89')
    })

    it('should handle negative numbers', () => {
      expect(getRawValue('-1,234', 'currency')).toBe('-1234')
      expect(getRawValue('-1,234.56', 'currency')).toBe('-1234.56')
    })
  })

  describe('number mode', () => {
    it('should remove thousand separators', () => {
      expect(getRawValue('1,234', 'number')).toBe('1234')
      expect(getRawValue('1,234,567.89', 'number')).toBe('1234567.89')
    })

    it('should handle negative numbers', () => {
      expect(getRawValue('-1,234.56', 'number')).toBe('-1234.56')
    })
  })

  describe('integer mode', () => {
    it('should remove thousand separators', () => {
      expect(getRawValue('1,234', 'integer')).toBe('1234')
      expect(getRawValue('1,234,567', 'integer')).toBe('1234567')
    })

    it('should handle negative numbers', () => {
      expect(getRawValue('-1,234', 'integer')).toBe('-1234')
    })
  })

  describe('other modes', () => {
    it('should return value unchanged for alphabet mode', () => {
      expect(getRawValue('HelloWorld', 'alphabet')).toBe('HelloWorld')
    })

    it('should return value unchanged for alphanumeric mode', () => {
      expect(getRawValue('User123', 'alphanumeric')).toBe('User123')
    })

    it('should return value unchanged for decimal mode', () => {
      expect(getRawValue('123.45', 'decimal')).toBe('123.45')
    })

    it('should return value unchanged for uppercase mode', () => {
      expect(getRawValue('HELLO', 'uppercase')).toBe('HELLO')
    })

    it('should return value unchanged for lowercase mode', () => {
      expect(getRawValue('hello', 'lowercase')).toBe('hello')
    })

    it('should return value unchanged for positive-number mode', () => {
      expect(getRawValue('123.45', 'positive-number')).toBe('123.45')
    })
  })
})

describe('integration tests', () => {
  describe('complete flow: filter -> format -> getRaw', () => {
    it('should handle currency input correctly', () => {
      const input = '$1,234.567abc'
      const filtered = filterInput(input, 'currency')
      expect(filtered).toBe('1234.567')

      const formatted = formatValue(filtered, 'currency', { decimalPlaces: 2 })
      expect(formatted).toBe('1,234.56')

      const raw = getRawValue(formatted, 'currency')
      expect(raw).toBe('1234.56')
    })

    it('should handle decimal input correctly', () => {
      const input = '123.456789'
      const filtered = filterInput(input, 'decimal', { decimalPlaces: 4 })
      expect(filtered).toBe('123.4567')

      const formatted = formatValue(filtered, 'decimal', { decimalPlaces: 4 })
      expect(formatted).toBe('123.4567')

      const raw = getRawValue(formatted, 'decimal')
      expect(raw).toBe('123.4567')
    })

    it('should handle integer input correctly', () => {
      const input = '1234567.89abc'
      const filtered = filterInput(input, 'integer')
      expect(filtered).toBe('123456789')

      const formatted = formatValue(filtered, 'integer')
      expect(formatted).toBe('123,456,789')

      const raw = getRawValue(formatted, 'integer')
      expect(raw).toBe('123456789')
    })

    it('should handle alphabet input correctly', () => {
      const input = 'Hello123World!@#'
      const filtered = filterInput(input, 'alphabet')
      expect(filtered).toBe('HelloWorld')

      const formatted = formatValue(filtered, 'alphabet')
      expect(formatted).toBe('HelloWorld')

      const raw = getRawValue(formatted, 'alphabet')
      expect(raw).toBe('HelloWorld')
    })

    it('should handle uppercase input correctly', () => {
      const input = 'Hello World'
      const filtered = filterInput(input, 'uppercase')
      expect(filtered).toBe('HELLO WORLD')

      const formatted = formatValue(filtered, 'uppercase')
      expect(formatted).toBe('HELLO WORLD')

      const raw = getRawValue(formatted, 'uppercase')
      expect(raw).toBe('HELLO WORLD')
    })
  })

  describe('edge cases', () => {
    it('should handle empty strings', () => {
      expect(filterInput('', 'number')).toBe('')
      expect(formatValue('', 'currency')).toBe('')
      expect(getRawValue('', 'number')).toBe('')
    })

    it('should handle only special characters', () => {
      expect(filterInput('!@#$%', 'number')).toBe('')
      expect(filterInput('!@#$%', 'alphabet')).toBe('')
      expect(filterInput('!@#$%', 'alphanumeric')).toBe('')
    })

    it('should handle negative zero', () => {
      expect(filterInput('-0', 'number')).toBe('-0')
      expect(formatValue('-0', 'number')).toBe('-0')
    })

    it('should handle very large numbers', () => {
      const input = '1234567890123456789'
      const filtered = filterInput(input, 'number')
      expect(filtered).toBe('1234567890123456789')

      const formatted = formatValue(filtered, 'number')
      expect(formatted).toBe('1,234,567,890,123,456,789')

      const raw = getRawValue(formatted, 'number')
      expect(raw).toBe('1234567890123456789')
    })
  })
})
