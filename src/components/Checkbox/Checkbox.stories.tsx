/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outline'],
      description: 'Checkbox variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Checkbox size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    label: {
      control: 'text',
      description: 'Checkbox label',
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
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (shows minus icon)',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Accept terms and conditions"
      />
    )
  },
}

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="I agree to the terms"
      />
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Email notifications"
        description="Receive email updates about your account activity"
      />
    )
  },
}

export const NoLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// Variants
export const DefaultVariant: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Default Variant"
        variant="default"
      />
    )
  },
}

export const FilledVariant: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Filled Variant"
        variant="filled"
      />
    )
  },
}

export const OutlineVariant: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Outline Variant"
        variant="outline"
      />
    )
  },
}

// Sizes
export const ExtraSmall: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Extra Small"
        size="xs"
      />
    )
  },
}

export const Small: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Small"
        size="sm"
      />
    )
  },
}

export const Medium: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Medium"
        size="md"
      />
    )
  },
}

export const Large: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Large"
        size="lg"
      />
    )
  },
}

export const ExtraLarge: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Extra Large"
        size="xl"
      />
    )
  },
}

// Radius
export const RadiusXS: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="XS Radius"
        radius="xs"
      />
    )
  },
}

export const RadiusSM: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="SM Radius"
        radius="sm"
      />
    )
  },
}

export const RadiusMD: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="MD Radius"
        radius="md"
      />
    )
  },
}

export const RadiusLG: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="LG Radius"
        radius="lg"
      />
    )
  },
}

export const RadiusXL: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="XL Radius"
        radius="xl"
      />
    )
  },
}

// States
export const WithError: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Terms and conditions"
        description="You must accept the terms to continue"
        error="Please accept the terms and conditions"
      />
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Disabled Checkbox"
        disabled
      />
    )
  },
}

