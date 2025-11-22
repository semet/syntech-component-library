/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import PhoneInput from './PhoneInput'

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
    docs: {},
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'PhoneInput variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'PhoneInput size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    withAsterisk: {
      control: 'boolean',
      description: 'Show asterisk for required field',
    },
    withValidation: {
      control: 'boolean',
      description: 'Enable phone number validation',
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
} satisfies Meta<typeof PhoneInput>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('+628123456789')
    return (
      <PhoneInput
        label="Phone Number"
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Enter phone number"
      />
    )
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Contact Number',
    placeholder: 'Enter phone number',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Mobile Phone',
    description: 'We will send a verification code to this number',
    placeholder: 'Enter phone number',
  },
}

export const Required: Story = {
  args: {
    label: 'Phone Number',
    withAsterisk: true,
    placeholder: 'Enter phone number',
  },
}

export const WithError: Story = {
  args: {
    label: 'Phone Number',
    error: 'Phone number is required',
    placeholder: 'Enter phone number',
  },
}

export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(true)

    return (
      <div className="w-80 space-y-2">
        <PhoneInput
          label="Phone Number"
          description="Enter a valid phone number"
          value={value}
          onChange={(val, valid) => {
            setValue(val)
            setIsValid(valid)
          }}
          withValidation
          placeholder="Enter phone number"
        />
        {value && (
          <div
            className={`text-sm ${isValid ? 'text-green-600' : 'text-red-600'}`}
          >
            {isValid ? '✓ Valid phone number' : '✗ Invalid phone number'}
          </div>
        )}
      </div>
    )
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    variant: 'default',
    placeholder: 'Enter phone number',
  },
}

export const FilledVariant: Story = {
  args: {
    label: 'Filled Variant',
    variant: 'filled',
    placeholder: 'Enter phone number',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    size: 'xs',
    placeholder: 'Enter phone number',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
    placeholder: 'Enter phone number',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
    placeholder: 'Enter phone number',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
    placeholder: 'Enter phone number',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    size: 'xl',
    placeholder: 'Enter phone number',
  },
}

// States
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('+628123456789')
    return (
      <PhoneInput
        label="Disabled"
        disabled
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Enter phone number"
      />
    )
  },
}

export const DisabledEmpty: Story = {
  args: {
    label: 'Disabled (No Value)',
    disabled: true,
    placeholder: 'Enter phone number',
  },
}

// Default Countries
export const DefaultUS: Story = {
  args: {
    label: 'Phone Number (US Default)',
    defaultCountry: 'US',
    placeholder: 'Enter phone number',
  },
}

export const DefaultID: Story = {
  args: {
    label: 'Phone Number (ID Default)',
    defaultCountry: 'ID',
    placeholder: 'Enter phone number',
  },
}

export const DefaultGB: Story = {
  args: {
    label: 'Phone Number (GB Default)',
    defaultCountry: 'GB',
    placeholder: 'Enter phone number',
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <PhoneInput
        label="Default Variant"
        variant="default"
        placeholder="Enter phone number"
      />
      <PhoneInput
        label="Filled Variant"
        variant="filled"
        placeholder="Enter phone number"
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
    <div className="w-80 space-y-6">
      <PhoneInput
        label="Extra Small"
        size="xs"
        placeholder="Enter phone number"
      />
      <PhoneInput
        label="Small"
        size="sm"
        placeholder="Enter phone number"
      />
      <PhoneInput
        label="Medium"
        size="md"
        placeholder="Enter phone number"
      />
      <PhoneInput
        label="Large"
        size="lg"
        placeholder="Enter phone number"
      />
      <PhoneInput
        label="Extra Large"
        size="xl"
        placeholder="Enter phone number"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const ContactForm: Story = {
  render: () => {
    const [phone, setPhone] = useState('')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
        <PhoneInput
          label="Phone Number"
          description="We'll use this to contact you"
          withAsterisk
          value={phone}
          onChange={(val) => setPhone(val)}
          withValidation
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const RegistrationForm: Story = {
  render: () => {
    const [phone, setPhone] = useState('')
    const [isValid, setIsValid] = useState(true)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Create Account</h3>
        <PhoneInput
          label="Mobile Number"
          description="We'll send a verification code"
          withAsterisk
          value={phone}
          onChange={(val, valid) => {
            setPhone(val)
            setIsValid(valid)
          }}
          withValidation
          variant="filled"
          size="md"
        />
        {phone && !isValid && (
          <p className="text-sm text-red-600">
            Please enter a valid phone number
          </p>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const InternationalSupport: Story = {
  render: () => {
    const [phone, setPhone] = useState('')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">
          International Phone Support
        </h3>
        <PhoneInput
          label="Phone Number"
          description="Select your country code and enter your number"
          value={phone}
          onChange={(val) => setPhone(val)}
          defaultCountry="US"
          withValidation
        />
        {phone && (
          <div className="rounded-md bg-blue-50 p-3 text-sm text-blue-700">
            Full number: {phone}
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const MultiplePhoneNumbers: Story = {
  render: () => {
    const [mobile, setMobile] = useState('')
    const [home, setHome] = useState('')
    const [work, setWork] = useState('')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Phone Numbers</h3>
        <PhoneInput
          label="Mobile"
          withAsterisk
          value={mobile}
          onChange={(val) => setMobile(val)}
          defaultCountry="US"
          variant="filled"
        />
        <PhoneInput
          label="Home"
          value={home}
          onChange={(val) => setHome(val)}
          defaultCountry="US"
          variant="filled"
        />
        <PhoneInput
          label="Work"
          value={work}
          onChange={(val) => setWork(val)}
          defaultCountry="US"
          variant="filled"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const WithValidationError: Story = {
  render: () => {
    const [phone, setPhone] = useState('+6281234')
    const [error, setError] = useState('')

    const handleChange = (val: string, isValid: boolean) => {
      setPhone(val)
      if (val && !isValid) {
        setError('Invalid phone number format')
      } else {
        setError('')
      }
    }

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Validation Example</h3>
        <PhoneInput
          label="Phone Number"
          description="Try entering an invalid number"
          value={phone}
          onChange={handleChange}
          error={error}
          withValidation
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CompactForm: Story = {
  render: () => {
    const [phone, setPhone] = useState('')

    return (
      <div className="w-80 space-y-3 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-base font-semibold">Quick Contact</h3>
        <PhoneInput
          label="Phone"
          size="xs"
          variant="filled"
          value={phone}
          onChange={(val) => setPhone(val)}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const PasteExample: Story = {
  render: () => {
    const [phone, setPhone] = useState('')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Paste Phone Number</h3>
        <PhoneInput
          label="Phone Number"
          description="Try pasting: +62877677877 or +14155552671"
          value={phone}
          onChange={(val) => setPhone(val)}
          withValidation
        />
        {phone && (
          <div className="rounded-md bg-gray-50 p-3 text-sm text-gray-700">
            Formatted: {phone}
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
