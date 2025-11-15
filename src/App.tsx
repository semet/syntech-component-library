import dayjs from 'dayjs'
import { useState } from 'react'
import { BsCalendar2Month } from 'react-icons/bs'

import { TextInput } from './components'
import DatePicker from './components/DatePicker/DatePicker'

export default function App() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-md bg-white p-8 shadow-md">
        <div className="space-y-8">
          <TextInput
            label="Regular Text Input"
            placeholder="Type something..."
          />
          <DatePicker
            label="Date at Top"
            description="Opens below because there's enough space"
            format="MMMM DD, YYYY"
          />

          <DatePicker
            label="With /Max Date"
            minDate={dayjs('2025-11-02')}
            maxDate={dayjs('2025-11-20')}
            value={selectedDate}
            onChange={setSelectedDate}
          />

          <DatePicker
            label="With Custom Calendar Icon"
            name="end_date"
            calendarIcon={<BsCalendar2Month />}
          />
          <DatePicker
            label="Icon on the Left"
            name="end_date"
            iconPosition="left"
            placeholder="Select Appointment Date"
          />
          <DatePicker
            label="With Error Message"
            name="end_date"
            iconPosition="left"
            placeholder="Select Appointment Date"
            error="This field is required"
            withAsterisk
          />
        </div>
      </div>
    </div>
  )
}
