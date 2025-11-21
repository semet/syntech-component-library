import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  type ComponentPropsWithRef,
  type ElementType,
  type MouseEvent,
  type CSSProperties,
} from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'
import { useOnClickOutside } from 'usehooks-ts'

import { Button } from '@/components'
import type { PolymorphicAsProp } from '@/types/common'

import { menuStyles } from './styles'

type MenuStylesProps = VariantProps<typeof menuStyles>

export interface MenuClassNames {
  root?: string
  target?: string
  dropdown?: string
  label?: string
  item?: string
  divider?: string
  arrow?: string
}

interface MenuContextValue {
  opened: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  trigger: 'click' | 'hover'
  closeOnItemClick: boolean
  closeDelay: number
  openDelay: number
  styles: ReturnType<typeof menuStyles>
  classNames?: MenuClassNames
  targetRef: React.RefObject<HTMLButtonElement | null>
  dropdownRef: React.RefObject<HTMLElement | null>
  isHoveringTarget: boolean
  isHoveringDropdown: boolean
  isHoveringTargetRef: React.RefObject<boolean>
  isHoveringDropdownRef: React.RefObject<boolean>
  setIsHoveringTarget: (hovering: boolean) => void
  setIsHoveringDropdown: (hovering: boolean) => void
  withArrow: boolean
  arrowOffset: number
  position: MenuStylesProps['position']
}

const MenuContext = createContext<MenuContextValue | null>(null)

const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('Menu compound components must be used within Menu')
  }
  return context
}

export interface MenuProps extends MenuStylesProps {
  opened?: boolean
  defaultOpened?: boolean
  onChange?: (opened: boolean) => void
  trigger?: 'click' | 'hover'
  openDelay?: number
  closeDelay?: number
  closeOnItemClick?: boolean
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
  withArrow?: boolean
  arrowOffset?: number
  children: ReactNode
  className?: string
  classNames?: MenuClassNames
}

// Polymorphic types for compound components
type MenuPolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithRef<E>, keyof PolymorphicAsProp<E>> & {
    children?: ReactNode
  }

export type MenuSectionProps<E extends ElementType = 'div'> =
  MenuPolymorphicProps<E>

function MenuButton({
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ComponentPropsWithRef<typeof Button>) {
  const {
    onToggle,
    onOpen,
    onClose,
    trigger,
    openDelay,
    closeDelay,
    classNames,
    targetRef,
    setIsHoveringTarget,
    isHoveringDropdownRef,
  } = useMenuContext()

  const openTimerRef = useRef<NodeJS.Timeout | null>(null)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimers = () => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current)
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
  }

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (trigger === 'click') {
        onToggle()
      }
      onClick?.(event)
    },
    [onToggle, trigger, onClick],
  )

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (trigger === 'hover') {
        clearTimers()
        setIsHoveringTarget(true)
        openTimerRef.current = setTimeout(() => {
          onOpen()
        }, openDelay)
      }
      onMouseEnter?.(event)
    },
    [onOpen, trigger, openDelay, onMouseEnter, setIsHoveringTarget],
  )

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (trigger === 'hover') {
        setIsHoveringTarget(false)
        clearTimers()
        closeTimerRef.current = setTimeout(() => {
          if (!isHoveringDropdownRef.current) {
            onClose()
          }
        }, closeDelay)
      }
      onMouseLeave?.(event)
    },
    [
      onClose,
      trigger,
      closeDelay,
      onMouseLeave,
      setIsHoveringTarget,
      isHoveringDropdownRef,
    ],
  )

  useEffect(() => {
    return () => clearTimers()
  }, [])

  return (
    <Button
      ref={targetRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge([classNames?.target, className])}
      {...props}
    >
      {children}
    </Button>
  )
}

