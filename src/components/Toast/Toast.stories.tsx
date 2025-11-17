import type { Meta, StoryObj } from '@storybook/react-vite'

import { toast } from './toast-manager'
import { ToastProvider } from './ToastProvider'

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex min-h-[400px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Toast Types
export const Success: Story = {
  render: () => (
    <button
      onClick={() => toast.success('Successfully saved!')}
      className="rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600"
    >
      Show Success Toast
    </button>
  ),
}

export const Error: Story = {
  render: () => (
    <button
      onClick={() => toast.error('Something went wrong!')}
      className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-colors hover:bg-red-600"
    >
      Show Error Toast
    </button>
  ),
}

export const Info: Story = {
  render: () => (
    <button
      onClick={() => toast.info('Here is some information')}
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Show Info Toast
    </button>
  ),
}

export const Warning: Story = {
  render: () => (
    <button
      onClick={() => toast.warning('Please be careful!')}
      className="rounded-lg bg-yellow-500 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-600"
    >
      Show Warning Toast
    </button>
  ),
}

export const Loading: Story = {
  render: () => (
    <button
      onClick={() => {
        const id = toast.loading('Processing...')
        setTimeout(() => {
          toast.dismiss(id)
          toast.success('Completed!')
        }, 2000)
      }}
      className="rounded-lg bg-gray-500 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-600"
    >
      Show Loading Toast
    </button>
  ),
}

// Positions
export const TopLeft: Story = {
  render: () => (
    <button
      onClick={() => toast.info('Toast at top left', { position: 'top-left' })}
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Top Left
    </button>
  ),
}

export const TopCenter: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info('Toast at top center', { position: 'top-center' })
      }
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Top Center
    </button>
  ),
}

export const TopRight: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info('Toast at top right', { position: 'top-right' })
      }
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Top Right
    </button>
  ),
}

export const BottomLeft: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info('Toast at bottom left', { position: 'bottom-left' })
      }
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Bottom Left
    </button>
  ),
}

export const BottomCenter: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info('Toast at bottom center', { position: 'bottom-center' })
      }
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Bottom Center
    </button>
  ),
}

export const BottomRight: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info('Toast at bottom right', { position: 'bottom-right' })
      }
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Bottom Right
    </button>
  ),
}

// Sizes
export const SmallSize: Story = {
  render: () => (
    <button
      onClick={() => toast.info('Small toast notification', { size: 'sm' })}
      className="rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
    >
      Small Toast
    </button>
  ),
}

export const MediumSize: Story = {
  render: () => (
    <button
      onClick={() => toast.info('Medium toast notification', { size: 'md' })}
      className="rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
    >
      Medium Toast
    </button>
  ),
}

export const LargeSize: Story = {
  render: () => (
    <button
      onClick={() => toast.info('Large toast notification', { size: 'lg' })}
      className="rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
    >
      Large Toast
    </button>
  ),
}

// Duration Options
export const ShortDuration: Story = {
  render: () => (
    <button
      onClick={() => toast.info('This disappears quickly', { duration: 1000 })}
      className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
    >
      1 Second Duration
    </button>
  ),
}

export const LongDuration: Story = {
  render: () => (
    <button
      onClick={() => toast.info('This stays for a while', { duration: 8000 })}
      className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
    >
      8 Seconds Duration
    </button>
  ),
}

export const NoAutoClose: Story = {
  render: () => (
    <button
      onClick={() => toast.info('Click X to dismiss', { autoClose: false })}
      className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
    >
      Manual Dismiss Only
    </button>
  ),
}

export const WithCloseDelay: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.warning('Closes after 3 seconds', {
          autoClose: false,
          closeDelay: 3000,
        })
      }
      className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
    >
      Close Delay (3s)
    </button>
  ),
}

// Dismissible Options
export const NonDismissible: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.success('No close button', {
          dismissible: false,
          duration: 3000,
        })
      }
      className="rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600"
    >
      Non-dismissible Toast
    </button>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info('Click X to close', {
          dismissible: true,
          autoClose: false,
        })
      }
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Dismissible Toast
    </button>
  ),
}

