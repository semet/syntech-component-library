import { tv } from 'tailwind-variants'

export const textareaStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    textareaWrapper: 'relative w-full',
    textarea:
      'w-full resize-y text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        textarea:
          'border border-gray-300 bg-white hover:border-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-300',
      },
      filled: {
        textarea:
          'border border-transparent bg-gray-100 hover:bg-gray-200 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-300',
      },
      unstyled: {
        textarea: 'border-none bg-transparent p-0',
      },
    },
    size: {
      xs: {
        textarea: 'min-h-16 py-1.5 text-xs',
      },
      sm: {
        textarea: 'min-h-20 py-2 text-sm',
      },
      md: {
        textarea: 'min-h-24 py-2.5 text-base',
      },
      lg: {
        textarea: 'min-h-28 py-3 text-lg',
      },
      xl: {
        textarea: 'min-h-32 py-3.5 text-xl',
      },
    },
    radius: {
      xs: {
        textarea: 'rounded-xs',
      },
      sm: {
        textarea: 'rounded-sm',
      },
      md: {
        textarea: 'rounded-md',
      },
      lg: {
        textarea: 'rounded-lg',
      },
      xl: {
        textarea: 'rounded-xl',
      },
    },
    hasError: {
      true: {
        textarea:
          'border-red-500 hover:border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-300',
      },
    },
    disabled: {
      true: {
        textarea: 'cursor-not-allowed bg-gray-50 opacity-60',
      },
    },
    autosize: {
      true: {
        textarea: 'resize-none overflow-hidden',
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      size: 'xs',
      class: {
        textarea: 'px-2',
      },
    },
    {
      variant: 'default',
      size: 'sm',
      class: {
        textarea: 'px-3',
      },
    },
    {
      variant: 'default',
      size: ['md', 'lg', 'xl'],
      class: {
        textarea: 'px-4',
      },
    },
    {
      variant: 'filled',
      size: 'xs',
      class: {
        textarea: 'px-2',
      },
    },
    {
      variant: 'filled',
      size: 'sm',
      class: {
        textarea: 'px-3',
      },
    },
    {
      variant: 'filled',
      size: ['md', 'lg', 'xl'],
      class: {
        textarea: 'px-4',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
    autosize: false,
  },
})
