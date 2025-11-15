import dayjs from 'dayjs'
import { useState } from 'react'
import { BsCalendar2Month } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'

import { Button, TextInput } from './components'
import DatePicker from './components/DatePicker/DatePicker'
import Select from './components/Select/Select'

export default function App() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4">
      <div className="mx-auto max-w-md bg-white p-8 shadow-md">
        <div className="space-y-8">
          <TextInput
            label="Regular Text Input"
            placeholder="Type something..."
          />
          <TextInput
            label="Filled Text Input"
            variant="filled"
            placeholder="Type something..."
          />
          <TextInput
            label="With Error"
            placeholder="Type something..."
            error="This field is required"
            withAsterisk
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

          <Select
            label="Choose a country"
            data={[
              { value: 'us', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'ca', label: 'Canada' },
            ]}
            placeholder="Select country"
          />

          <Select
            label="Status"
            leftSection={<FiFilter />}
            data={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
              { value: 'pending', label: 'Pending' },
            ]}
            placeholder="Select status"
          />

          <Select label="Custom">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>

          <Select
            label="Styled Select"
            variant="filled"
            size="lg"
            radius="lg"
            classNames={{
              select: 'font-bold',
              chevron: 'text-blue-500',
            }}
            data={[
              { value: 'red', label: 'Red' },
              { value: 'green', label: 'Green' },
              { value: 'blue', label: 'Blue' },
            ]}
            placeholder="Select color"
          />

          <div className="flex gap-4">
            <Button
              variant="filled"
              fullWidth
            >
              Submit
            </Button>
            <Button
              variant="filled"
              color="danger"
              fullWidth
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
