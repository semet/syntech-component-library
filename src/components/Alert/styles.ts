import { tv } from 'tailwind-variants'

export const alertStyles = tv({
  slots: {
    root: 'relative flex gap-3 p-4',
    wrapper: 'flex min-w-0 flex-1 flex-col gap-1',
    icon: 'flex h-fit shrink-0 items-start pt-0.5',
    title: 'leading-tight font-semibold',
    message: 'text-sm leading-relaxed',
    closeButton:
      'flex h-fit shrink-0 cursor-pointer items-start rounded p-1.5 transition-opacity',
  },
  variants: {
    variant: {
      filled: {
        root: 'text-white',
      },
      light: {
        root: '',
      },
      outline: {
        root: 'border-2 bg-transparent',
      },
      transparent: {
        root: 'bg-transparent',
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
    },
    withIcon: {
      true: {},
      false: {},
    },
    withCloseButton: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    // Filled variants
    {
      variant: 'filled',
      color: 'primary',
      class: {
        root: 'bg-blue-600',
        closeButton: 'hover:bg-blue-500/40',
      },
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        root: 'bg-purple-600',
        closeButton: 'hover:bg-purple-500/40',
      },
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        root: 'bg-cyan-600',
        closeButton: 'hover:bg-cyan-500/40',
      },
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        root: 'bg-green-600',
        closeButton: 'hover:bg-green-500/40',
      },
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        root: 'bg-yellow-500',
        closeButton: 'hover:bg-yellow-400/40',
      },
    },
    {
      variant: 'filled',
      color: 'danger',
      class: {
        root: 'bg-red-600',
        closeButton: 'hover:bg-red-500/40',
      },
    },
    {
      variant: 'filled',
      color: 'dark',
      class: {
        root: 'bg-gray-900',
        closeButton: 'hover:bg-gray-800/40',
      },
    },
    {
      variant: 'filled',
      color: 'gray',
      class: {
        root: 'bg-gray-600',
      },
    },

    // Light variants
    {
      variant: 'light',
      color: 'primary',
      class: {
        root: 'bg-blue-50 text-blue-900',
        icon: 'text-blue-600',
        title: 'text-blue-900',
        closeButton: 'hover:bg-blue-500/10',
      },
    },
    {
      variant: 'light',
      color: 'secondary',
      class: {
        root: 'bg-purple-50 text-purple-900',
        icon: 'text-purple-600',
        title: 'text-purple-900',
        closeButton: 'hover:bg-purple-500/10',
      },
    },
    {
      variant: 'light',
      color: 'info',
      class: {
        root: 'bg-cyan-50 text-cyan-900',
        icon: 'text-cyan-600',
        title: 'text-cyan-900',
        closeButton: 'hover:bg-cyan-500/10',
      },
    },
    {
      variant: 'light',
      color: 'success',
      class: {
        root: 'bg-green-50 text-green-900',
        icon: 'text-green-600',
        title: 'text-green-900',
        closeButton: 'hover:bg-green-500/10',
      },
    },
    {
      variant: 'light',
      color: 'warning',
      class: {
        root: 'bg-yellow-50 text-yellow-900',
        icon: 'text-yellow-600',
        title: 'text-yellow-900',
        closeButton: 'hover:bg-yellow-500/10',
      },
    },
    {
      variant: 'light',
      color: 'danger',
      class: {
        root: 'bg-red-50 text-red-900',
        icon: 'text-red-600',
        title: 'text-red-900',
        closeButton: 'hover:bg-red-500/10',
      },
    },
    {
      variant: 'light',
      color: 'dark',
      class: {
        root: 'bg-gray-100 text-gray-900',
        icon: 'text-gray-800',
        title: 'text-gray-900',
        closeButton: 'hover:bg-gray-800/10',
      },
    },
    {
      variant: 'light',
      color: 'gray',
      class: {
        root: 'bg-gray-50 text-gray-900',
        icon: 'text-gray-600',
        title: 'text-gray-900',
        closeButton: 'hover:bg-gray-500/10',
      },
    },

    // Outline variants
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'border-blue-600 text-blue-900',
        icon: 'text-blue-600',
        title: 'text-blue-900',
        closeButton: 'hover:bg-blue-500/10',
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'border-purple-600 text-purple-900',
        icon: 'text-purple-600',
        title: 'text-purple-900',
        closeButton: 'hover:bg-purple-500/10',
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'border-cyan-600 text-cyan-900',
        icon: 'text-cyan-600',
        title: 'text-cyan-900',
        closeButton: 'hover:bg-cyan-500/10',
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'border-green-600 text-green-900',
        icon: 'text-green-600',
        title: 'text-green-900',
        closeButton: 'hover:bg-green-500/10',
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'border-yellow-600 text-yellow-900',
        icon: 'text-yellow-600',
        title: 'text-yellow-900',
        closeButton: 'hover:bg-yellow-500/10',
      },
    },
    {
      variant: 'outline',
      color: 'danger',
      class: {
        root: 'border-red-600 text-red-900',
        icon: 'text-red-600',
        title: 'text-red-900',
        closeButton: 'hover:bg-red-500/10',
      },
    },
    {
      variant: 'outline',
      color: 'dark',
      class: {
        root: 'border-gray-900 text-gray-900',
        icon: 'text-gray-800',
        title: 'text-gray-900',
        closeButton: 'hover:bg-gray-800/10',
      },
    },
    {
      variant: 'outline',
      color: 'gray',
      class: {
        root: 'border-gray-600 text-gray-900',
        icon: 'text-gray-600',
        title: 'text-gray-900',
        closeButton: 'hover:bg-gray-500/10',
      },
    },

    // Transparent variants
    {
      variant: 'transparent',
      color: 'primary',
      class: {
        root: 'text-blue-900',
        icon: 'text-blue-600',
        title: 'text-blue-900',
        closeButton: 'hover:bg-blue-500/10',
      },
    },
    {
      variant: 'transparent',
      color: 'secondary',
      class: {
        root: 'text-purple-900',
        icon: 'text-purple-600',
        title: 'text-purple-900',
        closeButton: 'hover:bg-purple-500/10',
      },
    },
    {
      variant: 'transparent',
      color: 'info',
      class: {
        root: 'text-cyan-900',
        icon: 'text-cyan-600',
        title: 'text-cyan-900',
        closeButton: 'hover:bg-cyan-500/10',
      },
    },
    {
      variant: 'transparent',
      color: 'success',
      class: {
        root: 'text-green-900',
        icon: 'text-green-600',
        title: 'text-green-900',
        closeButton: 'hover:bg-green-500/10',
      },
    },
    {
      variant: 'transparent',
      color: 'warning',
      class: {
        root: 'text-yellow-900',
        icon: 'text-yellow-600',
        title: 'text-yellow-900',
        closeButton: 'hover:bg-yellow-500/10',
      },
    },
    {
      variant: 'transparent',
      color: 'danger',
      class: {
        root: 'text-red-900',
        icon: 'text-red-600',
        title: 'text-red-900',
        closeButton: 'hover:bg-red-500/10',
      },
    },
    {
      variant: 'transparent',
      color: 'dark',
      class: {
        root: 'text-gray-900',
        icon: 'text-gray-800',
        title: 'text-gray-900',
        closeButton: 'hover:bg-gray-800/10',
      },
    },
    {
      variant: 'transparent',
      color: 'gray',
      class: {
        root: 'text-gray-900',
        icon: 'text-gray-600',
        title: 'text-gray-900',
        closeButton: 'hover:bg-gray-500/10',
      },
    },
  ],

  defaultVariants: {
    variant: 'light',
    color: 'primary',
    radius: 'sm',
    withIcon: false,
    withCloseButton: false,
  },
})