function MenuDropdown<E extends ElementType = 'div'>({
  as,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: MenuSectionProps<E>) {
  const {
    opened,
    onClose,
    trigger,
    closeDelay,
    styles,
    classNames,
    dropdownRef,
    setIsHoveringDropdown,
    isHoveringTargetRef,
    withArrow,
    arrowOffset,
    position,
    targetRef,
  } = useMenuContext()

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [arrowCoords, setArrowCoords] = useState({ top: 0, left: 0 })

  const calculateArrowPosition = useCallback(() => {
    if (!targetRef.current || !dropdownRef.current || !withArrow) return

    const dropdownRect = dropdownRef.current.getBoundingClientRect()

    let arrowTop = 0
    let arrowLeft = 0

    switch (position) {
      case 'bottom-start':
      case 'bottom-center':
      case 'bottom-end': {
        arrowTop = -4
        if (position === 'bottom-start') {
          arrowLeft = Math.min(16 + arrowOffset, dropdownRect.width - 16)
        } else if (position === 'bottom-center') {
          arrowLeft = dropdownRect.width / 2 - 4 + arrowOffset
        } else {
          arrowLeft = Math.max(dropdownRect.width - 24 + arrowOffset, 8)
        }
        break
      }
      case 'top-start':
      case 'top-center':
      case 'top-end': {
        arrowTop = dropdownRect.height - 4
        if (position === 'top-start') {
          arrowLeft = Math.min(16 + arrowOffset, dropdownRect.width - 16)
        } else if (position === 'top-center') {
          arrowLeft = dropdownRect.width / 2 - 4 + arrowOffset
        } else {
          arrowLeft = Math.max(dropdownRect.width - 24 + arrowOffset, 8)
        }
        break
      }
      case 'left-start':
      case 'left-center':
      case 'left-end': {
        arrowLeft = dropdownRect.width - 4
        if (position === 'left-start') {
          arrowTop = Math.min(16 + arrowOffset, dropdownRect.height - 16)
        } else if (position === 'left-center') {
          arrowTop = dropdownRect.height / 2 - 4 + arrowOffset
        } else {
          arrowTop = Math.max(dropdownRect.height - 24 + arrowOffset, 8)
        }
        break
      }
      case 'right-start':
      case 'right-center':
      case 'right-end': {
        arrowLeft = -4
        if (position === 'right-start') {
          arrowTop = Math.min(16 + arrowOffset, dropdownRect.height - 16)
        } else if (position === 'right-center') {
          arrowTop = dropdownRect.height / 2 - 4 + arrowOffset
        } else {
          arrowTop = Math.max(dropdownRect.height - 24 + arrowOffset, 8)
        }
        break
      }
    }

    setArrowCoords({ top: arrowTop, left: arrowLeft })
  }, [targetRef, dropdownRef, withArrow, position, arrowOffset])

  useEffect(() => {
    if (opened && withArrow) {
      const timer = setTimeout(() => {
        calculateArrowPosition()
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [opened, withArrow, calculateArrowPosition])

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (trigger === 'hover') {
        setIsHoveringDropdown(true)
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
      }
      onMouseEnter?.(event)
    },
    [trigger, onMouseEnter, setIsHoveringDropdown],
  )

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (trigger === 'hover') {
        setIsHoveringDropdown(false)
        closeTimerRef.current = setTimeout(() => {
          if (!isHoveringTargetRef.current) {
            onClose()
          }
        }, closeDelay)
      }
      onMouseLeave?.(event)
    },
    [
      onClose,
      trigger,
      closeDelay,
      onMouseLeave,
      setIsHoveringDropdown,
      isHoveringTargetRef,
    ],
  )

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  if (!opened) return null

  const Component = as || 'div'

  const arrowStyle: CSSProperties = {
    top: `${arrowCoords.top}px`,
    left: `${arrowCoords.left}px`,
  }

  const componentProps = {
    ref: dropdownRef,
    role: 'menu',
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: twMerge([styles.dropdown(), classNames?.dropdown, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return (
    <Component {...componentProps}>
      {children}
      {withArrow && (
        <div
          className={twMerge([styles.arrow(), classNames?.arrow])}
          style={arrowStyle}
        />
      )}
    </Component>
  )
}

function MenuLabel<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: MenuSectionProps<E>) {
  const { styles, classNames } = useMenuContext()
  const Component = as || 'div'

  const componentProps = {
    className: twMerge([styles.label(), classNames?.label, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps}>{children}</Component>
}

export interface MenuItemProps {
  leftSection?: ReactNode
  rightSection?: ReactNode
  disabled?: boolean
  color?: 'default' | 'danger'
  children?: ReactNode
  className?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

function MenuItem<E extends ElementType = 'button'>({
  as,
  leftSection,
  rightSection,
  disabled = false,
  color = 'default',
  children,
  className,
  onClick,
  ...props
}: MenuItemProps & MenuPolymorphicProps<E>) {
  const { onClose, closeOnItemClick, styles, classNames } = useMenuContext()
  const Component = as || 'button'

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!disabled) {
        onClick?.(event)
        if (closeOnItemClick) {
          onClose()
        }
      }
    },
    [disabled, onClick, onClose, closeOnItemClick],
  )

  const componentProps = {
    type: Component === 'button' ? 'button' : undefined,
    role: 'menuitem',
    disabled,
    onClick: handleClick,
    className: twMerge([
      styles.item(),
      color === 'danger' && styles.itemDanger(),
      classNames?.item,
      className,
    ]),
    ...props,
  } as ComponentPropsWithRef<E>

  return (
    <Component {...componentProps}>
      {leftSection && (
        <span className={styles.leftSection()}>{leftSection}</span>
      )}
      {children}
      {rightSection && (
        <span className={styles.rightSection()}>{rightSection}</span>
      )}
    </Component>
  )
}

function MenuDivider<E extends ElementType = 'hr'>({
  as,
  className,
  ...props
}: MenuSectionProps<E>) {
  const { styles, classNames } = useMenuContext()
  const Component = as || 'hr'

  const componentProps = {
    role: 'separator',
    className: twMerge([styles.divider(), classNames?.divider, className]),
    ...props,
  } as ComponentPropsWithRef<E>

  return <Component {...componentProps} />
}

function Menu({
  opened: controlledOpened,
  defaultOpened = false,
  onChange,
  trigger = 'click',
  openDelay = 0,
  closeDelay = 100,
  closeOnItemClick = true,
  closeOnClickOutside = true,
  closeOnEscape = true,
  withArrow = false,
  arrowOffset = 0,
  children,
  position,
  width,
  shadow,
  radius,
  className,
  classNames,
  ...props
}: MenuProps & Omit<ComponentPropsWithRef<'div'>, keyof MenuProps>) {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(defaultOpened)
  const [isHoveringTarget, setIsHoveringTarget] = useState(false)
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false)

  const isHoveringTargetRef = useRef(false)
  const isHoveringDropdownRef = useRef(false)

  const targetRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLElement>(null!)

  const isControlled = controlledOpened !== undefined
  const opened = isControlled ? controlledOpened : uncontrolledOpened

  const handleChange = useCallback(
    (newOpened: boolean) => {
      if (!isControlled) {
        setUncontrolledOpened(newOpened)
      }
      onChange?.(newOpened)
    },
    [isControlled, onChange],
  )

  const onOpen = useCallback(() => {
    handleChange(true)
  }, [handleChange])

  const onClose = useCallback(() => {
    handleChange(false)
  }, [handleChange])

  const onToggle = useCallback(() => {
    handleChange(!opened)
  }, [handleChange, opened])

  // Wrapped setters that update both state and ref
  const setIsHoveringTargetWrapper = useCallback((hovering: boolean) => {
    isHoveringTargetRef.current = hovering
    setIsHoveringTarget(hovering)
  }, [])

  const setIsHoveringDropdownWrapper = useCallback((hovering: boolean) => {
    isHoveringDropdownRef.current = hovering
    setIsHoveringDropdown(hovering)
  }, [])

  useOnClickOutside(dropdownRef, () => {
    if (closeOnClickOutside && opened) {
      onClose()
    }
  })

  useEffect(() => {
    if (!closeOnEscape || !opened) return

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeOnEscape, opened, onClose])

  const styles = menuStyles({
    position,
    width,
    shadow,
    radius,
  })

  const contextValue: MenuContextValue = {
    opened,
    onOpen,
    onClose,
    onToggle,
    trigger,
    closeOnItemClick,
    closeDelay,
    openDelay,
    styles,
    classNames,
    targetRef,
    dropdownRef,
    isHoveringTarget,
    isHoveringDropdown,
    isHoveringTargetRef,
    isHoveringDropdownRef,
    setIsHoveringTarget: setIsHoveringTargetWrapper,
    setIsHoveringDropdown: setIsHoveringDropdownWrapper,
    withArrow,
    arrowOffset,
    position,
  }

  return (
    <MenuContext.Provider value={contextValue}>
      <div
        className={twMerge([styles.root(), classNames?.root, className])}
        {...props}
      >
        {children}
      </div>
    </MenuContext.Provider>
  )
}

Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Label = MenuLabel
Menu.Item = MenuItem
Menu.Divider = MenuDivider

export default Menu
