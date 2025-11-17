import { useId, type ComponentProps, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { captchaInputStyles } from './styles'

type CaptchaInputStylesProps = VariantProps<typeof captchaInputStyles>

export interface CaptchaInputClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputContainer?: string
  inputWrapper?: string
  input?: string
  captchaImage?: string
  captchaSkeleton?: string
  refreshButton?: string
  refreshIcon?: string
  errorWrapper?: string
  error?: string
}

export interface CaptchaInputProps
  extends Omit<ComponentProps<'input'>, 'size'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  image?: string
  isLoading?: boolean
  onRefresh?: () => void
  refreshIcon?: ReactNode
  variant?: CaptchaInputStylesProps['variant']
  size?: CaptchaInputStylesProps['size']
  radius?: CaptchaInputStylesProps['radius']
  classNames?: CaptchaInputClassNames
  imageAlt?: string
  refreshButtonAriaLabel?: string
}

export default function CaptchaInput({
  label,
  description,
  withAsterisk = false,
  error,
  image,
  isLoading = false,
  onRefresh,
  refreshIcon,
  variant = 'default',
  size = 'sm',
  radius = 'sm',
  disabled = false,
  className,
  classNames,
  imageAlt = 'Captcha image',
  refreshButtonAriaLabel = 'Refresh captcha',
  ...props
}: CaptchaInputProps) {
  const id = useId()
  const styles = captchaInputStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
    isLoading,
  })

  const sizeMap: Record<
    NonNullable<CaptchaInputStylesProps['size']>,
    string
  > = {
    xs: 'pr-32',
    sm: 'pr-36',
    md: 'pr-40',
    lg: 'pr-44',
    xl: 'pr-48',
  }

  const paddingRight = sizeMap[size || 'sm']

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
          styles.inputContainer(),
          classNames?.inputContainer,
        ])}
      >
        <div
          className={twMerge([styles.inputWrapper(), classNames?.inputWrapper])}
        >
          <input
            id={id}
            disabled={disabled || isLoading}
            className={twMerge([
              styles.input(),
              paddingRight,
              className,
              classNames?.input,
            ])}
            {...props}
          />

          <div
            className={twMerge([
              styles.captchaImage(),
              classNames?.captchaImage,
            ])}
          >
            {isLoading ? (
              <div
                className={twMerge([
                  styles.captchaSkeleton(),
                  classNames?.captchaSkeleton,
                ])}
              >
                <div className="h-full w-full animate-pulse bg-gray-200" />
              </div>
            ) : (
              image && (
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-contain"
                />
              )
            )}
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

        <button
          type="button"
          onClick={onRefresh}
          disabled={disabled || isLoading}
          aria-label={refreshButtonAriaLabel}
          className={twMerge([
            styles.refreshButton(),
            classNames?.refreshButton,
          ])}
        >
          {refreshIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={twMerge([
                styles.refreshIcon(),
                classNames?.refreshIcon,
              ])}
            >
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
