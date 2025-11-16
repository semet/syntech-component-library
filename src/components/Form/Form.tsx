import React from 'react'
import {
  useForm,
  type UseFormReturn,
  type FieldValues,
  type SubmitHandler,
  type UseFormProps,
} from 'react-hook-form'

type FormProps<T extends FieldValues> = UseFormProps<T> & {
  onSubmit: SubmitHandler<T>
  children: (formMethods: UseFormReturn<T>) => React.ReactNode
  className?: string
}

export function Form<T extends FieldValues>({
  onSubmit,
  children,
  className = '',
  ...props
}: FormProps<T>) {
  const formMethods = useForm<T>(props)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    formMethods.handleSubmit(onSubmit)(e)
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={className}
    >
      {children(formMethods)}
    </form>
  )
}
