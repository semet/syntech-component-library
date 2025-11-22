import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumberWithError,
  type CountryCode,
} from 'libphonenumber-js'
import {
  startTransition,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentProps,
} from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'
import { useOnClickOutside } from 'usehooks-ts'

import { ArrowDownIcon } from '@/icons'

import { phoneInputStyles } from './styles'

type PhoneInputStylesProps = VariantProps<typeof phoneInputStyles>

export interface PhoneInputClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputWrapper?: string
  countrySelector?: string
  input?: string
  dropdown?: string
  errorWrapper?: string
  error?: string
}

export interface PhoneInputProps
  extends Omit<ComponentProps<'input'>, 'size' | 'onChange' | 'value'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  variant?: PhoneInputStylesProps['variant']
  size?: PhoneInputStylesProps['size']
  classNames?: PhoneInputClassNames
  defaultCountry?: CountryCode
  value?: string
  onChange?: (value: string, isValid: boolean) => void
  withValidation?: boolean
  countryPlaceholder?: string
}

// Get country options with names and flags
const getCountryOptions = () => {
  const countries = getCountries()
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

  return countries.map((country) => ({
    code: country,
    name: regionNames.of(country) ?? country,
    callingCode: getCountryCallingCode(country),
    flag: country
      .toUpperCase()
      .replaceAll(/./g, (char) =>
        String.fromCodePoint((char.codePointAt(0) ?? 0) + 127_397),
      ),
  }))
}

