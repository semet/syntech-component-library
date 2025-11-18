import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { fieldsetStyles } from './styles'

type FieldsetStylesProps = VariantProps<typeof fieldsetStyles>

export interface FieldsetClassNames {
  wrapper?: string
  fieldset?: string
  legend?: string
  content?: string
}

export interface FieldsetProps
  extends Omit<ComponentProps<'fieldset'>, 'size'> {
  legend?: string
  variant?: FieldsetStylesProps['variant']
  size?: FieldsetStylesProps['size']
  radius?: FieldsetStylesProps['radius']
  classNames?: FieldsetClassNames
}

export default function Fieldset({
  legend,
  variant = 'default',
  size = 'md',
  radius = 'md',
  disabled = false,
  className,
  classNames,
  children,
  ...props
}: FieldsetProps) {
  const styles = fieldsetStyles({
    variant,
    size,
    radius,
    disabled,
  })

  return (
    <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
      <fieldset
        disabled={disabled}
        className={twMerge([
          styles.fieldset(),
          className,
          classNames?.fieldset,
        ])}
        {...props}
      >
        {legend && (
          <legend className={twMerge([styles.legend(), classNames?.legend])}>
            {legend}
          </legend>
        )}
        <div className={twMerge([styles.content(), classNames?.content])}>
          {children}
        </div>
      </fieldset>
    </div>
  )
}
