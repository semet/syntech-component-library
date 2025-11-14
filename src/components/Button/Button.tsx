import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import type { PolymorphicAsProp } from '@/types/common'

import { buttonStyles } from './styles'

type ButtonVariants = VariantProps<typeof buttonStyles>

type PolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof PolymorphicAsProp<E> | 'disabled'> &
  ButtonVariants & {
    loading?: boolean
    leftSection?: ReactNode
    rightSection?: ReactNode
    disabled?: boolean
    loaderPosition?: 'left' | 'center' | 'right'
    withRing?: boolean
  }

export type ButtonProps<E extends ElementType = 'button'> = PolymorphicProps<E>

export default function Button<E extends React.ElementType = 'button'>({
  as,
  children,
  variant,
  color,
  size,
  radius,
  fullWidth,
  compact,
  withRing,
  className,
  loading = false,
  disabled = false,
  leftSection,
  rightSection,
  ...props
}: ButtonProps<E>) {
  const Component = as || 'button'
  const isIconOnly = !children && (leftSection || rightSection)

  const componentProps = {
    className: buttonStyles({
      variant,
      color,
      size,
      radius,
      fullWidth,
      compact,
      withRing,
      loading,
      class: className,
    }),
    ...(Component === 'button' && { disabled: disabled || loading }),
    ...props,
  } as React.ComponentPropsWithoutRef<E>

  return (
    <Component {...componentProps}>
      <div
        className={twMerge([
          'flex items-center',
          !isIconOnly && 'gap-2',
          loading && 'invisible',
        ])}
      >
        {leftSection && (
          <div className="inline-flex shrink-0 items-center">{leftSection}</div>
        )}
        {children && <span className="truncate">{children}</span>}
        {rightSection && (
          <div className="inline-flex shrink-0 items-center">
            {rightSection}
          </div>
        )}
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ImSpinner8
            className="animate-spin"
            size={18}
          />
        </div>
      )}
    </Component>
  )
}
