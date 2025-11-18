import { tv } from 'tailwind-variants'

export const radioStyles = tv({
  slots: {
    wrapper: 'flex flex-col gap-1',
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
        inputWrapper: 'size-3.5',
        radioDisplay: 'size-3.5',
        dot: 'size-1.5',
        label: 'text-xs',
      },
      sm: {
        inputWrapper: 'size-4',
        radioDisplay: 'size-4',
        dot: 'size-2',
        label: 'text-sm',
      },
      md: {
        inputWrapper: 'size-5',
        radioDisplay: 'size-5',
        dot: 'size-2.5',
        label: 'text-base',
      },
      lg: {
        inputWrapper: 'size-6',
        radioDisplay: 'size-6',
        dot: 'size-3',
        label: 'text-lg',
      },
      xl: {
        inputWrapper: 'size-7',
        radioDisplay: 'size-7',
        dot: 'size-3.5',
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
