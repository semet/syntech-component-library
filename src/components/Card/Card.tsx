import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import type { PolymorphicAsProp } from '@/types/common'

import { cardStyles } from './styles'

type CardStylesProps = VariantProps<typeof cardStyles>

export interface CardClassNames {
  root?: string
  header?: string
  body?: string
  footer?: string
}

type CardPolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithRef<E>, keyof PolymorphicAsProp<E>> &
  CardStylesProps & {
    children?: ReactNode
    classNames?: CardClassNames
  }

export type CardProps<E extends ElementType = 'div'> = CardPolymorphicProps<E>

type CardSectionPolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithRef<E>, keyof PolymorphicAsProp<E>> & {
    children?: ReactNode
  }

export type CardSectionProps<E extends ElementType = 'div'> =
  CardSectionPolymorphicProps<E>

const CardContext = createContext<{
  styles: ReturnType<typeof cardStyles>
  classNames?: CardClassNames
} | null>(null)

function Card<E extends ElementType = 'div'>({
  as,
  children,
  radius,
  withBorder,
  shadow,
  scrollable,
  className,
  classNames,
  ref,
  ...props
}: CardProps<E>) {
  const Component = as || 'div'

  const styles = cardStyles({
    radius,
    withBorder,
    shadow,
    scrollable,
  })

  const componentProps = {
    className: twMerge([styles.root(), className, classNames?.root]),
    ref,
    ...props,
  } as ComponentPropsWithRef<E>

  return (
    <CardContext.Provider value={{ styles, classNames }}>
      <Component {...componentProps}>{children}</Component>
    </CardContext.Provider>
  )
}

function CardHeader<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ref,
  ...props
}: CardSectionProps<E>) {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('Card.Header must be used within a Card component')
  }

  const { styles, classNames } = context
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.header(), className, classNames?.header]),
    ref,
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function CardBody<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ref,
  ...props
}: CardSectionProps<E>) {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('Card.Body must be used within a Card component')
  }

  const { styles, classNames } = context
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.body(), className, classNames?.body]),
    ref,
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function CardFooter<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ref,
  ...props
}: CardSectionProps<E>) {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('Card.Footer must be used within a Card component')
  }

  const { styles, classNames } = context
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.footer(), className, classNames?.footer]),
    ref,
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
