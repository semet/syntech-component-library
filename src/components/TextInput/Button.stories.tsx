import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  FiSearch,
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiCalendar,
  FiCheck,
  FiAlertCircle,
  FiDollarSign,
  FiGlobe,
} from 'react-icons/fi'

import TextInput from './TextInput'

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'unstyled'],
      description: 'Input variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    description: {
      control: 'text',
      description: 'Description text below label',
    },
    withAsterisk: {
      control: 'boolean',
      description: 'Show asterisk for required field',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Email',
    description: 'We will never share your email with anyone else',
    placeholder: 'your@email.com',
  },
}

export const Required: Story = {
  args: {
    label: 'Full Name',
    withAsterisk: true,
    placeholder: 'John Doe',
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    placeholder: 'Default input',
    variant: 'default',
  },
}

export const Filled: Story = {
  args: {
    label: 'Filled Variant',
    placeholder: 'Filled input',
    variant: 'filled',
  },
}

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Variant',
    placeholder: 'Unstyled input',
    variant: 'unstyled',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    placeholder: 'Extra small input',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    placeholder: 'Small input',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    placeholder: 'Medium input',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    placeholder: 'Large input',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    placeholder: 'Extra large input',
    size: 'xl',
  },
}

// Radius
export const RadiusXS: Story = {
  args: {
    label: 'XS Radius',
    placeholder: 'Extra small radius',
    radius: 'xs',
  },
}

export const RadiusSM: Story = {
  args: {
    label: 'SM Radius',
    placeholder: 'Small radius',
    radius: 'sm',
  },
}

export const RadiusMD: Story = {
  args: {
    label: 'MD Radius',
    placeholder: 'Medium radius',
    radius: 'md',
  },
}

export const RadiusLG: Story = {
  args: {
    label: 'LG Radius',
    placeholder: 'Large radius',
    radius: 'lg',
  },
}

export const RadiusXL: Story = {
  args: {
    label: 'XL Radius',
    placeholder: 'Extra large radius',
    radius: 'xl',
  },
}

// With Icons
export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftSection: <FiSearch />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    rightSection: <FiCheck className="text-green-500" />,
  },
}

export const WithBothIcons: Story = {
  args: {
    label: 'Website',
    placeholder: 'www.example.com',
    leftSection: <FiGlobe />,
    rightSection: <FiCheck className="text-green-500" />,
  },
}

// States
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    withAsterisk: true,
    error: 'Please enter a valid email address',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this',
    disabled: true,
    value: 'Disabled value',
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <TextInput
        label="Default"
        placeholder="Default variant"
        variant="default"
      />
      <TextInput
        label="Filled"
        placeholder="Filled variant"
        variant="filled"
      />
      <TextInput
        label="Unstyled"
        placeholder="Unstyled variant"
        variant="unstyled"
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
    <div className="w-96 space-y-4">
      <TextInput
        size="xs"
        placeholder="Extra small (xs)"
      />
      <TextInput
        size="sm"
        placeholder="Small (sm)"
      />
      <TextInput
        size="md"
        placeholder="Medium (md)"
      />
      <TextInput
        size="lg"
        placeholder="Large (lg)"
      />
      <TextInput
        size="xl"
        placeholder="Extra large (xl)"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Radius Showcase
export const AllRadius: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        radius="xs"
        placeholder="XS radius"
      />
      <TextInput
        radius="sm"
        placeholder="SM radius"
      />
      <TextInput
        radius="md"
        placeholder="MD radius"
      />
      <TextInput
        radius="lg"
        placeholder="LG radius"
      />
      <TextInput
        radius="xl"
        placeholder="XL radius"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Icon Examples Showcase
export const IconExamples: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        label="Search"
        placeholder="Search..."
        leftSection={<FiSearch />}
      />
      <TextInput
        label="Email"
        placeholder="your@email.com"
        leftSection={<FiMail />}
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter password"
        leftSection={<FiLock />}
      />
      <TextInput
        label="Full Name"
        placeholder="John Doe"
        leftSection={<FiUser />}
      />
      <TextInput
        label="Phone"
        placeholder="+1 (555) 123-4567"
        leftSection={<FiPhone />}
      />
      <TextInput
        label="Date"
        type="date"
        leftSection={<FiCalendar />}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Error States Showcase
