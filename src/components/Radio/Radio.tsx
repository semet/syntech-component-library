import { useId, type ComponentProps, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { radioStyles } from './styles'

type RadioStylesProps = VariantProps<typeof radioStyles>

export interface RadioClassNames {
  wrapper?: string
  radioWrapper?: string
  inputWrapper?: string
  input?: string
  radioDisplay?: string
  dot?: string
  labelWrapper?: string
  label?: string
  description?: string
  errorWrapper?: string
  error?: string
}

export interface RadioProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  label?: ReactNode
  description?: string
  error?: string
  variant?: RadioStylesProps['variant']
  size?: RadioStylesProps['size']
  classNames?: RadioClassNames
}

export default function Radio({
  label,
  description,
  error,
  variant = 'default',
  size = 'sm',
  disabled = false,
  className,
  classNames,
  checked,
  ...props
}: RadioProps) {
  const id = useId()
  const styles = radioStyles({
    variant,
    size,
    hasError: !!error,
    disabled,
  })

  return (
    <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
      <div
        className={twMerge([styles.radioWrapper(), classNames?.radioWrapper])}
      >
        <div
          className={twMerge([styles.inputWrapper(), classNames?.inputWrapper])}
        >
          <input
            id={id}
            type="radio"
            disabled={disabled}
            checked={checked}
            className={twMerge([styles.input(), className, classNames?.input])}
            {...props}
          />
          <div
            className={twMerge([
              styles.radioDisplay(),
              classNames?.radioDisplay,
            ])}
          >
            {checked && (
              <div className={twMerge([styles.dot(), classNames?.dot])} />
            )}
          </div>
        </div>

        {(label || description) && (
          <div
            className={twMerge([
              styles.labelWrapper(),
              classNames?.labelWrapper,
            ])}
          >
            {label && (
              <label
                className={twMerge([styles.label(), classNames?.label])}
                htmlFor={id}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={twMerge([
                  styles.description(),
                  classNames?.description,
                ])}
              >
                {description}
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <div
          className={twMerge([styles.errorWrapper(), classNames?.errorWrapper])}
        >
          <div className={twMerge([styles.error(), classNames?.error])}>
            {error}
          </div>
        </div>
      )}
    </div>
  )
}
