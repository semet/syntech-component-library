import { tv } from 'tailwind-variants'

export const fieldsetStyles = tv({
  slots: {
    wrapper: 'w-full',
    fieldset: 'border border-gray-300 transition-all duration-200',
    legend: 'px-1 font-medium text-gray-900',
    content: 'flex flex-col',
  },
  variants: {
    variant: {
      default: {
        fieldset: 'border-gray-300 bg-white',
      },
      filled: {
        fieldset: 'border-transparent bg-gray-100',
      },
      unstyled: {
        fieldset: 'border-none bg-transparent p-0',
      },
    },
    size: {
      xs: {
        fieldset: 'p-2',
        legend: 'text-xs',
        content: 'gap-2',
      },
      sm: {
        fieldset: 'p-3',
        legend: 'text-sm',
        content: 'gap-3',
      },
      md: {
        fieldset: 'p-4',
        legend: 'text-base',
        content: 'gap-4',
      },
      lg: {
        fieldset: 'p-5',
        legend: 'text-lg',
        content: 'gap-5',
      },
      xl: {
        fieldset: 'p-6',
        legend: 'text-xl',
        content: 'gap-6',
      },
    },
    radius: {
      xs: {
        fieldset: 'rounded-xs',
      },
      sm: {
        fieldset: 'rounded-sm',
      },
      md: {
        fieldset: 'rounded-md',
      },
      lg: {
        fieldset: 'rounded-lg',
      },
      xl: {
        fieldset: 'rounded-xl',
      },
    },
    disabled: {
      true: {
        fieldset: 'cursor-not-allowed bg-gray-50 opacity-60',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    radius: 'md',
  },
})
