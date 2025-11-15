import {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
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
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const [arrowCoords, setArrowCoords] = useState({ top: 0, left: 0 })
  const wrapperReference = useRef<HTMLDivElement>(null)
  const tooltipReference = useRef<HTMLDivElement>(null)
  const timeoutReference = useRef<NodeJS.Timeout | undefined>(undefined)

  const styles = tooltipStyles({ radius, color, multiline })

  const calculatePosition = useCallback(() => {
    if (!wrapperReference.current || !tooltipReference.current) return

    const wrapperRect = wrapperReference.current.getBoundingClientRect()
    const tooltipRect = tooltipReference.current.getBoundingClientRect()

    const arrowSize = withArrow ? 8 : 0
    const totalOffset = offset + arrowSize

    let top = 0
    let left = 0
    let arrowTop = 0
    let arrowLeft = 0

    // Calculate tooltip position
    switch (position) {
      case 'top': {
        top = -tooltipRect.height - totalOffset
        left = (wrapperRect.width - tooltipRect.width) / 2
        arrowTop = tooltipRect.height - 4
        arrowLeft = tooltipRect.width / 2 - 4 + arrowOffset
        break
      }
      case 'top-start': {
        top = -tooltipRect.height - totalOffset
        left = 0
        arrowTop = tooltipRect.height - 4
        arrowLeft = Math.min(16 + arrowOffset, tooltipRect.width - 16)
        break
      }
      case 'top-end': {
        top = -tooltipRect.height - totalOffset
        left = wrapperRect.width - tooltipRect.width
        arrowTop = tooltipRect.height - 4
        arrowLeft = Math.max(tooltipRect.width - 24 + arrowOffset, 8)
        break
      }
      case 'bottom': {
        top = wrapperRect.height + totalOffset
        left = (wrapperRect.width - tooltipRect.width) / 2
        arrowTop = -4
        arrowLeft = tooltipRect.width / 2 - 4 + arrowOffset
        break
      }
      case 'bottom-start': {
        top = wrapperRect.height + totalOffset
        left = 0
        arrowTop = -4
        arrowLeft = Math.min(16 + arrowOffset, tooltipRect.width - 16)
        break
      }
      case 'bottom-end': {
        top = wrapperRect.height + totalOffset
        left = wrapperRect.width - tooltipRect.width
        arrowTop = -4
        arrowLeft = Math.max(tooltipRect.width - 24 + arrowOffset, 8)
        break
      }
      case 'left': {
        top = (wrapperRect.height - tooltipRect.height) / 2
        left = -tooltipRect.width - totalOffset
        arrowTop = tooltipRect.height / 2 - 4 + arrowOffset
        arrowLeft = tooltipRect.width - 4
        break
      }
      case 'left-start': {
        top = 0
        left = -tooltipRect.width - totalOffset
        arrowTop = Math.min(16 + arrowOffset, tooltipRect.height - 16)
        arrowLeft = tooltipRect.width - 4
        break
      }
      case 'left-end': {
        top = wrapperRect.height - tooltipRect.height
        left = -tooltipRect.width - totalOffset
        arrowTop = Math.max(tooltipRect.height - 24 + arrowOffset, 8)
        arrowLeft = tooltipRect.width - 4
        break
      }
      case 'right': {
        top = (wrapperRect.height - tooltipRect.height) / 2
        left = wrapperRect.width + totalOffset
        arrowTop = tooltipRect.height / 2 - 4 + arrowOffset
        arrowLeft = -4
        break
      }
      case 'right-start': {
        top = 0
        left = wrapperRect.width + totalOffset
        arrowTop = Math.min(16 + arrowOffset, tooltipRect.height - 16)
        arrowLeft = -4
        break
      }
      case 'right-end': {
        top = wrapperRect.height - tooltipRect.height
        left = wrapperRect.width + totalOffset
        arrowTop = Math.max(tooltipRect.height - 24 + arrowOffset, 8)
        arrowLeft = -4
        break
      }
    }

    setCoords({ top, left })
    setArrowCoords({ top: arrowTop, left: arrowLeft })
  }, [offset, position, arrowOffset, withArrow])

  useEffect(() => {
    if (isVisible) {
      startTransition(() => {
        calculatePosition()
      })
    }
  }, [calculatePosition, isVisible])

  const showTooltip = () => {
    if (disabled) return

    if (timeoutReference.current) {
      clearTimeout(timeoutReference.current)
    }

    if (openDelay > 0) {
      timeoutReference.current = setTimeout(() => {
        setIsVisible(true)
      }, openDelay)
    } else {
      setIsVisible(true)
    }
  }

  const hideTooltip = () => {
    if (timeoutReference.current) {
      clearTimeout(timeoutReference.current)
    }

    if (closeDelay > 0) {
      timeoutReference.current = setTimeout(() => {
        setIsVisible(false)
      }, closeDelay)
    } else {
      setIsVisible(false)
    }
  }

  const handleMouseEnter = () => {
    if (events.hover) showTooltip()
  }

  const handleMouseLeave = () => {
    if (events.hover) hideTooltip()
  }

  const handleFocus = () => {
    if (events.focus) showTooltip()
  }

  const handleBlur = () => {
    if (events.focus) hideTooltip()
  }

  const handleTouchStart = () => {
    if (events.touch) showTooltip()
  }

  const tooltipStyle: CSSProperties = {
    top: `${coords.top}px`,
    left: `${coords.left}px`,
    opacity: isVisible ? 1 : 0,
    width: width === 'auto' ? 'auto' : `${width}px`,
  }

  const arrowStyle: CSSProperties = {
    top: `${arrowCoords.top}px`,
    left: `${arrowCoords.left}px`,
  }

  return (
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

      {!disabled && (
        <div
          ref={tooltipReference}
          className={twMerge([
            styles.tooltip(),
            className,
            classNames?.tooltip,
          ])}
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
      )}
    </div>
  )
}
