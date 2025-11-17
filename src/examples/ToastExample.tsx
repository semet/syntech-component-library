import { Button } from '@/components'
import { toast, ToastProvider } from '@/components/Toast'

export default function ToastExample() {
  return (
    <ToastProvider>
      <Example />
    </ToastProvider>
  )
}

function Example() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4">
      <div className="mx-auto max-w-xl bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Toast Example</h1>
        <Button
          onClick={() =>
            toast.success('Success Toast Example', {
              position: 'bottom-center',
              dismissible: false,
              closeDelay: 2000,
              classNames: {
                closeButton: 'some class',
              },
            })
          }
        >
          Show Toast
        </Button>
      </div>
    </div>
  )
}
