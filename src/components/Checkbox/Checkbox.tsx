import { useId, type ComponentProps, type ReactNode } from 'react'
import { BiCheck, BiMinus } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { checkboxStyles } from './styles'

type CheckboxStylesProps = VariantProps<typeof checkboxStyles>

export interface CheckboxClassNames {
  wrapper?: string
  checkboxWrapper?: string
  inputWrapper?: string
  input?: string
  checkboxDisplay?: string
  icon?: string
  labelWrapper?: string
  label?: string
  description?: string
  errorWrapper?: string
  error?: string
}

export interface CheckboxProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  label?: ReactNode
  description?: string
  error?: string
  variant?: CheckboxStylesProps['variant']
  size?: CheckboxStylesProps['size']
  radius?: CheckboxStylesProps['radius']
  classNames?: CheckboxClassNames
  indeterminate?: boolean
}

export default function Checkbox({
  label,
  description,
  error,
  variant = 'default',
  size = 'sm',
  radius = 'sm',
  disabled = false,
  className,
  classNames,
  indeterminate = false,
  checked,
  ...props
}: CheckboxProps) {
  const id = useId()
  const styles = checkboxStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
  })

  const showCheck = checked && !indeterminate
  const showMinus = indeterminate

  return (
    <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
      <div
        className={twMerge([
          styles.checkboxWrapper(),
          classNames?.checkboxWrapper,
        ])}
      >
        <div
          className={twMerge([styles.inputWrapper(), classNames?.inputWrapper])}
        >
          <input
            id={id}
            type="checkbox"
            disabled={disabled}
            checked={checked}
            className={twMerge([styles.input(), className, classNames?.input])}
            {...props}
          />
          <div
            className={twMerge([
              styles.checkboxDisplay(),
              classNames?.checkboxDisplay,
            ])}
          >
            {showCheck && (
              <BiCheck
                className={twMerge([styles.icon(), classNames?.icon])}
                strokeWidth={3}
              />
            )}
            {showMinus && (
              <BiMinus
                className={twMerge([styles.icon(), classNames?.icon])}
                strokeWidth={3}
              />
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
