import { tv } from 'tailwind-variants'

export const comboBoxStyles = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-1',
    labelWrapper: 'flex items-center',
    label: 'text-sm leading-4 font-medium text-gray-900',
    asterisk: 'ml-1 text-red-500',
    description: 'mb-1 text-xs text-gray-500',
    controlWrapper: 'relative w-full',
    control:
      'relative flex w-full cursor-pointer items-center gap-2 text-gray-900 transition-all duration-200 outline-none',
    input:
      'flex-1 cursor-pointer bg-transparent outline-none placeholder:text-gray-400',
    searchInput:
      'flex-1 cursor-text bg-transparent outline-none placeholder:text-gray-400',
    pillsWrapper: 'flex flex-wrap gap-1.5',
    pill: 'inline-flex items-center gap-1 rounded-sm bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700',
    pillRemove:
      'pointer-events-auto cursor-pointer transition-colors hover:text-blue-900',
    placeholder: 'text-gray-400',
    iconWrapper:
      'absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-1',
    chevron:
      'pointer-events-none text-gray-500 transition-transform duration-200',
    clearButton:
      'pointer-events-auto cursor-pointer text-gray-500 transition-colors hover:text-gray-700',
    dropdown:
      'absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg',
    dropdownInner: 'py-1',
    option:
      'flex cursor-pointer items-center justify-between px-3 py-2 text-sm transition-colors',
    optionLabel: 'flex-1',
    checkIcon: 'h-4 w-4 text-blue-600',
    empty: 'px-3 py-2 text-center text-sm text-gray-500',
    errorWrapper: 'absolute top-full left-0 w-full',
    error: 'text-xs text-red-600',
  },
  variants: {
    variant: {
      default: {
        control:
          'border border-gray-300 bg-white focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-300',
      },
      filled: {
        control:
          'border border-transparent bg-gray-100 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-300 hover:bg-gray-200',
      },
      unstyled: {
        control: 'border-none bg-transparent p-0',
      },
    },
    size: {
      xs: {
        control: 'min-h-7 text-xs',
        option: 'py-1.5 text-xs',
        pill: 'px-1.5 py-0.5 text-xs',
      },
      sm: {
        control: 'min-h-9 text-sm',
        option: 'py-2 text-sm',
        pill: 'px-2 py-0.5 text-xs',
      },
      md: {
        control: 'min-h-10 text-base',
        option: 'py-2.5 text-base',
        pill: 'px-2 py-1 text-sm',
      },
      lg: {
        control: 'min-h-12 text-lg',
        option: 'py-3 text-lg',
        pill: 'px-2.5 py-1 text-base',
      },
      xl: {
        control: 'min-h-14 text-xl',
        option: 'py-3.5 text-xl',
        pill: 'px-3 py-1.5 text-lg',
      },
    },
    radius: {
      xs: {
        control: 'rounded-xs',
        dropdown: 'rounded-xs',
      },
      sm: {
        control: 'rounded-sm',
        dropdown: 'rounded-sm',
      },
      md: {
        control: 'rounded-md',
        dropdown: 'rounded-md',
      },
      lg: {
        control: 'rounded-lg',
        dropdown: 'rounded-lg',
      },
      xl: {
        control: 'rounded-xl',
        dropdown: 'rounded-xl',
      },
    },
    hasError: {
      true: {
        control:
          'border-red-500 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-300',
      },
    },
    disabled: {
      true: {
        control: 'pointer-events-none cursor-not-allowed bg-gray-50 opacity-60',
      },
    },
    isOpen: {
      true: {
        chevron: 'rotate-180',
      },
    },
    isHovered: {
      true: {
        option: 'bg-gray-100',
      },
    },
    isSelected: {
      true: {
        option: 'bg-blue-50 text-blue-700',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      size: 'xs',
      class: {
        control: 'px-2',
      },
    },
    {
      variant: 'default',
      size: 'sm',
      class: {
        control: 'px-3',
      },
    },
    {
      variant: 'default',
      size: ['md', 'lg', 'xl'],
      class: {
        control: 'px-4',
      },
    },
    {
      variant: 'filled',
      size: 'xs',
      class: {
        control: 'px-2',
      },
    },
    {
      variant: 'filled',
      size: 'sm',
      class: {
        control: 'px-3',
      },
    },
    {
      variant: 'filled',
      size: ['md', 'lg', 'xl'],
      class: {
        control: 'px-4',
      },
    },
    {
      isHovered: true,
      isSelected: true,
      class: {
        option: 'bg-blue-100',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    radius: 'sm',
  },
})
