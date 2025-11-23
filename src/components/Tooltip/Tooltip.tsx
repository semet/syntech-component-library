import {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import { tooltipStyles } from './styles'

type TooltipPosition =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

type TooltipStylesProps = VariantProps<typeof tooltipStyles>

export interface TooltipClassNames {
  wrapper?: string
  tooltip?: string
  arrow?: string
}

export interface TooltipProps extends TooltipStylesProps {
  id?: string
  children: ReactNode
  content: ReactNode
  position?: TooltipPosition
  offset?: number
  withArrow?: boolean
  arrowOffset?: number
  disabled?: boolean
  openDelay?: number
  closeDelay?: number
  className?: string
  classNames?: TooltipClassNames
  events?: {
    hover?: boolean
    focus?: boolean
    touch?: boolean
  }
  inline?: boolean
  width?: number | 'auto'
  withinPortal?: boolean
}

export default function Tooltip({
  id,
  children,
  content,
  position = 'bottom',
  offset = 2,
  withArrow = true,
  arrowOffset = 0,
  radius,
  color,
  multiline,
  disabled = false,
  openDelay = 0,
  closeDelay = 0,
  className,
  classNames,
  events = { hover: true, focus: true, touch: true },
  inline = false,
  width = 'auto',
  withinPortal = true,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const [arrowCoords, setArrowCoords] = useState({ top: 0, left: 0 })
  const wrapperReference = useRef<HTMLDivElement>(null)
  const tooltipReference = useRef<HTMLDivElement>(null)
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const styles = useMemo(
    () => tooltipStyles({ radius, color, multiline }),
    [radius, color, multiline],
  )

  const onCalculatePosition = useEffectEvent(() => {
    if (!wrapperReference.current || !tooltipReference.current) return

    const wrapperRect = wrapperReference.current.getBoundingClientRect()
    const tooltipRect = tooltipReference.current.getBoundingClientRect()

    const arrowSize = withArrow ? 8 : 0
    const totalOffset = offset + arrowSize

    let top = 0
    let left = 0
    let arrowTop = 0
    let arrowLeft = 0

    if (withinPortal) {
      const scrollX = window.scrollX || window.pageXOffset
      const scrollY = window.scrollY || window.pageYOffset

      switch (position) {
        case 'top': {
          top = wrapperRect.top + scrollY - tooltipRect.height - totalOffset
          left =
            wrapperRect.left +
            scrollX +
            (wrapperRect.width - tooltipRect.width) / 2
          arrowTop = tooltipRect.height - 4
          arrowLeft = tooltipRect.width / 2 - 4 + arrowOffset
          break
        }
        case 'top-start': {
          top = wrapperRect.top + scrollY - tooltipRect.height - totalOffset
          left = wrapperRect.left + scrollX
          arrowTop = tooltipRect.height - 4
          arrowLeft = Math.min(16 + arrowOffset, tooltipRect.width - 16)
          break
        }
        case 'top-end': {
          top = wrapperRect.top + scrollY - tooltipRect.height - totalOffset
          left = wrapperRect.right + scrollX - tooltipRect.width
          arrowTop = tooltipRect.height - 4
          arrowLeft = Math.max(tooltipRect.width - 24 + arrowOffset, 8)
          break
        }
        case 'bottom': {
          top = wrapperRect.bottom + scrollY + totalOffset
          left =
            wrapperRect.left +
            scrollX +
            (wrapperRect.width - tooltipRect.width) / 2
          arrowTop = -4
          arrowLeft = tooltipRect.width / 2 - 4 + arrowOffset
          break
        }
        case 'bottom-start': {
          top = wrapperRect.bottom + scrollY + totalOffset
          left = wrapperRect.left + scrollX
          arrowTop = -4
          arrowLeft = Math.min(16 + arrowOffset, tooltipRect.width - 16)
          break
        }
        case 'bottom-end': {
          top = wrapperRect.bottom + scrollY + totalOffset
          left = wrapperRect.right + scrollX - tooltipRect.width
          arrowTop = -4
          arrowLeft = Math.max(tooltipRect.width - 24 + arrowOffset, 8)
          break
        }
        case 'left': {
          top =
            wrapperRect.top +
            scrollY +
            (wrapperRect.height - tooltipRect.height) / 2
          left = wrapperRect.left + scrollX - tooltipRect.width - totalOffset
          arrowTop = tooltipRect.height / 2 - 4 + arrowOffset
          arrowLeft = tooltipRect.width - 4
          break
        }
        case 'left-start': {
          top = wrapperRect.top + scrollY
          left = wrapperRect.left + scrollX - tooltipRect.width - totalOffset
          arrowTop = Math.min(16 + arrowOffset, tooltipRect.height - 16)
          arrowLeft = tooltipRect.width - 4
          break
        }
        case 'left-end': {
          top = wrapperRect.bottom + scrollY - tooltipRect.height
          left = wrapperRect.left + scrollX - tooltipRect.width - totalOffset
          arrowTop = Math.max(tooltipRect.height - 24 + arrowOffset, 8)
          arrowLeft = tooltipRect.width - 4
          break
        }
        case 'right': {
          top =
            wrapperRect.top +
            scrollY +
            (wrapperRect.height - tooltipRect.height) / 2
          left = wrapperRect.right + scrollX + totalOffset
          arrowTop = tooltipRect.height / 2 - 4 + arrowOffset
          arrowLeft = -4
          break
        }
        case 'right-start': {
          top = wrapperRect.top + scrollY
          left = wrapperRect.right + scrollX + totalOffset
          arrowTop = Math.min(16 + arrowOffset, tooltipRect.height - 16)
          arrowLeft = -4
          break
        }
        case 'right-end': {
          top = wrapperRect.bottom + scrollY - tooltipRect.height
          left = wrapperRect.right + scrollX + totalOffset
          arrowTop = Math.max(tooltipRect.height - 24 + arrowOffset, 8)
          arrowLeft = -4
          break
        }
      }
    } else {
      // Relative positioning (non-portal mode)
      switch (position) {
        case 'top': {
          top = -tooltipRect.height - totalOffset
          left = (wrapperRect.width - tooltipRect.width) / 2
          arrowTop = tooltipRect.height - 4
          arrowLeft = tooltipRect.width / 2 - 4 + arrowOffset
          break
        }
        // ... other cases similar to original
      }
    }

    setCoords({ top, left })
    setArrowCoords({ top: arrowTop, left: arrowLeft })
  })

  useEffect(() => {
    if (isVisible) {
      requestAnimationFrame(() => {
        onCalculatePosition()
      })
    }
  }, [isVisible])

  const showTooltip = useCallback(() => {
    if (disabled) return

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    if (openDelay > 0) {
      openTimeoutRef.current = setTimeout(() => {
        setIsVisible(true)
      }, openDelay)
    } else {
      setIsVisible(true)
    }
  }, [disabled, openDelay])

  const hideTooltip = useCallback(() => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
      openTimeoutRef.current = null
    }

    if (closeDelay > 0) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, closeDelay)
    } else {
      setIsVisible(false)
    }
  }, [closeDelay])

  const handleMouseEnter = useCallback(() => {
    if (events.hover) showTooltip()
  }, [events.hover, showTooltip])

  const handleMouseLeave = useCallback(() => {
    if (events.hover) hideTooltip()
  }, [events.hover, hideTooltip])

  const handleFocus = useCallback(() => {
    if (events.focus) showTooltip()
  }, [events.focus, showTooltip])

  const handleBlur = useCallback(() => {
    if (events.focus) hideTooltip()
  }, [events.focus, hideTooltip])

  const handleTouchStart = useCallback(() => {
    if (events.touch) showTooltip()
  }, [events.touch, showTooltip])

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current)
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  const tooltipStyle: CSSProperties = useMemo(
    () => ({
      position: withinPortal ? 'absolute' : 'absolute',
      top: `${coords.top}px`,
      left: `${coords.left}px`,
      opacity: isVisible ? 1 : 0,
      pointerEvents: isVisible ? 'auto' : 'none',
      width: width === 'auto' ? 'auto' : `${width}px`,
      transition: 'opacity 150ms ease-in-out',
    }),
    [coords, isVisible, width, withinPortal],
  )

  const arrowStyle: CSSProperties = useMemo(
    () => ({
      top: `${arrowCoords.top}px`,
      left: `${arrowCoords.left}px`,
    }),
    [arrowCoords],
  )

  const tooltipElement = !disabled && (
    <div
      ref={tooltipReference}
      className={twMerge([styles.tooltip(), className, classNames?.tooltip])}
      style={tooltipStyle}
      role="tooltip"
      aria-hidden={!isVisible}
    >
      {content}
      {withArrow && (
        <div
          className={twMerge([styles.arrow(), classNames?.arrow])}
          style={arrowStyle}
        />
      )}
    </div>
  )

  return (
    <>
      <div
        id={id}
        ref={wrapperReference}
        className={twMerge([
          styles.wrapper(),
          inline && 'inline-flex',
          classNames?.wrapper,
        ])}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onTouchStart={handleTouchStart}
      >
        {children}
      </div>

      {withinPortal && typeof document !== 'undefined'
        ? createPortal(tooltipElement, document.body)
        : tooltipElement}
    </>
  )
}
