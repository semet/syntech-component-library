import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FiHeart,
  FiSettings,
  FiSend,
  FiDownload,
  FiTrash2,
  FiPlus,
} from 'react-icons/fi'

import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'light', 'subtle', 'text', 'gradient'],
      description: 'Button variant style',
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'danger',
        'dark',
        'gray',
      ],
      description: 'Button color theme',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
    compact: {
      control: 'boolean',
      description: 'Compact padding',
    },
    withRing: {
      control: 'boolean',
      description: 'Show focus ring on focus',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'primary',
    variant: 'filled',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: 'secondary',
    variant: 'filled',
  },
}

export const Success: Story = {
  args: {
    children: 'Success Button',
    color: 'success',
    variant: 'filled',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    color: 'danger',
    variant: 'filled',
  },
}

// Variants
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    color: 'primary',
  },
}

export const Light: Story = {
  args: {
    children: 'Light Button',
    variant: 'light',
    color: 'primary',
  },
}

export const Subtle: Story = {
  args: {
    children: 'Subtle Button',
    variant: 'subtle',
    color: 'primary',
  },
}

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    color: 'primary',
  },
}

export const Gradient: Story = {
  args: {
    children: 'Gradient Button',
    variant: 'gradient',
    color: 'primary',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large',
    size: 'xl',
  },
}

// Radius
export const RadiusNone: Story = {
  args: {
    children: 'No Radius',
    radius: 'none',
  },
}

export const RadiusFull: Story = {
  args: {
    children: 'Full Radius',
    radius: 'full',
  },
}

// With Icons
export const WithLeftIcon: Story = {
  args: {
    children: 'Send Message',
    leftSection: <FiSend />,
  },
}

export const WithRightIcon: Story = {
  args: {
    children: 'Download',
    rightSection: <FiDownload />,
    color: 'success',
  },
}

export const WithBothIcons: Story = {
  args: {
    children: 'Settings',
    leftSection: <FiSettings />,
    rightSection: <FiHeart />,
    variant: 'outline',
  },
}

export const IconOnly: Story = {
  args: {
    leftSection: <FiHeart />,
    compact: true,
    color: 'danger',
  },
}

export const IconOnlyCircle: Story = {
  args: {
    leftSection: <FiPlus />,
    compact: true,
    radius: 'full',
  },
}

// States
export const Loading: Story = {
  args: {
    children: 'Loading',
    loading: true,
  },
}

