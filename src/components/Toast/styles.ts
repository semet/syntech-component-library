import { tv } from 'tailwind-variants'

export const toastStyles = tv({
  slots: {
    container: 'pointer-events-none fixed z-50 flex flex-col',
    toast:
      'pointer-events-auto mb-2 flex items-center gap-3 shadow-lg backdrop-blur-sm transition-all duration-300 ease-out',
    icon: 'shrink-0',
    content: 'flex-1 font-medium',
    closeButton:
      'shrink-0 cursor-pointer opacity-70 transition-opacity hover:opacity-100',
  },
  variants: {
    position: {
      'top-left': {
        container: 'top-4 left-4',
      },
      'top-center': {
        container: 'top-4 left-1/2 -translate-x-1/2',
      },
      'top-right': {
        container: 'top-4 right-4',
      },
      'bottom-left': {
        container: 'bottom-4 left-4',
      },
      'bottom-center': {
        container: 'bottom-4 left-1/2 -translate-x-1/2',
      },
      'bottom-right': {
        container: 'right-4 bottom-4',
      },
    },
    type: {
      success: {
        toast: 'border border-green-200 bg-green-50/90 text-green-900',
        icon: 'text-green-600',
      },
      error: {
        toast: 'border border-red-200 bg-red-50/90 text-red-900',
        icon: 'text-red-600',
      },
      info: {
        toast: 'border border-blue-200 bg-blue-50/90 text-blue-900',
        icon: 'text-blue-600',
      },
      warning: {
        toast: 'border border-yellow-200 bg-yellow-50/90 text-yellow-900',
        icon: 'text-yellow-600',
      },
      loading: {
        toast: 'border border-gray-200 bg-gray-50/90 text-gray-900',
        icon: 'text-gray-600',
      },
    },
    size: {
      sm: {
        toast: 'max-w-[300px] min-w-[200px] rounded-md px-3 py-2 text-sm',
        icon: 'h-4 w-4',
        closeButton: 'h-4 w-4',
      },
      md: {
        toast: 'max-w-[400px] min-w-[250px] rounded-lg px-4 py-3 text-base',
        icon: 'h-5 w-5',
        closeButton: 'h-5 w-5',
      },
      lg: {
        toast: 'max-w-[500px] min-w-[300px] rounded-xl px-5 py-4 text-lg',
        icon: 'h-6 w-6',
        closeButton: 'h-6 w-6',
      },
    },
    enteringFromTop: {
      true: {
        toast: 'animate-toast-enter-top',
      },
      false: {},
    },
    enteringFromBottom: {
      true: {
        toast: 'animate-toast-enter-bottom',
      },
      false: {},
    },
    exitingToTop: {
      true: {
        toast: 'animate-toast-exit-top',
      },
      false: {},
    },
    exitingToBottom: {
      true: {
        toast: 'animate-toast-exit-bottom',
      },
      false: {},
    },
  },
  defaultVariants: {
    position: 'top-center',
    type: 'info',
    size: 'md',
    enteringFromTop: false,
    enteringFromBottom: false,
    exitingToTop: false,
    exitingToBottom: false,
  },
})
