import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithRef,
  type ElementType,
  type ReactNode,
} from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { CloseIcon } from '@/icons'
import type { PolymorphicAsProp } from '@/types/common'

import { modalStyles } from './styles'

type ModalStylesProps = VariantProps<typeof modalStyles>

export interface ModalClassNames {
  overlay?: string
  wrapper?: string
  content?: string
  header?: string
  title?: string
  close?: string
  body?: string
  footer?: string
}

// Context for sharing modal state and methods
interface ModalContextValue {
  onClose: () => void
  styles: ReturnType<typeof modalStyles>
  classNames?: ModalClassNames
}

const ModalContext = createContext<ModalContextValue | null>(null)

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('Modal compound components must be used within Modal')
  }
  return context
}

export interface ModalProps extends ModalStylesProps {
  opened: boolean
  onClose: () => void
  children: ReactNode
  closeOnEscape?: boolean
  closeOnClickOutside?: boolean
  withOverlay?: boolean
  lockScroll?: boolean
  trapFocus?: boolean
  scrollable?: boolean
  className?: string
  classNames?: ModalClassNames
  overlayProps?: React.HTMLAttributes<HTMLDivElement>
  transitionDuration?: number
  keepMounted?: boolean
  zIndex?: number
}

// Polymorphic types for compound components
type ModalSectionPolymorphicProps<E extends ElementType> =
  PolymorphicAsProp<E> &
    Omit<ComponentPropsWithRef<E>, keyof PolymorphicAsProp<E>> & {
      children?: ReactNode
    }

export type ModalSectionProps<E extends ElementType = 'div'> =
  ModalSectionPolymorphicProps<E>

// Compound Components
function ModalHeader<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: ModalSectionProps<E>) {
  const { styles, classNames } = useModalContext()
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.header(), classNames?.header, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function ModalTitle<E extends ElementType = 'h2'>({
  as,
  children,
  className,
  ...props
}: ModalSectionProps<E>) {
  const { styles, classNames } = useModalContext()
  const Component = as || 'h2'

  const componentProps = {
    id: 'modal-title',
    className: twMerge([styles.title(), classNames?.title, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function ModalCloseButton({ className }: { className?: string }) {
  const { onClose, styles, classNames } = useModalContext()
  return (
    <button
      type="button"
      onClick={onClose}
      className={twMerge([styles.close(), classNames?.close, className])}
      aria-label="Close modal"
    >
      <CloseIcon />
    </button>
  )
}

function ModalBody<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: ModalSectionProps<E>) {
  const { styles, classNames } = useModalContext()
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.body(), classNames?.body, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function ModalFooter<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: ModalSectionProps<E>) {
  const { styles, classNames } = useModalContext()
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.footer(), classNames?.footer, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function Modal({
  opened,
  onClose,
  children,
  size,
  centered,
  fullScreen,
  radius,
  overlayBlur,
  closeOnEscape = true,
  closeOnClickOutside = true,
  withOverlay = true,
  lockScroll = true,
  trapFocus = true,
  scrollable = false,
  className,
  classNames,
  overlayProps,
  transitionDuration = 200,
  keepMounted = false,
  zIndex = 50,
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(opened)

  const styles = modalStyles({
    size,
    centered,
    fullScreen,
    radius,
    overlayBlur,
    scrollable,
  })

  useEffect(() => {
    if (opened) {
      startTransition(() => {
        setShouldRender(true)
      })
      requestAnimationFrame(() => {
        setIsAnimating(true)
      })
    } else {
      startTransition(() => {
        setIsAnimating(false)
      })
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, transitionDuration)
      return () => clearTimeout(timer)
    }
  }, [opened, transitionDuration])

  useEffect(() => {
    if (!opened || !closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [opened, closeOnEscape, onClose])

  useEffect(() => {
    if (!opened || !lockScroll) return

    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
    }
  }, [opened, lockScroll])

  useEffect(() => {
    if (!opened || !trapFocus) return

    previousActiveElement.current = document.activeElement as HTMLElement

    const focusableElements = contentRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    if (focusableElements && focusableElements.length > 0) {
      ;(focusableElements[0] as HTMLElement).focus()
    }

    const handleTab = (e: KeyboardEvent) => {
      if (
        e.key !== 'Tab' ||
        !focusableElements ||
        focusableElements.length === 0
      )
        return

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[
        // eslint-disable-next-line unicorn/prefer-at
        focusableElements.length - 1
      ] as HTMLElement

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)

    return () => {
      document.removeEventListener('keydown', handleTab)
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [opened, trapFocus])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnClickOutside && e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!shouldRender && !keepMounted) return null

  const contextValue: ModalContextValue = {
    onClose,
    styles,
    classNames,
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {/* Overlay */}
      {withOverlay && (
        <div
          className={twMerge([
            styles.overlay(),
            classNames?.overlay,
            isAnimating
              ? 'animate-modal-overlay-enter'
              : 'animate-modal-overlay-exit',
          ])}
          style={{ zIndex }}
          onClick={closeOnClickOutside ? onClose : undefined}
          {...overlayProps}
        />
      )}

      <div
        className={twMerge([
          styles.wrapper(),
          classNames?.wrapper,
          !isAnimating && 'pointer-events-none',
        ])}
        style={{ zIndex: zIndex + 1 }}
        onClick={handleOverlayClick}
        role="presentation"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={twMerge([
            styles.content(),
            className,
            classNames?.content,
            isAnimating
              ? 'animate-modal-content-enter'
              : 'animate-modal-content-exit',
          ])}
        >
          <div
            ref={contentRef}
            role="dialog"
            aria-modal="true"
            className={scrollable ? 'flex h-full min-h-0 flex-col' : undefined}
          >
            {children}
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  )
}

Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.CloseButton = ModalCloseButton
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
