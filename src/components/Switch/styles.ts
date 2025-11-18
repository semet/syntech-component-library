import { tv } from 'tailwind-variants'

export const switchStyles = tv({
  slots: {
    wrapper: 'relative flex w-full flex-col gap-1',
    switchWrapper: 'flex items-center gap-2',
    inputWrapper: 'relative inline-flex shrink-0 cursor-pointer',
    input: 'peer sr-only',
    track: 'relative rounded-full border transition-all duration-200',
    thumb:
      'absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm transition-all duration-200',
    labelWrapper: 'flex flex-1 flex-col gap-0.5',
    label: 'cursor-pointer text-sm leading-5 font-medium text-gray-900',
    description: 'text-xs text-gray-500',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        track:
          'border-gray-300 bg-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:bg-gray-300 peer-checked:peer-hover:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
      },
      filled: {
        track:
          'border-transparent bg-gray-100 peer-checked:border-transparent peer-checked:bg-blue-500 peer-hover:bg-gray-200 peer-checked:peer-hover:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
      },
      outline: {
        track:
          'border-2 border-gray-300 bg-transparent peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-hover:border-gray-400 peer-checked:peer-hover:border-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:ring-offset-1',
      },
    },
    size: {
      xs: {
        inputWrapper: 'h-3.5 w-6',
        track: 'h-3.5 w-6',
        thumb: 'left-0.5 size-2.5 peer-checked:translate-x-2.5',
        label: 'text-xs',
      },
      sm: {
        inputWrapper: 'h-4 w-7',
        track: 'h-4 w-7',
        thumb: 'left-0.5 size-3 peer-checked:translate-x-3',
        label: 'text-sm',
      },
      md: {
        inputWrapper: 'h-5 w-9',
        track: 'h-5 w-9',
        thumb: 'left-0.5 size-4 peer-checked:translate-x-4',
        label: 'text-base',
      },
      lg: {
        inputWrapper: 'h-6 w-11',
        track: 'h-6 w-11',
        thumb: 'left-0.5 size-5 peer-checked:translate-x-5',
        label: 'text-lg',
      },
      xl: {
        inputWrapper: 'h-7 w-14',
        track: 'h-7 w-14',
        thumb: 'left-1 size-6 peer-checked:translate-x-6',
        label: 'text-xl',
      },
    },
    radius: {
      xs: {
        track: 'rounded-xs',
        thumb: 'rounded-xs',
      },
      sm: {
        track: 'rounded-sm',
        thumb: 'rounded-sm',
      },
      md: {
        track: 'rounded',
        thumb: 'rounded',
      },
      lg: {
        track: 'rounded-md',
        thumb: 'rounded-md',
      },
      xl: {
        track: 'rounded-lg',
        thumb: 'rounded-lg',
      },
      full: {
        track: 'rounded-full',
        thumb: 'rounded-full',
      },
    },
    labelPosition: {
      left: {
        switchWrapper: 'flex-row-reverse',
      },
      right: {
        switchWrapper: 'flex-row',
      },
    },
    hasError: {
      true: {
        track:
          'border-red-500 bg-red-100 peer-checked:border-red-500 peer-checked:bg-red-500 peer-hover:bg-red-200 peer-focus:ring-red-300 peer-checked:peer-focus:ring-red-300',
      },
    },
    disabled: {
      true: {
        inputWrapper: 'cursor-not-allowed opacity-60',
        track: 'bg-gray-100',
        label: 'cursor-not-allowed opacity-60',
        description: 'opacity-60',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'full',
    labelPosition: 'right',
  },
})
