import type { ComponentProps } from 'react'
import {
  type Resolver,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
  type DefaultValues,
  useForm,
} from 'react-hook-form'

type FormProps<T extends FieldValues> = Omit<
  ComponentProps<'form'>,
  'onSubmit' | 'children'
> & {
  resolver: Resolver<T>
  onSubmit: SubmitHandler<T>
  children: (formMethods: UseFormReturn<T>) => React.ReactNode
  defaultValues?: DefaultValues<T> | undefined
  className?: string
}

export function Form<T extends FieldValues>({
  resolver,
  onSubmit,
  children,
  defaultValues,
  className = '',
  ...props
}: FormProps<T>) {
  const formMethods = useForm<T>({
    resolver,
    defaultValues,
  })

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    formMethods.handleSubmit(onSubmit)(e)
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={className}
      {...props}
    >
      {children(formMethods)}
    </form>
  )
}