export default function PhoneInput({
  label,
  description,
  withAsterisk = false,
  error,
  variant = 'default',
  size = 'sm',
  disabled = false,
  className,
  classNames,
  defaultCountry = 'US',
  value,
  onChange,
  withValidation = true,
  placeholder = 'Enter phone number',
  countryPlaceholder = 'Select country...',
  ...props
}: PhoneInputProps) {
  const id = useId()
  const [selectedCountry, setSelectedCountry] =
    useState<CountryCode>(defaultCountry)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [validationError, setValidationError] = useState<string | undefined>()

  const dropdownRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null!)
  const isInternalUpdate = useRef(false)

  const styles = phoneInputStyles({
    variant,
    size,
    hasError: !!error || !!validationError,
    disabled,
    isOpen: isDropdownOpen,
  })

  // Get all countries
  const countries = useMemo(() => {
    return getCountryOptions()
      .map((country) => ({
        ...country,
        callingCode: `+${country.callingCode}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  // Filter countries based on search
  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries
    const query = searchQuery.toLowerCase()
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query) ||
        country.code.toLowerCase().includes(query) ||
        country.callingCode.includes(query),
    )
  }, [countries, searchQuery])

  useOnClickOutside(wrapperRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
      setSearchQuery('')
    }
  })

  useEffect(() => {
    if (!isDropdownOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isDropdownOpen])

  useEffect(() => {
    if (value !== undefined && !isInternalUpdate.current) {
      if (!value) {
        startTransition(() => {
          setPhoneNumber('')
        })
        return
      }

      try {
        const parsed = parsePhoneNumberWithError(value)
        if (parsed) {
          startTransition(() => {
            setSelectedCountry(parsed.country || defaultCountry)
            setPhoneNumber(parsed.nationalNumber)
          })
        }
      } catch {
        // If parsing fails, extract digits after country code
        const cleaned = value.replace(/^\+/, '').replaceAll(/\D/g, '')
        const callingCode = getCountryCallingCode(selectedCountry)
        if (cleaned.startsWith(callingCode)) {
          startTransition(() => {
            setPhoneNumber(cleaned.slice(callingCode.length))
          })
        } else {
          startTransition(() => {
            setPhoneNumber(cleaned)
          })
        }
      }
    }
    isInternalUpdate.current = false
  }, [value, defaultCountry, selectedCountry])

  const handleCountrySelect = useCallback(
    (country: CountryCode) => {
      setSelectedCountry(country)
      setIsDropdownOpen(false)
      setSearchQuery('')

      const digitsOnly = phoneNumber.replaceAll(/\D/g, '')
      const fullNumber = digitsOnly
        ? `+${getCountryCallingCode(country)}${digitsOnly}`
        : ''

      let isValid = true
      if (withValidation && digitsOnly.length > 0) {
        try {
          isValid = isValidPhoneNumber(fullNumber, country)
          setValidationError(isValid ? undefined : 'Invalid phone number')
        } catch {
          isValid = false
          setValidationError('Invalid phone number')
        }
      } else {
        setValidationError(undefined)
      }

      isInternalUpdate.current = true
      onChange?.(fullNumber, isValid)
    },
    [phoneNumber, onChange, withValidation],
  )

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault()
      const pastedText = event.clipboardData.getData('text')

      try {
        const parsed = parsePhoneNumberWithError(pastedText)

        if (parsed && parsed.country) {
          setSelectedCountry(parsed.country)
          setPhoneNumber(parsed.nationalNumber)

          const fullNumber = parsed.number
          let isValid = true

          if (withValidation) {
            try {
              isValid = isValidPhoneNumber(fullNumber, parsed.country)
              setValidationError(isValid ? undefined : 'Invalid phone number')
            } catch {
              isValid = false
              setValidationError('Invalid phone number')
            }
          }

          isInternalUpdate.current = true
          onChange?.(fullNumber, isValid)
          return
        }
      } catch {
        // If parsing fails, fall through to default handling
      }

      const cleaned = pastedText.replaceAll(/[^\d\s()-]/g, '')
      setPhoneNumber(cleaned)

      const digitsOnly = cleaned.replaceAll(/\D/g, '')
      const fullNumber = digitsOnly
        ? `+${getCountryCallingCode(selectedCountry)}${digitsOnly}`
        : ''

      let isValid = true
      if (withValidation && digitsOnly.length > 0) {
        try {
          isValid = isValidPhoneNumber(fullNumber, selectedCountry)
          setValidationError(isValid ? undefined : 'Invalid phone number')
        } catch {
          isValid = false
          setValidationError('Invalid phone number')
        }
      } else {
        setValidationError(undefined)
      }

      isInternalUpdate.current = true
      onChange?.(fullNumber, isValid)
    },
    [selectedCountry, onChange, withValidation],
  )

  const handlePhoneChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value

      const cleaned = inputValue.replaceAll(/[^\d\s()-]/g, '')

      setPhoneNumber(cleaned)

      const digitsOnly = cleaned.replaceAll(/\D/g, '')
      const fullNumber = digitsOnly
        ? `+${getCountryCallingCode(selectedCountry)}${digitsOnly}`
        : ''

      // Validate if enabled
      let isValid = true
      if (withValidation && digitsOnly.length > 0) {
        try {
          isValid = isValidPhoneNumber(fullNumber, selectedCountry)
          if (isValid) {
            setValidationError(undefined)
          } else {
            setValidationError('Invalid phone number')
          }
        } catch {
          isValid = false
          setValidationError('Invalid phone number')
        }
      } else {
        setValidationError(undefined)
      }

      isInternalUpdate.current = true
      onChange?.(fullNumber, isValid)
    },
    [selectedCountry, onChange, withValidation],
  )

  const selectedCountryData = useMemo(
    () => countries.find((c) => c.code === selectedCountry),
    [countries, selectedCountry],
  )

  const displayError = error || validationError

  return (
    <div
      ref={wrapperRef}
      className={twMerge([styles.wrapper(), classNames?.wrapper])}
    >
      {label && (
        <div
          className={twMerge([styles.labelWrapper(), classNames?.labelWrapper])}
        >
          <label
            className={twMerge([styles.label(), classNames?.label])}
            htmlFor={id}
          >
            {label}
            {withAsterisk && (
              <span
                className={twMerge([styles.asterisk(), classNames?.asterisk])}
              >
                *
              </span>
            )}
          </label>
        </div>
      )}

      {description && (
        <div
          className={twMerge([styles.description(), classNames?.description])}
        >
          {description}
        </div>
      )}

      <div
        className={twMerge([styles.inputWrapper(), classNames?.inputWrapper])}
      >
        {/* Country Selector */}
        <button
          type="button"
          className={twMerge([
            styles.countrySelector(),
            classNames?.countrySelector,
          ])}
          onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
          disabled={disabled}
        >
          <span className={styles.flag()}>{selectedCountryData?.flag}</span>
          <span className={styles.countryCode()}>
            {selectedCountryData?.callingCode}
          </span>
          <ArrowDownIcon className={styles.chevron()} />
        </button>

        {/* Phone Input */}
        <input
          id={id}
          type="tel"
          disabled={disabled}
          value={phoneNumber}
          onChange={handlePhoneChange}
          onPaste={handlePaste}
          className={twMerge([styles.input(), className, classNames?.input])}
          placeholder={placeholder}
          {...props}
        />

        {/* Dropdown */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className={twMerge([styles.dropdown(), classNames?.dropdown])}
          >
            <div className={styles.searchInputWrapper()}>
              <input
                type="text"
                className={styles.searchInput()}
                placeholder={countryPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className={styles.countriesScrollArea()}>
              {filteredCountries.map((country) => (
                <div
                  key={country.code}
                  className={twMerge([
                    styles.countryOption(),
                    selectedCountry === country.code &&
                      styles.countryOptionSelected(),
                  ])}
                  onClick={() => handleCountrySelect(country.code)}
                >
                  <span className={styles.flag()}>{country.flag}</span>
                  <span className={styles.countryName()}>{country.name}</span>
                  <span className={styles.countryCallingCode()}>
                    {country.callingCode}
                  </span>
                </div>
              ))}
              {filteredCountries.length === 0 && (
                <div className="px-3 py-4 text-center text-sm text-gray-500">
                  No countries found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {displayError && (
        <div
          className={twMerge([styles.errorWrapper(), classNames?.errorWrapper])}
        >
          <div className={twMerge([styles.error(), classNames?.error])}>
            {displayError}
          </div>
        </div>
      )}
    </div>
  )
}
