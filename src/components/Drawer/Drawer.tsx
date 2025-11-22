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
  type CSSProperties,
} from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { CloseIcon } from '@/icons'
import type { PolymorphicAsProp } from '@/types/common'

import { drawerStyles } from './styles'

type DrawerStylesProps = VariantProps<typeof drawerStyles>

export interface DrawerClassNames {
  overlay?: string
  wrapper?: string
  content?: string
  header?: string
  title?: string
  close?: string
  body?: string
  footer?: string
}

// Context for sharing drawer state and methods
interface DrawerContextValue {
  onClose: () => void
  styles: ReturnType<typeof drawerStyles>
  classNames?: DrawerClassNames
}

const DrawerContext = createContext<DrawerContextValue | null>(null)

const useDrawerContext = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('Drawer compound components must be used within Drawer')
  }
  return context
}

export interface DrawerProps extends DrawerStylesProps {
  opened: boolean
  onClose: () => void
  children: ReactNode
  closeOnEscape?: boolean
  closeOnClickOutside?: boolean
  withOverlay?: boolean
  lockScroll?: boolean
  trapFocus?: boolean
  className?: string
  classNames?: DrawerClassNames
  overlayProps?: React.HTMLAttributes<HTMLDivElement>
  transitionDuration?: number
  keepMounted?: boolean
  zIndex?: number
  withCloseButton?: boolean
  /** Custom size - can be a percentage (e.g., "50%") or px value (e.g., "400px") */
  customSize?: string
}

// Polymorphic types for compound components
type DrawerSectionPolymorphicProps<E extends ElementType> =
  PolymorphicAsProp<E> &
    Omit<ComponentPropsWithRef<E>, keyof PolymorphicAsProp<E>> & {
      children?: ReactNode
    }

export type DrawerSectionProps<E extends ElementType = 'div'> =
  DrawerSectionPolymorphicProps<E>

// Compound Components
function DrawerHeader<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: DrawerSectionProps<E>) {
  const { styles, classNames } = useDrawerContext()
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.header(), classNames?.header, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function DrawerTitle<E extends ElementType = 'h2'>({
  as,
  children,
  className,
  ...props
}: DrawerSectionProps<E>) {
  const { styles, classNames } = useDrawerContext()
  const Component = as || 'h2'

  const componentProps = {
    id: 'drawer-title',
    className: twMerge([styles.title(), classNames?.title, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function DrawerCloseButton({ className }: { className?: string }) {
  const { onClose, styles, classNames } = useDrawerContext()
  return (
    <button
      type="button"
      onClick={onClose}
      className={twMerge([styles.close(), classNames?.close, className])}
      aria-label="Close drawer"
    >
      <CloseIcon />
    </button>
  )
}

function DrawerBody<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: DrawerSectionProps<E>) {
  const { styles, classNames } = useDrawerContext()
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.body(), classNames?.body, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function DrawerFooter<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: DrawerSectionProps<E>) {
  const { styles, classNames } = useDrawerContext()
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.footer(), classNames?.footer, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

function Drawer({
  opened,
  onClose,
  children,
  position = 'left',
  size = 'md',
  overlayBlur = 'none',
  scrollable = false,
  closeOnEscape = true,
  closeOnClickOutside = true,
  withOverlay = true,
  lockScroll = true,
  trapFocus = true,
  className,
  classNames,
  overlayProps,
  transitionDuration = 300,
  keepMounted = false,
  zIndex = 50,
  withCloseButton = true,
  customSize,
}: DrawerProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(opened)

  const styles = drawerStyles({
    position,
    size,
    overlayBlur,
    scrollable,
    withCloseButton,
    isAnimating,
  })

  // Custom size style
  const customSizeStyle: CSSProperties = {}
  if (customSize) {
    if (position === 'left' || position === 'right') {
      customSizeStyle.width = customSize
      customSizeStyle.maxWidth = customSize
    } else {
      customSizeStyle.height = customSize
      customSizeStyle.maxHeight = customSize
    }
  }

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

  if (!shouldRender && !keepMounted) return null

  const contextValue: DrawerContextValue = {
    onClose,
    styles,
    classNames,
  }

  return (
    <DrawerContext.Provider value={contextValue}>
      {/* Overlay */}
      {withOverlay && (
        <div
          className={twMerge([
            styles.overlay(),
            classNames?.overlay,
            isAnimating
              ? 'animate-drawer-overlay-enter'
              : 'animate-drawer-overlay-exit',
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
        role="presentation"
        onClick={(e) => {
          // Only close if clicking directly on the wrapper, not on the content
          if (closeOnClickOutside && e.target === e.currentTarget) {
            onClose()
          }
        }}
      >
        <div
          ref={contentRef}
          className={twMerge([
            styles.content(),
            className,
            classNames?.content,
          ])}
          style={customSize ? customSizeStyle : undefined}
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          {children}
        </div>
      </div>
    </DrawerContext.Provider>
  )
}

Drawer.Header = DrawerHeader
Drawer.Title = DrawerTitle
Drawer.CloseButton = DrawerCloseButton
Drawer.Body = DrawerBody
Drawer.Footer = DrawerFooter

export default Drawer
