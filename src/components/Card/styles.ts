import { tv } from 'tailwind-variants'

export const cardStyles = tv({
  slots: {
    root: 'border border-gray-200 bg-white',
    header: 'border-b border-gray-200 px-4 py-3',
    body: 'px-4 py-2',
    footer: 'border-t border-gray-200 px-4 py-3',
  },
  variants: {
    radius: {
      none: {
        root: 'rounded-none',
      },
      xs: {
        root: 'rounded-xs',
      },
      sm: {
        root: 'rounded-sm',
      },
      md: {
        root: 'rounded-md',
      },
      lg: {
        root: 'rounded-lg',
      },
      xl: {
        root: 'rounded-xl',
      },
      '2xl': {
        root: 'rounded-2xl',
      },
    },
    withBorder: {
      true: {
        root: 'border border-gray-200',
      },
      false: {
        root: 'border-0',
      },
    },
    shadow: {
      none: {
        root: 'shadow-none',
      },
      sm: {
        root: 'shadow-sm',
      },
      md: {
        root: 'shadow-md',
      },
      lg: {
        root: 'shadow-lg',
      },
      xl: {
        root: 'shadow-xl',
      },
    },
    scrollable: {
      true: {
        body: 'overflow-y-auto',
      },
      false: {},
    },
  },
  defaultVariants: {
    radius: 'md',
    withBorder: true,
    shadow: 'sm',
    scrollable: false,
  },
})
