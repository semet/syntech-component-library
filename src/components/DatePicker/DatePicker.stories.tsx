/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import dayjs, { type Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useState } from 'react'
import { BiCalendarEvent, BiCalendarCheck } from 'react-icons/bi'
import {
  FiCalendar,
  FiClock,
  FiStar,
  FiGift,
  FiTrendingUp,
} from 'react-icons/fi'

import DatePicker from './DatePicker'

dayjs.extend(relativeTime)

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'unstyled'],
      description: 'DatePicker variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'DatePicker size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    format: {
      control: 'select',
      options: [
        'YYYY-MM-DD',
        'MM/DD/YYYY',
        'DD/MM/YYYY',
        'YYYY/MM/DD',
        'MMM DD, YYYY',
        'MMMM DD, YYYY',
        'DD MMM YYYY',
        'DD MMMM YYYY',
        'ddd, MMM DD, YYYY',
        'dddd, MMMM DD, YYYY',
        'MM-DD-YYYY',
        'DD-MM-YYYY',
        'YYYY.MM.DD',
        'DD.MM.YYYY',
      ],
      description: 'Date format',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    withAsterisk: {
      control: 'boolean',
      description: 'Show asterisk for required field',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    label: 'Select Date',
    placeholder: 'Pick a date',
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs())
    return (
      <DatePicker
        label="Appointment Date"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Birth Date',
    placeholder: 'Select your birth date',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Event Date',
    description: 'Choose the date for your event',
    placeholder: 'Pick a date',
  },
}

export const Required: Story = {
  args: {
    label: 'Deadline',
    withAsterisk: true,
    placeholder: 'Select deadline',
  },
}

export const WithError: Story = {
  args: {
    label: 'Start Date',
    error: 'This field is required',
    placeholder: 'Select start date',
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    variant: 'default',
  },
}

export const FilledVariant: Story = {
  args: {
    label: 'Filled Variant',
    variant: 'filled',
  },
}

export const UnstyledVariant: Story = {
  args: {
    label: 'Unstyled Variant',
    variant: 'unstyled',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    size: 'xl',
  },
}

// Radius
export const RadiusSmall: Story = {
  args: {
    label: 'Small Radius',
    radius: 'sm',
  },
}

export const RadiusMedium: Story = {
  args: {
    label: 'Medium Radius',
    radius: 'md',
  },
}

export const RadiusLarge: Story = {
  args: {
    label: 'Large Radius',
    radius: 'lg',
  },
}

export const RadiusExtraLarge: Story = {
  args: {
    label: 'Extra Large Radius',
    radius: 'xl',
  },
}

// Date Formats
export const FormatISO: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs())
    return (
      <DatePicker
        label="ISO Format (YYYY-MM-DD)"
        format="YYYY-MM-DD"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatUS: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs())
    return (
      <DatePicker
        label="US Format (MM/DD/YYYY)"
        format="MM/DD/YYYY"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatEU: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs())
    return (
      <DatePicker
        label="EU Format (DD/MM/YYYY)"
        format="DD/MM/YYYY"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatLong: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs())
    return (
      <DatePicker
        label="Long Format"
        format="MMMM DD, YYYY"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatFull: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs())
    return (
      <DatePicker
        label="Full Format"
        format="dddd, MMMM DD, YYYY"
        value={value}
        onChange={setValue}
      />
    )
  },
}

// Custom Icons
export const CustomIcon: Story = {
  args: {
    label: 'Custom Icon',
    calendarIcon: <FiCalendar className="size-5" />,
  },
}

export const ClockIcon: Story = {
  args: {
    label: 'Appointment Time',
    calendarIcon: <FiClock className="size-5" />,
  },
}

export const EventIcon: Story = {
  args: {
    label: 'Event Date',
    calendarIcon: <BiCalendarEvent className="size-5" />,
  },
}

export const StarIcon: Story = {
  args: {
    label: 'Important Date',
    calendarIcon: <FiStar className="size-5 text-yellow-500" />,
  },
}

// Icon Position
export const IconRight: Story = {
  args: {
    label: 'Icon Right (Default)',
    iconPosition: 'right',
  },
}

