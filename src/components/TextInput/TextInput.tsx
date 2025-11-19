import {
  useId,
  useState,
  useCallback,
  type ChangeEvent,
  type ComponentProps,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import {
  filterInput,
  formatValue,
  getRawValue,
  type InputMode,
} from '@/utils/input-formatter'

import { textInputStyles } from './styles'

type TextInputStylesProps = VariantProps<typeof textInputStyles>

export interface TextInputClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputWrapper?: string
  input?: string
  leftSection?: string
  rightSection?: string
  errorWrapper?: string
  error?: string
}

export interface TextInputProps
  extends Omit<ComponentProps<'input'>, 'size' | 'onChange'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  leftSection?: ReactNode
  rightSection?: ReactNode
  variant?: TextInputStylesProps['variant']
  size?: TextInputStylesProps['size']
  radius?: TextInputStylesProps['radius']
  classNames?: TextInputClassNames
  mode?: InputMode
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  decimalPlaces?: number // For decimal and currency modes
  allowNegative?: boolean // For number modes
}

export default function TextInput({
  label,
  description,
  withAsterisk = false,
  error,
  leftSection,
  rightSection,
  variant = 'default',
  size = 'sm',
  radius = 'sm',
  disabled = false,
  className,
  classNames,
  mode,
  value: controlledValue,
  onChange,
  decimalPlaces = 2,
  allowNegative = true,
  ref,
  ...props
}: TextInputProps) {
  const id = useId()
  const [internalValue, setInternalValue] = useState('')

  const styles = textInputStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
  })

  const hasLeftSection = !!leftSection
  const hasRightSection = !!rightSection

  const sizeMap: Record<NonNullable<TextInputStylesProps['size']>, string> = {
    xs: hasLeftSection ? 'pl-7' : '',
    sm: hasLeftSection ? 'pl-9' : '',
    md: hasLeftSection ? 'pl-11' : '',
    lg: hasLeftSection ? 'pl-13' : '',
    xl: hasLeftSection ? 'pl-15' : '',
  }

  const paddingLeft = sizeMap[size || 'sm']

  const rightSizeMap: Record<
    NonNullable<TextInputStylesProps['size']>,
    string
  > = {
    xs: hasRightSection ? 'pr-7' : '',
    sm: hasRightSection ? 'pr-9' : '',
    md: hasRightSection ? 'pr-11' : '',
    lg: hasRightSection ? 'pr-13' : '',
    xl: hasRightSection ? 'pr-15' : '',
  }

  const paddingRight = rightSizeMap[size || 'sm']

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value
      const inputElement = event.target

      if (!mode) {
        if (controlledValue === undefined) {
          setInternalValue(inputValue)
        }
        onChange?.(event)
        return
      }

      const cursorPos = inputElement.selectionStart || 0

      const filtered = filterInput(inputValue, mode, {
        allowNegative,
        decimalPlaces,
      })

      const formatted = formatValue(filtered, mode, {
        decimalPlaces,
      })

      event.target.value = formatted

      inputElement.dataset.rawValue = getRawValue(formatted, mode)

      let newCursorPos = cursorPos

      if (mode === 'currency' || mode === 'number' || mode === 'integer') {
        const valueBeforeCursor = inputValue.slice(0, cursorPos)
        const charsBeforeCursor = valueBeforeCursor.replaceAll(
          /[^\d.-]/g,
          '',
        ).length
        let charCount = 0

        // eslint-disable-next-line unicorn/no-for-loop
        for (let i = 0; i < formatted.length; i++) {
          if (!/[^\d.-]/.test(formatted[i])) {
            charCount++
          }
          if (charCount >= charsBeforeCursor) {
            newCursorPos = i + 1
            break
          }
        }
      } else {
        const lengthDiff = formatted.length - inputValue.length
        newCursorPos = Math.min(
          Math.max(cursorPos + lengthDiff, 0),
          formatted.length,
        )
      }

      setTimeout(() => {
        inputElement.setSelectionRange(newCursorPos, newCursorPos)
      }, 0)

      // If controlled, let parent handle the state
      if (controlledValue === undefined) {
        // If uncontrolled, manage internal state
        setInternalValue(formatted)
      }

      onChange?.(event)
    },
    [mode, allowNegative, decimalPlaces, controlledValue, onChange],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (
        mode === 'number' ||
        mode === 'integer' ||
        mode === 'positive-number'
      ) {
        const allowedKeys = [
          'Backspace',
          'Delete',
          'ArrowLeft',
          'ArrowRight',
          'ArrowUp',
          'ArrowDown',
          'Tab',
          'Home',
          'End',
          'Control',
          'Meta',
          'Shift',
          'Alt',
        ]

        const isNumberKey = /^\d$/.test(event.key)
        const isDecimalKey = event.key === '.' && mode !== 'integer'
        const isNegativeKey =
          event.key === '-' && allowNegative && mode !== 'positive-number'
        const isCopyPaste =
          (event.ctrlKey || event.metaKey) &&
          ['c', 'v', 'x', 'a'].includes(event.key.toLowerCase())

        if (
          !isNumberKey &&
          !isDecimalKey &&
          !isNegativeKey &&
          !allowedKeys.includes(event.key) &&
          !isCopyPaste
        ) {
          event.preventDefault()
        }
      }
    },
    [mode, allowNegative],
  )

  const displayValue =
    controlledValue === undefined
      ? internalValue
      : mode
        ? formatValue(String(controlledValue), mode, {
            decimalPlaces,
          })
        : controlledValue

  return (
    <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
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
        {leftSection && (
          <div
            className={twMerge([styles.leftSection(), classNames?.leftSection])}
          >
            {leftSection}
          </div>
        )}

        <input
          id={id}
          ref={ref}
          disabled={disabled}
          value={displayValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type={props.type || 'text'}
          className={twMerge([
            styles.input(),
            paddingLeft,
            paddingRight,
            className,
            classNames?.input,
          ])}
          {...props}
        />

        {rightSection && (
          <div
            className={twMerge([
              styles.rightSection(),
              classNames?.rightSection,
            ])}
          >
            {rightSection}
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
