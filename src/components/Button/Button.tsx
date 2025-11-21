import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { OvalLoader, DotsLoader, BarsLoader } from '@/icons'
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

type LoaderType = 'oval' | 'dots' | 'bars'

type PolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithRef<E>, keyof PolymorphicAsProp<E> | 'disabled'> &
  ButtonStylesProps & {
    loading?: boolean
    loaderType?: LoaderType
    leftSection?: ReactNode
    rightSection?: ReactNode
    disabled?: boolean
    classNames?: ButtonClassNames
  }

export type ButtonProps<E extends ElementType = 'button'> = PolymorphicProps<E>

const loaderComponents = {
  oval: OvalLoader,
  dots: DotsLoader,
  bars: BarsLoader,
}

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
  loaderType = 'oval',
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

  const LoaderComponent = loaderComponents[loaderType]

  const componentProps = {
    className: twMerge([styles.root(), className, classNames?.root]),
    ...(Component === 'button' && { disabled: disabled || loading }),
    ...props,
  } as React.ComponentPropsWithRef<E>

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
          <LoaderComponent
            className={twMerge([styles.loaderIcon(), classNames?.loaderIcon])}
          />
        </div>
      )}
    </Component>
  )
}
