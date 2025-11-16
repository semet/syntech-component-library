import {
  useId,
  useRef,
  useState,
  useMemo,
  type KeyboardEvent,
  type ChangeEvent,
  type JSX,
  useCallback,
  type ComponentType,
} from 'react'
import { IoCheckmarkSharp, IoChevronDown } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'
import { useOnClickOutside } from 'usehooks-ts'

import { comboBoxStyles } from './styles'

type ComboBoxStylesProps = VariantProps<typeof comboBoxStyles>

export interface ComboBoxOption {
  label: string
  value: string
  disabled?: boolean
  color?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface ComboBoxClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  controlWrapper?: string
  control?: string
  input?: string
  searchInput?: string
  pillsWrapper?: string
  pill?: string
  pillRemove?: string
  placeholder?: string
  iconWrapper?: string
  chevron?: string
  clearButton?: string
  dropdown?: string
  dropdownInner?: string
  option?: string
  optionLabel?: string
  checkIcon?: string
  empty?: string
  errorWrapper?: string
  error?: string
}

// Component props for custom renderers
export interface SingleValueComponentProps<TOption extends ComboBoxOption> {
  option: TOption
  classNames?: ComboBoxClassNames
}

export interface OptionComponentProps<TOption extends ComboBoxOption> {
  option: TOption
  isSelected: boolean
  isHovered: boolean
  classNames?: ComboBoxClassNames
}

export interface ComboBoxComponents<TOption extends ComboBoxOption> {
  SingleValue?: ComponentType<SingleValueComponentProps<TOption>>
  Option?: ComponentType<OptionComponentProps<TOption>>
}

// Base props shared by both
interface ComboBoxBaseProps<TOption extends ComboBoxOption> {
  options: TOption[]
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  placeholder?: string
  clearable?: boolean
  searchable?: boolean
  disabled?: boolean
  maxDropdownHeight?: number
  nothingFoundMessage?: string
  variant?: ComboBoxStylesProps['variant']
  size?: ComboBoxStylesProps['size']
  radius?: ComboBoxStylesProps['radius']
  classNames?: ComboBoxClassNames
  limit?: number
  onSearchChange?: (search: string) => void
  components?: ComboBoxComponents<TOption>
}

// Single select props
export interface ComboBoxSingleProps<TOption extends ComboBoxOption>
  extends ComboBoxBaseProps<TOption> {
  multiple?: false
  value?: TOption | null
  onChange?: (value: TOption | null) => void
}

// Multi select props
export interface ComboBoxMultipleProps<TOption extends ComboBoxOption>
  extends ComboBoxBaseProps<TOption> {
  multiple: true
  value?: TOption[]
  onChange?: (value: TOption[]) => void
}

export type ComboBoxProps<TOption extends ComboBoxOption> =
  | ComboBoxSingleProps<TOption>
  | ComboBoxMultipleProps<TOption>

