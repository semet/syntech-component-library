import { useId, useState, type ComponentProps, type ReactNode } from 'react'
import { FaEye } from 'react-icons/fa'
import { FiEyeOff } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { passwordInputStyles } from './styles'

type PasswordInputStylesProps = VariantProps<typeof passwordInputStyles>

export interface PasswordInputClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputWrapper?: string
  input?: string
  leftSection?: string
  rightSection?: string
  toggleButton?: string
  errorWrapper?: string
  error?: string
}

export interface PasswordInputProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  variant?: PasswordInputStylesProps['variant']
  size?: PasswordInputStylesProps['size']
  radius?: PasswordInputStylesProps['radius']
  classNames?: PasswordInputClassNames
  togglePosition?: 'left' | 'right'
  showToggle?: boolean
  visible?: boolean
  defaultVisible?: boolean
  onVisibilityChange?: (visible: boolean) => void
  visibilityToggleIcon?: ReactNode
  visibilityToggleLabel?: string
}

export default function PasswordInput({
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
  togglePosition = 'right',
  showToggle = true,
  visible: controlledVisible,
  defaultVisible = false,
  onVisibilityChange,
  visibilityToggleIcon,
  visibilityToggleLabel = 'Toggle password visibility',
  ...props
}: PasswordInputProps) {
  const id = useId()
  const [uncontrolledVisible, setUncontrolledVisible] = useState(defaultVisible)

  const isControlled = controlledVisible !== undefined
  const visible = isControlled ? controlledVisible : uncontrolledVisible

  const handleToggle = () => {
    if (disabled) return

    const newVisible = !visible

    if (!isControlled) {
      setUncontrolledVisible(newVisible)
    }

    onVisibilityChange?.(newVisible)
  }

  const styles = passwordInputStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
  })

  const toggleButton = showToggle ? (
    <button
      type="button"
      onClick={handleToggle}
      disabled={disabled}
      aria-label={visibilityToggleLabel}
      className={twMerge([styles.toggleButton(), classNames?.toggleButton])}
      tabIndex={-1}
    >
      {visibilityToggleIcon ||
        (visible ? <FiEyeOff size={15} /> : <FaEye size={15} />)}
    </button>
  ) : null

  const leftSection = togglePosition === 'left' ? toggleButton : null
  const rightSection = togglePosition === 'right' ? toggleButton : null

  const hasLeftSection = !!leftSection
  const hasRightSection = !!rightSection

  const sizeMap: Record<
    NonNullable<PasswordInputStylesProps['size']>,
    string
  > = {
    xs: hasLeftSection ? 'pl-7' : '',
    sm: hasLeftSection ? 'pl-9' : '',
    md: hasLeftSection ? 'pl-11' : '',
    lg: hasLeftSection ? 'pl-13' : '',
    xl: hasLeftSection ? 'pl-15' : '',
  }

  const paddingLeft = sizeMap[size || 'sm']

  const rightSizeMap: Record<
    NonNullable<PasswordInputStylesProps['size']>,
    string
  > = {
    xs: hasRightSection ? 'pr-7' : '',
    sm: hasRightSection ? 'pr-9' : '',
    md: hasRightSection ? 'pr-11' : '',
    lg: hasRightSection ? 'pr-13' : '',
    xl: hasRightSection ? 'pr-15' : '',
  }

  const paddingRight = rightSizeMap[size || 'sm']

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
          type={visible ? 'text' : 'password'}
          disabled={disabled}
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
