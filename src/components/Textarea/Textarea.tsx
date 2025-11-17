import { useId, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { textareaStyles } from './styles'

type TextareaStylesProps = VariantProps<typeof textareaStyles>

export interface TextareaClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  textareaWrapper?: string
  textarea?: string
  errorWrapper?: string
  error?: string
}

export interface TextareaProps
  extends Omit<ComponentProps<'textarea'>, 'size'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  variant?: TextareaStylesProps['variant']
  size?: TextareaStylesProps['size']
  radius?: TextareaStylesProps['radius']
  classNames?: TextareaClassNames
  autosize?: boolean
  minRows?: number
  maxRows?: number
}

export default function Textarea({
  label,
  description,
  withAsterisk = false,
  error,
  variant = 'default',
  size = 'sm',
  radius = 'sm',
  disabled = false,
  className,
  classNames,
  autosize = false,
  minRows,
  maxRows,
  onChange,
  ...props
}: TextareaProps) {
  const id = useId()

  const styles = textareaStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
    autosize,
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autosize) {
      const target = e.target
      target.style.height = 'auto'

      let newHeight = target.scrollHeight

      if (minRows) {
        const lineHeight = Number.parseInt(getComputedStyle(target).lineHeight)
        const minHeight = lineHeight * minRows
        newHeight = Math.max(newHeight, minHeight)
      }

      if (maxRows) {
        const lineHeight = Number.parseInt(getComputedStyle(target).lineHeight)
        const maxHeight = lineHeight * maxRows
        newHeight = Math.min(newHeight, maxHeight)
      }

      target.style.height = `${newHeight}px`
    }

    onChange?.(e)
  }

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
        className={twMerge([
          styles.textareaWrapper(),
          classNames?.textareaWrapper,
        ])}
      >
        <textarea
          id={id}
          disabled={disabled}
          className={twMerge([
            styles.textarea(),
            className,
            classNames?.textarea,
          ])}
          onChange={handleChange}
          rows={minRows}
          {...props}
        />

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