export const ErrorStates: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <TextInput
        label="Username"
        placeholder="Enter username"
        withAsterisk
        error="Username is required"
      />
      <TextInput
        label="Email"
        placeholder="your@email.com"
        withAsterisk
        leftSection={<FiMail />}
        error="Please enter a valid email address"
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter password"
        withAsterisk
        leftSection={<FiLock />}
        rightSection={<FiAlertCircle className="text-red-500" />}
        error="Password must be at least 8 characters"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const LoginForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        label="Email"
        placeholder="your@email.com"
        withAsterisk
        leftSection={<FiMail />}
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter password"
        withAsterisk
        leftSection={<FiLock />}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SignUpForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        label="Full Name"
        description="Enter your first and last name"
        placeholder="John Doe"
        withAsterisk
        leftSection={<FiUser />}
      />
      <TextInput
        label="Email"
        description="We'll never share your email with anyone else"
        placeholder="your@email.com"
        withAsterisk
        leftSection={<FiMail />}
      />
      <TextInput
        label="Phone"
        description="Optional, for account recovery"
        placeholder="+1 (555) 123-4567"
        leftSection={<FiPhone />}
      />
      <TextInput
        label="Password"
        description="Must be at least 8 characters"
        type="password"
        placeholder="Create a password"
        withAsterisk
        leftSection={<FiLock />}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SearchBar: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <TextInput
        placeholder="Search..."
        leftSection={<FiSearch />}
        size="lg"
      />
      <TextInput
        placeholder="Search products..."
        leftSection={<FiSearch />}
        variant="filled"
        size="md"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ProfileSettings: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        label="Display Name"
        placeholder="Your display name"
        leftSection={<FiUser />}
        value="John Doe"
      />
      <TextInput
        label="Email"
        description="This email is verified"
        placeholder="your@email.com"
        leftSection={<FiMail />}
        rightSection={<FiCheck className="text-green-500" />}
        value="john@example.com"
      />
      <TextInput
        label="Website"
        description="Your personal website or portfolio"
        placeholder="https://example.com"
        leftSection={<FiGlobe />}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const PaymentForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        label="Cardholder Name"
        placeholder="John Doe"
        withAsterisk
        leftSection={<FiUser />}
      />
      <TextInput
        label="Card Number"
        placeholder="1234 5678 9012 3456"
        withAsterisk
        leftSection={<FiDollarSign />}
      />
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Expiry"
          placeholder="MM/YY"
          withAsterisk
        />
        <TextInput
          label="CVV"
          placeholder="123"
          withAsterisk
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Size Comparison with Icons
export const SizeComparisonWithIcons: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        size="xs"
        placeholder="Extra small"
        leftSection={<FiSearch />}
      />
      <TextInput
        size="sm"
        placeholder="Small"
        leftSection={<FiSearch />}
      />
      <TextInput
        size="md"
        placeholder="Medium"
        leftSection={<FiSearch />}
      />
      <TextInput
        size="lg"
        placeholder="Large"
        leftSection={<FiSearch />}
      />
      <TextInput
        size="xl"
        placeholder="Extra large"
        leftSection={<FiSearch />}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Variant Comparison
export const VariantComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Default vs Filled vs Unstyled
        </h3>
        <div className="w-96 space-y-4">
          <TextInput
            label="Default"
            placeholder="Default variant"
            variant="default"
            leftSection={<FiSearch />}
          />
          <TextInput
            label="Filled"
            placeholder="Filled variant"
            variant="filled"
            leftSection={<FiSearch />}
          />
          <TextInput
            label="Unstyled"
            placeholder="Unstyled variant"
            variant="unstyled"
            leftSection={<FiSearch />}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Hover and focus to see the different interactive states
        </p>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Interactive Demo
export const InteractiveValidation: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('')

    const emailError =
      email && !email.includes('@')
        ? 'Please enter a valid email address'
        : undefined

    const passwordError =
      password && password.length < 8
        ? 'Password must be at least 8 characters'
        : undefined

    return (
      <div className="w-96 space-y-4">
        <TextInput
          label="Email"
          placeholder="your@email.com"
          withAsterisk
          leftSection={<FiMail />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          rightSection={
            email && !emailError ? (
              <FiCheck className="text-green-500" />
            ) : undefined
          }
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter password"
          withAsterisk
          leftSection={<FiLock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          rightSection={
            password && !passwordError ? (
              <FiCheck className="text-green-500" />
            ) : undefined
          }
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
