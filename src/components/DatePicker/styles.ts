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
    calendarIcon: 'size-5',
    rightSection:
      'pointer-events-none absolute top-1/2 right-1 flex -translate-y-1/2 items-center justify-center text-gray-500',
    clearButton:
      'pointer-events-auto absolute top-1/2 flex -translate-y-1/2 items-center justify-center text-gray-400 transition-colors hover:text-gray-600',
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
        input: 'h-7 text-xs',
        rightSection: 'w-6',
        calendarIcon: 'size-4',
        clearButton: 'size-4',
      },
      sm: {
        input: 'h-9 text-sm',
        rightSection: 'w-8',
        calendarIcon: 'size-5',
        clearButton: 'size-5',
      },
      md: {
        input: 'h-10 text-base',
        rightSection: 'w-10',
        calendarIcon: 'size-6',
        clearButton: 'size-6',
      },
      lg: {
        input: 'h-12 text-lg',
        rightSection: 'w-12',
        calendarIcon: 'size-7',
        clearButton: 'size-7',
      },
      xl: {
        input: 'h-14 text-xl',
        rightSection: 'w-14',
        calendarIcon: 'size-8',
        clearButton: 'size-8',
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
    // Icon position variant
    iconPosition: {
      left: {},
      right: {},
    },
    // Clearable and has selected value
    hasClearButton: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    //without clear button and icon on the right
    {
      iconPosition: 'right',
      hasClearButton: false,
      size: 'xs',
      class: {
        input: 'pr-8 pl-2',
        clearButton: 'right-7',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: false,
      size: 'sm',
      class: {
        input: 'pr-10 pl-3',
        clearButton: 'right-9',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: false,
      size: 'md',
      class: {
        input: 'pr-12 pl-4',
        clearButton: 'right-11',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: false,
      size: 'lg',
      class: {
        input: 'pr-14 pl-4',
        clearButton: 'right-13',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: false,
      size: 'xl',
      class: {
        input: 'pr-16 pl-4',
        clearButton: 'right-15',
      },
    },
    // Clear button positioning when icon is on the right
    {
      iconPosition: 'right',
      hasClearButton: true,
      size: 'xs',
      class: {
        input: 'pr-12! pl-2',
        clearButton: 'right-7',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: true,
      size: 'sm',
      class: {
        input: 'pr-16! pl-3',
        clearButton: 'right-9',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: true,
      size: 'md',
      class: {
        input: 'pr-20! pl-4',
        clearButton: 'right-11',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: true,
      size: 'lg',
      class: {
        input: 'pr-24! pl-4',
        clearButton: 'right-13',
      },
    },
    {
      iconPosition: 'right',
      hasClearButton: true,
      size: 'xl',
      class: {
        input: 'pr-28! pl-4',
        clearButton: 'right-15',
      },
    },
    // Clear button positioning when icon is on the left
    {
      iconPosition: 'left',
      hasClearButton: true,
      size: 'xs',
      class: {
        input: 'pr-7! pl-8',
        clearButton: 'right-2',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: true,
      size: 'sm',
      class: {
        input: 'pr-9! pl-9',
        clearButton: 'right-2.5',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: true,
      size: 'md',
      class: {
        input: 'pr-11! pl-10',
        clearButton: 'right-3',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: true,
      size: 'lg',
      class: {
        input: 'pr-13! pl-11',
        clearButton: 'right-3.5',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: true,
      size: 'xl',
      class: {
        input: 'pr-15! pl-12',
        clearButton: 'right-4',
      },
    },
    // Icon on the left and no clear button
    {
      iconPosition: 'left',
      hasClearButton: false,
      size: 'xs',
      class: {
        input: 'pr-2 pl-8',
        calendarIcon: 'left-2',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: false,
      size: 'sm',
      class: {
        input: 'pr-3 pl-9!',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: false,
      size: 'md',
      class: {
        input: 'pr-4 pl-10',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: false,
      size: 'lg',
      class: {
        input: 'pr-5 pl-11',
      },
    },
    {
      iconPosition: 'left',
      hasClearButton: false,
      size: 'xl',
      class: {
        input: 'pr-6 pl-12',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
    iconPosition: 'right',
    hasClearButton: false,
  },
})
