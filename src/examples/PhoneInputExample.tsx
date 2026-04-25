import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { Button, TextInput } from '@/components'
import PhoneInput from '@/components/PhoneInput/PhoneInput'

const schema = z.object({
  test_phone: z.string().min(1, 'Phone number is required').max(20, 'Too long'),
})

export default function PhoneInputExample() {
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const [phone3, setPhone3] = useState('')

  // State to demonstrate controlled updates from parent
  const [externalPhone, setExternalPhone] = useState('+14155552671')

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            PhoneInput Component
          </h1>
          <p className="text-gray-600">
            A phone input component with country selector and validation
          </p>
        </div>

        {/* Demonstration of Controlled vs Uncontrolled */}
        <div className="space-y-4 rounded-lg bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            🎯 Controlled Component Demo
          </h2>
          <p className="text-sm text-blue-700">
            This PhoneInput is controlled by parent state. Try the buttons below
            to update it externally:
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setExternalPhone('+14155552671')}
              className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Set US Number
            </button>
            <button
              onClick={() => setExternalPhone('+442071234567')}
              className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Set UK Number
            </button>
            <button
              onClick={() => setExternalPhone('+81312345678')}
              className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Set Japan Number
            </button>
            <button
              onClick={() => setExternalPhone('')}
              className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Clear
            </button>
          </div>

          <form onSubmit={onSubmit}>
            <Controller
              name="test_phone"
              control={control}
              render={({ field, fieldState }) => (
                <PhoneInput
                  label="Controlled Phone (Syncs with buttons)"
                  description="This updates when you click buttons above"
                  placeholder="(555) 123-4567"
                  value={field.value}
                  onChange={(value, _) => field.onChange(value)}
                  onBlur={field.onBlur}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Button>Test</Button>
          </form>

          <div className="rounded bg-white p-3">
            <span className="font-medium text-gray-700">Current Value:</span>{' '}
            <span className="font-mono text-sm text-gray-900">
              {externalPhone || '(empty)'}
            </span>
          </div>
        </div>

        {/* Uncontrolled Example */}
        <div className="space-y-4 rounded-lg bg-green-50 p-6">
          <h2 className="text-lg font-semibold text-green-900">
            🎯 Uncontrolled Component Demo
          </h2>
          <p className="text-sm text-green-700">
            This PhoneInput has no value prop - it manages its own state
            internally:
          </p>

          <PhoneInput
            label="Uncontrolled Phone (Internal State)"
            description="This component maintains its own state"
            placeholder="Type freely..."
            defaultCountry="US"
            onChange={(value, isValid) => {
              // eslint-disable-next-line no-console
              console.log('Uncontrolled Phone:', value, 'Valid:', isValid)
            }}
          />
        </div>

        {/* Regular Examples */}
        <div className="space-y-6 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">Standard Examples</h2>

          <PhoneInput
            label="Phone Number"
            description="Enter your phone number with country code"
            placeholder="(555) 123-4567"
            defaultCountry="US"
            withAsterisk
            value={phone1}
            onChange={(value, isValid) => {
              setPhone1(value)
              // eslint-disable-next-line no-console
              console.log('Phone 1:', value, 'Valid:', isValid)
            }}
          />

          <TextInput
            label="Mirror Text Input (Same State)"
            description="This shares the same state as Phone 1"
            placeholder="Type something..."
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
          />

          <PhoneInput
            label="International Phone"
            description="Validation disabled for this field"
            defaultCountry="GB"
            withValidation={false}
            value={phone2}
            onChange={(value) => setPhone2(value)}
            variant="filled"
          />

          <PhoneInput
            label="Contact Number"
            error="This field is required"
            defaultCountry="CA"
            value={phone3}
            onChange={(value) => setPhone3(value)}
            size="md"
          />

          <PhoneInput
            label="Disabled Input"
            defaultCountry="AU"
            disabled
          />
        </div>

        {/* Values Display */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">Current Values</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">External Phone:</span>
              <span className="rounded bg-blue-100 px-2 py-1 font-mono text-blue-800">
                {externalPhone || '(empty)'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Phone 1:</span>
              <span className="rounded bg-gray-100 px-2 py-1 font-mono text-gray-800">
                {phone1 || '(empty)'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Phone 2:</span>
              <span className="rounded bg-gray-100 px-2 py-1 font-mono text-gray-800">
                {phone2 || '(empty)'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Phone 3:</span>
              <span className="rounded bg-gray-100 px-2 py-1 font-mono text-gray-800">
                {phone3 || '(empty)'}
              </span>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="mb-3 text-lg font-semibold">💡 Key Differences</h2>
          <div className="space-y-3 text-sm">
            <div>
              <strong className="text-blue-700">Controlled Component:</strong>
              <p className="mt-1 text-gray-700">
                • Parent component controls the value via{' '}
                <code className="rounded bg-white px-1">value</code> prop
                <br />
                • Value can be updated externally (e.g., from API, buttons,
                other inputs)
                <br />
                • Perfect for forms that need validation or need to sync with
                external state
                <br />• Example: The blue demo above with buttons
              </p>
            </div>
            <div>
              <strong className="text-green-700">
                Uncontrolled Component:
              </strong>
              <p className="mt-1 text-gray-700">
                • Component manages its own internal state
                <br />• No <code className="rounded bg-white px-1">
                  value
                </code>{' '}
                prop passed
                <br />• Uses{' '}
                <code className="rounded bg-white px-1">
                  defaultCountry
                </code>{' '}
                for initial value
                <br />
                • Simpler for basic use cases
                <br />• Example: The green demo above
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