export const DisabledUnchecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Disabled Unchecked"
        disabled
      />
    )
  },
}

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Select all items"
        description="Some items are selected"
        indeterminate
      />
    )
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)

    return (
      <div className="w-96 space-y-6">
        <Checkbox
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          label="Default"
          variant="default"
        />
        <Checkbox
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
          label="Filled"
          variant="filled"
        />
        <Checkbox
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          label="Outline"
          variant="outline"
        />
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
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          size="xs"
          label="Extra small (xs)"
        />
        <Checkbox
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
          size="sm"
          label="Small (sm)"
        />
        <Checkbox
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          size="md"
          label="Medium (md)"
        />
        <Checkbox
          checked={checked4}
          onChange={(e) => setChecked4(e.target.checked)}
          size="lg"
          label="Large (lg)"
        />
        <Checkbox
          checked={checked5}
          onChange={(e) => setChecked5(e.target.checked)}
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

// All Radius Showcase
export const AllRadius: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          radius="xs"
          label="XS radius"
        />
        <Checkbox
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
          radius="sm"
          label="SM radius"
        />
        <Checkbox
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          radius="md"
          label="MD radius"
        />
        <Checkbox
          checked={checked4}
          onChange={(e) => setChecked4(e.target.checked)}
          radius="lg"
          label="LG radius"
        />
        <Checkbox
          checked={checked5}
          onChange={(e) => setChecked5(e.target.checked)}
          radius="xl"
          label="XL radius"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Error States Showcase
export const ErrorStates: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)

    return (
      <div className="w-96 space-y-6">
        <Checkbox
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          label="Terms and Conditions"
          error="You must accept the terms"
        />
        <Checkbox
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
          label="Privacy Policy"
          description="Read our privacy policy carefully"
          error="Please accept our privacy policy"
        />
        <Checkbox
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          label="Age Verification"
          error="You must confirm you are over 18"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const TermsAndConditions: Story = {
  render: () => {
    const [terms, setTerms] = useState(false)
    const [privacy, setPrivacy] = useState(false)
    const [marketing, setMarketing] = useState(false)

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
          label="I accept the Terms and Conditions"
          description="You must accept the terms to create an account"
          error={terms ? undefined : 'Required'}
        />
        <Checkbox
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          label="I accept the Privacy Policy"
          description="We take your privacy seriously"
          error={privacy ? undefined : 'Required'}
        />
        <Checkbox
          checked={marketing}
          onChange={(e) => setMarketing(e.target.checked)}
          label="Send me marketing emails"
          description="Get updates about new features and promotions"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const NotificationSettings: Story = {
  render: () => {
    const [email, setEmail] = useState(true)
    const [push, setPush] = useState(true)
    const [sms, setSms] = useState(false)
    const [updates, setUpdates] = useState(true)

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={email}
          onChange={(e) => setEmail(e.target.checked)}
          label="Email notifications"
          description="Receive notifications via email"
        />
        <Checkbox
          checked={push}
          onChange={(e) => setPush(e.target.checked)}
          label="Push notifications"
          description="Get push notifications on your device"
        />
        <Checkbox
          checked={sms}
          onChange={(e) => setSms(e.target.checked)}
          label="SMS notifications"
          description="Receive text messages for important updates"
        />
        <Checkbox
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
          label="Product updates"
          description="Stay informed about new features"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const TaskList: Story = {
  render: () => {
    const [task1, setTask1] = useState(true)
    const [task2, setTask2] = useState(false)
    const [task3, setTask3] = useState(false)
    const [task4, setTask4] = useState(true)

    return (
      <div className="w-96 space-y-3">
        <Checkbox
          checked={task1}
          onChange={(e) => setTask1(e.target.checked)}
          label="Complete project documentation"
          size="md"
        />
        <Checkbox
          checked={task2}
          onChange={(e) => setTask2(e.target.checked)}
          label="Review pull requests"
          size="md"
        />
        <Checkbox
          checked={task3}
          onChange={(e) => setTask3(e.target.checked)}
          label="Update dependencies"
          size="md"
        />
        <Checkbox
          checked={task4}
          onChange={(e) => setTask4(e.target.checked)}
          label="Write unit tests"
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const Preferences: Story = {
  render: () => {
    const [darkMode, setDarkMode] = useState(false)
    const [autoSave, setAutoSave] = useState(true)
    const [animations, setAnimations] = useState(true)
    const [sounds, setSounds] = useState(false)

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
          label="Dark mode"
          description="Use dark theme for the interface"
        />
        <Checkbox
          checked={autoSave}
          onChange={(e) => setAutoSave(e.target.checked)}
          label="Auto-save"
          description="Automatically save your changes"
        />
        <Checkbox
          checked={animations}
          onChange={(e) => setAnimations(e.target.checked)}
          label="Enable animations"
          description="Show smooth transitions and effects"
        />
        <Checkbox
          checked={sounds}
          onChange={(e) => setSounds(e.target.checked)}
          label="Sound effects"
          description="Play sounds for notifications and actions"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Select All Pattern
export const SelectAllPattern: Story = {
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false,
      item4: false,
    })

    const allChecked = Object.values(items).every(Boolean)
    const someChecked = Object.values(items).some(Boolean)
    const isIndeterminate = someChecked && !allChecked

    const handleSelectAll = (checked: boolean) => {
      setItems({
        item1: checked,
        item2: checked,
        item3: checked,
        item4: checked,
      })
    }

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={allChecked}
          onChange={(e) => handleSelectAll(e.target.checked)}
          label="Select all items"
          indeterminate={isIndeterminate}
          size="md"
        />
        <div className="ml-6 space-y-3 border-l-2 border-gray-200 pl-4">
          <Checkbox
            checked={items.item1}
            onChange={(e) => setItems({ ...items, item1: e.target.checked })}
            label="Item 1"
          />
          <Checkbox
            checked={items.item2}
            onChange={(e) => setItems({ ...items, item2: e.target.checked })}
            label="Item 2"
          />
          <Checkbox
            checked={items.item3}
            onChange={(e) => setItems({ ...items, item3: e.target.checked })}
            label="Item 3"
          />
          <Checkbox
            checked={items.item4}
            onChange={(e) => setItems({ ...items, item4: e.target.checked })}
            label="Item 4"
          />
        </div>
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
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)

    return (
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-700">
            Default vs Filled vs Outline
          </h3>
          <div className="w-96 space-y-4">
            <Checkbox
              checked={checked1}
              onChange={(e) => setChecked1(e.target.checked)}
              label="Default variant"
              variant="default"
            />
            <Checkbox
              checked={checked2}
              onChange={(e) => setChecked2(e.target.checked)}
              label="Filled variant"
              variant="filled"
            />
            <Checkbox
              checked={checked3}
              onChange={(e) => setChecked3(e.target.checked)}
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
    const [checked1, setChecked1] = useState(true)
    const [checked2, setChecked2] = useState(true)
    const [checked3, setChecked3] = useState(true)
    const [checked4, setChecked4] = useState(true)
    const [checked5, setChecked5] = useState(true)

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          size="xs"
          label="Extra small checkbox"
        />
        <Checkbox
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
          size="sm"
          label="Small checkbox"
        />
        <Checkbox
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          size="md"
          label="Medium checkbox"
        />
        <Checkbox
          checked={checked4}
          onChange={(e) => setChecked4(e.target.checked)}
          size="lg"
          label="Large checkbox"
        />
        <Checkbox
          checked={checked5}
          onChange={(e) => setChecked5(e.target.checked)}
          size="xl"
          label="Extra large checkbox"
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
      <Checkbox
        checked={false}
        onChange={() => {}}
        label="Disabled unchecked"
        disabled
      />
      <Checkbox
        checked={true}
        onChange={() => {}}
        label="Disabled checked"
        disabled
      />
      <Checkbox
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
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)

    return (
      <div className="w-96 space-y-4">
        <Checkbox
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          label="Styled Checkbox"
          classNames={{
            label: 'font-bold text-blue-600',
            checkboxDisplay: 'border-2',
          }}
        />
        <Checkbox
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
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
