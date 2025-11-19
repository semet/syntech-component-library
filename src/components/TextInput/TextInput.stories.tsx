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
  FiPercent,
  FiHash,
} from 'react-icons/fi'

import TextInput from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
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
    mode: {
      control: 'select',
      options: [
        'number',
        'alphabet',
        'alphanumeric',
        'currency',
        'decimal',
        'integer',
        'positive-number',
        'uppercase',
        'lowercase',
      ],
      description: 'Input mode for filtering and formatting',
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
    decimalPlaces: {
      control: 'number',
      description: 'Decimal places for currency and decimal modes',
    },
    allowNegative: {
      control: 'boolean',
      description: 'Allow negative numbers',
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

// Input Modes - Numeric
export const NumberMode: Story = {
  args: {
    label: 'Number',
    mode: 'number',
    placeholder: 'Enter any number',
    description: 'Accepts numbers with decimals and negatives (e.g., -123.45)',
  },
}

export const IntegerMode: Story = {
  args: {
    label: 'Integer',
    mode: 'integer',
    placeholder: 'Enter whole number',
    description: 'Only whole numbers, no decimals (e.g., -123)',
    leftSection: <FiHash />,
  },
}

export const PositiveNumberMode: Story = {
  args: {
    label: 'Positive Number',
    mode: 'positive-number',
    placeholder: 'Enter positive number',
    description: 'Only positive numbers (e.g., 123.45)',
  },
}

export const DecimalMode: Story = {
  args: {
    label: 'Decimal',
    mode: 'decimal',
    decimalPlaces: 4,
    placeholder: '0.0000',
    description: 'Precise decimals with up to 4 places',
  },
}

export const CurrencyMode: Story = {
  args: {
    label: 'Price',
    mode: 'currency',
    decimalPlaces: 2,
    placeholder: '0.00',
    description: 'Formatted with thousand separators',
    leftSection: <FiDollarSign />,
  },
}

// Input Modes - Text
export const AlphabetMode: Story = {
  args: {
    label: 'Name',
    mode: 'alphabet',
    placeholder: 'Enter letters only',
    description: 'Only letters (a-z, A-Z) and spaces',
    leftSection: <FiUser />,
  },
}

export const AlphanumericMode: Story = {
  args: {
    label: 'Username',
    mode: 'alphanumeric',
    placeholder: 'Enter letters and numbers',
    description: 'Letters, numbers, and spaces only',
    leftSection: <FiUser />,
  },
}

export const UppercaseMode: Story = {
  args: {
    label: 'Code',
    mode: 'uppercase',
    placeholder: 'ENTER CODE',
    description: 'Automatically converts to UPPERCASE',
  },
}

export const LowercaseMode: Story = {
  args: {
    label: 'Email',
    mode: 'lowercase',
    placeholder: 'enter email',
    description: 'Automatically converts to lowercase',
    leftSection: <FiMail />,
  },
}

// All Input Modes Showcase
export const AllInputModes: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Numeric Modes
        </h3>
        <div className="space-y-3">
          <TextInput
            label="Number"
            mode="number"
            placeholder="Any number"
            description="e.g., -123.45"
          />
          <TextInput
            label="Integer"
            mode="integer"
            placeholder="Whole numbers"
            description="e.g., -123"
          />
          <TextInput
            label="Positive Number"
            mode="positive-number"
            placeholder="Positive only"
            description="e.g., 123.45"
          />
          <TextInput
            label="Decimal"
            mode="decimal"
            decimalPlaces={4}
            placeholder="0.0000"
            description="4 decimal places"
          />
          <TextInput
            label="Currency"
            mode="currency"
            leftSection={<FiDollarSign />}
            placeholder="0.00"
            description="e.g., $1,234.56"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">Text Modes</h3>
        <div className="space-y-3">
          <TextInput
            label="Alphabet"
            mode="alphabet"
            placeholder="Letters only"
            description="a-z, A-Z, spaces"
          />
          <TextInput
            label="Alphanumeric"
            mode="alphanumeric"
            placeholder="Letters and numbers"
            description="a-z, A-Z, 0-9, spaces"
          />
          <TextInput
            label="Uppercase"
            mode="uppercase"
            placeholder="AUTO CAPS"
            description="Converts to UPPERCASE"
          />
          <TextInput
            label="Lowercase"
            mode="lowercase"
            placeholder="auto lowercase"
            description="Converts to lowercase"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
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
        mode="lowercase"
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
        mode="alphabet"
        leftSection={<FiUser />}
      />
      <TextInput
        label="Phone"
        placeholder="555-123-4567"
        mode="number"
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
        mode="alphanumeric"
        withAsterisk
        error="Username is required"
      />
      <TextInput
        label="Email"
        placeholder="your@email.com"
        mode="lowercase"
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
        mode="lowercase"
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
        mode="alphabet"
        withAsterisk
        leftSection={<FiUser />}
      />
      <TextInput
        label="Email"
        description="We'll never share your email with anyone else"
        placeholder="your@email.com"
        mode="lowercase"
        withAsterisk
        leftSection={<FiMail />}
      />
      <TextInput
        label="Phone"
        description="Optional, for account recovery"
        placeholder="555-123-4567"
        mode="number"
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
        mode="alphabet"
        leftSection={<FiUser />}
        value="John Doe"
      />
      <TextInput
        label="Email"
        description="This email is verified"
        placeholder="your@email.com"
        mode="lowercase"
        leftSection={<FiMail />}
        rightSection={<FiCheck className="text-green-500" />}
        value="john@example.com"
      />
      <TextInput
        label="Website"
        description="Your personal website or portfolio"
        placeholder="https://example.com"
        mode="lowercase"
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
        mode="alphabet"
        withAsterisk
        leftSection={<FiUser />}
      />
      <TextInput
        label="Card Number"
        placeholder="1234567890123456"
        mode="number"
        withAsterisk
        leftSection={<FiDollarSign />}
      />
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Expiry"
          placeholder="MM/YY"
          mode="number"
          withAsterisk
        />
        <TextInput
          label="CVV"
          placeholder="123"
          mode="number"
          withAsterisk
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Pricing Form Example
export const PricingForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <TextInput
        label="Product Price"
        mode="currency"
        decimalPlaces={2}
        placeholder="0.00"
        leftSection={<FiDollarSign />}
        description="Enter the product price"
      />
      <TextInput
        label="Discount Percentage"
        mode="positive-number"
        placeholder="0"
        rightSection={<FiPercent />}
        description="Optional discount (0-100)"
      />
      <TextInput
        label="Quantity"
        mode="integer"
        placeholder="1"
        description="Number of items"
      />
      <TextInput
        label="Tax Rate"
        mode="decimal"
        decimalPlaces={4}
        placeholder="0.0000"
        rightSection={<FiPercent />}
        description="Tax rate (e.g., 0.0825 for 8.25%)"
      />
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

// Interactive Demo with Input Modes
export const InteractiveValidation: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username, setUsername] = useState('')

    const emailError =
      email && !email.includes('@')
        ? 'Please enter a valid email address'
        : undefined

    const passwordError =
      password && password.length < 8
        ? 'Password must be at least 8 characters'
        : undefined

    const usernameError =
      username && username.length < 3
        ? 'Username must be at least 3 characters'
        : undefined

    return (
      <div className="w-96 space-y-4">
        <TextInput
          label="Username"
          placeholder="username123"
          mode="alphanumeric"
          withAsterisk
          leftSection={<FiUser />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
          rightSection={
            username && !usernameError ? (
              <FiCheck className="text-green-500" />
            ) : undefined
          }
        />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          mode="lowercase"
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

// Currency Formatting Demo
export const CurrencyFormattingDemo: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, setAmount] = useState('')

    return (
      <div className="w-96 space-y-4">
        <TextInput
          label="Enter Amount"
          mode="currency"
          decimalPlaces={2}
          leftSection={<FiDollarSign />}
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          description="Try typing: 1234567.89"
        />
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-xs text-gray-600">
            <strong>Display Value:</strong> {amount || '(empty)'}
          </p>
          <p className="text-xs text-gray-600">
            <strong>Raw Value:</strong>{' '}
            {amount ? amount.replaceAll(',', '') : '(empty)'}
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
