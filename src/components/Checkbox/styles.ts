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
        inputWrapper: 'size-3.5',
        checkboxDisplay: 'size-3.5',
        icon: 'size-2.5',
        label: 'text-xs',
      },
      sm: {
        inputWrapper: 'size-4',
        checkboxDisplay: 'size-4',
        icon: 'size-3',
        label: 'text-sm',
      },
      md: {
        inputWrapper: 'size-5',
        checkboxDisplay: 'size-5',
        icon: 'size-3.5',
        label: 'text-base',
      },
      lg: {
        inputWrapper: 'size-6',
        checkboxDisplay: 'size-6',
        icon: 'size-4',
        label: 'text-lg',
      },
      xl: {
        inputWrapper: 'size-7',
        checkboxDisplay: 'size-7',
        icon: 'size-5',
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
