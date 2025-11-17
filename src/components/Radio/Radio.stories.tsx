/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import Radio from './Radio'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outline'],
      description: 'Radio variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Radio size',
    },
    label: {
      control: 'text',
      description: 'Radio label',
    },
    description: {
      control: 'text',
      description: 'Description text below label',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1')
    return (
      <div className="space-y-3">
        <Radio
          name="default-group"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 1"
        />
        <Radio
          name="default-group"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
        />
        <Radio
          name="default-group"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 3"
        />
      </div>
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const [selected, setSelected] = useState('standard')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="plan-group"
          value="standard"
          checked={selected === 'standard'}
          onChange={(e) => setSelected(e.target.value)}
          label="Standard Plan"
          description="Perfect for individuals and small teams"
        />
        <Radio
          name="plan-group"
          value="pro"
          checked={selected === 'pro'}
          onChange={(e) => setSelected(e.target.value)}
          label="Pro Plan"
          description="Advanced features for growing businesses"
        />
        <Radio
          name="plan-group"
          value="enterprise"
          checked={selected === 'enterprise'}
          onChange={(e) => setSelected(e.target.value)}
          label="Enterprise Plan"
          description="Custom solutions for large organizations"
        />
      </div>
    )
  },
}

export const NoLabel: Story = {
  render: () => {
    const [selected, setSelected] = useState('1')
    return (
      <div className="flex gap-4">
        <Radio
          name="no-label-group"
          value="1"
          checked={selected === '1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          name="no-label-group"
          value="2"
          checked={selected === '2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          name="no-label-group"
          value="3"
          checked={selected === '3'}
          onChange={(e) => setSelected(e.target.value)}
        />
      </div>
    )
  },
}

// Variants
export const DefaultVariant: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1')
    return (
      <div className="space-y-3">
        <Radio
          name="default-variant"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Default Variant"
          variant="default"
        />
        <Radio
          name="default-variant"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Another Option"
          variant="default"
        />
      </div>
    )
  },
}

export const FilledVariant: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1')
    return (
      <div className="space-y-3">
        <Radio
          name="filled-variant"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Filled Variant"
          variant="filled"
        />
        <Radio
          name="filled-variant"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Another Option"
          variant="filled"
        />
      </div>
    )
  },
}

export const OutlineVariant: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1')
    return (
      <div className="space-y-3">
        <Radio
          name="outline-variant"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Outline Variant"
          variant="outline"
        />
        <Radio
          name="outline-variant"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Another Option"
          variant="outline"
        />
      </div>
    )
  },
}

