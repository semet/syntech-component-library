import { useId, useRef, type ComponentProps, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { CloseIcon, UploadIcon } from '@/icons'

import { fileInputStyles } from './styles'

type FileInputStylesProps = VariantProps<typeof fileInputStyles>

export interface FileInputClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputWrapper?: string
  input?: string
  placeholder?: string
  icon?: string
  clearButton?: string
  errorWrapper?: string
  error?: string
}

export interface FileInputProps
  extends Omit<
    ComponentProps<'input'>,
    'size' | 'type' | 'value' | 'onChange'
  > {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  placeholder?: string
  icon?: ReactNode
  clearable?: boolean
  variant?: FileInputStylesProps['variant']
  size?: FileInputStylesProps['size']
  radius?: FileInputStylesProps['radius']
  classNames?: FileInputClassNames
  value?: File | File[] | null
  onChange?: (files: File | File[] | null) => void
  valueComponent?: (file: File | File[]) => ReactNode
}

function DefaultValueComponent(file: File | File[]) {
  if (Array.isArray(file)) {
    if (file.length === 0) return null
    if (file.length === 1) return <span>{file[0].name}</span>
    return <span>{file.length} files selected</span>
  }
  return <span>{file.name}</span>
}

export default function FileInput({
  label,
  description,
  withAsterisk = false,
  error,
  placeholder = 'Pick file',
  icon = <UploadIcon />,
  clearable = false,
  variant = 'default',
  size = 'sm',
  radius = 'sm',
  disabled = false,
  multiple = false,
  className,
  classNames,
  value,
  onChange,
  valueComponent: ValueComponent = DefaultValueComponent,
  ...props
}: FileInputProps) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  const styles = fileInputStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
    hasValue: !!value,
  })

  const handleClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick()
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) {
      onChange?.(null)
      return
    }

    if (multiple) {
      onChange?.([...files])
    } else {
      onChange?.(files[0] || null)
    }
  }

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    onChange?.(null)
  }

  const hasValue = value && (Array.isArray(value) ? value.length > 0 : true)

  return (
    <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
      {label && (
        <div
          className={twMerge([styles.labelWrapper(), classNames?.labelWrapper])}
        >
          <label
            id={id + '-label'}
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
          id={id + '-description'}
          className={twMerge([styles.description(), classNames?.description])}
        >
          {description}
        </div>
      )}

      <div
        className={twMerge([styles.inputWrapper(), classNames?.inputWrapper])}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          disabled={disabled}
          multiple={multiple}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />

        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-labelledby={label ? id + '-label' : undefined}
          aria-describedby={description ? id + '-description' : undefined}
          aria-disabled={disabled}
          className={twMerge([styles.input(), className, classNames?.input])}
        >
          <span
            className={twMerge([
              styles.placeholder(),
              hasValue && 'text-gray-900',
              classNames?.placeholder,
            ])}
          >
            {hasValue ? ValueComponent(value) : placeholder}
          </span>

          <div className="flex items-center gap-1.5">
            {clearable && hasValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                className={twMerge([
                  styles.clearButton(),
                  classNames?.clearButton,
                ])}
                aria-label="Clear file"
              >
                <CloseIcon className="size-2.5" />
              </button>
            )}
            <div className={twMerge([styles.icon(), classNames?.icon])}>
              {icon}
            </div>
          </div>
        </div>

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
