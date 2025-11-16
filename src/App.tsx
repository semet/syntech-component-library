import dayjs from 'dayjs'
import { useState } from 'react'
import { BsCalendar2Month } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'
import { IoCheckmarkSharp } from 'react-icons/io5'

import { Button, TextInput } from './components'
import ComboBox, {
  type ComboBoxOption,
  type OptionComponentProps,
  type SingleValueComponentProps,
} from './components/ComboBox/ComboBox'
import DatePicker from './components/DatePicker/DatePicker'
import Select from './components/Select/Select'

type ColorOption = {
  label: string
  value: string
  color: string
  hex: string
}

interface CountryOption extends ComboBoxOption {
  label: string
  value: string
  flag: string
  code: string
}

const countryOptions: CountryOption[] = [
  { label: 'United States', value: 'us', code: 'US', flag: '🇺🇸' },
  { label: 'United Kingdom', value: 'uk', code: 'GB', flag: '🇬🇧' },
  { label: 'Canada', value: 'ca', code: 'CA', flag: '🇨🇦' },
  { label: 'Australia', value: 'au', code: 'AU', flag: '🇦🇺' },
  { label: 'Germany', value: 'de', code: 'DE', flag: '🇩🇪' },
]

const colorOptions: ColorOption[] = [
  { label: 'Red', value: 'red', color: 'red', hex: '#ef4444' },
  { label: 'Blue', value: 'blue', color: 'blue', hex: '#3b82f6' },
  { label: 'Green', value: 'green', color: 'green', hex: '#10b981' },
  { label: 'Yellow', value: 'yellow', color: 'yellow', hex: '#eab308' },
  { label: 'Purple', value: 'purple', color: 'purple', hex: '#a855f7' },
]

const SingleValueComponent = ({
  option,
}: SingleValueComponentProps<CountryOption>) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl">{option.flag}</span>
      <span>{option.label}</span>
    </div>
  )
}

const OptionComponent = ({
  option,
  isSelected,
  classNames,
}: OptionComponentProps<CountryOption>) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xl">{option.flag}</span>
        <span>{option.label}</span>
        <span className="text-sm text-gray-500">({option.code})</span>
      </div>
      {isSelected && <IoCheckmarkSharp className={classNames?.checkIcon} />}
    </div>
  )
}

export default function App() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [colors, setColors] = useState<ColorOption | null>(null)
  const [country, setCountry] = useState<CountryOption | null>(null)
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4">
      <div className="mx-auto max-w-md bg-white p-8 shadow-md">
        <div className="space-y-8">
          <TextInput
            label="Regular Text Input"
            placeholder="Type something..."
          />
          <ComboBox
            label="Select Country"
            placeholder="Choose a country"
            options={countryOptions}
            value={country}
            onChange={setCountry}
            searchable
            clearable
            withAsterisk
            components={{
              SingleValue: SingleValueComponent,
              Option: OptionComponent,
            }}
          />
          <ComboBox
            label="Select Color"
            placeholder="Choose a color"
            options={colorOptions}
            value={colors}
            onChange={setColors}
            // multiple
            searchable
            clearable
            withAsterisk
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