// Sizes
export const ExtraSmall: Story = {
  render: () => {
    const [selected, setSelected] = useState('xs1')
    return (
      <div className="space-y-3">
        <Radio
          name="xs-group"
          value="xs1"
          checked={selected === 'xs1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Extra Small"
          size="xs"
        />
        <Radio
          name="xs-group"
          value="xs2"
          checked={selected === 'xs2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
          size="xs"
        />
      </div>
    )
  },
}

export const Small: Story = {
  render: () => {
    const [selected, setSelected] = useState('sm1')
    return (
      <div className="space-y-3">
        <Radio
          name="sm-group"
          value="sm1"
          checked={selected === 'sm1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Small"
          size="sm"
        />
        <Radio
          name="sm-group"
          value="sm2"
          checked={selected === 'sm2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
          size="sm"
        />
      </div>
    )
  },
}

export const Medium: Story = {
  render: () => {
    const [selected, setSelected] = useState('md1')
    return (
      <div className="space-y-3">
        <Radio
          name="md-group"
          value="md1"
          checked={selected === 'md1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Medium"
          size="md"
        />
        <Radio
          name="md-group"
          value="md2"
          checked={selected === 'md2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
          size="md"
        />
      </div>
    )
  },
}

export const Large: Story = {
  render: () => {
    const [selected, setSelected] = useState('lg1')
    return (
      <div className="space-y-3">
        <Radio
          name="lg-group"
          value="lg1"
          checked={selected === 'lg1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Large"
          size="lg"
        />
        <Radio
          name="lg-group"
          value="lg2"
          checked={selected === 'lg2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
          size="lg"
        />
      </div>
    )
  },
}

export const ExtraLarge: Story = {
  render: () => {
    const [selected, setSelected] = useState('xl1')
    return (
      <div className="space-y-3">
        <Radio
          name="xl-group"
          value="xl1"
          checked={selected === 'xl1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Extra Large"
          size="xl"
        />
        <Radio
          name="xl-group"
          value="xl2"
          checked={selected === 'xl2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
          size="xl"
        />
      </div>
    )
  },
}

// States
export const WithError: Story = {
  render: () => {
    const [selected, setSelected] = useState('')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="error-group"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 1"
          error={selected ? undefined : 'Please select an option'}
        />
        <Radio
          name="error-group"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
          error={selected ? undefined : 'Please select an option'}
        />
        <Radio
          name="error-group"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 3"
          error={selected ? undefined : 'Please select an option'}
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio
        name="disabled-group"
        value="disabled1"
        checked={true}
        onChange={() => {}}
        label="Disabled Checked"
        disabled
      />
      <Radio
        name="disabled-group"
        value="disabled2"
        checked={false}
        onChange={() => {}}
        label="Disabled Unchecked"
        disabled
      />
      <Radio
        name="disabled-group"
        value="disabled3"
        checked={false}
        onChange={() => {}}
        label="Disabled with Description"
        description="This option is not available"
        disabled
      />
    </div>
  ),
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => {
    const [selected1, setSelected1] = useState('default1')
    const [selected2, setSelected2] = useState('filled1')
    const [selected3, setSelected3] = useState('outline1')

    return (
      <div className="w-96 space-y-8">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-700">Default</h3>
          <div className="space-y-3">
            <Radio
              name="variant-default"
              value="default1"
              checked={selected1 === 'default1'}
              onChange={(e) => setSelected1(e.target.value)}
              label="Option 1"
              variant="default"
            />
            <Radio
              name="variant-default"
              value="default2"
              checked={selected1 === 'default2'}
              onChange={(e) => setSelected1(e.target.value)}
              label="Option 2"
              variant="default"
            />
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-700">Filled</h3>
          <div className="space-y-3">
            <Radio
              name="variant-filled"
              value="filled1"
              checked={selected2 === 'filled1'}
              onChange={(e) => setSelected2(e.target.value)}
              label="Option 1"
              variant="filled"
            />
            <Radio
              name="variant-filled"
              value="filled2"
              checked={selected2 === 'filled2'}
              onChange={(e) => setSelected2(e.target.value)}
              label="Option 2"
              variant="filled"
            />
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-700">Outline</h3>
          <div className="space-y-3">
            <Radio
              name="variant-outline"
              value="outline1"
              checked={selected3 === 'outline1'}
              onChange={(e) => setSelected3(e.target.value)}
              label="Option 1"
              variant="outline"
            />
            <Radio
              name="variant-outline"
              value="outline2"
              checked={selected3 === 'outline2'}
              onChange={(e) => setSelected3(e.target.value)}
              label="Option 2"
              variant="outline"
            />
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => {
    const [selected, setSelected] = useState('sm')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="size-group"
          value="xs"
          checked={selected === 'xs'}
          onChange={(e) => setSelected(e.target.value)}
          size="xs"
          label="Extra small (xs)"
        />
        <Radio
          name="size-group"
          value="sm"
          checked={selected === 'sm'}
          onChange={(e) => setSelected(e.target.value)}
          size="sm"
          label="Small (sm)"
        />
        <Radio
          name="size-group"
          value="md"
          checked={selected === 'md'}
          onChange={(e) => setSelected(e.target.value)}
          size="md"
          label="Medium (md)"
        />
        <Radio
          name="size-group"
          value="lg"
          checked={selected === 'lg'}
          onChange={(e) => setSelected(e.target.value)}
          size="lg"
          label="Large (lg)"
        />
        <Radio
          name="size-group"
          value="xl"
          checked={selected === 'xl'}
          onChange={(e) => setSelected(e.target.value)}
          size="xl"
          label="Extra large (xl)"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const PaymentMethod: Story = {
  render: () => {
    const [payment, setPayment] = useState('credit')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="payment"
          value="credit"
          checked={payment === 'credit'}
          onChange={(e) => setPayment(e.target.value)}
          label="Credit Card"
          description="Pay with Visa, Mastercard, or Amex"
          size="md"
        />
        <Radio
          name="payment"
          value="debit"
          checked={payment === 'debit'}
          onChange={(e) => setPayment(e.target.value)}
          label="Debit Card"
          description="Direct payment from your bank account"
          size="md"
        />
        <Radio
          name="payment"
          value="paypal"
          checked={payment === 'paypal'}
          onChange={(e) => setPayment(e.target.value)}
          label="PayPal"
          description="Fast and secure payment with PayPal"
          size="md"
        />
        <Radio
          name="payment"
          value="crypto"
          checked={payment === 'crypto'}
          onChange={(e) => setPayment(e.target.value)}
          label="Cryptocurrency"
          description="Pay with Bitcoin or Ethereum"
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ShippingOptions: Story = {
  render: () => {
    const [shipping, setShipping] = useState('standard')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="shipping"
          value="standard"
          checked={shipping === 'standard'}
          onChange={(e) => setShipping(e.target.value)}
          label="Standard Shipping - Free"
          description="Delivery in 5-7 business days"
        />
        <Radio
          name="shipping"
          value="express"
          checked={shipping === 'express'}
          onChange={(e) => setShipping(e.target.value)}
          label="Express Shipping - $9.99"
          description="Delivery in 2-3 business days"
        />
        <Radio
          name="shipping"
          value="overnight"
          checked={shipping === 'overnight'}
          onChange={(e) => setShipping(e.target.value)}
          label="Overnight Shipping - $24.99"
          description="Next business day delivery"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const SubscriptionPlans: Story = {
  render: () => {
    const [plan, setPlan] = useState('monthly')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="subscription"
          value="monthly"
          checked={plan === 'monthly'}
          onChange={(e) => setPlan(e.target.value)}
          label="Monthly - $9.99/month"
          description="Billed monthly, cancel anytime"
          size="md"
          variant="filled"
        />
        <Radio
          name="subscription"
          value="yearly"
          checked={plan === 'yearly'}
          onChange={(e) => setPlan(e.target.value)}
          label="Yearly - $99/year"
          description="Save 17% with annual billing"
          size="md"
          variant="filled"
        />
        <Radio
          name="subscription"
          value="lifetime"
          checked={plan === 'lifetime'}
          onChange={(e) => setPlan(e.target.value)}
          label="Lifetime - $299 once"
          description="One-time payment, lifetime access"
          size="md"
          variant="filled"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const NotificationFrequency: Story = {
  render: () => {
    const [frequency, setFrequency] = useState('daily')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="frequency"
          value="realtime"
          checked={frequency === 'realtime'}
          onChange={(e) => setFrequency(e.target.value)}
          label="Real-time"
          description="Get notified immediately"
        />
        <Radio
          name="frequency"
          value="hourly"
          checked={frequency === 'hourly'}
          onChange={(e) => setFrequency(e.target.value)}
          label="Hourly"
          description="Digest every hour"
        />
        <Radio
          name="frequency"
          value="daily"
          checked={frequency === 'daily'}
          onChange={(e) => setFrequency(e.target.value)}
          label="Daily"
          description="One digest per day"
        />
        <Radio
          name="frequency"
          value="weekly"
          checked={frequency === 'weekly'}
          onChange={(e) => setFrequency(e.target.value)}
          label="Weekly"
          description="Weekly summary"
        />
        <Radio
          name="frequency"
          value="never"
          checked={frequency === 'never'}
          onChange={(e) => setFrequency(e.target.value)}
          label="Never"
          description="Turn off notifications"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const PrivacySettings: Story = {
  render: () => {
    const [privacy, setPrivacy] = useState('friends')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="privacy"
          value="public"
          checked={privacy === 'public'}
          onChange={(e) => setPrivacy(e.target.value)}
          label="Public"
          description="Anyone can see your profile"
          variant="outline"
        />
        <Radio
          name="privacy"
          value="friends"
          checked={privacy === 'friends'}
          onChange={(e) => setPrivacy(e.target.value)}
          label="Friends Only"
          description="Only your friends can see your profile"
          variant="outline"
        />
        <Radio
          name="privacy"
          value="private"
          checked={privacy === 'private'}
          onChange={(e) => setPrivacy(e.target.value)}
          label="Private"
          description="Only you can see your profile"
          variant="outline"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const AccountType: Story = {
  render: () => {
    const [type, setType] = useState('personal')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="account-type"
          value="personal"
          checked={type === 'personal'}
          onChange={(e) => setType(e.target.value)}
          label="Personal"
          description="For individual use"
          size="md"
        />
        <Radio
          name="account-type"
          value="business"
          checked={type === 'business'}
          onChange={(e) => setType(e.target.value)}
          label="Business"
          description="For small to medium businesses"
          size="md"
        />
        <Radio
          name="account-type"
          value="enterprise"
          checked={type === 'enterprise'}
          onChange={(e) => setType(e.target.value)}
          label="Enterprise"
          description="For large organizations"
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Variant Comparison
export const VariantComparison: Story = {
  render: () => {
    const [selected1, setSelected1] = useState('default')
    const [selected2, setSelected2] = useState('filled')
    const [selected3, setSelected3] = useState('outline')

    return (
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-700">
            Default vs Filled vs Outline
          </h3>
          <div className="w-96 space-y-4">
            <Radio
              name="compare-default"
              value="default"
              checked={selected1 === 'default'}
              onChange={(e) => setSelected1(e.target.value)}
              label="Default variant"
              variant="default"
            />
            <Radio
              name="compare-filled"
              value="filled"
              checked={selected2 === 'filled'}
              onChange={(e) => setSelected2(e.target.value)}
              label="Filled variant"
              variant="filled"
            />
            <Radio
              name="compare-outline"
              value="outline"
              checked={selected3 === 'outline'}
              onChange={(e) => setSelected3(e.target.value)}
              label="Outline variant"
              variant="outline"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Hover and focus to see the different interactive states
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Size Comparison
export const SizeComparison: Story = {
  render: () => {
    const [selected, setSelected] = useState('md')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="size-compare"
          value="xs"
          checked={selected === 'xs'}
          onChange={(e) => setSelected(e.target.value)}
          size="xs"
          label="Extra small radio"
        />
        <Radio
          name="size-compare"
          value="sm"
          checked={selected === 'sm'}
          onChange={(e) => setSelected(e.target.value)}
          size="sm"
          label="Small radio"
        />
        <Radio
          name="size-compare"
          value="md"
          checked={selected === 'md'}
          onChange={(e) => setSelected(e.target.value)}
          size="md"
          label="Medium radio"
        />
        <Radio
          name="size-compare"
          value="lg"
          checked={selected === 'lg'}
          onChange={(e) => setSelected(e.target.value)}
          size="lg"
          label="Large radio"
        />
        <Radio
          name="size-compare"
          value="xl"
          checked={selected === 'xl'}
          onChange={(e) => setSelected(e.target.value)}
          size="xl"
          label="Extra large radio"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Error States
export const ErrorStates: Story = {
  render: () => {
    const [selected, setSelected] = useState('')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="error-state"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 1"
          error={selected ? undefined : 'Please select an option'}
        />
        <Radio
          name="error-state"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 2"
          error={selected ? undefined : 'Please select an option'}
        />
        <Radio
          name="error-state"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
          label="Option 3"
          error={selected ? undefined : 'Please select an option'}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Disabled States
export const DisabledStates: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Radio
        name="disabled-states"
        value="disabled1"
        checked={false}
        onChange={() => {}}
        label="Disabled unchecked"
        disabled
      />
      <Radio
        name="disabled-states"
        value="disabled2"
        checked={true}
        onChange={() => {}}
        label="Disabled checked"
        disabled
      />
      <Radio
        name="disabled-states"
        value="disabled3"
        checked={false}
        onChange={() => {}}
        label="Disabled with description"
        description="This option is not available"
        disabled
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Custom ClassNames
export const CustomClassNames: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1')
    return (
      <div className="w-96 space-y-4">
        <Radio
          name="custom-class"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
          label="Styled Radio"
          classNames={{
            label: 'font-bold text-blue-600',
          }}
        />
        <Radio
          name="custom-class"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
          label="Custom Colors"
          description="Using custom class names"
          classNames={{
            label: 'text-purple-600',
            description: 'text-purple-400',
          }}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Interactive Form
export const InteractiveForm: Story = {
  render: () => {
    const [plan, setPlan] = useState('')
    const [billing, setBilling] = useState('')
    const [addons, setAddons] = useState('')

    const hasError = !plan || !billing

    return (
      <div className="w-96 space-y-6">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Choose your plan
          </h3>
          <div className="space-y-3">
            <Radio
              name="plan"
              value="starter"
              checked={plan === 'starter'}
              onChange={(e) => setPlan(e.target.value)}
              label="Starter - $9/month"
              description="Perfect for individuals"
              error={plan ? undefined : 'Please select a plan'}
            />
            <Radio
              name="plan"
              value="pro"
              checked={plan === 'pro'}
              onChange={(e) => setPlan(e.target.value)}
              label="Pro - $29/month"
              description="Great for small teams"
              error={plan ? undefined : 'Please select a plan'}
            />
            <Radio
              name="plan"
              value="enterprise"
              checked={plan === 'enterprise'}
              onChange={(e) => setPlan(e.target.value)}
              label="Enterprise - Custom"
              description="For large organizations"
              error={plan ? undefined : 'Please select a plan'}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Billing cycle
          </h3>
          <div className="space-y-3">
            <Radio
              name="billing"
              value="monthly"
              checked={billing === 'monthly'}
              onChange={(e) => setBilling(e.target.value)}
              label="Monthly"
              description="Pay month to month"
              error={billing ? undefined : 'Please select billing cycle'}
            />
            <Radio
              name="billing"
              value="yearly"
              checked={billing === 'yearly'}
              onChange={(e) => setBilling(e.target.value)}
              label="Yearly (Save 20%)"
              description="Best value"
              error={billing ? undefined : 'Please select billing cycle'}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Add-ons (optional)
          </h3>
          <div className="space-y-3">
            <Radio
              name="addons"
              value="none"
              checked={addons === 'none'}
              onChange={(e) => setAddons(e.target.value)}
              label="No add-ons"
            />
            <Radio
              name="addons"
              value="support"
              checked={addons === 'support'}
              onChange={(e) => setAddons(e.target.value)}
              label="Priority Support - $10/month"
            />
            <Radio
              name="addons"
              value="bundle"
              checked={addons === 'bundle'}
              onChange={(e) => setAddons(e.target.value)}
              label="Complete Bundle - $20/month"
            />
          </div>
        </div>

        {hasError && (
          <div className="text-sm text-red-600">
            Please complete all required fields
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
