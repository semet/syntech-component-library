import { tv } from 'tailwind-variants'

export const fileInputStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    inputWrapper: 'relative w-full',
    input:
      'flex w-full cursor-pointer items-center justify-between text-gray-900 transition-all duration-200 outline-none',
    placeholder: 'flex-1 truncate text-left text-gray-400',
    icon: 'flex shrink-0 items-center justify-center text-gray-500',
    clearButton:
      'flex shrink-0 items-center justify-center rounded p-0.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        input:
          'border border-gray-300 bg-white hover:border-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 focus:outline-none',
      },
      filled: {
        input:
          'border border-transparent bg-gray-100 hover:bg-gray-200 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-300 focus:outline-none',
      },
      unstyled: {
        input: 'border-none bg-transparent p-0',
      },
    },
    size: {
      xs: {
        input: 'h-7 gap-1 text-xs',
        icon: 'size-4',
      },
      sm: {
        input: 'h-9 gap-2 text-sm',
        icon: 'size-4',
      },
      md: {
        input: 'h-10 gap-2 text-base',
        icon: 'size-5',
      },
      lg: {
        input: 'h-12 gap-2 text-lg',
        icon: 'size-5',
      },
      xl: {
        input: 'h-14 gap-3 text-xl',
        icon: 'size-6',
      },
    },
    radius: {
      xs: {
        input: 'rounded-xs',
      },
      sm: {
        input: 'rounded-sm',
      },
      md: {
        input: 'rounded-md',
      },
      lg: {
        input: 'rounded-lg',
      },
      xl: {
        input: 'rounded-xl',
      },
    },
    hasError: {
      true: {
        input:
          'border-red-500 hover:border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-300',
      },
    },
    disabled: {
      true: {
        input: 'cursor-not-allowed bg-gray-50 opacity-60',
        clearButton: 'pointer-events-none',
      },
    },
    hasValue: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      size: 'xs',
      class: {
        input: 'px-2',
      },
    },
    {
      variant: 'default',
      size: 'sm',
      class: {
        input: 'px-3',
      },
    },
    {
      variant: 'default',
      size: ['md', 'lg', 'xl'],
      class: {
        input: 'px-4',
      },
    },
    {
      variant: 'filled',
      size: 'xs',
      class: {
        input: 'px-2',
      },
    },
    {
      variant: 'filled',
      size: 'sm',
      class: {
        input: 'px-3',
      },
    },
    {
      variant: 'filled',
      size: ['md', 'lg', 'xl'],
      class: {
        input: 'px-4',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
  },
})
