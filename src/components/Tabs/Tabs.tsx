import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import type { PolymorphicAsProp } from '@/types/common'

import { tabsStyles } from './styles'

type TabsStylesProps = VariantProps<typeof tabsStyles>

export interface TabsClassNames {
  root?: string
  list?: string
  tab?: string
  panel?: string
}

// Context for sharing tabs state
interface TabsContextValue {
  value: string | null
  onChange: (value: string) => void
  styles: ReturnType<typeof tabsStyles>
  classNames?: TabsClassNames
  keepMounted?: boolean
}

const TabsContext = createContext<TabsContextValue | null>(null)

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs compound components must be used within Tabs')
  }
  return context
}

export interface TabsProps extends TabsStylesProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  children: ReactNode
  className?: string
  classNames?: TabsClassNames
  keepMounted?: boolean
}

// Polymorphic types for compound components
type TabsPolymorphicProps<E extends ElementType> = PolymorphicAsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof PolymorphicAsProp<E>> & {
    children?: ReactNode
  }

export type TabsSectionProps<E extends ElementType = 'div'> =
  TabsPolymorphicProps<E>

// List Component
function TabsList<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: TabsSectionProps<E>) {
  const { styles, classNames } = useTabsContext()
  const Component = as || 'div'

  const componentProps = {
    role: 'tablist',
    className: twMerge([styles.list(), classNames?.list, className]),
    ...props,
  } as ComponentPropsWithoutRef<E>

  return <Component {...componentProps}>{children}</Component>
}

// Tab Component
export interface TabProps {
  value: string
  children?: ReactNode
  leftSection?: ReactNode
  rightSection?: ReactNode
  disabled?: boolean
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Tab({
  value,
  children,
  leftSection,
  rightSection,
  disabled = false,
  className,
  onClick,
  ...props
}: TabProps) {
  const { value: activeValue, onChange, styles, classNames } = useTabsContext()
  const isActive = activeValue === value

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onChange(value)
      onClick?.(event)
    }
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge([
        styles.tab(),
        isActive && styles.tabActive(),
        classNames?.tab,
        className,
      ])}
      {...props}
    >
      {leftSection && (
        <span className={styles.leftSection()}>{leftSection}</span>
      )}
      {children}
      {rightSection && (
        <span className={styles.rightSection()}>{rightSection}</span>
      )}
      {isActive && (
        <span
          className={styles.tabIndicator()}
          aria-hidden="true"
        />
      )}
    </button>
  )
}

// Panel Component
export interface TabPanelProps {
  value: string
  children?: ReactNode
  className?: string
}

function TabPanel({ value, children, className, ...props }: TabPanelProps) {
  const {
    value: activeValue,
    styles,
    classNames,
    keepMounted,
  } = useTabsContext()
  const isActive = activeValue === value

  if (!isActive && !keepMounted) return null

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={!isActive}
      className={twMerge([styles.panel(), classNames?.panel, className])}
      {...props}
    >
      {children}
    </div>
  )
}

function Tabs({
  value: controlledValue,
  defaultValue,
  onChange,
  children,
  variant,
  color,
  orientation,
  grow,
  position,
  radius,
  className,
  classNames,
  keepMounted = false,
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<string | null>(
    defaultValue ?? null,
  )

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue)
    }
    onChange?.(newValue)
  }

  const styles = tabsStyles({
    variant,
    color,
    orientation,
    grow,
    position,
    radius,
  })

  const contextValue: TabsContextValue = {
    value,
    onChange: handleChange,
    styles,
    classNames,
    keepMounted,
  }

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={twMerge([styles.root(), classNames?.root, className])}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

Tabs.List = TabsList
Tabs.Tab = Tab
Tabs.Panel = TabPanel

export default Tabs
