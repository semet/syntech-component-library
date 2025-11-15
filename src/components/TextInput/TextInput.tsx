import { useId, type ComponentProps, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

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

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'size'> {
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
  ref,
  ...props
}: TextInputProps) {
  const id = useId()
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
