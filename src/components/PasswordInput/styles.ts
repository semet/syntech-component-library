import { tv } from 'tailwind-variants'

export const passwordInputStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    inputWrapper: 'relative w-full',
    input:
      'w-full text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400',
    leftSection:
      'absolute top-1/2 left-1.5 flex -translate-y-1/2 items-center justify-center text-gray-500',
    rightSection:
      'absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center justify-center text-gray-500',
    toggleButton:
      'pointer-events-auto flex cursor-pointer items-center justify-center transition-colors hover:text-gray-700',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        input:
          'border border-gray-300 bg-white hover:border-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-300',
      },
      filled: {
        input:
          'border border-transparent bg-gray-100 hover:bg-gray-200 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-300',
      },
      unstyled: {
        input: 'border-none bg-transparent p-0',
      },
    },
    size: {
      xs: {
        input: 'h-7 text-xs',
        leftSection: 'w-6',
        rightSection: 'w-6',
        toggleButton: 'h-5 w-5',
      },
      sm: {
        input: 'h-9 text-sm',
        leftSection: 'w-8',
        rightSection: 'w-8',
        toggleButton: 'h-5 w-5',
      },
      md: {
        input: 'h-10 text-base',
        leftSection: 'w-10',
        rightSection: 'w-10',
        toggleButton: 'h-6 w-6',
      },
      lg: {
        input: 'h-12 text-lg',
        leftSection: 'w-12',
        rightSection: 'w-12',
        toggleButton: 'h-7 w-7',
      },
      xl: {
        input: 'h-14 text-xl',
        leftSection: 'w-14',
        rightSection: 'w-14',
        toggleButton: 'h-8 w-8',
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
          'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-300',
      },
    },
    disabled: {
      true: {
        input: 'cursor-not-allowed bg-gray-50 opacity-60',
        toggleButton: 'cursor-not-allowed opacity-60',
      },
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
