import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { FiRefreshCw } from 'react-icons/fi'

import CaptchaInput from './CaptchaInput'

// Mock captcha images
const captchaImages = [
  'https://placehold.co/150x50/4299e1/ffffff?text=ABC123',
  'https://placehold.co/150x50/48bb78/ffffff?text=XYZ789',
  'https://placehold.co/150x50/ed8936/ffffff?text=DEF456',
  'https://placehold.co/150x50/9f7aea/ffffff?text=GHI012',
  'https://placehold.co/150x50/f56565/ffffff?text=JKL345',
]

const meta = {
  title: 'Components/CaptchaInput',
  component: CaptchaInput,
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
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof CaptchaInput>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    image: captchaImages[0],
    placeholder: 'Enter captcha code',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Security Code',
    image: captchaImages[0],
    placeholder: 'Enter the code shown',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Verification Code',
    description: 'Enter the characters shown in the image',
    image: captchaImages[0],
    placeholder: 'Enter code',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const Required: Story = {
  args: {
    label: 'Captcha',
    withAsterisk: true,
    image: captchaImages[0],
    placeholder: 'Enter code',
    onRefresh: () => alert('Refresh clicked'),
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    image: captchaImages[0],
    placeholder: 'Enter code',
    variant: 'default',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const Filled: Story = {
  args: {
    label: 'Filled Variant',
    image: captchaImages[0],
    placeholder: 'Enter code',
    variant: 'filled',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Variant',
    image: captchaImages[0],
    placeholder: 'Enter code',
    variant: 'unstyled',
    onRefresh: () => alert('Refresh clicked'),
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    image: captchaImages[0],
    placeholder: 'Enter code',
    size: 'xs',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    image: captchaImages[0],
    placeholder: 'Enter code',
    size: 'sm',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    image: captchaImages[0],
    placeholder: 'Enter code',
    size: 'md',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    image: captchaImages[0],
    placeholder: 'Enter code',
    size: 'lg',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    image: captchaImages[0],
    placeholder: 'Enter code',
    size: 'xl',
    onRefresh: () => alert('Refresh clicked'),
  },
}

// Radius
export const RadiusXS: Story = {
  args: {
    label: 'XS Radius',
    image: captchaImages[0],
    placeholder: 'Enter code',
    radius: 'xs',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const RadiusSM: Story = {
  args: {
    label: 'SM Radius',
    image: captchaImages[0],
    placeholder: 'Enter code',
    radius: 'sm',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const RadiusMD: Story = {
  args: {
    label: 'MD Radius',
    image: captchaImages[0],
    placeholder: 'Enter code',
    radius: 'md',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const RadiusLG: Story = {
  args: {
    label: 'LG Radius',
    image: captchaImages[0],
    placeholder: 'Enter code',
    radius: 'lg',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const RadiusXL: Story = {
  args: {
    label: 'XL Radius',
    image: captchaImages[0],
    placeholder: 'Enter code',
    radius: 'xl',
    onRefresh: () => alert('Refresh clicked'),
  },
}

// States
export const Loading: Story = {
  args: {
    label: 'Captcha',
    isLoading: true,
    placeholder: 'Enter code',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const WithError: Story = {
  args: {
    label: 'Captcha',
    image: captchaImages[0],
    placeholder: 'Enter code',
    withAsterisk: true,
    error: 'Incorrect code. Please try again.',
    onRefresh: () => alert('Refresh clicked'),
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Captcha',
    image: captchaImages[0],
    placeholder: 'Enter code',
    disabled: true,
    value: 'ABC123',
    onRefresh: () => alert('Refresh clicked'),
  },
}

// Custom Refresh Icon
export const CustomRefreshIcon: Story = {
  args: {
    label: 'Captcha',
    image: captchaImages[0],
    placeholder: 'Enter code',
    refreshIcon: <FiRefreshCw />,
    onRefresh: () => alert('Refresh clicked'),
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <CaptchaInput
        label="Default"
        image={captchaImages[0]}
        placeholder="Enter code"
        variant="default"
        onRefresh={() => {}}
      />
      <CaptchaInput
        label="Filled"
        image={captchaImages[1]}
        placeholder="Enter code"
        variant="filled"
        onRefresh={() => {}}
      />
      <CaptchaInput
        label="Unstyled"
        image={captchaImages[2]}
        placeholder="Enter code"
        variant="unstyled"
        onRefresh={() => {}}
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
    <div className="w-[500px] space-y-4">
      <CaptchaInput
        size="xs"
        image={captchaImages[0]}
        placeholder="Extra small (xs)"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="sm"
        image={captchaImages[1]}
        placeholder="Small (sm)"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="md"
        image={captchaImages[2]}
        placeholder="Medium (md)"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="lg"
        image={captchaImages[3]}
        placeholder="Large (lg)"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="xl"
        image={captchaImages[4]}
        placeholder="Extra large (xl)"
        onRefresh={() => {}}
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
      <CaptchaInput
        radius="xs"
        image={captchaImages[0]}
        placeholder="XS radius"
        onRefresh={() => {}}
      />
      <CaptchaInput
        radius="sm"
        image={captchaImages[1]}
        placeholder="SM radius"
        onRefresh={() => {}}
      />
      <CaptchaInput
        radius="md"
        image={captchaImages[2]}
        placeholder="MD radius"
        onRefresh={() => {}}
      />
      <CaptchaInput
        radius="lg"
        image={captchaImages[3]}
        placeholder="LG radius"
        onRefresh={() => {}}
      />
      <CaptchaInput
        radius="xl"
        image={captchaImages[4]}
        placeholder="XL radius"
        onRefresh={() => {}}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Loading States Showcase
export const LoadingStates: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <CaptchaInput
        label="Loading State"
        description="Fetching new captcha..."
        isLoading={true}
        placeholder="Enter code"
        onRefresh={() => {}}
      />
      <CaptchaInput
        label="Loaded State"
        description="Ready to verify"
        image={captchaImages[0]}
        placeholder="Enter code"
        onRefresh={() => {}}
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
      <CaptchaInput
        label="Captcha"
        image={captchaImages[0]}
        placeholder="Enter code"
        withAsterisk
        error="Captcha is required"
        onRefresh={() => {}}
      />
      <CaptchaInput
        label="Verification Code"
        image={captchaImages[1]}
        placeholder="Enter code"
        withAsterisk
        error="Incorrect code. Please try again."
        onRefresh={() => {}}
      />
      <CaptchaInput
        label="Security Check"
        image={captchaImages[2]}
        placeholder="Enter code"
        withAsterisk
        error="Code has expired. Click refresh to get a new one."
        onRefresh={() => {}}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Size Comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <CaptchaInput
        size="xs"
        label="Extra Small"
        image={captchaImages[0]}
        placeholder="Extra small"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="sm"
        label="Small"
        image={captchaImages[1]}
        placeholder="Small"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="md"
        label="Medium"
        image={captchaImages[2]}
        placeholder="Medium"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="lg"
        label="Large"
        image={captchaImages[3]}
        placeholder="Large"
        onRefresh={() => {}}
      />
      <CaptchaInput
        size="xl"
        label="Extra Large"
        image={captchaImages[4]}
        placeholder="Extra large"
        onRefresh={() => {}}
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
          <CaptchaInput
            label="Default"
            image={captchaImages[0]}
            placeholder="Default variant"
            variant="default"
            onRefresh={() => {}}
          />
          <CaptchaInput
            label="Filled"
            image={captchaImages[1]}
            placeholder="Filled variant"
            variant="filled"
            onRefresh={() => {}}
          />
          <CaptchaInput
            label="Unstyled"
            image={captchaImages[2]}
            placeholder="Unstyled variant"
            variant="unstyled"
            onRefresh={() => {}}
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
    const [code, setCode] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentImage, setCurrentImage] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false)

    const correctCode = 'ABC123'
    const codeError =
      code && code !== correctCode
        ? 'Incorrect code. Please try again.'
        : undefined

    const handleRefresh = () => {
      setIsLoading(true)
      setCode('')
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % captchaImages.length)
        setIsLoading(false)
      }, 1000)
    }

    return (
      <div className="w-96 space-y-4">
        <CaptchaInput
          label="Captcha Verification"
          description={`Correct code is: ${correctCode}`}
          image={captchaImages[currentImage]}
          isLoading={isLoading}
          placeholder="Enter code"
          withAsterisk
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          onRefresh={handleRefresh}
          error={codeError}
        />
        {code === correctCode && (
          <div className="rounded-sm bg-green-50 p-3 text-sm text-green-600">
            ✓ Captcha verified successfully!
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Interactive Loading Demo
export const InteractiveLoading: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentImage, setCurrentImage] = useState(0)

    const handleRefresh = () => {
      setIsLoading(true)
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % captchaImages.length)
        setIsLoading(false)
      }, 2000)
    }

    return (
      <div className="w-96 space-y-4">
        <CaptchaInput
          label="Captcha with Loading"
          description="Click refresh to see the loading state"
          image={captchaImages[currentImage]}
          isLoading={isLoading}
          placeholder="Enter code"
          onRefresh={handleRefresh}
        />
        <p className="text-xs text-gray-500">
          {isLoading
            ? 'Loading new captcha...'
            : 'Click the refresh button to load a new captcha'}
        </p>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
