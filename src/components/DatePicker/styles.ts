import { tv } from 'tailwind-variants'

export const datePickerStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    inputWrapper: 'relative w-full',
    input:
      'w-full cursor-pointer text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400',
    rightSection:
      'pointer-events-none absolute top-1/2 right-1 flex -translate-y-1/2 items-center justify-center text-gray-500',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
    calendar:
      'absolute top-full z-50 mt-1 w-80 rounded-md border border-gray-200 bg-white p-4 shadow-xl',
    calendarHeader: 'mb-4 flex items-center justify-between',
    calendarButton: 'rounded-md p-2 transition-colors hover:bg-gray-100',
    calendarTitle: 'text-base font-semibold text-gray-800',
    dayNamesGrid: 'mb-2 grid grid-cols-7 gap-1',
    dayName:
      'flex h-9 items-center justify-center text-xs font-semibold text-gray-500',
    daysGrid: 'grid grid-cols-7 gap-1',
    dayButton:
      'flex h-9 w-full items-center justify-center rounded-md text-sm font-medium transition-colors',
    dayButtonToday: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    dayButtonSelected: 'bg-orange-600 text-white hover:bg-orange-700',
    dayButtonDefault: 'text-gray-700 hover:bg-gray-100',
    dayButtonOutside: 'text-gray-300 hover:bg-gray-50',
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
        input: 'h-7 px-2 text-xs',
        rightSection: 'w-6',
      },
      sm: {
        input: 'h-9 px-3 text-sm',
        rightSection: 'w-8',
      },
      md: {
        input: 'h-10 px-4 text-base',
        rightSection: 'w-10',
      },
      lg: {
        input: 'h-12 px-4 text-lg',
        rightSection: 'w-12',
      },
      xl: {
        input: 'h-14 px-4 text-xl',
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
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
  },
})
