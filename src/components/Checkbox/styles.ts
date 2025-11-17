import { tv } from 'tailwind-variants'

export const checkboxStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    checkboxWrapper: 'flex items-start gap-2',
    inputWrapper: 'relative flex shrink-0 items-center justify-center',
    input: 'peer absolute h-full w-full cursor-pointer opacity-0',
    checkboxDisplay:
      'flex items-center justify-center border bg-white transition-all duration-200',
    icon: 'text-white transition-opacity',
    labelWrapper: 'flex flex-1 flex-col gap-0.5',
    label: 'cursor-pointer text-sm leading-5 font-medium text-gray-900',
    description: 'text-xs text-gray-500',
    errorWrapper: 'w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        checkboxDisplay:
          'border-gray-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:border-gray-400 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
      },
      filled: {
        checkboxDisplay:
          'border-transparent bg-gray-100 peer-checked:border-transparent peer-checked:bg-blue-500 peer-hover:bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
      },
      outline: {
        checkboxDisplay:
          'border-2 border-gray-300 peer-checked:border-blue-500 peer-checked:bg-transparent peer-hover:border-gray-400 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
        icon: 'text-blue-500',
      },
    },
    size: {
      xs: {
        inputWrapper: 'h-3.5 w-3.5',
        checkboxDisplay: 'h-3.5 w-3.5',
        icon: 'h-2.5 w-2.5',
        label: 'text-xs',
      },
      sm: {
        inputWrapper: 'h-4 w-4',
        checkboxDisplay: 'h-4 w-4',
        icon: 'h-3 w-3',
        label: 'text-sm',
      },
      md: {
        inputWrapper: 'h-5 w-5',
        checkboxDisplay: 'h-5 w-5',
        icon: 'h-3.5 w-3.5',
        label: 'text-base',
      },
      lg: {
        inputWrapper: 'h-6 w-6',
        checkboxDisplay: 'h-6 w-6',
        icon: 'h-4 w-4',
        label: 'text-lg',
      },
      xl: {
        inputWrapper: 'h-7 w-7',
        checkboxDisplay: 'h-7 w-7',
        icon: 'h-5 w-5',
        label: 'text-xl',
      },
    },
    radius: {
      xs: {
        checkboxDisplay: 'rounded-xs',
      },
      sm: {
        checkboxDisplay: 'rounded-sm',
      },
      md: {
        checkboxDisplay: 'rounded',
      },
      lg: {
        checkboxDisplay: 'rounded-md',
      },
      xl: {
        checkboxDisplay: 'rounded-lg',
      },
    },
    hasError: {
      true: {
        checkboxDisplay:
          'border-red-500 peer-checked:border-red-500 peer-checked:bg-red-500 peer-focus:ring-red-300',
      },
    },
    disabled: {
      true: {
        checkboxDisplay: 'cursor-not-allowed bg-gray-50 opacity-60',
        label: 'cursor-not-allowed opacity-60',
        description: 'opacity-60',
        input: 'cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
  },
})