export const IconLeft: Story = {
  args: {
    label: 'Icon Left',
    iconPosition: 'left',
  },
}

export const IconLeftWithCustom: Story = {
  args: {
    label: 'Custom Icon Left',
    iconPosition: 'left',
    calendarIcon: <BiCalendarCheck className="size-5 text-green-600" />,
  },
}

// Min/Max Date
export const WithMinDate: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    const minDate = dayjs().subtract(7, 'days')

    return (
      <div className="space-y-2">
        <DatePicker
          label="Select Date (Min: 7 days ago)"
          description={`Cannot select dates before ${minDate.format('MMM DD, YYYY')}`}
          value={value}
          onChange={setValue}
          minDate={minDate}
        />
      </div>
    )
  },
}

export const WithMaxDate: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    const maxDate = dayjs().add(7, 'days')

    return (
      <div className="space-y-2">
        <DatePicker
          label="Select Date (Max: 7 days ahead)"
          description={`Cannot select dates after ${maxDate.format('MMM DD, YYYY')}`}
          value={value}
          onChange={setValue}
          maxDate={maxDate}
        />
      </div>
    )
  },
}

export const DateRange: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    const minDate = dayjs().subtract(30, 'days')
    const maxDate = dayjs().add(30, 'days')

    return (
      <div className="space-y-2">
        <DatePicker
          label="Select Date (±30 days)"
          description={`Select between ${minDate.format('MMM DD')} and ${maxDate.format('MMM DD, YYYY')}`}
          value={value}
          onChange={setValue}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    )
  },
}

export const FutureDatesOnly: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    const today = dayjs()

    return (
      <DatePicker
        label="Future Dates Only"
        description="Past dates are disabled"
        value={value}
        onChange={setValue}
        minDate={today}
      />
    )
  },
}

export const PastDatesOnly: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    const today = dayjs()

    return (
      <DatePicker
        label="Past Dates Only"
        description="Future dates are disabled"
        value={value}
        onChange={setValue}
        maxDate={today}
      />
    )
  },
}

