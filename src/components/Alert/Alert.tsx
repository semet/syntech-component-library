import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { CloseIcon } from '@/icons'

import { alertStyles } from './styles'

type AlertStylesProps = VariantProps<typeof alertStyles>

export interface AlertClassNames {
  root?: string
  wrapper?: string
  icon?: string
  title?: string
  message?: string
  closeButton?: string
}

export interface AlertProps extends AlertStylesProps {
  title?: ReactNode
  children?: ReactNode
  icon?: ReactNode
  withCloseButton?: boolean
  onClose?: () => void
  className?: string
  classNames?: AlertClassNames
}

export default function Alert({
  title,
  children,
  icon,
  variant,
  color,
  radius,
  withCloseButton = false,
  onClose,
  className,
  classNames,
}: AlertProps) {
  const styles = alertStyles({
    variant,
    color,
    radius,
    withIcon: !!icon,
    withCloseButton,
  })

  return (
    <div className={twMerge([styles.root(), className, classNames?.root])}>
      {icon && (
        <div className={twMerge([styles.icon(), classNames?.icon])}>{icon}</div>
      )}

      <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
        {title && (
          <div className={twMerge([styles.title(), classNames?.title])}>
            {title}
          </div>
        )}
        {children && (
          <div className={twMerge([styles.message(), classNames?.message])}>
            {children}
          </div>
        )}
      </div>

      {withCloseButton && (
        <button
          type="button"
          onClick={onClose}
          className={twMerge([styles.closeButton(), classNames?.closeButton])}
          aria-label="Close alert"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
