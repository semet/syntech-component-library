import { tv } from 'tailwind-variants'

export const buttonStyles = tv({
  slots: {
    root: 'relative inline-flex items-center justify-center text-center font-medium transition-all duration-200 focus:outline-none',
    inner: 'flex items-center truncate',
    leftSection: 'inline-flex shrink-0 items-center',
    rightSection: 'inline-flex shrink-0 items-center',
    loader: 'absolute inset-0 flex items-center justify-center',
    loaderIcon: 'animate-spin',
  },
  variants: {
    variant: {
      default: {
        root: '',
      },
      filled: {
        root: 'shadow-sm',
      },
      outline: {
        root: 'border-2 bg-transparent',
      },
      transparent: {
        root: 'bg-transparent',
      },
      light: {
        root: '',
      },
      subtle: {
        root: 'bg-transparent',
      },
      text: {
        root: 'bg-transparent',
      },
      gradient: {
        root: 'shadow-md',
      },
    },
    color: {
      primary: {},
      secondary: {},
      info: {},
      success: {},
      warning: {},
      danger: {},
      dark: {},
      gray: {},
    },
    size: {
      xs: {
        root: 'h-7 px-3 text-xs',
        loaderIcon: 'h-3.5 w-3.5',
      },
      sm: {
        root: 'h-8 px-4 text-sm',
        loaderIcon: 'h-4 w-4',
      },
      md: {
        root: 'h-10 px-5 text-sm',
        loaderIcon: 'h-4 w-4',
      },
      lg: {
        root: 'h-12 px-6 text-base',
        loaderIcon: 'h-5 w-5',
      },
      xl: {
        root: 'h-14 px-8 text-lg',
        loaderIcon: 'h-6 w-6',
      },
    },
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
      full: {
        root: 'rounded-full',
      },
    },
    fullWidth: {
      true: {
        root: 'w-full',
      },
      false: {
        root: 'w-auto',
      },
    },
    disabled: {
      true: {
        root: 'pointer-events-none cursor-not-allowed opacity-50 active:scale-100',
      },
      false: {
        root: 'cursor-pointer active:scale-[0.98]',
      },
    },
    loading: {
      true: {
        root: 'cursor-wait',
        inner: 'invisible',
      },
      false: {},
    },
    compact: {
      true: {},
      false: {},
    },
    withRing: {
      true: {
        root: 'focus:ring-1 focus:ring-offset-[1.5px]',
      },
      false: {},
    },
    hasGap: {
      true: {
        inner: 'gap-2',
      },
      false: {},
    },
  },

  compoundVariants: [
    // Filled variants with improved colors
    {
      variant: 'filled',
      color: 'primary',
      class: {
        root: 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      },
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        root: 'border-purple-600 bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
      },
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        root: 'border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
      },
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        root: 'border-green-600 bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      },
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        root: 'border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
      },
    },
    {
      variant: 'filled',
      color: 'danger',
      class: {
        root: 'border-red-600 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      },
    },
    {
      variant: 'filled',
      color: 'dark',
      class: {
        root: 'border-gray-900 bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700',
      },
    },
    {
      variant: 'filled',
      color: 'gray',
      class: {
        root: 'border-gray-600 bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      },
    },

    // Outline variants
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'border-orange-1000 focus:ring-orange-1000 text-yellow-600 hover:bg-yellow-50',
      },
    },
    {
      variant: 'outline',
      color: 'danger',
      class: {
        root: 'border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
      },
    },
    {
      variant: 'outline',
      color: 'dark',
      class: {
        root: 'border-gray-900 text-gray-900 hover:bg-gray-50 focus:ring-gray-700',
      },
    },
    {
      variant: 'outline',
      color: 'gray',
      class: {
        root: 'border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
      },
    },

    // Light variants
    {
      variant: 'light',
      color: 'primary',
      class: {
        root: 'bg-blue-50 text-blue-700 hover:bg-blue-100 focus:ring-blue-500',
      },
    },
    {
      variant: 'light',
      color: 'secondary',
      class: {
        root: 'bg-purple-50 text-purple-700 hover:bg-purple-100 focus:ring-purple-500',
      },
    },
    {
      variant: 'light',
      color: 'info',
      class: {
        root: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 focus:ring-cyan-500',
      },
    },
    {
      variant: 'light',
      color: 'success',
      class: {
        root: 'bg-green-50 text-green-700 hover:bg-green-100 focus:ring-green-500',
      },
    },
    {
      variant: 'light',
      color: 'warning',
      class: {
        root: 'focus:ring-orange-1000 bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
      },
    },
    {
      variant: 'light',
      color: 'danger',
      class: {
        root: 'bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-500',
      },
    },
    {
      variant: 'light',
      color: 'dark',
      class: {
        root: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-700',
      },
    },
    {
      variant: 'light',
      color: 'gray',
      class: {
        root: 'bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
      },
    },

    // Subtle variants
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: 'text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: 'text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'text-green-600 hover:bg-green-50 focus:ring-green-500',
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'focus:ring-orange-1000 text-yellow-600 hover:bg-yellow-50',
      },
    },
    {
      variant: 'subtle',
      color: 'danger',
      class: {
        root: 'text-red-600 hover:bg-red-50 focus:ring-red-500',
      },
    },
    {
      variant: 'subtle',
      color: 'dark',
      class: {
        root: 'text-gray-900 hover:bg-gray-100 focus:ring-gray-700',
      },
    },
    {
      variant: 'subtle',
      color: 'gray',
      class: {
        root: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
      },
    },

    // Text variants
    {
      variant: 'text',
      color: 'primary',
      class: {
        root: 'text-blue-600 hover:text-blue-700 active:scale-100',
      },
    },
    {
      variant: 'text',
      color: 'secondary',
      class: {
        root: 'text-purple-600 hover:text-purple-700 active:scale-100',
      },
    },
    {
      variant: 'text',
      color: 'info',
      class: {
        root: 'text-cyan-600 hover:text-cyan-700 active:scale-100',
      },
    },
    {
      variant: 'text',
      color: 'success',
      class: {
        root: 'text-green-600 hover:text-green-700 active:scale-100',
      },
    },
    {
      variant: 'text',
      color: 'warning',
      class: {
        root: 'text-yellow-600 hover:text-yellow-700 active:scale-100',
      },
    },
    {
      variant: 'text',
      color: 'danger',
      class: {
        root: 'text-red-600 hover:text-red-700 active:scale-100',
      },
    },
    {
      variant: 'text',
      color: 'dark',
      class: {
        root: 'text-gray-900 hover:text-gray-800 active:scale-100',
      },
    },
    {
      variant: 'text',
      color: 'gray',
      class: {
        root: 'text-gray-600 hover:text-gray-700 active:scale-100',
      },
    },

    // Text variant should never have a focus ring
    {
      variant: 'text',
      withRing: true,
      class: {
        root: 'focus:ring-0 focus:ring-offset-0',
      },
    },

    // Gradient variants
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        root: 'bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus:ring-blue-500',
      },
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        root: 'bg-linear-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500',
      },
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        root: 'bg-linear-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 focus:ring-green-500',
      },
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        root: 'from-orange-1000 focus:ring-orange-1000 bg-linear-to-r to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600',
      },
    },
    {
      variant: 'gradient',
      color: 'danger',
      class: {
        root: 'bg-linear-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 focus:ring-red-500',
      },
    },

    // Compact size adjustments
    {
      compact: true,
      size: 'xs',
      class: {
        root: 'h-6 px-2',
      },
    },
    {
      compact: true,
      size: 'sm',
      class: {
        root: 'h-7 px-3',
      },
    },
    {
      compact: true,
      size: 'md',
      class: {
        root: 'h-8 px-4',
      },
    },
    {
      compact: true,
      size: 'lg',
      class: {
        root: 'h-10 px-5',
      },
    },
    {
      compact: true,
      size: 'xl',
      class: {
        root: 'h-12 px-6',
      },
    },
  ],

  defaultVariants: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
    radius: 'sm',
    fullWidth: false,
    disabled: false,
    loading: false,
    compact: false,
    withRing: true,
    hasGap: true,
  },
})
