import { useState } from 'react'

import ColorPicker from '@/components/ColorPicker/ColorPicker'

export default function ColorPickerDemo() {
  const [color1, setColor1] = useState('')

  const defaultSwatches = [
    'rgba(255, 36, 36, 1)', // hsla(0, 100%, 57%, 1)
    'rgba(255, 153, 0, 1)', // hsla(30, 100%, 50%, 1)
    'rgba(255, 255, 0, 1)', // hsla(60, 100%, 50%, 1)
    'rgba(0, 255, 0, 1)', // hsla(120, 100%, 50%, 1)
    'rgba(0, 153, 255, 1)', // hsla(204, 100%, 50%, 1)
    'rgba(102, 51, 153, 1)', // hsla(270, 50%, 40%, 1)
    'rgba(255, 0, 255, 1)', // hsla(300, 100%, 50%, 1)
    'rgba(0, 0, 0, 1)', // hsla(0, 0%, 0%, 1)
    'rgba(255, 255, 255, 1)', // hsla(0, 0%, 100%, 1)
  ]

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            ColorPicker Component
          </h1>
          <p className="text-gray-600">
            Following DatePicker design pattern with Mantine UI inspiration
          </p>
        </div>

        <div className="space-y-6 rounded-xl bg-white p-6 shadow-lg">
          <ColorPicker
            label="Primary Color"
            description="Choose your brand's primary color"
            value={color1}
            onChange={setColor1}
            format="rgba"
            withAsterisk
            clearable
            swatches={defaultSwatches}
          />
        </div>
      </div>
    </div>
  )
}
