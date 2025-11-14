import { tv } from 'tailwind-variants'

export const buttonStyles = tv({
  base: 'relative inline-flex items-center justify-center gap-2 text-center font-medium transition-all duration-200 focus:outline-none active:scale-[0.98]',
  variants: {
    variant: {
      default: '',
      filled: 'shadow-sm',
      outline: 'border-2 bg-transparent',
      transparent: 'bg-transparent',
      light: '',
      subtle: 'bg-transparent',
      text: 'bg-transparent',
      gradient: 'shadow-md',
    },
    color: {
      primary: '',
      secondary: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
      dark: '',
      gray: '',
    },
    size: {
      xs: 'h-7 px-3 text-xs',
      sm: 'h-8 px-4 text-sm',
      md: 'h-10 px-5 text-sm',
      lg: 'h-12 px-6 text-base',
      xl: 'h-14 px-8 text-lg',
    },
    radius: {
      none: 'rounded-none',
      xs: 'rounded',
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
      full: 'rounded-full',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
    loading: {
      true: 'cursor-wait',
      false: '',
    },
    compact: {
      true: '',
      false: '',
    },
    withRing: {
      true: 'focus:ring-1 focus:ring-offset-[1.5px]',
      false: '',
    },
  },

  compoundVariants: [
    // Filled variants with improved colors
    {
      variant: 'filled',
      color: 'primary',
      class:
        'border-blue-600 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    },
    {
      variant: 'filled',
      color: 'secondary',
      class:
        'border-purple-600 bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    },
    {
      variant: 'filled',
      color: 'info',
      class:
        'border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
    },
    {
      variant: 'filled',
      color: 'success',
      class:
        'border-green-600 bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    },
    {
      variant: 'filled',
      color: 'warning',
      class:
        'border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
    },
    {
      variant: 'filled',
      color: 'danger',
      class:
        'border-red-600 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    },
    {
      variant: 'filled',
      color: 'dark',
      class:
        'border-gray-900 bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700',
    },
    {
      variant: 'filled',
      color: 'gray',
      class:
        'border-gray-600 bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    },

    // Outline variants
    {
      variant: 'outline',
      color: 'primary',
      class:
        'border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class:
        'border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
    },
    {
      variant: 'outline',
      color: 'info',
      class:
        'border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
    },
    {
      variant: 'outline',
      color: 'success',
      class:
        'border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
    },
    {
      variant: 'outline',
      color: 'warning',
      class:
        'border-orange-1000 focus:ring-orange-1000 text-yellow-600 hover:bg-yellow-50',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
    },
    {
      variant: 'outline',
      color: 'dark',
      class:
        'border-gray-900 text-gray-900 hover:bg-gray-50 focus:ring-gray-700',
    },
    {
      variant: 'outline',
      color: 'gray',
      class:
        'border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
    },

    // Light variants
    {
      variant: 'light',
      color: 'primary',
      class: 'bg-blue-50 text-blue-700 hover:bg-blue-100 focus:ring-blue-500',
    },
    {
      variant: 'light',
      color: 'secondary',
      class:
        'bg-purple-50 text-purple-700 hover:bg-purple-100 focus:ring-purple-500',
    },
    {
      variant: 'light',
      color: 'info',
      class: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 focus:ring-cyan-500',
    },
    {
      variant: 'light',
      color: 'success',
      class:
        'bg-green-50 text-green-700 hover:bg-green-100 focus:ring-green-500',
    },
    {
      variant: 'light',
      color: 'warning',
      class:
        'focus:ring-orange-1000 bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
    },
    {
      variant: 'light',
      color: 'danger',
      class: 'bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-500',
    },
    {
      variant: 'light',
      color: 'dark',
      class: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-700',
    },
    {
      variant: 'light',
      color: 'gray',
      class: 'bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    },

    // Subtle variants (like Mantine)
    {
      variant: 'subtle',
      color: 'primary',
      class: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: 'text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
    },
    {
      variant: 'subtle',
      color: 'info',
      class: 'text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
    },
    {
      variant: 'subtle',
      color: 'success',
      class: 'text-green-600 hover:bg-green-50 focus:ring-green-500',
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: 'focus:ring-orange-1000 text-yellow-600 hover:bg-yellow-50',
    },
    {
      variant: 'subtle',
      color: 'danger',
      class: 'text-red-600 hover:bg-red-50 focus:ring-red-500',
    },
    {
      variant: 'subtle',
      color: 'dark',
      class: 'text-gray-900 hover:bg-gray-100 focus:ring-gray-700',
    },
    {
      variant: 'subtle',
      color: 'gray',
      class: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
    },

    // Text variants (minimal, text-only style - no ring, no scale animation)
    {
      variant: 'text',
      color: 'primary',
      class: 'text-blue-600 hover:text-blue-700 active:scale-100',
    },
    {
      variant: 'text',
      color: 'secondary',
      class: 'text-purple-600 hover:text-purple-700 active:scale-100',
    },
    {
      variant: 'text',
      color: 'info',
      class: 'text-cyan-600 hover:text-cyan-700 active:scale-100',
    },
    {
      variant: 'text',
      color: 'success',
      class: 'text-green-600 hover:text-green-700 active:scale-100',
    },
    {
      variant: 'text',
      color: 'warning',
      class: 'text-yellow-600 hover:text-yellow-700 active:scale-100',
    },
    {
      variant: 'text',
      color: 'danger',
      class: 'text-red-600 hover:text-red-700 active:scale-100',
    },
    {
      variant: 'text',
      color: 'dark',
      class: 'text-gray-900 hover:text-gray-800 active:scale-100',
    },
    {
      variant: 'text',
      color: 'gray',
      class: 'text-gray-600 hover:text-gray-700 active:scale-100',
    },

    // Text variant should never have a focus ring
    {
      variant: 'text',
      withRing: true,
      class: 'focus:ring-0 focus:ring-offset-0',
    },

    // Gradient variants
    {
      variant: 'gradient',
      color: 'primary',
      class:
        'bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus:ring-blue-500',
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class:
        'bg-linear-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500',
    },
    {
      variant: 'gradient',
      color: 'success',
      class:
        'bg-linear-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 focus:ring-green-500',
    },
    {
      variant: 'gradient',
      color: 'warning',
      class:
        'from-orange-1000 focus:ring-orange-1000 bg-linear-to-r to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600',
    },
    {
      variant: 'gradient',
      color: 'danger',
      class:
        'bg-linear-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 focus:ring-red-500',
    },

    // Compact size adjustments
    {
      compact: true,
      size: 'xs',
      class: 'h-6 px-2',
    },
    {
      compact: true,
      size: 'sm',
      class: 'h-7 px-3',
    },
    {
      compact: true,
      size: 'md',
      class: 'h-8 px-4',
    },
    {
      compact: true,
      size: 'lg',
      class: 'h-10 px-5',
    },
    {
      compact: true,
      size: 'xl',
      class: 'h-12 px-6',
    },

    // Disabled state - prevent hover effects
    {
      disabled: true,
      class:
        'pointer-events-none cursor-not-allowed opacity-50 active:scale-100',
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
  },
})
