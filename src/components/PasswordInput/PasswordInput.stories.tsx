import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import PasswordInput from './PasswordInput'

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
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
    togglePosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the visibility toggle button',
    },
    showToggle: {
      control: 'boolean',
      description: 'Show or hide visibility toggle button',
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
    visible: {
      control: 'boolean',
      description: 'Controlled visibility state',
    },
    defaultVisible: {
      control: 'boolean',
      description: 'Default visibility state (uncontrolled)',
    },
  },
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    placeholder: 'Enter password',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Password',
    description: 'Password must be at least 8 characters',
    placeholder: 'Enter your password',
  },
}

export const Required: Story = {
  args: {
    label: 'Password',
    withAsterisk: true,
    placeholder: 'Enter your password',
  },
}

// Toggle Position
export const ToggleRight: Story = {
  args: {
    label: 'Password (Toggle Right)',
    placeholder: 'Enter password',
    togglePosition: 'right',
  },
}

export const ToggleLeft: Story = {
  args: {
    label: 'Password (Toggle Left)',
    placeholder: 'Enter password',
    togglePosition: 'left',
  },
}

export const WithoutToggle: Story = {
  args: {
    label: 'Password (No Toggle)',
    placeholder: 'Enter password',
    showToggle: false,
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    placeholder: 'Default password input',
    variant: 'default',
  },
}

export const Filled: Story = {
  args: {
    label: 'Filled Variant',
    placeholder: 'Filled password input',
    variant: 'filled',
  },
}

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Variant',
    placeholder: 'Unstyled password input',
    variant: 'unstyled',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    placeholder: 'Extra small password',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    placeholder: 'Small password',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    placeholder: 'Medium password',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    placeholder: 'Large password',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    placeholder: 'Extra large password',
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

// States
export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    withAsterisk: true,
    error: 'Password must be at least 8 characters',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Password',
    placeholder: 'You cannot edit this',
    disabled: true,
    value: 'DisabledPassword123',
  },
}

