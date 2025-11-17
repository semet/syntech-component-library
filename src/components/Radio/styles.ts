import { tv } from 'tailwind-variants'

export const radioStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    radioWrapper: 'flex items-center gap-2',
    inputWrapper: 'relative flex shrink-0 items-center justify-center',
    input: 'peer absolute h-full w-full cursor-pointer opacity-0',
    radioDisplay:
      'flex items-center justify-center rounded-full border bg-white transition-all duration-200',
    dot: 'rounded-full bg-white transition-all duration-200',
    labelWrapper: 'flex flex-1 flex-col gap-0.5',
    label: 'cursor-pointer text-sm leading-5 font-medium text-gray-900',
    description: 'text-xs text-gray-500',
    errorWrapper: 'w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        radioDisplay:
          'border-gray-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:border-gray-400 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
      },
      filled: {
        radioDisplay:
          'border-transparent bg-gray-100 peer-checked:border-transparent peer-checked:bg-blue-500 peer-hover:bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
      },
      outline: {
        radioDisplay:
          'border-2 border-gray-300 peer-checked:border-blue-500 peer-checked:bg-transparent peer-hover:border-gray-400 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
        dot: 'bg-blue-500',
      },
    },
    size: {
      xs: {
        inputWrapper: 'h-3.5 w-3.5',
        radioDisplay: 'h-3.5 w-3.5',
        dot: 'h-1.5 w-1.5',
        label: 'text-xs',
      },
      sm: {
        inputWrapper: 'h-4 w-4',
        radioDisplay: 'h-4 w-4',
        dot: 'h-2 w-2',
        label: 'text-sm',
      },
      md: {
        inputWrapper: 'h-5 w-5',
        radioDisplay: 'h-5 w-5',
        dot: 'h-2.5 w-2.5',
        label: 'text-base',
      },
      lg: {
        inputWrapper: 'h-6 w-6',
        radioDisplay: 'h-6 w-6',
        dot: 'h-3 w-3',
        label: 'text-lg',
      },
      xl: {
        inputWrapper: 'h-7 w-7',
        radioDisplay: 'h-7 w-7',
        dot: 'h-3.5 w-3.5',
        label: 'text-xl',
      },
    },
    hasError: {
      true: {
        radioDisplay:
          'border-red-500 peer-checked:border-red-500 peer-checked:bg-red-500 peer-focus:ring-red-300',
      },
    },
    disabled: {
      true: {
        radioDisplay: 'cursor-not-allowed bg-gray-50 opacity-60',
        label: 'cursor-not-allowed opacity-60',
        description: 'opacity-60',
        input: 'cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
})