// Custom ClassNames
export const CustomStyledToast: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.success('Custom styled toast!', {
          classNames: {
            toast: 'border-4 border-pink-500 bg-pink-50/95 shadow-2xl',
            icon: 'text-pink-600',
            content: 'text-pink-900 font-bold',
            closeButton: 'text-pink-600 hover:scale-125',
          },
        })
      }
      className="rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-600"
    >
      Custom Styled
    </button>
  ),
}

export const GradientBorder: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info('Gradient border toast', {
          classNames: {
            toast:
              'border-2 border-transparent bg-linear-to-r from-blue-500 to-purple-500 bg-clip-padding',
            content: 'text-white font-semibold',
            icon: 'text-white',
            closeButton: 'text-white',
          },
        })
      }
      className="rounded-lg bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
    >
      Gradient Border
    </button>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.success('Dark mode toast', {
          classNames: {
            toast: 'bg-gray-900/95 border-gray-700',
            icon: 'text-green-400',
            content: 'text-white',
            closeButton: 'text-gray-400 hover:text-white',
          },
        })
      }
      className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
    >
      Dark Mode Toast
    </button>
  ),
}

// All Types Showcase
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => toast.success('Success notification')}
        className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
      >
        Success
      </button>
      <button
        onClick={() => toast.error('Error notification')}
        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
      >
        Error
      </button>
      <button
        onClick={() => toast.info('Info notification')}
        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
      >
        Info
      </button>
      <button
        onClick={() => toast.warning('Warning notification')}
        className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-600"
      >
        Warning
      </button>
      <button
        onClick={() => {
          const id = toast.loading('Loading...')
          setTimeout(() => {
            toast.dismiss(id)
            toast.success('Done!')
          }, 2000)
        }}
        className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600"
      >
        Loading
      </button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Positions Showcase
