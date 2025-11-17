import { Button } from '@/components'
import { toast, ToastProvider, type ToastPosition } from '@/components/Toast'
import type { ToastVariant } from '@/components/Toast/ToastContext'

export default function ToastExample() {
  return (
    <ToastProvider>
      <Example />
    </ToastProvider>
  )
}

function Example() {
  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ] as ToastPosition[]

  const variants = ['success', 'error', 'info', 'warning'] as ToastVariant[]

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4">
      <div className="mx-auto flex max-w-xl flex-col gap-6 bg-white p-8 shadow-md">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">All Variants</h1>
          <div className="flex flex-wrap gap-4">
            {variants.map((variant) => (
              <Button
                key={variant}
                onClick={() =>
                  toast[variant](`This is a ${variant} toast!`, {
                    duration: 3000,
                  })
                }
              >
                Show {variant} Toast
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Loading Toast</h1>
          <Button
            onClick={() => {
              const id = toast.loading('Loading...')
              setTimeout(() => {
                toast.dismiss(id)
                toast.success('Loaded successfully!')
              }, 2000)
            }}
          >
            Show Loading Toast
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">All Position</h1>
          <div className="grid grid-cols-2 gap-4">
            {positions.map((position) => (
              <Button
                key={position}
                onClick={() =>
                  toast.success(`This is a ${position} toast!`, {
                    position,
                    duration: 3000,
                  })
                }
              >
                Show {position} Toast
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Other Properties</h1>
          <Button
            onClick={() =>
              toast.success('Autoclose after some 3s delay', {
                duration: 3000,
              })
            }
          >
            Auto Close Delay
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Disabled Autoclose</h1>
          <Button
            onClick={() =>
              toast.success('Disabled autoclose toast', {
                autoClose: false,
              })
            }
          >
            Disabled Autoclose
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Custom Styles</h1>
          <Button
            onClick={() => {
              toast.success('Custom styled toast!', {
                classNames: {
                  toast: 'border-4 border-pink-500 bg-pink-50/95',
                  icon: 'text-pink-600',
                  content: 'text-pink-900 font-bold',
                  closeButton: 'text-pink-600',
                },
              })
            }}
          >
            Custom Styled Toast
          </Button>
        </div>
      </div>
    </div>
  )
}
