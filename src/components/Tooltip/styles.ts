import { tv } from 'tailwind-variants'

export const tooltipStyles = tv({
  slots: {
    wrapper: 'relative inline-flex',
    tooltip:
      'pointer-events-none absolute z-50 bg-gray-900 px-3 py-2 text-sm font-medium whitespace-nowrap text-white transition-opacity duration-200',
    arrow: 'absolute size-2 rotate-45 transform bg-gray-900',
  },
  variants: {
    radius: {
      none: { tooltip: 'rounded-none' },
      xs: { tooltip: 'rounded-xs' },
      sm: { tooltip: 'rounded-sm' },
      md: { tooltip: 'rounded-md' },
      lg: { tooltip: 'rounded-lg' },
      xl: { tooltip: 'rounded-xl' },
    },
    color: {
      dark: {
        tooltip: 'bg-gray-900 text-white',
        arrow: 'bg-gray-900',
      },
      light: {
        tooltip: 'border border-gray-200 bg-white text-gray-900 shadow-lg',
        arrow: 'border-t border-l border-gray-200 bg-white',
      },
      primary: {
        tooltip: 'bg-blue-600 text-white',
        arrow: 'bg-blue-600',
      },
      success: {
        tooltip: 'bg-green-600 text-white',
        arrow: 'bg-green-600',
      },
      danger: {
        tooltip: 'bg-red-600 text-white',
        arrow: 'bg-red-600',
      },
      warning: {
        tooltip: 'bg-yellow-500 text-white',
        arrow: 'bg-yellow-500',
      },
    },
    multiline: {
      true: { tooltip: 'max-w-xs whitespace-normal' },
      false: { tooltip: 'whitespace-nowrap' },
    },
  },
  defaultVariants: {
    radius: 'sm',
    color: 'dark',
    multiline: false,
  },
})
