import { tv } from 'tailwind-variants'

export const captchaInputStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    inputContainer: 'flex items-center gap-4',
    inputWrapper: 'relative flex-1',
    input:
      'w-full text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400',
    captchaImage:
      'pointer-events-none absolute top-0 right-0 bottom-0 flex items-center justify-center overflow-hidden',
    captchaSkeleton: 'h-full w-full',
    refreshButton:
      'bg-warning-800 hover:bg-warning-900 active:bg-warning-900 flex shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 disabled:cursor-not-allowed! disabled:opacity-60',
    refreshIcon: 'h-full w-full',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        input:
          'border border-gray-300 bg-white hover:border-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-300',
        captchaImage: 'border-l border-gray-300',
      },
      filled: {
        input:
          'border border-transparent bg-gray-100 hover:bg-gray-200 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-300',
        captchaImage: 'border-l border-gray-200',
      },
      unstyled: {
        input: 'border-none bg-transparent p-0',
      },
    },
    size: {
      xs: {
        input: 'h-7 pl-2 text-xs',
        captchaImage: 'w-28 rounded-r-xs',
        refreshButton: 'size-7',
        refreshIcon: 'size-3.5',
      },
      sm: {
        input: 'h-9 pl-3 text-sm',
        captchaImage: 'w-32 rounded-r-sm',
        refreshButton: 'size-9',
        refreshIcon: 'size-4',
      },
      md: {
        input: 'h-10 pl-4 text-base',
        captchaImage: 'w-36 rounded-r-md',
        refreshButton: 'size-10',
        refreshIcon: 'size-5',
      },
      lg: {
        input: 'h-12 pl-4 text-lg',
        captchaImage: 'w-40 rounded-r-lg',
        refreshButton: 'size-12',
        refreshIcon: 'size-6',
      },
      xl: {
        input: 'h-14 pl-4 text-xl',
        captchaImage: 'w-44 rounded-r-xl',
        refreshButton: 'size-14',
        refreshIcon: 'size-7',
      },
    },
    radius: {
      xs: {
        input: 'rounded-xs',
        captchaImage: 'rounded-r-xs',
      },
      sm: {
        input: 'rounded-sm',
        captchaImage: 'rounded-r-sm',
      },
      md: {
        input: 'rounded-md',
        captchaImage: 'rounded-r-md',
      },
      lg: {
        input: 'rounded-lg',
        captchaImage: 'rounded-r-lg',
      },
      xl: {
        input: 'rounded-xl',
        captchaImage: 'rounded-r-xl',
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
      },
    },
    isLoading: {
      true: {
        input: 'cursor-wait',
        refreshButton: 'cursor-wait',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
  },
})
