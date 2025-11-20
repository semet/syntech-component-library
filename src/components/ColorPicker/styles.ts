import { tv } from 'tailwind-variants'

export const colorPickerStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    inputWrapper: 'relative w-full',
    input:
      'w-full cursor-pointer text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400',
    leftSection:
      'pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center justify-center',
    rightSection:
      'pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center justify-center text-gray-500',
    clearButton:
      'pointer-events-auto absolute top-1/2 flex -translate-y-1/2 items-center justify-center text-gray-400 transition-colors hover:text-gray-600',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
    picker:
      'absolute top-full z-50 mt-1 w-64 rounded-md border border-gray-200 bg-white p-3 shadow-xl',
    colorArea: 'relative mb-3 h-40 w-full cursor-crosshair rounded-md',
    colorAreaOverlay: 'absolute inset-0 rounded-md',
    colorAreaThumb:
      'absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md',
    hueSlider: 'relative mb-3 h-3 w-full cursor-pointer rounded-full',
    hueThumb:
      'absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md',
    alphaSlider: 'relative h-3 w-full cursor-pointer rounded-full',
    alphaThumb:
      'absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md',
    swatchesGrid: 'mt-3 grid grid-cols-7 gap-2 border-t border-gray-200 pt-3',
    swatch:
      'size-7 cursor-pointer rounded-md border-2 border-gray-200 transition-colors hover:border-gray-400',
    swatchSelected: 'border-blue-400 ring-2 ring-blue-300 ring-offset-1',
    colorSwatch: 'cursor-pointer rounded border border-gray-300 shadow-sm',
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
        leftSection: 'left-2.5',
        rightSection: 'right-2',
        colorSwatch: 'size-4',
        clearButton: 'size-4',
      },
      sm: {
        input: 'h-9 text-sm',
        leftSection: 'left-3',
        rightSection: 'right-2.5',
        colorSwatch: 'size-4.5',
        clearButton: 'size-5',
      },
      md: {
        input: 'h-10 text-base',
        leftSection: 'left-3',
        rightSection: 'right-3',
        colorSwatch: 'size-5',
        clearButton: 'size-6',
      },
      lg: {
        input: 'h-12 text-lg',
        leftSection: 'left-3.5',
        rightSection: 'right-3',
        colorSwatch: 'size-6',
        clearButton: 'size-7',
      },
      xl: {
        input: 'h-14 text-xl',
        leftSection: 'left-4',
        rightSection: 'right-3 w-14',
        colorSwatch: 'size-6',
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
    hasClearButton: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // Clear button positioning and input padding
    {
      hasClearButton: true,
      size: 'xs',
      class: {
        input: 'px-8!',
        clearButton: 'right-2',
      },
    },
    {
      hasClearButton: true,
      size: 'sm',
      class: {
        input: 'px-9!',
        clearButton: 'right-2.5',
      },
    },
    {
      hasClearButton: true,
      size: 'md',
      class: {
        input: 'px-10!',
        clearButton: 'right-3',
      },
    },
    {
      hasClearButton: true,
      size: 'lg',
      class: {
        input: 'px-11!',
        clearButton: 'right-3.5',
      },
    },
    {
      hasClearButton: true,
      size: 'xl',
      class: {
        input: 'px-12!',
        clearButton: 'right-4',
      },
    },
    //without clear button
    {
      hasClearButton: false,
      size: 'xs',
      class: {
        input: 'pr-2 pl-8!',
        clearButton: 'right-2',
      },
    },
    {
      hasClearButton: false,
      size: 'sm',
      class: {
        input: 'pr-3 pl-9!',
        clearButton: 'right-2.5',
      },
    },
    {
      hasClearButton: false,
      size: 'md',
      class: {
        input: 'pr-4 pl-10!',
        clearButton: 'right-3',
      },
    },
    {
      hasClearButton: false,
      size: 'lg',
      class: {
        input: 'pr-4 pl-11!',
        clearButton: 'right-3.5',
      },
    },
    {
      hasClearButton: false,
      size: 'xl',
      class: {
        input: 'pr-4 pl-12!',
        clearButton: 'right-4',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
    hasClearButton: false,
  },
})