export const LoadingWithIcon: Story = {
  args: {
    children: 'Downloading...',
    loading: true,
    leftSection: <FiDownload />,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

export const Compact: Story = {
  args: {
    children: 'Compact Button',
    compact: true,
  },
}

// Polymorphic
export const AsLink: Story = {
  args: {
    children: 'Link Button',
    as: 'a',
    href: 'https://example.com',
    target: '_blank',
  },
}

export const WithFocusRing: Story = {
  args: {
    children: 'With Focus Ring',
    withRing: true,
  },
}

export const WithoutFocusRing: Story = {
  args: {
    children: 'Without Focus Ring',
    withRing: false,
  },
}

// Custom ClassNames
export const CustomClassNames: Story = {
  args: {
    children: 'Custom Styled',
    leftSection: <FiHeart />,
    classNames: {
      root: 'shadow-lg',
      leftSection: 'text-pink-500',
      inner: 'font-bold',
    },
  },
}

export const CustomLoaderIcon: Story = {
  args: {
    children: 'Loading',
    loading: true,
    classNames: {
      loaderIcon: 'w-8 h-8 text-red-500',
    },
  },
}

// All Colors Showcase
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="dark">Dark</Button>
      <Button color="gray">Gray</Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="filled">Filled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="light">Light</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="text">Text</Button>
        <Button variant="gradient">Gradient</Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="filled"
          color="success"
        >
          Filled
        </Button>
        <Button
          variant="outline"
          color="success"
        >
          Outline
        </Button>
        <Button
          variant="light"
          color="success"
        >
          Light
        </Button>
        <Button
          variant="subtle"
          color="success"
        >
          Subtle
        </Button>
        <Button
          variant="text"
          color="success"
        >
          Text
        </Button>
        <Button
          variant="gradient"
          color="success"
        >
          Gradient
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="filled"
          color="danger"
        >
          Filled
        </Button>
        <Button
          variant="outline"
          color="danger"
        >
          Outline
        </Button>
        <Button
          variant="light"
          color="danger"
        >
          Light
        </Button>
        <Button
          variant="subtle"
          color="danger"
        >
          Subtle
        </Button>
        <Button
          variant="text"
          color="danger"
        >
          Text
        </Button>
        <Button
          variant="gradient"
          color="danger"
        >
          Gradient
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Text Variant Showcase
export const TextVariantShowcase: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Text Variant - All Colors
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="text"
            color="primary"
          >
            Primary
          </Button>
          <Button
            variant="text"
            color="secondary"
          >
            Secondary
          </Button>
          <Button
            variant="text"
            color="info"
          >
            Info
          </Button>
          <Button
            variant="text"
            color="success"
          >
            Success
          </Button>
          <Button
            variant="text"
            color="warning"
          >
            Warning
          </Button>
          <Button
            variant="text"
            color="danger"
          >
            Danger
          </Button>
          <Button
            variant="text"
            color="dark"
          >
            Dark
          </Button>
          <Button
            variant="text"
            color="gray"
          >
            Gray
          </Button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Hover over buttons to see the text color change
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Text vs Subtle Comparison
        </h3>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-3">
            <Button
              variant="text"
              color="primary"
            >
              Text Variant
            </Button>
            <Button
              variant="subtle"
              color="primary"
            >
              Subtle Variant
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="text"
              color="danger"
            >
              Text Danger
            </Button>
            <Button
              variant="subtle"
              color="danger"
            >
              Subtle Danger
            </Button>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Text variant has no background on hover, Subtle variant shows light
          background
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Text Variant with Icons
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="text"
            color="primary"
            leftSection={<FiSend />}
          >
            Send
          </Button>
          <Button
            variant="text"
            color="success"
            leftSection={<FiDownload />}
          >
            Download
          </Button>
          <Button
            variant="text"
            color="danger"
            leftSection={<FiTrash2 />}
          >
            Delete
          </Button>
          <Button
            variant="text"
            color="gray"
            leftSection={<FiSettings />}
          >
            Settings
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const LoginButton: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <Button
        fullWidth
        size="lg"
      >
        Sign In
      </Button>
      <Button
        fullWidth
        variant="outline"
        color="gray"
      >
        Sign in with Google
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ActionButtons: Story = {
  render: () => (
    <div className="flex justify-end gap-2">
      <Button
        variant="subtle"
        color="gray"
      >
        Cancel
      </Button>
      <Button
        variant="outline"
        color="danger"
        leftSection={<FiTrash2 />}
      >
        Delete
      </Button>
      <Button
        color="success"
        leftSection={<FiDownload />}
      >
        Save
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button
        leftSection={<FiHeart />}
        compact
        color="danger"
      />
      <Button
        leftSection={<FiSettings />}
        compact
        variant="outline"
      />
      <Button
        leftSection={<FiTrash2 />}
        compact
        variant="light"
        color="danger"
      />
      <Button
        leftSection={<FiPlus />}
        compact
        radius="full"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const TextButtonsInContext: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-2 text-lg font-semibold">Product Details</h3>
        <p className="mb-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex gap-3">
          <Button
            variant="text"
            color="primary"
          >
            Learn More
          </Button>
          <Button
            variant="text"
            color="gray"
          >
            View Documentation
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Settings</h3>
          <Button
            variant="text"
            color="primary"
            leftSection={<FiSettings />}
          >
            Edit
          </Button>
        </div>
        <p className="text-gray-600">
          Manage your account settings and preferences.
        </p>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FocusRingComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          With Focus Ring (Default)
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button withRing>Primary</Button>
          <Button
            withRing
            variant="outline"
            color="secondary"
          >
            Outline
          </Button>
          <Button
            withRing
            variant="light"
            color="success"
          >
            Light
          </Button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Tab through these buttons to see the focus ring
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Without Focus Ring
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button withRing={false}>Primary</Button>
          <Button
            withRing={false}
            variant="outline"
            color="secondary"
          >
            Outline
          </Button>
          <Button
            withRing={false}
            variant="light"
            color="success"
          >
            Light
          </Button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          No focus ring when tabbing through these buttons
        </p>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// ClassNames Showcase
export const ClassNamesShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Root Styling
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            classNames={{
              root: 'shadow-2xl hover:shadow-xl',
            }}
          >
            Enhanced Shadow
          </Button>
          <Button
            variant="outline"
            classNames={{
              root: 'border-4',
            }}
          >
            Thick Border
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Section Styling
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            leftSection={<FiHeart />}
            classNames={{
              leftSection: 'text-pink-500',
            }}
          >
            Pink Icon
          </Button>
          <Button
            rightSection={<FiSend />}
            classNames={{
              rightSection: 'text-blue-500',
            }}
          >
            Blue Icon
          </Button>
          <Button
            leftSection={<FiSettings />}
            rightSection={<FiHeart />}
            classNames={{
              leftSection: 'text-purple-500',
              rightSection: 'text-red-500',
            }}
          >
            Multi-color Icons
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Inner Container
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            leftSection={<FiHeart />}
            classNames={{
              inner: 'gap-4',
            }}
          >
            Large Gap
          </Button>
          <Button
            leftSection={<FiSettings />}
            classNames={{
              inner: 'gap-1',
            }}
          >
            Small Gap
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Loader Styling
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            loading
            classNames={{
              loaderIcon: 'w-6 h-6',
            }}
          >
            Large Loader
          </Button>
          <Button
            loading
            variant="outline"
            color="danger"
            classNames={{
              loaderIcon: 'text-red-600',
            }}
          >
            Red Loader
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Combined Custom Styles
        </h3>
        <Button
          leftSection={<FiSend />}
          rightSection={<FiHeart />}
          classNames={{
            root: 'shadow-lg hover:shadow-2xl transition-shadow duration-300',
            inner: 'gap-3 font-bold',
            leftSection: 'text-blue-600',
            rightSection: 'text-pink-600',
          }}
        >
          Fully Customized
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Loading States Showcase
export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Loading - All Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            loading
            variant="filled"
          >
            Filled
          </Button>
          <Button
            loading
            variant="outline"
          >
            Outline
          </Button>
          <Button
            loading
            variant="light"
          >
            Light
          </Button>
          <Button
            loading
            variant="subtle"
          >
            Subtle
          </Button>
          <Button
            loading
            variant="gradient"
          >
            Gradient
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Loading - Different Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            loading
            size="xs"
          >
            Extra Small
          </Button>
          <Button
            loading
            size="sm"
          >
            Small
          </Button>
          <Button
            loading
            size="md"
          >
            Medium
          </Button>
          <Button
            loading
            size="lg"
          >
            Large
          </Button>
          <Button
            loading
            size="xl"
          >
            Extra Large
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Loading with Icons
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            loading
            leftSection={<FiDownload />}
          >
            Downloading
          </Button>
          <Button
            loading
            rightSection={<FiSend />}
          >
            Sending
          </Button>
          <Button
            loading
            leftSection={<FiSettings />}
            rightSection={<FiHeart />}
          >
            Processing
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
