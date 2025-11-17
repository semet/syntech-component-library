import { tv } from 'tailwind-variants'

export const captchaInputStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    inputContainer: 'flex items-center gap-4',
    inputWrapper:
      'relative flex flex-1 items-center overflow-hidden transition-all duration-200',
    input:
      'w-full border-none bg-transparent text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400',
    captchaImageWrapper:
      'pointer-events-none absolute top-0 right-0 bottom-0 flex items-center justify-center overflow-hidden border-l',
    captchaImage: 'h-full w-full object-contain',
    captchaSkeleton: 'h-full w-full',
    refreshButton:
      'bg-warning-800 hover:bg-warning-900 active:bg-warning-900 flex shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60',
    refreshIcon: 'h-full w-full',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        inputWrapper:
          'border border-gray-300 bg-white focus-within:border-blue-400! focus-within:ring-1 focus-within:ring-blue-300 hover:border-gray-400',
        captchaImage: 'border-l-gray-300',
      },
      filled: {
        inputWrapper:
          'border border-transparent bg-gray-100 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-300 hover:bg-gray-200',
        captchaImage: 'border-l-gray-200',
      },
      unstyled: {
        inputWrapper: 'border-none bg-transparent p-0',
        input: 'p-0',
      },
    },
    size: {
      xs: {
        inputWrapper: 'h-7 rounded-xs',
        input: 'pl-2 text-xs',
        captchaImage: 'w-28',
        refreshButton: 'size-7',
        refreshIcon: 'size-3.5',
      },
      sm: {
        inputWrapper: 'h-9',
        input: 'pl-3 text-sm',
        captchaImage: 'w-32',
        refreshButton: 'size-9',
        refreshIcon: 'size-4',
      },
      md: {
        inputWrapper: 'h-10 rounded-md',
        input: 'pl-4 text-base',
        captchaImage: 'w-36',
        refreshButton: 'size-10',
        refreshIcon: 'size-5',
      },
      lg: {
        inputWrapper: 'h-12 rounded-lg',
        input: 'pl-4 text-lg',
        captchaImage: 'w-40',
        refreshButton: 'size-12',
        refreshIcon: 'size-6',
      },
      xl: {
        inputWrapper: 'h-14 rounded-xl',
        input: 'pl-4 text-xl',
        captchaImage: 'w-44',
        refreshButton: 'size-14',
        refreshIcon: 'size-7',
      },
    },
    radius: {
      xs: {
        inputWrapper: 'rounded-xs',
      },
      sm: {
        inputWrapper: 'rounded-sm',
      },
      md: {
        inputWrapper: 'rounded-md',
      },
      lg: {
        inputWrapper: 'rounded-lg',
      },
      xl: {
        inputWrapper: 'rounded-xl',
      },
    },
    hasError: {
      true: {
        inputWrapper:
          'border-red-500 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-300',
      },
    },
    disabled: {
      true: {
        inputWrapper: 'cursor-not-allowed bg-gray-50 opacity-60',
      },
    },
    isLoading: {
      true: {
        inputWrapper: 'cursor-wait',
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
