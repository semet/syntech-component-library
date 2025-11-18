import { useId, type ComponentProps, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { switchStyles } from './styles'

type SwitchStylesProps = VariantProps<typeof switchStyles>

export interface SwitchClassNames {
  wrapper?: string
  switchWrapper?: string
  inputWrapper?: string
  input?: string
  track?: string
  thumb?: string
  labelWrapper?: string
  label?: string
  description?: string
  errorWrapper?: string
  error?: string
}

export interface SwitchProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  label?: ReactNode
  description?: string
  error?: string
  variant?: SwitchStylesProps['variant']
  size?: SwitchStylesProps['size']
  radius?: SwitchStylesProps['radius']
  labelPosition?: SwitchStylesProps['labelPosition']
  classNames?: SwitchClassNames
  onLabel?: ReactNode
  offLabel?: ReactNode
}

export default function Switch({
  label,
  description,
  error,
  variant = 'default',
  size = 'sm',
  radius = 'full',
  labelPosition = 'right',
  disabled = false,
  className,
  classNames,
  checked,
  onLabel,
  offLabel,
  ...props
}: SwitchProps) {
  const id = useId()
  const styles = switchStyles({
    variant,
    size,
    radius,
    labelPosition,
    hasError: !!error,
    disabled,
  })

  return (
    <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
      <div
        className={twMerge([styles.switchWrapper(), classNames?.switchWrapper])}
      >
        <label
          className={twMerge([styles.inputWrapper(), classNames?.inputWrapper])}
          htmlFor={id}
        >
          <input
            id={id}
            type="checkbox"
            role="switch"
            disabled={disabled}
            checked={checked}
            className={twMerge([styles.input(), className, classNames?.input])}
            {...props}
          />
          <div className={twMerge([styles.track(), classNames?.track])} />
          <div className={twMerge([styles.thumb(), classNames?.thumb])} />
        </label>

        {(label || description || onLabel || offLabel) && (
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
            {(onLabel || offLabel) && (
              <div className="text-xs text-gray-600">
                {checked ? onLabel : offLabel}
              </div>
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