export const AllPositions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      <button
        onClick={() => toast.info('Top Left', { position: 'top-left' })}
        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
      >
        Top Left
      </button>
      <button
        onClick={() => toast.info('Top Center', { position: 'top-center' })}
        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
      >
        Top Center
      </button>
      <button
        onClick={() => toast.info('Top Right', { position: 'top-right' })}
        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
      >
        Top Right
      </button>
      <button
        onClick={() => toast.info('Bottom Left', { position: 'bottom-left' })}
        className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
      >
        Bottom Left
      </button>
      <button
        onClick={() =>
          toast.info('Bottom Center', { position: 'bottom-center' })
        }
        className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
      >
        Bottom Center
      </button>
      <button
        onClick={() => toast.info('Bottom Right', { position: 'bottom-right' })}
        className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
      >
        Bottom Right
      </button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => toast.info('Small size', { size: 'sm' })}
        className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
      >
        Small
      </button>
      <button
        onClick={() => toast.info('Medium size', { size: 'md' })}
        className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
      >
        Medium
      </button>
      <button
        onClick={() => toast.info('Large size', { size: 'lg' })}
        className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
      >
        Large
      </button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const FormSubmission: Story = {
  render: () => (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Create Account</h3>
      <div className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={() => {
            const id = toast.loading('Creating account...')
            setTimeout(() => {
              toast.dismiss(id)
              toast.success('Account created successfully!')
            }, 2000)
          }}
          className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FileUpload: Story = {
  render: () => (
    <button
      onClick={() => {
        const id = toast.loading('Uploading file...', {
          position: 'bottom-right',
        })
        setTimeout(() => {
          toast.dismiss(id)
          toast.success('File uploaded successfully!', {
            position: 'bottom-right',
            duration: 3000,
          })
        }, 2500)
      }}
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Upload File
    </button>
  ),
}

export const DeleteConfirmation: Story = {
  render: () => (
    <button
      onClick={() => {
        toast.warning('Item will be deleted in 3 seconds', {
          position: 'top-center',
          closeDelay: 3000,
          autoClose: false,
        })
        setTimeout(() => {
          toast.success('Item deleted', { position: 'top-center' })
        }, 3000)
      }}
      className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-colors hover:bg-red-600"
    >
      Delete Item
    </button>
  ),
}

export const MultipleToasts: Story = {
  render: () => (
    <button
      onClick={() => {
        toast.success('First notification', { position: 'top-right' })
        setTimeout(
          () => toast.info('Second notification', { position: 'top-right' }),
          500,
        )
        setTimeout(
          () => toast.warning('Third notification', { position: 'top-right' }),
          1000,
        )
      }}
      className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
    >
      Show Multiple Toasts
    </button>
  ),
}

export const DismissAll: Story = {
  render: () => (
    <div className="flex gap-3">
      <button
        onClick={() => {
          toast.success('Toast 1', { autoClose: false })
          toast.info('Toast 2', { autoClose: false })
          toast.warning('Toast 3', { autoClose: false })
        }}
        className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
      >
        Show Multiple
      </button>
      <button
        onClick={() => toast.dismissAll()}
        className="rounded-lg bg-gray-700 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
      >
        Dismiss All
      </button>
    </div>
  ),
}

// Advanced Examples
export const ProgressiveLoading: Story = {
  render: () => (
    <button
      onClick={() => {
        const id = toast.loading('Initializing...')
        setTimeout(() => {
          toast.dismiss(id)
          const id2 = toast.loading('Processing data...')
          setTimeout(() => {
            toast.dismiss(id2)
            const id3 = toast.loading('Finalizing...')
            setTimeout(() => {
              toast.dismiss(id3)
              toast.success('All done!')
            }, 1000)
          }, 1500)
        }, 1500)
      }}
      className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
    >
      Progressive Loading
    </button>
  ),
}

export const NotificationCenter: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Notification Actions</h3>
      <button
        onClick={() =>
          toast.success('Message sent successfully', {
            position: 'top-right',
          })
        }
        className="w-full rounded-lg bg-green-500 px-4 py-2 text-left font-medium text-white transition-colors hover:bg-green-600"
      >
        Send Message
      </button>
      <button
        onClick={() =>
          toast.error('Failed to save changes', { position: 'top-right' })
        }
        className="w-full rounded-lg bg-red-500 px-4 py-2 text-left font-medium text-white transition-colors hover:bg-red-600"
      >
        Trigger Error
      </button>
      <button
        onClick={() =>
          toast.info('New update available', { position: 'top-right' })
        }
        className="w-full rounded-lg bg-blue-500 px-4 py-2 text-left font-medium text-white transition-colors hover:bg-blue-600"
      >
        Show Update
      </button>
      <button
        onClick={() =>
          toast.warning('Storage almost full', { position: 'top-right' })
        }
        className="w-full rounded-lg bg-yellow-500 px-4 py-2 text-left font-medium text-white transition-colors hover:bg-yellow-600"
      >
        Storage Warning
      </button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Edge Cases
export const LongMessage: Story = {
  render: () => (
    <button
      onClick={() =>
        toast.info(
          'This is a very long toast message that demonstrates how the toast component handles text that exceeds the normal width. The toast will wrap the text appropriately.',
          { size: 'lg' },
        )
      }
      className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
    >
      Long Message
    </button>
  ),
}

export const RapidFire: Story = {
  render: () => (
    <button
      onClick={() => {
        for (let i = 1; i <= 5; i++) {
          setTimeout(() => {
            toast.info(`Toast #${i}`, { position: 'bottom-center' })
          }, i * 200)
        }
      }}
      className="rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600"
    >
      Rapid Fire Toasts
    </button>
  ),
}

export const AllPositionsSimultaneous: Story = {
  render: () => (
    <button
      onClick={() => {
        toast.success('Top Left!', { position: 'top-left' })
        toast.info('Top Center!', { position: 'top-center' })
        toast.warning('Top Right!', { position: 'top-right' })
        toast.error('Bottom Left!', { position: 'bottom-left' })
        toast.loading('Bottom Center!', { position: 'bottom-center' })
        toast.success('Bottom Right!', { position: 'bottom-right' })
      }}
      className="rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
    >
      All Positions at Once
    </button>
  ),
}
