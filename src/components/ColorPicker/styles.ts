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
      'pointer-events-none absolute top-1/2 left-2.5 flex -translate-y-1/2 items-center justify-center',
    rightSection:
      'pointer-events-none absolute top-1/2 right-2.5 flex -translate-y-1/2 items-center justify-center text-gray-500',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
    picker:
      'absolute top-full z-50 mt-1 w-64 rounded-md border border-gray-200 bg-white p-3 shadow-xl',
    colorArea: 'relative mb-3 h-40 w-full cursor-crosshair rounded-md',
    colorAreaOverlay: 'absolute inset-0 rounded-md',
    colorAreaThumb:
      'absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md',
    hueSlider: 'relative mb-3 h-3 w-full cursor-pointer rounded-full',
    hueThumb:
      'absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md',
    alphaSlider: 'relative h-3 w-full cursor-pointer rounded-full',
    alphaThumb:
      'absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md',
    swatchesGrid: 'mt-3 grid grid-cols-7 gap-2 border-t border-gray-200 pt-3',
    swatch:
      'h-7 w-7 cursor-pointer rounded-md border-2 border-gray-200 transition-colors hover:border-gray-400',
    swatchSelected: 'border-blue-400 ring-2 ring-blue-300 ring-offset-1',
    colorSwatch:
      'h-6 w-6 cursor-pointer rounded border border-gray-300 shadow-sm',
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
        leftSection: 'left-2',
        rightSection: 'right-2',
      },
      sm: {
        input: 'h-9 px-3 text-sm',
        leftSection: 'left-2.5',
        rightSection: 'right-2.5',
      },
      md: {
        input: 'h-10 px-4 text-base',
        leftSection: 'left-3',
        rightSection: 'right-3',
      },
      lg: {
        input: 'h-12 px-4 text-lg',
        leftSection: 'left-3',
        rightSection: 'right-3',
      },
      xl: {
        input: 'h-14 px-4 text-xl',
        leftSection: 'left-3',
        rightSection: 'right-3',
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
          'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-300',
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
