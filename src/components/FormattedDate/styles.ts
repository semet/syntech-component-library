import { tv } from 'tailwind-variants'

export const formattedDateStyles = tv({
  slots: {
    root: 'inline-block',
  },
  variants: {
    variant: {
      default: {
        root: 'text-gray-900',
      },
      bold: {
        root: 'font-semibold text-gray-900',
      },
      muted: {
        root: 'text-gray-600',
      },
      primary: {
        root: 'text-blue-600',
      },
      secondary: {
        root: 'text-purple-600',
      },
      success: {
        root: 'text-green-600',
      },
      warning: {
        root: 'text-yellow-600',
      },
      danger: {
        root: 'text-red-600',
      },
    },
    size: {
      xs: {
        root: 'text-xs',
      },
      sm: {
        root: 'text-sm',
      },
      md: {
        root: 'text-base',
      },
      lg: {
        root: 'text-lg',
      },
      xl: {
        root: 'text-xl',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})
