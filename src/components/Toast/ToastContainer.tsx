import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import { toastStyles } from './styles'
import type { Toast, ToastPosition } from './ToastContext'
import { ToastItem } from './ToastItem'

interface ToastContainerProps {
  toasts: Toast[]
  position: ToastPosition
  onDismiss: (id: string) => void
}

export function ToastContainer({
  toasts,
  position,
  onDismiss,
}: ToastContainerProps) {
  const styles = toastStyles({ position })

  const containerClassName = useMemo(() => {
    const firstToastWithClass = toasts.find((t) => t.classNames?.container)
    return firstToastWithClass?.classNames?.container
  }, [toasts])

  if (toasts.length === 0) return null

  return (
    <div className={twMerge([styles.container(), containerClassName])}>
      {toasts.map((toast) => {
        return (
          <ToastItem
            key={toast.id}
            toast={toast}
            onDismiss={onDismiss}
          />
        )
      })}
    </div>
  )
}
