import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

import { setGlobalToastManager } from './toast-manager'
import { ToastContainer } from './ToastContainer'
import {
  ToastContext,
  type Toast,
  type ToastContextValue,
  type ToastOptions,
  type ToastPosition,
  type ToastVariant,
} from './ToastContext'

export function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const createToast = useCallback(
    (message: string, type: ToastVariant, options?: ToastOptions): string => {
      const id = Math.random().toString(36).slice(2, 11)
      const newToast: Toast = {
        id,
        message,
        type,
        duration: options?.duration ?? 4000,
        position: options?.position ?? 'top-center',
        size: options?.size ?? 'md',
        dismissible: options?.dismissible ?? true,
        autoClose: options?.autoClose ?? true,
        closeDelay: options?.closeDelay ?? 0,
        classNames: options?.classNames,
      }

      setToasts((prev) => {
        return [...prev, newToast]
      })
      return id
    },
    [],
  )

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => {
      return prev.filter((toast) => {
        return toast.id !== id
      })
    })
  }, [])

  const dismissAll = useCallback(() => {
    setToasts([])
  }, [])

  const value: ToastContextValue = useMemo(
    () => ({
      success(message: string, options?: ToastOptions): string {
        return createToast(message, 'success', options)
      },
      error(message: string, options?: ToastOptions): string {
        return createToast(message, 'error', options)
      },
      info(message: string, options?: ToastOptions): string {
        return createToast(message, 'info', options)
      },
      warning(message: string, options?: ToastOptions): string {
        return createToast(message, 'warning', options)
      },
      loading(message: string, options?: ToastOptions): string {
        return createToast(message, 'loading', {
          autoClose: false,
          ...options,
          duration: options?.duration ?? Infinity,
        })
      },
      dismiss,
      dismissAll,
    }),
    [createToast, dismiss, dismissAll],
  )

  useEffect(() => {
    setGlobalToastManager(value)
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setGlobalToastManager(null as any)
    }
  }, [value])

  const toastsByPosition = useMemo(() => {
    return toasts.reduce(
      (acc, toast) => {
        if (!acc[toast.position]) {
          acc[toast.position] = []
        }
        acc[toast.position].push(toast)
        return acc
      },
      {} as Record<ToastPosition, Toast[]>,
    )
  }, [toasts])

  return (
    <ToastContext.Provider value={value}>
      {children}
      {Object.entries(toastsByPosition).map(function ([
        position,
        positionToasts,
      ]) {
        return (
          <ToastContainer
            key={position}
            toasts={positionToasts}
            position={position as ToastPosition}
            onDismiss={dismiss}
          />
        )
      })}
    </ToastContext.Provider>
  )
}
