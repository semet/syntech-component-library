import { useState } from 'react'

import { TextInput } from '@/components'
import PhoneInput from '@/components/PhoneInput/PhoneInput'

export default function PhoneInputExample() {
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const [phone3, setPhone3] = useState('')
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

        <div className="space-y-6 rounded-lg bg-white p-6 shadow">
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
              console.log('Phone:', value, 'Valid:', isValid)
            }}
            // error="Some error"
            // variant="filled"
          />
          <TextInput
            label="Regular Text Input"
            placeholder="Type something..."
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
            error="Some error"
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

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">Values</h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Phone 1:</span>{' '}
              <span className="text-gray-600">{phone1 || 'Empty'}</span>
            </div>
            <div>
              <span className="font-medium">Phone 2:</span>{' '}
              <span className="text-gray-600">{phone2 || 'Empty'}</span>
            </div>
            <div>
              <span className="font-medium">Phone 3:</span>{' '}
              <span className="text-gray-600">{phone3 || 'Empty'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
