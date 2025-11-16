import { tv } from 'tailwind-variants'

export const selectStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    selectWrapper: 'relative w-full',
    select:
      'w-full cursor-pointer appearance-none bg-white text-gray-900 transition-all duration-200 outline-none',
    leftSection:
      'pointer-events-none absolute top-1/2 left-1.5 flex -translate-y-1/2 items-center justify-center text-gray-500',
    chevron:
      'pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center text-gray-500 transition-transform duration-200',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        select:
          'border border-gray-300 bg-white hover:border-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-300',
      },
      filled: {
        select:
          'border border-transparent bg-gray-100 hover:bg-gray-200 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-300',
      },
      unstyled: {
        select: 'border-none bg-transparent p-0',
      },
    },
    size: {
      xs: {
        select: 'h-7 text-xs',
        leftSection: 'w-6',
        chevron: 'w-4',
      },
      sm: {
        select: 'h-9 text-sm',
        leftSection: 'w-8',
        chevron: 'w-4',
      },
      md: {
        select: 'h-10 text-base',
        leftSection: 'w-10',
        chevron: 'w-5',
      },
      lg: {
        select: 'h-12 text-lg',
        leftSection: 'w-12',
        chevron: 'w-5',
      },
      xl: {
        select: 'h-14 text-xl',
        leftSection: 'w-14',
        chevron: 'w-6',
      },
    },
    radius: {
      xs: {
        select: 'rounded-xs',
      },
      sm: {
        select: 'rounded-sm',
      },
      md: {
        select: 'rounded-md',
      },
      lg: {
        select: 'rounded-lg',
      },
      xl: {
        select: 'rounded-xl',
      },
    },
    hasError: {
      true: {
        select:
          'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-300',
      },
    },
    disabled: {
      true: {
        select: 'cursor-not-allowed bg-gray-50 opacity-60',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      size: 'xs',
      class: {
        select: 'px-2',
      },
    },
    {
      variant: 'default',
      size: 'sm',
      class: {
        select: 'px-3',
      },
    },
    {
      variant: 'default',
      size: ['md', 'lg', 'xl'],
      class: {
        select: 'px-4',
      },
    },
    {
      variant: 'filled',
      size: 'xs',
      class: {
        select: 'px-2',
      },
    },
    {
      variant: 'filled',
      size: 'sm',
      class: {
        select: 'px-3',
      },
    },
    {
      variant: 'filled',
      size: ['md', 'lg', 'xl'],
      class: {
        select: 'px-4',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
  },
})
