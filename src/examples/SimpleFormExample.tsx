import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { FaEnvelope } from 'react-icons/fa'
import { IoCheckmarkSharp } from 'react-icons/io5'
import z from 'zod'

import Button from '@/components/Button/Button'
import CaptchaInput from '@/components/CaptchaInput/CaptchaInput'
import ColorPicker from '@/components/ColorPicker/ColorPicker'
import type {
  ComboBoxOption,
  OptionComponentProps,
  SingleValueComponentProps,
} from '@/components/ComboBox/ComboBox'
import ComboBox from '@/components/ComboBox/ComboBox'
import { Copy } from '@/components/Copy/Copy'
import DatePicker from '@/components/DatePicker/DatePicker'
import PasswordInput from '@/components/PasswordInput/PasswordInput'
import Textarea from '@/components/Textarea/Textarea'
import TextInput from '@/components/TextInput/TextInput'

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

const schema = z
  .object({
    username: z.string().min(2, 'Username must be at least 2 characters long'),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirm_password: z
      .string()
      .min(6, 'Password must be at least 6 characters long'),
    country: z
      .object(
        {
          label: z.string(),
          value: z.string(),
          flag: z.string(),
          code: z.string(),
        },
        {
          message: 'Country is required',
        },
      )
      .refine(
        (data) => {
          return data.value !== ''
        },
        {
          message: 'Country is required',
        },
      ),
    color: z
      .object(
        {
          label: z.string(),
          value: z.string(),
          color: z.string(),
          hex: z.string(),
        },
        {
          message: 'Color is required',
        },
      )
      .refine(
        (data) => {
          return data.value !== ''
        },
        {
          message: 'Color is required',
        },
      ),
    start_date: z.date().optional(),
    end_date: z.date().optional(),
    favorite_color: z.string(),
    address: z.string().optional(),
    captcha: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  })

export default function SimpleFormExample() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      favorite_color: '',
    },
  })

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4">
      <div className="mx-auto max-w-md bg-white p-8 shadow-md">
        <form
          onSubmit={handleSubmit((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
          })}
          className="flex flex-col gap-4"
        >
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
          <PasswordInput
            label="Password"
            placeholder="Type your password"
            {...register('password')}
            error={errors.password?.message as string}
            withAsterisk
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Re-type your password"
            {...register('confirm_password')}
            error={errors.confirm_password?.message as string}
            withAsterisk
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
                error={errors.country?.message as string}
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
                error={errors.color?.message as string}
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
                error={errors.start_date?.message as string}
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

          <Controller
            control={control}
            name="favorite_color"
            render={({ field }) => (
              <ColorPicker
                label="Favorite Color"
                value={field.value}
                onChange={field.onChange}
                format="rgba"
                withAsterisk
                clearable
              />
            )}
          />

          <CaptchaInput
            label="Enter Captcha"
            placeholder="Enter the code"
            image="https://placehold.co/150x50/4299e1/ffffff?text=ABC123"
            withAsterisk
          />

          <Textarea
            label="Address"
            placeholder="Type your address"
            {...register('address')}
            error={errors.address?.message as string}
          />
          <Copy
            value="Some random value"
            timeout={5000}
          >
            {({ copied, copy }) => (
              <Button
                type="button"
                size="sm"
                color={copied ? 'success' : 'gray'}
                onClick={copy}
              >
                {copied
                  ? 'Copied to clipboard!'
                  : 'Copy Form Data to Clipboard'}
              </Button>
            )}
          </Copy>

          <div className="flex justify-center gap-4">
            <Button
              type="reset"
              size="sm"
              color="gray"
              onClick={() => reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              size="sm"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
