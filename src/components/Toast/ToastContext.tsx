import { createContext } from 'react'

export type ToastVariant = 'success' | 'error' | 'info' | 'warning' | 'loading'
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
export type ToastSize = 'sm' | 'md' | 'lg'

export interface ToastClassNames {
  container?: string
  toast?: string
  icon?: string
  content?: string
  closeButton?: string
}

export interface ToastOptions {
  duration?: number
  position?: ToastPosition
  size?: ToastSize
  dismissible?: boolean
  autoClose?: boolean
  closeDelay?: number
  classNames?: ToastClassNames
}

export interface Toast {
  id: string
  message: string
  type: ToastVariant
  duration: number
  position: ToastPosition
  size: ToastSize
  dismissible: boolean
  autoClose: boolean
  closeDelay: number
  classNames?: ToastClassNames
}

export interface ToastContextValue {
  success: (message: string, options?: ToastOptions) => string
  error: (message: string, options?: ToastOptions) => string
  info: (message: string, options?: ToastOptions) => string
  warning: (message: string, options?: ToastOptions) => string
  loading: (message: string, options?: ToastOptions) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)
