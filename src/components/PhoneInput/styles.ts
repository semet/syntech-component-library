import { tv } from 'tailwind-variants'

export const phoneInputStyles = tv({
  slots: {
    wrapper: 'relative flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    inputWrapper:
      'relative flex w-full items-stretch rounded-sm transition-all duration-200',
    countrySelector:
      'flex cursor-pointer items-center gap-2 border-r border-r-slate-300 bg-white px-3 text-sm text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none disabled:cursor-not-allowed',
    flag: 'text-xl',
    countryCode: 'text-sm text-gray-600',
    chevron: 'size-2.5 text-gray-400 transition-transform',
    input:
      'flex-1 border-0 border-l-0 text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400',
    dropdown:
      'absolute top-full left-0 z-50 mt-1 w-64 overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg',
    searchInputWrapper: 'border-b border-gray-200',
    searchInput:
      'w-full px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300',
    countriesScrollArea: 'max-h-60 overflow-y-auto',
    countryOption:
      'flex cursor-pointer items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-gray-100',
    countryOptionSelected: 'bg-blue-50 hover:bg-blue-100',
    countryName: 'flex-1 text-gray-900',
    countryCallingCode: 'text-gray-500',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        inputWrapper:
          'border border-gray-300 bg-white focus-within:border-blue-400! focus-within:ring-1 focus-within:ring-blue-300! hover:border-gray-400',
        countrySelector: 'rounded-l-sm',
        input: 'rounded-r-sm bg-white',
      },
      filled: {
        inputWrapper:
          'border border-transparent bg-gray-100 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-300 hover:bg-gray-200',
        countrySelector: 'rounded-l-sm',
        input: 'rounded-r-sm',
      },
    },
    size: {
      xs: {
        countrySelector: 'h-7 px-2 text-xs',
        input: 'h-7 px-2 text-xs',
      },
      sm: {
        countrySelector: 'h-9 px-2.5 text-sm',
        input: 'h-9 px-3 text-sm',
      },
      md: {
        countrySelector: 'h-10 px-3 text-base',
        input: 'h-10 px-4 text-base',
      },
      lg: {
        countrySelector: 'h-12 px-3 text-lg',
        input: 'h-12 px-4 text-lg',
      },
      xl: {
        countrySelector: 'h-14 px-4 text-xl',
        input: 'h-14 px-4 text-xl',
      },
    },
    hasError: {
      true: {
        inputWrapper:
          'border-red-500 focus-within:border-red-400! focus-within:ring-1 focus-within:ring-red-300! hover:border-red-400',
      },
    },
    disabled: {
      true: {
        inputWrapper: 'opacity-60',
        countrySelector: 'bg-gray-50 hover:bg-gray-50',
        input: 'bg-gray-50',
      },
    },
    isOpen: {
      true: {
        chevron: 'rotate-180',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    isOpen: false,
  },
})
