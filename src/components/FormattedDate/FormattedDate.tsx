import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

import type { PolymorphicAsProp } from '@/types/common'
import {
  formatDate,
  type ExtendedDateFormat,
  type Locale,
  type TimeZone,
} from '@/utils/date-formatter'

import { formattedDateStyles } from './styles'

type FormattedDateStylesProps = {
  // Add any style variants you want, for example:
  variant?:
    | 'default'
    | 'bold'
    | 'muted'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface FormattedDateClassNames {
  root?: string
}

type PolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof PolymorphicAsProp<E>> &
  FormattedDateStylesProps & {
    date: string | Date
    format: ExtendedDateFormat
    timePosition?: 'start' | 'end'
    locale?: Locale
    useUtc?: boolean
    timeZone?: TimeZone
    classNames?: FormattedDateClassNames
  }

export type FormattedDateProps<E extends ElementType = 'time'> =
  PolymorphicProps<E>

/**
 * FormattedDate component - renders formatted dates with timezone support
 *
 * @example
 * <FormattedDate
 *   date="2024-02-22T14:00:00Z"
 *   format="YYYY-MM-DD HH:mm"
 *   timeZone="America/New_York"
 * />
 *
 * @example
 * <FormattedDate
 *   date="2024-02-22"
 *   format="dddd, MMMM D, YYYY"
 *   locale="en"
 *   as="span"
 * />
 */
export default function FormattedDate<E extends ElementType = 'time'>({
  as,
  date,
  format,
  timePosition,
  locale = 'id',
  useUtc = false,
  timeZone = 'Asia/Jakarta',
  variant = 'default',
  size = 'md',
  className,
  classNames,
  ...props
}: FormattedDateProps<E>) {
  const Component = as || 'time'

  const formattedDate = formatDate({
    date,
    format,
    timePosition,
    locale,
    useUtc,
    timeZone,
  })

  const styles = formattedDateStyles({
    variant,
    size,
  })

  const componentProps = {
    className: twMerge([styles.root(), className, classNames?.root]),
    ...(Component === 'time' && {
      dateTime: typeof date === 'string' ? date : date.toISOString(),
    }),
    ...props,
  } as ComponentPropsWithoutRef<E>

  return <Component {...componentProps}>{formattedDate}</Component>
}
