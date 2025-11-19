import { tv } from 'tailwind-variants'

export const modalStyles = tv({
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/50',
    wrapper: 'fixed inset-0 z-50 flex items-center justify-center p-4',
    content: 'relative w-full rounded-lg bg-white shadow-xl',
    header:
      'flex shrink-0 items-center justify-between border-b border-gray-200 p-4',
    title: 'text-lg font-semibold text-gray-900',
    close:
      'flex size-8 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none',
    body: 'p-4',
    footer:
      'flex shrink-0 items-center justify-end gap-2 border-t border-gray-200 p-4',
  },
  variants: {
    size: {
      xs: { content: 'max-w-xs' },
      sm: { content: 'max-w-sm' },
      md: { content: 'max-w-md' },
      lg: { content: 'max-w-lg' },
      xl: { content: 'max-w-xl' },
      '2xl': { content: 'max-w-2xl' },
      '3xl': { content: 'max-w-3xl' },
      '4xl': { content: 'max-w-4xl' },
      '5xl': { content: 'max-w-5xl' },
      full: { content: 'mx-4 max-w-full' },
    },
    centered: {
      true: { wrapper: 'items-center' },
      false: { wrapper: 'items-start pt-16' },
    },
    fullScreen: {
      true: {
        content: 'h-full max-w-full rounded-none',
        wrapper: 'p-0',
      },
    },
    radius: {
      none: { content: 'rounded-none' },
      xs: { content: 'rounded' },
      sm: { content: 'rounded-md' },
      md: { content: 'rounded-lg' },
      lg: { content: 'rounded-xl' },
      xl: { content: 'rounded-2xl' },
    },
    overlayBlur: {
      none: {},
      sm: { overlay: 'backdrop-blur-sm' },
      md: { overlay: 'backdrop-blur-md' },
      lg: { overlay: 'backdrop-blur-lg' },
    },
    scrollable: {
      true: {
        content: 'flex max-h-[70vh] min-h-0 flex-col overflow-hidden',
        body: 'min-h-0 flex-1 overflow-y-auto',
      },
      false: {},
    },
  },
  defaultVariants: {
    size: 'md',
    centered: false,
    fullScreen: false,
    radius: 'md',
    overlayBlur: 'none',
    scrollable: false,
  },
})
