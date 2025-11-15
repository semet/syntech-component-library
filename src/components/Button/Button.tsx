import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import type { PolymorphicAsProp } from '@/types/common'

import { buttonStyles } from './styles'

type ButtonStylesProps = VariantProps<typeof buttonStyles>

export interface ButtonClassNames {
  root?: string
  inner?: string
  leftSection?: string
  rightSection?: string
  loader?: string
  loaderIcon?: string
}

type PolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof PolymorphicAsProp<E> | 'disabled'> &
  ButtonStylesProps & {
    loading?: boolean
    leftSection?: ReactNode
    rightSection?: ReactNode
    disabled?: boolean
    classNames?: ButtonClassNames
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
  classNames,
  loading = false,
  disabled = false,
  leftSection,
  rightSection,
  ...props
}: ButtonProps<E>) {
  const Component = as || 'button'
  const isIconOnly = !children && (leftSection || rightSection)
  const hasGap = !isIconOnly

  const styles = buttonStyles({
    variant,
    color,
    size,
    radius,
    fullWidth,
    compact,
    withRing,
    loading,
    disabled: disabled || loading,
    hasGap,
  })

  const componentProps = {
    className: twMerge([styles.root(), className, classNames?.root]),
    ...(Component === 'button' && { disabled: disabled || loading }),
    ...props,
  } as React.ComponentPropsWithoutRef<E>

  return (
    <Component {...componentProps}>
      <div className={twMerge([styles.inner(), classNames?.inner])}>
        {leftSection && (
          <div
            className={twMerge([styles.leftSection(), classNames?.leftSection])}
          >
            {leftSection}
          </div>
        )}
        {children && <span className="truncate">{children}</span>}
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
      </div>
      {loading && (
        <div className={twMerge([styles.loader(), classNames?.loader])}>
          <ImSpinner8
            className={twMerge([styles.loaderIcon(), classNames?.loaderIcon])}
          />
        </div>
      )}
    </Component>
  )
}
