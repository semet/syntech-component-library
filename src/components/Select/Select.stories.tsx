import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  FiFilter,
  FiGlobe,
  FiUser,
  FiMapPin,
  FiShield,
  FiClock,
} from 'react-icons/fi'

import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
      description: 'Select variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Select size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    label: {
      control: 'text',
      description: 'Select label',
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
    withChevron: {
      control: 'boolean',
      description: 'Show chevron icon',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// Sample data
const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
]

const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
]

const statuses = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'archived', label: 'Archived' },
]

const roles = [
  { value: 'admin', label: 'Administrator' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
  { value: 'guest', label: 'Guest', disabled: true },
]

const timezones = [
  { value: 'est', label: 'Eastern Time (EST)' },
  { value: 'cst', label: 'Central Time (CST)' },
  { value: 'mst', label: 'Mountain Time (MST)' },
  { value: 'pst', label: 'Pacific Time (PST)' },
]

// Basic Stories
export const Default: Story = {
  args: {
    data: countries,
    placeholder: 'Select a country',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Country',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Country',
    description: 'Choose your country of residence',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const Required: Story = {
  args: {
    label: 'Priority Level',
    withAsterisk: true,
    data: priorities,
    placeholder: 'Select priority',
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    variant: 'default',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const Filled: Story = {
  args: {
    label: 'Filled Variant',
    variant: 'filled',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Variant',
    variant: 'unstyled',
    data: countries,
    placeholder: 'Select a country',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    size: 'xs',
    data: priorities,
    placeholder: 'Select priority',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
    data: priorities,
    placeholder: 'Select priority',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
    data: priorities,
    placeholder: 'Select priority',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
    data: priorities,
    placeholder: 'Select priority',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    size: 'xl',
    data: priorities,
    placeholder: 'Select priority',
  },
}

// Radius
export const RadiusXS: Story = {
  args: {
    label: 'XS Radius',
    radius: 'xs',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const RadiusSM: Story = {
  args: {
    label: 'SM Radius',
    radius: 'sm',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const RadiusMD: Story = {
  args: {
    label: 'MD Radius',
    radius: 'md',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const RadiusLG: Story = {
  args: {
    label: 'LG Radius',
    radius: 'lg',
    data: countries,
    placeholder: 'Select a country',
  },
}

export const RadiusXL: Story = {
  args: {
    label: 'XL Radius',
    radius: 'xl',
    data: countries,
    placeholder: 'Select a country',
  },
}

// With Icons
export const WithLeftIcon: Story = {
  args: {
    label: 'Filter',
    data: statuses,
    placeholder: 'Filter by status',
    leftSection: <FiFilter />,
  },
}

export const WithoutChevron: Story = {
  args: {
    label: 'No Chevron',
    data: priorities,
    placeholder: 'Select priority',
    withChevron: false,
  },
}

// States
export const WithError: Story = {
  args: {
    label: 'Country',
    data: countries,
    placeholder: 'Select a country',
    withAsterisk: true,
    error: 'Please select a country',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    data: countries,
    disabled: true,
    value: 'us',
  },
}

export const DisabledOptions: Story = {
  args: {
    label: 'User Role',
    description: 'Guest role is currently unavailable',
    data: roles,
    placeholder: 'Select a role',
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <Select
        label="Default"
        variant="default"
        data={countries}
        placeholder="Select a country"
      />
      <Select
        label="Filled"
        variant="filled"
        data={countries}
        placeholder="Select a country"
      />
      <Select
        label="Unstyled"
        variant="unstyled"
        data={countries}
        placeholder="Select a country"
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
      <Select
        size="xs"
        data={countries}
        placeholder="Extra small (xs)"
      />
      <Select
        size="sm"
        data={countries}
        placeholder="Small (sm)"
      />
      <Select
        size="md"
        data={countries}
        placeholder="Medium (md)"
      />
      <Select
        size="lg"
        data={countries}
        placeholder="Large (lg)"
      />
      <Select
        size="xl"
        data={countries}
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
      <Select
        radius="xs"
        data={countries}
        placeholder="XS radius"
      />
      <Select
        radius="sm"
        data={countries}
        placeholder="SM radius"
      />
      <Select
        radius="md"
        data={countries}
        placeholder="MD radius"
      />
      <Select
        radius="lg"
        data={countries}
        placeholder="LG radius"
      />
      <Select
        radius="xl"
        data={countries}
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
      <Select
        label="Filter"
        data={statuses}
        placeholder="Filter by status"
        leftSection={<FiFilter />}
      />
      <Select
        label="Country"
        data={countries}
        placeholder="Select country"
        leftSection={<FiGlobe />}
      />
      <Select
        label="User Role"
        data={roles}
        placeholder="Select role"
        leftSection={<FiUser />}
      />
      <Select
        label="Location"
        data={countries}
        placeholder="Select location"
        leftSection={<FiMapPin />}
      />
      <Select
        label="Security Level"
        data={priorities}
        placeholder="Select level"
        leftSection={<FiShield />}
      />
      <Select
        label="Timezone"
        data={timezones}
        placeholder="Select timezone"
        leftSection={<FiClock />}
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
      <Select
        label="Country"
        data={countries}
        placeholder="Select a country"
        withAsterisk
        error="Country is required"
      />
      <Select
        label="Priority"
        data={priorities}
        placeholder="Select priority"
        withAsterisk
        leftSection={<FiFilter />}
        error="Please select a priority level"
      />
      <Select
        label="Status"
        data={statuses}
        placeholder="Select status"
        withAsterisk
        leftSection={<FiShield />}
        error="Invalid status selection"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const RegistrationForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Select
        label="Country"
        description="Select your country of residence"
        data={countries}
        placeholder="Select a country"
        withAsterisk
        leftSection={<FiGlobe />}
      />
      <Select
        label="Timezone"
        description="Choose your preferred timezone"
        data={timezones}
        placeholder="Select timezone"
        withAsterisk
        leftSection={<FiClock />}
      />
      <Select
        label="Account Type"
        description="Choose your account type"
        data={[
          { value: 'personal', label: 'Personal' },
          { value: 'business', label: 'Business' },
          { value: 'enterprise', label: 'Enterprise' },
        ]}
        placeholder="Select account type"
        withAsterisk
        leftSection={<FiUser />}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const UserManagement: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Select
        label="User Role"
        description="Assign a role to this user"
        data={roles}
        placeholder="Select role"
        withAsterisk
        leftSection={<FiShield />}
      />
      <Select
        label="Status"
        description="Set the user's account status"
        data={statuses}
        placeholder="Select status"
        withAsterisk
        leftSection={<FiFilter />}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FilterForm: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <Select
          label="Status"
          data={statuses}
          placeholder="All statuses"
          leftSection={<FiFilter />}
          size="sm"
        />
        <Select
          label="Priority"
          data={priorities}
          placeholder="All priorities"
          leftSection={<FiFilter />}
          size="sm"
        />
        <Select
          label="Country"
          data={countries}
          placeholder="All countries"
          leftSection={<FiGlobe />}
          size="sm"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SettingsPanel: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Select
        label="Language"
        description="Choose your preferred language"
        data={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' },
        ]}
        value="en"
        leftSection={<FiGlobe />}
      />
      <Select
        label="Timezone"
        description="Your local timezone"
        data={timezones}
        value="est"
        leftSection={<FiClock />}
      />
      <Select
        label="Theme"
        description="Choose your interface theme"
        data={[
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'auto', label: 'Auto' },
        ]}
        value="light"
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
      <Select
        size="xs"
        data={countries}
        placeholder="Extra small"
        leftSection={<FiGlobe />}
      />
      <Select
        size="sm"
        data={countries}
        placeholder="Small"
        leftSection={<FiGlobe />}
      />
      <Select
        size="md"
        data={countries}
        placeholder="Medium"
        leftSection={<FiGlobe />}
      />
      <Select
        size="lg"
        data={countries}
        placeholder="Large"
        leftSection={<FiGlobe />}
      />
      <Select
        size="xl"
        data={countries}
        placeholder="Extra large"
        leftSection={<FiGlobe />}
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
          <Select
            label="Default"
            variant="default"
            data={countries}
            placeholder="Default variant"
            leftSection={<FiGlobe />}
          />
          <Select
            label="Filled"
            variant="filled"
            data={countries}
            placeholder="Filled variant"
            leftSection={<FiGlobe />}
          />
          <Select
            label="Unstyled"
            variant="unstyled"
            data={countries}
            placeholder="Unstyled variant"
            leftSection={<FiGlobe />}
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
    const [country, setCountry] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [priority, setPriority] = useState('')

    const countryError = country === '' ? 'Please select a country' : undefined
    const priorityError =
      priority === '' ? 'Please select a priority level' : undefined

    return (
      <div className="w-96 space-y-4">
        <Select
          label="Country"
          data={countries}
          placeholder="Select a country"
          withAsterisk
          leftSection={<FiGlobe />}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          error={countryError}
        />
        <Select
          label="Priority Level"
          data={priorities}
          placeholder="Select priority"
          withAsterisk
          leftSection={<FiFilter />}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          error={priorityError}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Custom Children Example
export const CustomChildren: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Select
        label="Category"
        placeholder="Select a category"
        leftSection={<FiFilter />}
      >
        <optgroup label="Electronics">
          <option value="phones">Phones</option>
          <option value="laptops">Laptops</option>
          <option value="tablets">Tablets</option>
        </optgroup>
        <optgroup label="Clothing">
          <option value="shirts">Shirts</option>
          <option value="pants">Pants</option>
          <option value="shoes">Shoes</option>
        </optgroup>
        <optgroup label="Books">
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Non-Fiction</option>
          <option value="textbooks">Textbooks</option>
        </optgroup>
      </Select>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// ClassNames Customization
export const CustomClassNames: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Select
        label="Styled Select"
        data={priorities}
        placeholder="Select priority"
        leftSection={<FiFilter />}
        classNames={{
          select: 'font-bold',
          chevron: 'text-blue-500',
          label: 'text-blue-600',
        }}
      />
      <Select
        label="Custom Colors"
        data={countries}
        placeholder="Select country"
        leftSection={<FiGlobe />}
        classNames={{
          select: 'border-purple-500 focus:border-purple-600',
          leftSection: 'text-purple-500',
          chevron: 'text-purple-500',
        }}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
