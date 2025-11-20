import { tv } from 'tailwind-variants'

export const textInputStyles = tv({
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
      'pointer-events-none absolute top-1/2 left-1.5 flex -translate-y-1/2 items-center justify-center text-gray-500',
    rightSection:
      'pointer-events-none absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center justify-center text-gray-500',
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
      },
      sm: {
        input: 'h-9 text-sm',
        leftSection: 'w-8',
        rightSection: 'w-8',
      },
      md: {
        input: 'h-10 text-base',
        leftSection: 'w-10',
        rightSection: 'w-10',
      },
      lg: {
        input: 'h-12 text-lg',
        leftSection: 'w-12',
        rightSection: 'w-12',
      },
      xl: {
        input: 'h-14 text-xl',
        leftSection: 'w-14',
        rightSection: 'w-14',
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
      },
    },
    hasLeftSection: {
      true: {},
      false: {},
    },
    hasRightSection: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // No sections - apply horizontal padding
    {
      variant: ['default', 'filled'],
      size: 'xs',
      hasLeftSection: false,
      hasRightSection: false,
      class: {
        input: 'px-2',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'sm',
      hasLeftSection: false,
      hasRightSection: false,
      class: {
        input: 'px-3',
      },
    },
    {
      variant: ['default', 'filled'],
      size: ['md', 'lg', 'xl'],
      hasLeftSection: false,
      hasRightSection: false,
      class: {
        input: 'px-4',
      },
    },

    // Only left section - apply specific left and right padding
    {
      variant: ['default', 'filled'],
      size: 'xs',
      hasLeftSection: true,
      hasRightSection: false,
      class: {
        input: 'pr-2 pl-7',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'sm',
      hasLeftSection: true,
      hasRightSection: false,
      class: {
        input: 'pr-3 pl-9',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'md',
      hasLeftSection: true,
      hasRightSection: false,
      class: {
        input: 'pr-4 pl-11',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'lg',
      hasLeftSection: true,
      hasRightSection: false,
      class: {
        input: 'pr-4 pl-13',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'xl',
      hasLeftSection: true,
      hasRightSection: false,
      class: {
        input: 'pr-4 pl-15',
      },
    },

    // Only right section - apply specific left and right padding
    {
      variant: ['default', 'filled'],
      size: 'xs',
      hasLeftSection: false,
      hasRightSection: true,
      class: {
        input: 'pr-7 pl-2',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'sm',
      hasLeftSection: false,
      hasRightSection: true,
      class: {
        input: 'pr-9 pl-3',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'md',
      hasLeftSection: false,
      hasRightSection: true,
      class: {
        input: 'pr-11 pl-4',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'lg',
      hasLeftSection: false,
      hasRightSection: true,
      class: {
        input: 'pr-13 pl-4',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'xl',
      hasLeftSection: false,
      hasRightSection: true,
      class: {
        input: 'pr-15 pl-4',
      },
    },

    // Both sections - apply both specific paddings
    {
      variant: ['default', 'filled'],
      size: 'xs',
      hasLeftSection: true,
      hasRightSection: true,
      class: {
        input: 'pr-7 pl-7',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'sm',
      hasLeftSection: true,
      hasRightSection: true,
      class: {
        input: 'pr-9 pl-9',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'md',
      hasLeftSection: true,
      hasRightSection: true,
      class: {
        input: 'pr-11 pl-11',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'lg',
      hasLeftSection: true,
      hasRightSection: true,
      class: {
        input: 'pr-13 pl-13',
      },
    },
    {
      variant: ['default', 'filled'],
      size: 'xl',
      hasLeftSection: true,
      hasRightSection: true,
      class: {
        input: 'pr-15 pl-15',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
    hasLeftSection: false,
    hasRightSection: false,
  },
})
