import { useId, type ComponentProps, type ReactNode } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { selectStyles } from './styles'

type SelectStylesProps = VariantProps<typeof selectStyles>

export interface SelectClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  selectWrapper?: string
  select?: string
  leftSection?: string
  chevron?: string
  errorWrapper?: string
  error?: string
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<ComponentProps<'select'>, 'size'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  leftSection?: ReactNode
  variant?: SelectStylesProps['variant']
  size?: SelectStylesProps['size']
  radius?: SelectStylesProps['radius']
  classNames?: SelectClassNames
  data?: SelectOption[]
  placeholder?: string
  withChevron?: boolean
}

export default function Select({
  label,
  description,
  withAsterisk = false,
  error,
  leftSection,
  variant = 'default',
  size = 'sm',
  radius = 'md',
  disabled = false,
  className,
  classNames,
  data = [],
  placeholder,
  withChevron = true,
  children,
  ...props
}: SelectProps) {
  const id = useId()
  const styles = selectStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
  })

  const hasLeftSection = !!leftSection

  const sizeMap: Record<NonNullable<SelectStylesProps['size']>, string> = {
    xs: hasLeftSection ? 'pl-7' : '',
    sm: hasLeftSection ? 'pl-9' : '',
    md: hasLeftSection ? 'pl-11' : '',
    lg: hasLeftSection ? 'pl-13' : '',
    xl: hasLeftSection ? 'pl-15' : '',
  }

  const paddingLeft = sizeMap[size || 'sm']

  const rightSizeMap: Record<NonNullable<SelectStylesProps['size']>, string> = {
    xs: 'pr-7',
    sm: 'pr-9',
    md: 'pr-10',
    lg: 'pr-12',
    xl: 'pr-14',
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
        className={twMerge([styles.selectWrapper(), classNames?.selectWrapper])}
      >
        {leftSection && (
          <div
            className={twMerge([styles.leftSection(), classNames?.leftSection])}
          >
            {leftSection}
          </div>
        )}

        <select
          id={id}
          disabled={disabled}
          className={twMerge([
            styles.select(),
            paddingLeft,
            paddingRight,
            className,
            classNames?.select,
          ])}
          {...props}
        >
          {placeholder && (
            <option
              value=""
              disabled
            >
              {placeholder}
            </option>
          )}
          {data.length > 0
            ? data.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))
            : children}
        </select>

        {withChevron && (
          <div className={twMerge([styles.chevron(), classNames?.chevron])}>
            <FiChevronDown />
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
