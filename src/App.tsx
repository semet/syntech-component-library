import { zodResolver } from '@hookform/resolvers/zod'
import { Controller } from 'react-hook-form'
import { FaEnvelope } from 'react-icons/fa'
import { IoCheckmarkSharp } from 'react-icons/io5'
import z from 'zod'

import { Button, DatePicker, TextInput } from './components'
import ComboBox, {
  type ComboBoxOption,
  type OptionComponentProps,
  type SingleValueComponentProps,
} from './components/ComboBox/ComboBox'
import { Form } from './components/Form/Form'

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

const schema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters long'),
  email: z.email('Invalid email address'),
  country: z.object({
    label: z.string(),
    value: z.string(),
    flag: z.string(),
    code: z.string(),
  }),
  color: z.object({
    label: z.string(),
    value: z.string(),
    color: z.string(),
    hex: z.string(),
  }),
  start_date: z.date(),
  end_date: z.date(),
  status: z.object({ value: z.string(), label: z.string() }),
})

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4">
      <div className="mx-auto max-w-md bg-white p-8 shadow-md">
        <Form
          resolver={zodResolver(schema)}
          defaultValues={{
            username: '',
            email: '',
            color: colorOptions[0],
            country: countryOptions[0],
            start_date: new Date(),
            end_date: new Date(),
            status: { value: 'active', label: 'Active' },
          }}
          onSubmit={(data) => {
            // eslint-disable-next-line no-console
            console.log('Form Data:', data)
          }}
          className="space-y-5"
        >
          {({ register, control, formState: { errors }, reset }) => {
            // eslint-disable-next-line no-console
            console.log('Errors:', errors)
            return (
              <>
                <TextInput
                  label="Username"
                  placeholder="Type your username"
                  {...register('username')}
                  error={errors.username?.message as string}
                />
                <TextInput
                  label="Email "
                  placeholder="Type your email"
                  {...register('email')}
                  error={errors.email?.message as string}
                  leftSection={<FaEnvelope />}
                />

                <Controller
                  control={control}
                  name="country"
                  render={({ field }) => (
                    <ComboBox
                      label="Select Country"
                      placeholder="Choose a country"
                      options={countryOptions}
                      value={field.value}
                      onChange={field.onChange}
                      searchable
                      clearable
                      withAsterisk
                      components={{
                        SingleValue: SingleValueComponent,
                        Option: OptionComponent,
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="color"
                  render={({ field }) => (
                    <ComboBox
                      label="Select Color"
                      placeholder="Choose a color"
                      options={colorOptions}
                      value={field.value}
                      onChange={field.onChange}
                      searchable
                      clearable
                      withAsterisk
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="start_date"
                  render={({ field }) => (
                    <DatePicker
                      label="Start Date"
                      placeholder="Select start date"
                      value={field.value}
                      onChange={field.onChange}
                      withAsterisk
                      clearable
                      iconPosition="left"
                      minDate={new Date()}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="end_date"
                  render={({ field }) => (
                    <DatePicker
                      label="End Date"
                      placeholder="Select end date"
                      value={field.value}
                      onChange={field.onChange}
                      withAsterisk
                      clearable
                      iconPosition="left"
                    />
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit">Submit</Button>
                  <Button
                    type="reset"
                    color="gray"
                    onClick={() => reset()}
                  >
                    Reset
                  </Button>
                </div>
              </>
            )
          }}
        </Form>
      </div>
    </div>
  )
}
