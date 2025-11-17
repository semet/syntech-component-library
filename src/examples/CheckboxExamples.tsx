import { useState } from 'react'

import Checkbox from '@/components/Checkbox/Checkbox'

export default function CheckboxExamples() {
  const [isChecked, setIsChecked] = useState<boolean>(true)
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Checkbox Component</h1>

        <div className="space-y-6 rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            Basic Examples
          </h2>

          <Checkbox
            label="Accept terms and conditions"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <Checkbox
            label="Accept terms and conditions"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            size="lg"
          />
          <Checkbox
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
