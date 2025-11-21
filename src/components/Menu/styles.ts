import { tv } from 'tailwind-variants'

export const menuStyles = tv({
  slots: {
    root: 'relative inline-block',
    target: 'h-fit w-fit',
    dropdown: [
      'absolute z-50 mt-2',
      'min-w-[200px]',
      'border border-gray-200 bg-white',
      'rounded-lg shadow-lg',
      // Remove 'overflow-hidden' to allow arrow to show
      'animate-in fade-in-0 zoom-in-95 duration-200',
    ],
    label: [
      'px-3 py-2',
      'text-xs font-semibold tracking-wide text-gray-500 uppercase',
      'select-none',
    ],
    item: [
      'relative flex w-full items-center gap-2',
      'px-3 py-2',
      'text-sm text-gray-700',
      'cursor-pointer select-none',
      'transition-colors duration-150',
      'hover:bg-gray-100',
      'focus:outline-none focus-visible:bg-gray-100',
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent',
    ],
    itemDanger: [
      'text-red-600',
      'hover:bg-red-50 hover:text-red-700',
      'focus-visible:bg-red-50',
    ],
    leftSection: 'flex items-center justify-center',
    rightSection: 'ml-auto flex items-center justify-center',
    divider: 'my-1 border-t border-gray-200',
    arrow: 'absolute size-2 rotate-45 transform border-gray-200 bg-white',
  },
  variants: {
    position: {
      'bottom-start': {
        dropdown: 'top-full left-0',
        arrow: 'border-t border-l',
      },
      'bottom-end': {
        dropdown: 'top-full right-0',
        arrow: 'border-t border-l',
      },
      'bottom-center': {
        dropdown: 'top-full left-1/2 -translate-x-1/2',
        arrow: 'border-t border-l',
      },
      'top-start': {
        dropdown: 'bottom-full left-0 mt-0 mb-2.5',
        arrow: 'border-r border-b',
      },
      'top-end': {
        dropdown: 'right-0 bottom-full mt-0 mb-2.5',
        arrow: 'border-r border-b',
      },
      'top-center': {
        dropdown: 'bottom-full left-1/2 mt-0 mb-2 -translate-x-1/2',
        arrow: 'border-r border-b',
      },
      'left-start': {
        dropdown: 'top-0 right-full mt-0 mr-2',
        arrow: 'border-t border-r',
      },
      'left-end': {
        dropdown: 'right-full bottom-0 mt-0 mr-2',
        arrow: 'border-t border-r',
      },
      'left-center': {
        dropdown: 'top-1/2 right-full mt-0 mr-2 -translate-y-1/2',
        arrow: 'border-t border-r',
      },
      'right-start': {
        dropdown: 'top-0 left-full mt-0 ml-2',
        arrow: 'border-b border-l',
      },
      'right-end': {
        dropdown: 'bottom-0 left-full mt-0 ml-2',
        arrow: 'border-b border-l',
      },
      'right-center': {
        dropdown: 'top-1/2 left-full mt-0 ml-2 -translate-y-1/2',
        arrow: 'border-b border-l',
      },
    },
    width: {
      xs: {
        dropdown: 'min-w-40',
      },
      sm: {
        dropdown: 'min-w-[200px]',
      },
      md: {
        dropdown: 'min-w-60',
      },
      lg: {
        dropdown: 'min-w-[280px]',
      },
      xl: {
        dropdown: 'min-w-[320px]',
      },
      target: {
        dropdown: 'w-full',
      },
    },
    shadow: {
      xs: {
        dropdown: 'shadow',
      },
      sm: {
        dropdown: 'shadow-md',
      },
      md: {
        dropdown: 'shadow-lg',
      },
      lg: {
        dropdown: 'shadow-xl',
      },
      xl: {
        dropdown: 'shadow-2xl',
      },
    },
    radius: {
      none: {
        dropdown: 'rounded-none',
      },
      xs: {
        dropdown: 'rounded',
      },
      sm: {
        dropdown: 'rounded-md',
      },
      md: {
        dropdown: 'rounded-lg',
      },
      lg: {
        dropdown: 'rounded-xl',
      },
      xl: {
        dropdown: 'rounded-2xl',
      },
    },
  },
  defaultVariants: {
    position: 'bottom-start',
    width: 'sm',
    shadow: 'md',
    radius: 'md',
  },
})