// Function overloads
function ComboBox<TOption extends ComboBoxOption>(
  props: ComboBoxSingleProps<TOption>,
): JSX.Element
function ComboBox<TOption extends ComboBoxOption>(
  props: ComboBoxMultipleProps<TOption>,
): JSX.Element
function ComboBox<TOption extends ComboBoxOption>(
  props: ComboBoxProps<TOption>,
): JSX.Element {
  const {
    options = [],
    value,
    onChange,
    label,
    description,
    withAsterisk = false,
    error,
    placeholder = 'Pick value',
    multiple = false,
    clearable = false,
    searchable = false,
    disabled = false,
    maxDropdownHeight = 240,
    nothingFoundMessage = 'Nothing found',
    variant = 'default',
    size = 'sm',
    radius = 'sm',
    classNames,
    limit,
    onSearchChange,
    components,
  } = props
  const id = useId()
  const wrapperRef = useRef<HTMLDivElement>(null!)
  const controlRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  useOnClickOutside(wrapperRef, () => {
    setIsOpen(false)
    setSearch('')
  })

  const styles = comboBoxStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
    isOpen,
  })

  const selectedValues = useMemo(() => {
    if (!value) return []
    return Array.isArray(value) ? value : [value]
  }, [value])

  const filteredOptions = useMemo(() => {
    if (!searchable || !search) {
      return limit ? options.slice(0, limit) : options
    }
    const filtered = options.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase()),
    )
    return limit ? filtered.slice(0, limit) : filtered
  }, [options, search, searchable, limit])

  const selectedOptions = useMemo(() => {
    return options.filter((opt) =>
      selectedValues.some((sv) => sv.value === opt.value),
    )
  }, [options, selectedValues])

  const displayValue = useMemo(() => {
    if (multiple) return null
    return selectedOptions[0]?.label || ''
  }, [selectedOptions, multiple])

  const handleToggle = useCallback(() => {
    if (disabled) return
    setIsOpen(!isOpen)
    setHoveredIndex(-1)
    if (!isOpen && searchable) {
      setTimeout(() => searchInputRef.current?.focus(), 0)
    }
  }, [isOpen, disabled, searchable])

  const handleSelect = useCallback(
    (option: TOption) => {
      if (option.disabled) return

      if (multiple) {
        const isSelected = selectedValues.some(
          (sv) => sv.value === option.value,
        )
        const newValue = isSelected
          ? selectedValues.filter((v) => v.value !== option.value)
          : [...selectedValues, option]
        ;(onChange as (value: TOption[]) => void)?.(newValue)
      } else {
        ;(onChange as (value: TOption | null) => void)?.(option)
        setIsOpen(false)
        setSearch('')
      }
    },
    [multiple, onChange, selectedValues],
  )

  const handleRemove = useCallback(
    (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation()
      if (multiple) {
        const newValue = selectedValues.filter((v) => v.value !== optionValue)
        ;(onChange as (value: TOption[]) => void)?.(newValue)
      }
    },
    [multiple, onChange, selectedValues],
  )

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (multiple) {
        ;(onChange as (value: TOption[]) => void)?.([])
      } else {
        ;(onChange as (value: TOption | null) => void)?.(null)
      }
      setSearch('')
    },
    [multiple, onChange],
  )

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    onSearchChange?.(newSearch)
    setHoveredIndex(-1)
    if (!isOpen) setIsOpen(true)
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (disabled) return

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault()
          if (isOpen) {
            setHoveredIndex((prev) =>
              prev < filteredOptions.length - 1 ? prev + 1 : prev,
            )
          } else {
            setIsOpen(true)
          }
          break
        }
        case 'ArrowUp': {
          e.preventDefault()
          if (isOpen) {
            setHoveredIndex((prev) => (prev > 0 ? prev - 1 : -1))
          }
          break
        }
        case 'Enter': {
          e.preventDefault()
          if (isOpen && hoveredIndex >= 0) {
            handleSelect(filteredOptions[hoveredIndex])
          } else if (!isOpen) {
            setIsOpen(true)
          }
          break
        }
        case 'Escape': {
          e.preventDefault()
          setIsOpen(false)
          setSearch('')
          break
        }
        case 'Backspace': {
          if (multiple && !search && selectedValues.length > 0) {
            const newValue = selectedValues.slice(0, -1)
            ;(onChange as (value: TOption[]) => void)?.(newValue)
          }
          break
        }
      }
    },
    [
      disabled,
      filteredOptions,
      handleSelect,
      hoveredIndex,
      isOpen,
      multiple,
      onChange,
      search,
      selectedValues,
    ],
  )

  const showClearButton = clearable && selectedValues.length > 0 && !disabled

  // Get custom components
  const SingleValueComponent = components?.SingleValue
  const OptionComponent = components?.Option

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
        className={twMerge([
          styles.controlWrapper(),
          classNames?.controlWrapper,
        ])}
      >
        <div
          ref={controlRef}
          className={twMerge([styles.control(), classNames?.control])}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${id}-listbox`}
        >
          {multiple ? (
            <div
              className={twMerge([
                styles.pillsWrapper(),
                classNames?.pillsWrapper,
              ])}
            >
              {selectedOptions.map((opt) => (
                <div
                  key={opt.value}
                  className={twMerge([styles.pill(), classNames?.pill])}
                >
                  {SingleValueComponent ? (
                    <SingleValueComponent
                      option={opt}
                      classNames={classNames}
                    />
                  ) : (
                    opt.label
                  )}
                  <span
                    className={twMerge([
                      styles.pillRemove(),
                      classNames?.pillRemove,
                    ])}
                    onClick={(e) => handleRemove(opt.value, e)}
                  >
                    ×
                  </span>
                </div>
              ))}
              {searchable ? (
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  className={twMerge([
                    styles.searchInput(),
                    classNames?.searchInput,
                  ])}
                  placeholder={
                    selectedOptions.length === 0 ? placeholder : undefined
                  }
                  disabled={disabled}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                selectedOptions.length === 0 && (
                  <span
                    className={twMerge([
                      styles.placeholder(),
                      classNames?.placeholder,
                    ])}
                  >
                    {placeholder}
                  </span>
                )
              )}
            </div>
          ) : (
            <>
              {searchable && isOpen ? (
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  className={twMerge([
                    styles.searchInput(),
                    classNames?.searchInput,
                  ])}
                  placeholder={placeholder}
                  disabled={disabled}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : selectedOptions[0] ? (
                <div className={twMerge([styles.input(), classNames?.input])}>
                  {SingleValueComponent ? (
                    <SingleValueComponent
                      option={selectedOptions[0]}
                      classNames={classNames}
                    />
                  ) : (
                    displayValue
                  )}
                </div>
              ) : (
                <span
                  className={twMerge([
                    styles.placeholder(),
                    classNames?.placeholder,
                  ])}
                >
                  {placeholder}
                </span>
              )}
            </>
          )}

          <div
            className={twMerge([styles.iconWrapper(), classNames?.iconWrapper])}
          >
            {showClearButton && (
              <span
                className={twMerge([
                  styles.clearButton(),
                  classNames?.clearButton,
                ])}
                onClick={handleClear}
              >
                ×
              </span>
            )}
            <IoChevronDown
              className={twMerge([styles.chevron(), classNames?.chevron])}
            />
          </div>
        </div>

        {isOpen && (
          <div
            ref={dropdownRef}
            id={`${id}-listbox`}
            role="listbox"
            aria-multiselectable={multiple}
            className={twMerge([styles.dropdown(), classNames?.dropdown])}
            style={{ maxHeight: maxDropdownHeight }}
          >
            <div
              className={twMerge([
                styles.dropdownInner(),
                classNames?.dropdownInner,
              ])}
            >
              {filteredOptions.length === 0 ? (
                <div className={twMerge([styles.empty(), classNames?.empty])}>
                  {nothingFoundMessage}
                </div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isSelected = selectedValues.some(
                    (sv) => sv.value === option.value,
                  )
                  const isHovered = index === hoveredIndex

                  return (
                    <div
                      key={option.value}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled}
                      tabIndex={option.disabled ? -1 : 0}
                      className={twMerge([
                        styles.option({ isSelected, isHovered }),
                        classNames?.option,
                        option.disabled && 'cursor-not-allowed opacity-50',
                      ])}
                      style={
                        option.color
                          ? { backgroundColor: option.color }
                          : undefined
                      }
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSelect(option)
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          e.stopPropagation()
                          handleSelect(option)
                        }
                      }}
                    >
                      {OptionComponent ? (
                        <OptionComponent
                          option={option}
                          isSelected={isSelected}
                          isHovered={isHovered}
                          classNames={classNames}
                        />
                      ) : (
                        <>
                          <span
                            className={twMerge([
                              styles.optionLabel(),
                              classNames?.optionLabel,
                            ])}
                          >
                            {option.label}
                          </span>
                          {isSelected && (
                            <IoCheckmarkSharp
                              className={twMerge([
                                styles.checkIcon(),
                                classNames?.checkIcon,
                              ])}
                            />
                          )}
                        </>
                      )}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}

        {error && (
          <div
            className={twMerge([
              styles.errorWrapper(),
              classNames?.errorWrapper,
            ])}
          >
            <div className={twMerge([styles.error(), classNames?.error])}>
              {error}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ComboBox
