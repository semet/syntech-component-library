import { describe, it, expect, beforeEach, vi } from 'vitest'

import { toast, setGlobalToastManager } from './toast-manager'
import type { ToastContextValue } from './ToastContext'

describe('Toast Manager', () => {
  let mockToastManager: ToastContextValue
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    mockToastManager = {
      success: vi.fn().mockReturnValue('success-id'),
      error: vi.fn().mockReturnValue('error-id'),
      info: vi.fn().mockReturnValue('info-id'),
      warning: vi.fn().mockReturnValue('warning-id'),
      loading: vi.fn().mockReturnValue('loading-id'),
      dismiss: vi.fn(),
      dismissAll: vi.fn(),
    }

    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setGlobalToastManager(null as any)
  })

  describe('setGlobalToastManager', () => {
    it('should set the global toast manager', () => {
      setGlobalToastManager(mockToastManager)

      const id = toast.success('Test message')
      expect(id).toBe('success-id')
      expect(mockToastManager.success).toHaveBeenCalledWith(
        'Test message',
        undefined,
      )
    })
  })

  describe('toast.success', () => {
    it('should call success method with message', () => {
      setGlobalToastManager(mockToastManager)

      const id = toast.success('Success message')

      expect(id).toBe('success-id')
      expect(mockToastManager.success).toHaveBeenCalledWith(
        'Success message',
        undefined,
      )
    })

    it('should call success method with message and options', () => {
      setGlobalToastManager(mockToastManager)
      const options = { duration: 5000, position: 'top-right' as const }

      const id = toast.success('Success message', options)

      expect(id).toBe('success-id')
      expect(mockToastManager.success).toHaveBeenCalledWith(
        'Success message',
        options,
      )
    })

    it('should log error and return empty string when manager not set', () => {
      const id = toast.success('Test')

      expect(id).toBe('')
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
    })
  })

  describe('toast.error', () => {
    it('should call error method with message', () => {
      setGlobalToastManager(mockToastManager)

      const id = toast.error('Error message')

      expect(id).toBe('error-id')
      expect(mockToastManager.error).toHaveBeenCalledWith(
        'Error message',
        undefined,
      )
    })

    it('should call error method with message and options', () => {
      setGlobalToastManager(mockToastManager)
      const options = { duration: 3000, dismissible: false }

      const id = toast.error('Error message', options)

      expect(id).toBe('error-id')
      expect(mockToastManager.error).toHaveBeenCalledWith(
        'Error message',
        options,
      )
    })

    it('should log error and return empty string when manager not set', () => {
      const id = toast.error('Test')

      expect(id).toBe('')
      expect(consoleErrorSpy).toHaveBeenCalled()
    })
  })

  describe('toast.info', () => {
    it('should call info method with message', () => {
      setGlobalToastManager(mockToastManager)

      const id = toast.info('Info message')

      expect(id).toBe('info-id')
      expect(mockToastManager.info).toHaveBeenCalledWith(
        'Info message',
        undefined,
      )
    })

    it('should call info method with message and options', () => {
      setGlobalToastManager(mockToastManager)
      const options = { size: 'lg' as const, autoClose: false }

      const id = toast.info('Info message', options)

      expect(id).toBe('info-id')
      expect(mockToastManager.info).toHaveBeenCalledWith(
        'Info message',
        options,
      )
    })

    it('should log error and return empty string when manager not set', () => {
      const id = toast.info('Test')

      expect(id).toBe('')
      expect(consoleErrorSpy).toHaveBeenCalled()
    })
  })

  describe('toast.warning', () => {
    it('should call warning method with message', () => {
      setGlobalToastManager(mockToastManager)

      const id = toast.warning('Warning message')

      expect(id).toBe('warning-id')
      expect(mockToastManager.warning).toHaveBeenCalledWith(
        'Warning message',
        undefined,
      )
    })

    it('should call warning method with message and options', () => {
      setGlobalToastManager(mockToastManager)
      const options = { closeDelay: 2000 }

      const id = toast.warning('Warning message', options)

      expect(id).toBe('warning-id')
      expect(mockToastManager.warning).toHaveBeenCalledWith(
        'Warning message',
        options,
      )
    })

    it('should log error and return empty string when manager not set', () => {
      const id = toast.warning('Test')

      expect(id).toBe('')
      expect(consoleErrorSpy).toHaveBeenCalled()
    })
  })

  describe('toast.loading', () => {
    it('should call loading method with message', () => {
      setGlobalToastManager(mockToastManager)

      const id = toast.loading('Loading message')

      expect(id).toBe('loading-id')
      expect(mockToastManager.loading).toHaveBeenCalledWith(
        'Loading message',
        undefined,
      )
    })

    it('should call loading method with message and options', () => {
      setGlobalToastManager(mockToastManager)
      const options = { position: 'bottom-center' as const }

      const id = toast.loading('Loading message', options)

      expect(id).toBe('loading-id')
      expect(mockToastManager.loading).toHaveBeenCalledWith(
        'Loading message',
        options,
      )
    })

    it('should log error and return empty string when manager not set', () => {
      const id = toast.loading('Test')

      expect(id).toBe('')
      expect(consoleErrorSpy).toHaveBeenCalled()
    })
  })

  describe('toast.dismiss', () => {
    it('should call dismiss method with id', () => {
      setGlobalToastManager(mockToastManager)

      toast.dismiss('test-id')

      expect(mockToastManager.dismiss).toHaveBeenCalledWith('test-id')
    })

    it('should log error when manager not set', () => {
      toast.dismiss('test-id')

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
    })
  })

  describe('toast.dismissAll', () => {
    it('should call dismissAll method', () => {
      setGlobalToastManager(mockToastManager)

      toast.dismissAll()

      expect(mockToastManager.dismissAll).toHaveBeenCalled()
    })

    it('should log error when manager not set', () => {
      toast.dismissAll()

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Toast provider not found. Make sure to wrap your app with <ToastProvider>',
      )
    })
  })

  describe('Multiple toast operations', () => {
    it('should handle multiple toast calls in sequence', () => {
      setGlobalToastManager(mockToastManager)

      toast.success('First')
      toast.error('Second')
      toast.info('Third')

      expect(mockToastManager.success).toHaveBeenCalledTimes(1)
      expect(mockToastManager.error).toHaveBeenCalledTimes(1)
      expect(mockToastManager.info).toHaveBeenCalledTimes(1)
    })

    it('should handle loading and dismiss pattern', () => {
      setGlobalToastManager(mockToastManager)

      const id = toast.loading('Processing...')
      toast.dismiss(id)
      toast.success('Done!')

      expect(mockToastManager.loading).toHaveBeenCalledWith(
        'Processing...',
        undefined,
      )
      expect(mockToastManager.dismiss).toHaveBeenCalledWith('loading-id')
      expect(mockToastManager.success).toHaveBeenCalledWith('Done!', undefined)
    })
  })

  describe('Custom classNames', () => {
    it('should pass classNames through options', () => {
      setGlobalToastManager(mockToastManager)
      const classNames = {
        toast: 'custom-toast',
        icon: 'custom-icon',
        content: 'custom-content',
      }

      toast.success('Custom styled', { classNames })

      expect(mockToastManager.success).toHaveBeenCalledWith('Custom styled', {
        classNames,
      })
    })
  })

  describe('All toast options', () => {
    it('should handle all options together', () => {
      setGlobalToastManager(mockToastManager)
      const options = {
        duration: 5000,
        position: 'top-right' as const,
        size: 'lg' as const,
        dismissible: false,
        autoClose: false,
        closeDelay: 3000,
        classNames: {
          toast: 'custom-toast',
          icon: 'custom-icon',
        },
      }

      toast.info('Full options', options)

      expect(mockToastManager.info).toHaveBeenCalledWith(
        'Full options',
        options,
      )
    })
  })
})
