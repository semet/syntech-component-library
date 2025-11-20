import { tv } from 'tailwind-variants'

export const tabsStyles = tv({
  slots: {
    root: 'w-full',
    list: 'flex border-b border-gray-200',
    tab: [
      'relative flex items-center justify-center gap-2 px-4 py-2.5',
      'cursor-pointer whitespace-nowrap select-none',
      'text-sm font-medium text-gray-600',
      'transition-colors duration-200',
      'hover:bg-gray-50 hover:text-gray-900',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-600',
    ],
    tabActive: 'text-blue-600 hover:bg-blue-50 hover:text-blue-700',
    tabIndicator: [
      'absolute right-0 bottom-0 left-0 h-0.5 bg-blue-600',
      'transition-all duration-200',
    ],
    leftSection: 'flex items-center justify-center',
    rightSection: 'flex items-center justify-center',
    panel: 'py-4',
  },
  variants: {
    variant: {
      default: {},
      outline: {
        list: 'gap-2 border-b-0',
        tab: [
          'rounded-t-lg border border-gray-200',
          'hover:bg-gray-50',
          '-mb-px',
        ],
        tabActive: ['border-b-white bg-white', 'hover:bg-white'],
        tabIndicator: 'hidden',
      },
      filled: {
        list: 'gap-2 border-b-0',
        tab: 'rounded-full hover:bg-gray-100',
        tabActive: 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white',
        tabIndicator: 'hidden',
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
    orientation: {
      horizontal: {
        list: 'flex-row',
      },
      vertical: {
        root: 'flex gap-4',
        list: 'min-w-[120px] flex-col border-r border-b-0 border-gray-200',
        tab: 'justify-start',
        tabIndicator: 'top-0 right-0 bottom-0 left-auto h-auto w-0.5',
      },
    },
    grow: {
      true: {
        tab: 'flex-1',
      },
    },
    position: {
      left: {
        list: 'justify-start',
      },
      center: {
        list: 'justify-center',
      },
      right: {
        list: 'justify-end',
      },
      apart: {
        list: 'justify-between',
      },
    },
    radius: {
      none: {},
      xs: { tab: 'rounded' },
      sm: { tab: 'rounded-md' },
      md: { tab: 'rounded-lg' },
      lg: { tab: 'rounded-xl' },
      xl: { tab: 'rounded-2xl' },
    },
  },
  compoundVariants: [
    // Default variant - primary
    {
      variant: 'default',
      color: 'primary',
      class: {
        tabActive:
          'text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-blue-500',
        tabIndicator: 'bg-blue-600',
      },
    },
    // Outline variant - primary
    {
      variant: 'outline',
      color: 'primary',
      class: {
        tabActive:
          'border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-blue-500',
      },
    },
    // Filled variant - primary
    {
      variant: 'filled',
      color: 'primary',
      class: {
        tabActive:
          'bg-blue-600 text-white hover:bg-blue-700 hover:text-white focus-visible:ring-blue-500',
      },
    },

    // Default variant - secondary
    {
      variant: 'default',
      color: 'secondary',
      class: {
        tabActive:
          'text-purple-600 hover:bg-purple-50 hover:text-purple-700 focus-visible:ring-purple-500',
        tabIndicator: 'bg-purple-600',
      },
    },
    // Outline variant - secondary
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        tabActive:
          'border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 focus-visible:ring-purple-500',
      },
    },
    // Filled variant - secondary
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        tabActive:
          'bg-purple-600 text-white hover:bg-purple-700 hover:text-white focus-visible:ring-purple-500',
      },
    },

    // Default variant - info
    {
      variant: 'default',
      color: 'info',
      class: {
        tabActive:
          'text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 focus-visible:ring-cyan-500',
        tabIndicator: 'bg-cyan-600',
      },
    },
    // Outline variant - info
    {
      variant: 'outline',
      color: 'info',
      class: {
        tabActive:
          'border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 focus-visible:ring-cyan-500',
      },
    },
    // Filled variant - info
    {
      variant: 'filled',
      color: 'info',
      class: {
        tabActive:
          'bg-cyan-600 text-white hover:bg-cyan-700 hover:text-white focus-visible:ring-cyan-500',
      },
    },

    // Default variant - success
    {
      variant: 'default',
      color: 'success',
      class: {
        tabActive:
          'text-green-600 hover:bg-green-50 hover:text-green-700 focus-visible:ring-green-500',
        tabIndicator: 'bg-green-600',
      },
    },
    // Outline variant - success
    {
      variant: 'outline',
      color: 'success',
      class: {
        tabActive:
          'border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 focus-visible:ring-green-500',
      },
    },
    // Filled variant - success
    {
      variant: 'filled',
      color: 'success',
      class: {
        tabActive:
          'bg-green-600 text-white hover:bg-green-700 hover:text-white focus-visible:ring-green-500',
      },
    },

    // Default variant - warning
    {
      variant: 'default',
      color: 'warning',
      class: {
        tabActive:
          'text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 focus-visible:ring-yellow-500',
        tabIndicator: 'bg-yellow-600',
      },
    },
    // Outline variant - warning
    {
      variant: 'outline',
      color: 'warning',
      class: {
        tabActive:
          'border-yellow-600 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 focus-visible:ring-yellow-500',
      },
    },
    // Filled variant - warning
    {
      variant: 'filled',
      color: 'warning',
      class: {
        tabActive:
          'bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white focus-visible:ring-yellow-500',
      },
    },

    // Default variant - danger
    {
      variant: 'default',
      color: 'danger',
      class: {
        tabActive:
          'text-red-600 hover:bg-red-50 hover:text-red-700 focus-visible:ring-red-500',
        tabIndicator: 'bg-red-600',
      },
    },
    // Outline variant - danger
    {
      variant: 'outline',
      color: 'danger',
      class: {
        tabActive:
          'border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 focus-visible:ring-red-500',
      },
    },
    // Filled variant - danger
    {
      variant: 'filled',
      color: 'danger',
      class: {
        tabActive:
          'bg-red-600 text-white hover:bg-red-700 hover:text-white focus-visible:ring-red-500',
      },
    },

    // Default variant - dark
    {
      variant: 'default',
      color: 'dark',
      class: {
        tabActive:
          'text-gray-900 hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-gray-700',
        tabIndicator: 'bg-gray-900',
      },
    },
    // Outline variant - dark
    {
      variant: 'outline',
      color: 'dark',
      class: {
        tabActive:
          'border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-gray-700',
      },
    },
    // Filled variant - dark
    {
      variant: 'filled',
      color: 'dark',
      class: {
        tabActive:
          'bg-gray-900 text-white hover:bg-gray-800 hover:text-white focus-visible:ring-gray-700',
      },
    },

    // Default variant - gray
    {
      variant: 'default',
      color: 'gray',
      class: {
        tabActive:
          'text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus-visible:ring-gray-500',
        tabIndicator: 'bg-gray-600',
      },
    },
    // Outline variant - gray
    {
      variant: 'outline',
      color: 'gray',
      class: {
        tabActive:
          'border-gray-600 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus-visible:ring-gray-500',
      },
    },
    // Filled variant - gray
    {
      variant: 'filled',
      color: 'gray',
      class: {
        tabActive:
          'bg-gray-600 text-white hover:bg-gray-700 hover:text-white focus-visible:ring-gray-500',
      },
    },

    // Outline + Vertical orientation adjustments
    {
      variant: 'outline',
      orientation: 'vertical',
      class: {
        tab: '-mr-px rounded-l-lg rounded-r-none border-r-0',
        tabActive: 'border-r-white',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    color: 'primary',
    orientation: 'horizontal',
    grow: false,
    position: 'left',
    radius: 'none',
  },
})
