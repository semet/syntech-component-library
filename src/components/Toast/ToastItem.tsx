import { startTransition, useCallback, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  LoadingIcon,
  SuccessIcon,
  WarningIcon,
} from './Icons'
import { toastStyles } from './styles'
import type { Toast, ToastType } from './ToastContext'

interface ToastItemProps {
  toast: Toast
  onDismiss: (id: string) => void
}

const iconMap: Record<ToastType, React.FC> = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: WarningIcon,
  loading: LoadingIcon,
}

export function ToastItem({ toast: toastData, onDismiss }: ToastItemProps) {
  const [isExiting, setIsExiting] = useState(false)
  const [isEntering, setIsEntering] = useState(true)

  const isTopPosition = toastData.position.startsWith('top')

  useEffect(() => {
    startTransition(() => {
      setIsEntering(true)
    })
    const enterTimer = setTimeout(() => {
      setIsEntering(false)
    }, 300)
    return () => {
      clearTimeout(enterTimer)
    }
  }, [])

  const handleDismiss = useCallback(() => {
    setIsExiting(true)
    setTimeout(() => {
      onDismiss(toastData.id)
    }, 300)
  }, [onDismiss, toastData.id])

  useEffect(() => {
    if (!toastData.autoClose) return
    if (toastData.duration === Infinity) return

    const timer = setTimeout(() => {
      handleDismiss()
    }, toastData.duration)

    return () => {
      clearTimeout(timer)
    }
  }, [handleDismiss, toastData.autoClose, toastData.duration, toastData.id])

  useEffect(() => {
    if (toastData.closeDelay === 0) return

    const delayTimer = setTimeout(() => {
      handleDismiss()
    }, toastData.closeDelay)

    return () => {
      clearTimeout(delayTimer)
    }
  }, [handleDismiss, toastData.closeDelay, toastData.id])

  const Icon = iconMap[toastData.type]
  const styles = toastStyles({
    type: toastData.type,
    size: toastData.size,
    enteringFromTop: isEntering && isTopPosition,
    enteringFromBottom: isEntering && !isTopPosition,
    exitingToTop: isExiting && isTopPosition,
    exitingToBottom: isExiting && !isTopPosition,
  })

  return (
    <div className={twMerge([styles.toast(), toastData.classNames?.toast])}>
      <div className={twMerge([styles.icon(), toastData.classNames?.icon])}>
        <Icon />
      </div>
      <div
        className={twMerge([styles.content(), toastData.classNames?.content])}
      >
        {toastData.message}
      </div>
      {toastData.dismissible && (
        <button
          onClick={handleDismiss}
          className={twMerge([
            styles.closeButton(),
            toastData.classNames?.closeButton,
          ])}
          aria-label="Close toast"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
