import { useState } from 'react'

import Radio from '@/components/Radio/Radio'

export default function RadioExamples() {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Radio Component</h1>

        <div className="space-y-6 rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            Basic Examples
          </h2>

          <Radio
            label="Accept terms and conditions"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <Radio
            label="Accept terms and conditions"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            size="lg"
          />
          <Radio
            label="Accept terms and conditions"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            size="xl"
          />
        </div>
      </div>
    </div>
  )
}