// States
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs())
    return (
      <DatePicker
        label="Disabled"
        disabled
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const DisabledEmpty: Story = {
  args: {
    label: 'Disabled (No Value)',
    disabled: true,
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <DatePicker
        label="Default Variant"
        variant="default"
        placeholder="Select a date"
      />
      <DatePicker
        label="Filled Variant"
        variant="filled"
        placeholder="Select a date"
      />
      <DatePicker
        label="Unstyled Variant"
        variant="unstyled"
        placeholder="Select a date"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <DatePicker
        label="Extra Small"
        size="xs"
        placeholder="Select a date"
      />
      <DatePicker
        label="Small"
        size="sm"
        placeholder="Select a date"
      />
      <DatePicker
        label="Medium"
        size="md"
        placeholder="Select a date"
      />
      <DatePicker
        label="Large"
        size="lg"
        placeholder="Select a date"
      />
      <DatePicker
        label="Extra Large"
        size="xl"
        placeholder="Select a date"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Formats Showcase
export const AllFormats: Story = {
  render: () => {
    const today = dayjs()
    return (
      <div className="w-96 space-y-6">
        <DatePicker
          label="YYYY-MM-DD"
          format="YYYY-MM-DD"
          value={today}
        />
        <DatePicker
          label="MM/DD/YYYY"
          format="MM/DD/YYYY"
          value={today}
        />
        <DatePicker
          label="DD/MM/YYYY"
          format="DD/MM/YYYY"
          value={today}
        />
        <DatePicker
          label="MMM DD, YYYY"
          format="MMM DD, YYYY"
          value={today}
        />
        <DatePicker
          label="MMMM DD, YYYY"
          format="MMMM DD, YYYY"
          value={today}
        />
        <DatePicker
          label="ddd, MMM DD, YYYY"
          format="ddd, MMM DD, YYYY"
          value={today}
        />
        <DatePicker
          label="dddd, MMMM DD, YYYY"
          format="dddd, MMMM DD, YYYY"
          value={today}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Icon Position Comparison
export const IconPositionComparison: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <DatePicker
        label="Icon Right (Default)"
        iconPosition="right"
        placeholder="Select a date"
      />
      <DatePicker
        label="Icon Left"
        iconPosition="left"
        placeholder="Select a date"
      />
      <DatePicker
        label="Custom Icon Right"
        iconPosition="right"
        calendarIcon={<FiClock className="size-5" />}
        placeholder="Select a time"
      />
      <DatePicker
        label="Custom Icon Left"
        iconPosition="left"
        calendarIcon={<FiGift className="size-5 text-purple-600" />}
        placeholder="Select a date"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const BookingForm: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Dayjs | null>(null)
    const [checkOut, setCheckOut] = useState<Dayjs | null>(null)
    const today = dayjs()

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Hotel Booking</h3>
        <DatePicker
          label="Check-in Date"
          description="Select your arrival date"
          withAsterisk
          value={checkIn}
          onChange={setCheckIn}
          minDate={today}
          format="MMM DD, YYYY"
        />
        <DatePicker
          label="Check-out Date"
          description="Select your departure date"
          withAsterisk
          value={checkOut}
          onChange={setCheckOut}
          minDate={checkIn || today}
          format="MMM DD, YYYY"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const EventScheduler: Story = {
  render: () => {
    const [eventDate, setEventDate] = useState<Dayjs | null>(null)
    const minDate = dayjs().add(1, 'day')
    const maxDate = dayjs().add(90, 'days')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Schedule Event</h3>
        <DatePicker
          label="Event Date"
          description="Events must be scheduled 1-90 days in advance"
          withAsterisk
          value={eventDate}
          onChange={setEventDate}
          minDate={minDate}
          maxDate={maxDate}
          format="dddd, MMMM DD, YYYY"
          calendarIcon={<BiCalendarEvent className="size-5" />}
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const BirthdayPicker: Story = {
  render: () => {
    const [birthday, setBirthday] = useState<Dayjs | null>(null)
    const maxDate = dayjs().subtract(13, 'years')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">User Profile</h3>
        <DatePicker
          label="Date of Birth"
          description="Must be at least 13 years old"
          withAsterisk
          value={birthday}
          onChange={setBirthday}
          maxDate={maxDate}
          format="MMMM DD, YYYY"
          calendarIcon={<FiGift className="size-5" />}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const DeadlineTracker: Story = {
  render: () => {
    const [deadline, setDeadline] = useState<Dayjs | null>(
      dayjs().add(7, 'days'),
    )
    const today = dayjs()

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Project Deadline</h3>
        <DatePicker
          label="Due Date"
          description="Set a deadline for your project"
          withAsterisk
          value={deadline}
          onChange={setDeadline}
          minDate={today}
          format="ddd, MMM DD, YYYY"
          calendarIcon={<FiTrendingUp className="size-5" />}
          variant="filled"
          size="md"
        />
        {deadline && (
          <div className="rounded-md bg-blue-50 p-3 text-sm text-blue-700">
            Deadline: {deadline.fromNow()}
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FormWithValidation: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Dayjs | null>(null)
    const [endDate, setEndDate] = useState<Dayjs | null>(null)
    const [error, setError] = useState('')

    const handleEndDateChange = (date: Dayjs | null) => {
      setEndDate(date)
      if (date && startDate && date.isBefore(startDate)) {
        setError('End date must be after start date')
      } else {
        setError('')
      }
    }

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Date Range Picker</h3>
        <DatePicker
          label="Start Date"
          withAsterisk
          value={startDate}
          onChange={setStartDate}
          format="MMM DD, YYYY"
        />
        <DatePicker
          label="End Date"
          withAsterisk
          value={endDate}
          onChange={handleEndDateChange}
          minDate={startDate || undefined}
          format="MMM DD, YYYY"
          error={error}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CompactFormFields: Story = {
  render: () => (
    <div className="w-80 space-y-3 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-base font-semibold">Quick Form</h3>
      <DatePicker
        label="Start"
        size="xs"
        variant="filled"
      />
      <DatePicker
        label="End"
        size="xs"
        variant="filled"
      />
      <DatePicker
        label="Review Date"
        size="xs"
        variant="filled"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
