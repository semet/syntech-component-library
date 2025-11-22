import { tv } from 'tailwind-variants'

export const drawerStyles = tv({
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/50',
    wrapper: 'fixed inset-0 z-50 flex',
    content: 'relative flex h-full flex-col bg-white shadow-xl',
    header:
      'flex shrink-0 items-center justify-between border-b border-gray-200 p-4',
    title: 'text-lg font-semibold text-gray-900',
    close:
      'flex size-8 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none',
    body: 'flex-1 overflow-y-auto p-4',
    footer:
      'flex shrink-0 items-center justify-end gap-2 border-t border-gray-200 p-4',
  },
  variants: {
    position: {
      left: {
        wrapper: 'justify-start',
      },
      right: {
        wrapper: 'justify-end',
      },
      top: {
        wrapper: 'items-start',
        content: 'w-full',
      },
      bottom: {
        wrapper: 'items-end',
        content: 'w-full',
      },
    },
    isAnimating: {
      true: {},
      false: {},
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      '2xl': {},
      '3xl': {},
      '4xl': {},
      '5xl': {},
      full: {},
    },
    overlayBlur: {
      none: {},
      xs: { overlay: 'backdrop-blur-[2px]' },
      sm: { overlay: 'backdrop-blur-sm' },
      md: { overlay: 'backdrop-blur-md' },
      lg: { overlay: 'backdrop-blur-lg' },
    },
    scrollable: {
      true: {
        header: 'sticky top-0 z-10 bg-white',
        body: 'overflow-y-auto',
      },
      false: {
        body: 'overflow-y-auto',
      },
    },
    withCloseButton: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // Animation variants based on position and isAnimating state
    {
      position: 'left',
      isAnimating: true,
      class: {
        content: 'animate-drawer-left-enter',
      },
    },
    {
      position: 'left',
      isAnimating: false,
      class: {
        content: 'animate-drawer-left-exit',
      },
    },
    {
      position: 'right',
      isAnimating: true,
      class: {
        content: 'animate-drawer-right-enter',
      },
    },
    {
      position: 'right',
      isAnimating: false,
      class: {
        content: 'animate-drawer-right-exit',
      },
    },
    {
      position: 'top',
      isAnimating: true,
      class: {
        content: 'animate-drawer-top-enter',
      },
    },
    {
      position: 'top',
      isAnimating: false,
      class: {
        content: 'animate-drawer-top-exit',
      },
    },
    {
      position: 'bottom',
      isAnimating: true,
      class: {
        content: 'animate-drawer-bottom-enter',
      },
    },
    {
      position: 'bottom',
      isAnimating: false,
      class: {
        content: 'animate-drawer-bottom-exit',
      },
    },
    // Left/Right position sizes
    {
      position: ['left', 'right'],
      size: 'xs',
      class: {
        content: 'w-64 max-w-[16rem]',
      },
    },
    {
      position: ['left', 'right'],
      size: 'sm',
      class: {
        content: 'w-80 max-w-[20rem]',
      },
    },
    {
      position: ['left', 'right'],
      size: 'md',
      class: {
        content: 'w-96 max-w-[24rem]',
      },
    },
    {
      position: ['left', 'right'],
      size: 'lg',
      class: {
        content: 'w-md max-w-md',
      },
    },
    {
      position: ['left', 'right'],
      size: 'xl',
      class: {
        content: 'w-lg max-w-lg',
      },
    },
    {
      position: ['left', 'right'],
      size: '2xl',
      class: {
        content: 'w-xl max-w-xl',
      },
    },
    {
      position: ['left', 'right'],
      size: '3xl',
      class: {
        content: 'w-2xl max-w-2xl',
      },
    },
    {
      position: ['left', 'right'],
      size: '4xl',
      class: {
        content: 'w-3xl max-w-3xl',
      },
    },
    {
      position: ['left', 'right'],
      size: '5xl',
      class: {
        content: 'w-4xl max-w-4xl',
      },
    },
    {
      position: ['left', 'right'],
      size: 'full',
      class: {
        content: 'w-full max-w-full',
      },
    },
    // Top/Bottom position sizes
    {
      position: ['top', 'bottom'],
      size: 'xs',
      class: {
        content: 'h-48 max-h-48',
      },
    },
    {
      position: ['top', 'bottom'],
      size: 'sm',
      class: {
        content: 'h-64 max-h-64',
      },
    },
    {
      position: ['top', 'bottom'],
      size: 'md',
      class: {
        content: 'h-80 max-h-80',
      },
    },
    {
      position: ['top', 'bottom'],
      size: 'lg',
      class: {
        content: 'h-96 max-h-96',
      },
    },
    {
      position: ['top', 'bottom'],
      size: 'xl',
      class: {
        content: 'h-112 max-h-112',
      },
    },
    {
      position: ['top', 'bottom'],
      size: '2xl',
      class: {
        content: 'h-128 max-h-128',
      },
    },
    {
      position: ['top', 'bottom'],
      size: '3xl',
      class: {
        content: 'h-144 max-h-144',
      },
    },
    {
      position: ['top', 'bottom'],
      size: '4xl',
      class: {
        content: 'h-168 max-h-168',
      },
    },
    {
      position: ['top', 'bottom'],
      size: '5xl',
      class: {
        content: 'h-192 max-h-192',
      },
    },
    {
      position: ['top', 'bottom'],
      size: 'full',
      class: {
        content: 'h-full max-h-full',
      },
    },
  ],
  defaultVariants: {
    position: 'left',
    size: 'md',
    overlayBlur: 'none',
    scrollable: false,
    withCloseButton: true,
    isAnimating: false,
  },
})