export const DefaultVisible: Story = {
  args: {
    label: 'Password (Visible by Default)',
    placeholder: 'Enter your password',
    defaultVisible: true,
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <PasswordInput
        label="Default"
        placeholder="Default variant"
        variant="default"
      />
      <PasswordInput
        label="Filled"
        placeholder="Filled variant"
        variant="filled"
      />
      <PasswordInput
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
      <PasswordInput
        size="xs"
        placeholder="Extra small (xs)"
      />
      <PasswordInput
        size="sm"
        placeholder="Small (sm)"
      />
      <PasswordInput
        size="md"
        placeholder="Medium (md)"
      />
      <PasswordInput
        size="lg"
        placeholder="Large (lg)"
      />
      <PasswordInput
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
      <PasswordInput
        radius="xs"
        placeholder="XS radius"
      />
      <PasswordInput
        radius="sm"
        placeholder="SM radius"
      />
      <PasswordInput
        radius="md"
        placeholder="MD radius"
      />
      <PasswordInput
        radius="lg"
        placeholder="LG radius"
      />
      <PasswordInput
        radius="xl"
        placeholder="XL radius"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Toggle Position Showcase
export const TogglePositions: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <PasswordInput
        label="Toggle Right (Default)"
        placeholder="Enter password"
        togglePosition="right"
      />
      <PasswordInput
        label="Toggle Left"
        placeholder="Enter password"
        togglePosition="left"
      />
      <PasswordInput
        label="No Toggle"
        placeholder="Enter password"
        showToggle={false}
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
      <PasswordInput
        label="Password"
        placeholder="Enter password"
        withAsterisk
        error="Password is required"
      />
      <PasswordInput
        label="New Password"
        placeholder="Enter new password"
        withAsterisk
        error="Password must be at least 8 characters"
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        withAsterisk
        error="Passwords do not match"
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
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        withAsterisk
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
      <PasswordInput
        label="Password"
        description="Must be at least 8 characters with numbers and symbols"
        placeholder="Create a password"
        withAsterisk
      />
      <PasswordInput
        label="Confirm Password"
        description="Re-enter your password"
        placeholder="Confirm your password"
        withAsterisk
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ChangePasswordForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <PasswordInput
        label="Current Password"
        placeholder="Enter current password"
        withAsterisk
      />
      <PasswordInput
        label="New Password"
        description="Must be at least 8 characters"
        placeholder="Enter new password"
        withAsterisk
      />
      <PasswordInput
        label="Confirm New Password"
        placeholder="Confirm new password"
        withAsterisk
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SecuritySettings: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <PasswordInput
        label="Master Password"
        description="Your master password for all accounts"
        placeholder="Enter master password"
        withAsterisk
        variant="filled"
      />
      <PasswordInput
        label="PIN Code"
        description="4-digit PIN for quick access"
        placeholder="Enter 4-digit PIN"
        maxLength={4}
        variant="filled"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Size Comparison with Toggle
export const SizeComparisonWithToggle: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <PasswordInput
        size="xs"
        placeholder="Extra small"
      />
      <PasswordInput
        size="sm"
        placeholder="Small"
      />
      <PasswordInput
        size="md"
        placeholder="Medium"
      />
      <PasswordInput
        size="lg"
        placeholder="Large"
      />
      <PasswordInput
        size="xl"
        placeholder="Extra large"
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
          <PasswordInput
            label="Default"
            placeholder="Default variant"
            variant="default"
          />
          <PasswordInput
            label="Filled"
            placeholder="Filled variant"
            variant="filled"
          />
          <PasswordInput
            label="Unstyled"
            placeholder="Unstyled variant"
            variant="unstyled"
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
    const [password, setPassword] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [confirmPassword, setConfirmPassword] = useState('')

    const passwordError =
      password && password.length < 8
        ? 'Password must be at least 8 characters'
        : password && !/[0-9]/.test(password)
          ? 'Password must contain at least one number'
          : password && !/[!@#$%^&*]/.test(password)
            ? 'Password must contain at least one special character'
            : undefined

    const confirmError =
      confirmPassword && confirmPassword !== password
        ? 'Passwords do not match'
        : undefined

    return (
      <div className="w-96 space-y-4">
        <PasswordInput
          label="Password"
          description="Must be at least 8 characters with numbers and special characters"
          placeholder="Create a password"
          withAsterisk
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          withAsterisk
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={confirmError}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Controlled Visibility
export const ControlledVisibility: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [visible, setVisible] = useState(false)

    return (
      <div className="w-96 space-y-4">
        <PasswordInput
          label="Controlled Password"
          description={`Password is currently ${visible ? 'visible' : 'hidden'}`}
          placeholder="Enter password"
          visible={visible}
          onVisibilityChange={setVisible}
        />
        <button
          onClick={() => setVisible(!visible)}
          className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
        >
          {visible ? 'Hide' : 'Show'} Password
        </button>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Password Strength Indicator
export const PasswordStrengthIndicator: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('')

    const getStrength = (pwd: string) => {
      if (pwd.length === 0) return { strength: 0, label: '', color: '' }
      if (pwd.length < 6)
        return { strength: 1, label: 'Weak', color: 'bg-red-500' }
      if (pwd.length < 8)
        return { strength: 2, label: 'Fair', color: 'bg-orange-500' }
      if (pwd.length < 12 && /[0-9]/.test(pwd))
        return { strength: 3, label: 'Good', color: 'bg-yellow-500' }
      if (pwd.length >= 12 && /[0-9]/.test(pwd) && /[!@#$%^&*]/.test(pwd))
        return { strength: 4, label: 'Strong', color: 'bg-green-500' }
      return { strength: 3, label: 'Good', color: 'bg-yellow-500' }
    }

    const strength = getStrength(password)

    return (
      <div className="w-96 space-y-2">
        <PasswordInput
          label="Password"
          description="Create a strong password"
          placeholder="Enter password"
          withAsterisk
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && (
          <div className="space-y-1">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`h-1 flex-1 rounded ${
                    level <= strength.strength ? strength.color : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-600">
              Strength: <span className="font-medium">{strength.label}</span>
            </p>
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
