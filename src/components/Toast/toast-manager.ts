/* eslint-disable no-console */
import type { ToastContextValue, ToastOptions } from './ToastContext'

let globalToastManager: ToastContextValue | null = null

export function setGlobalToastManager(manager: ToastContextValue) {
  globalToastManager = manager
}

export const toast = {
  success(message: string, options?: ToastOptions): string {
    if (!globalToastManager) {
      console.error(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
      return ''
    }
    return globalToastManager.success(message, options)
  },
  error(message: string, options?: ToastOptions): string {
    if (!globalToastManager) {
      console.error(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
      return ''
    }
    return globalToastManager.error(message, options)
  },
  info(message: string, options?: ToastOptions): string {
    if (!globalToastManager) {
      console.error(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
      return ''
    }
    return globalToastManager.info(message, options)
  },
  warning(message: string, options?: ToastOptions): string {
    if (!globalToastManager) {
      console.error(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
      return ''
    }
    return globalToastManager.warning(message, options)
  },
  loading(message: string, options?: ToastOptions): string {
    if (!globalToastManager) {
      console.error(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
      return ''
    }
    return globalToastManager.loading(message, options)
  },
  dismiss(id: string): void {
    if (!globalToastManager) {
      console.error(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
      return
    }
    globalToastManager.dismiss(id)
  },
  dismissAll(): void {
    if (!globalToastManager) {
      console.error(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
      return
    }
    globalToastManager.dismissAll()
  },
}
