import { useState, type ReactNode } from 'react'

interface CopyRenderProps {
  copied: boolean
  copy: () => Promise<void>
}

interface CopyProps {
  value: string
  timeout?: number
  children: (props: CopyRenderProps) => ReactNode
}

export function Copy({ value, timeout = 2000, children }: CopyProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy:', error)
    }
  }

  return children({ copied, copy })
}
