import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import Textarea from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'unstyled'],
      description: 'Textarea variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Textarea size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    label: {
      control: 'text',
      description: 'Textarea label',
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
    autosize: {
      control: 'boolean',
      description: 'Auto-resize based on content',
    },
    minRows: {
      control: 'number',
      description: 'Minimum number of rows (for autosize)',
    },
    maxRows: {
      control: 'number',
      description: 'Maximum number of rows (for autosize)',
    },
  },
} satisfies Meta<typeof Textarea>

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
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Comments',
    description: 'Your feedback is important to us',
    placeholder: 'Enter your comments here...',
  },
}

export const Required: Story = {
  args: {
    label: 'Message',
    withAsterisk: true,
    placeholder: 'Enter your message...',
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    placeholder: 'Default textarea',
    variant: 'default',
  },
}

export const Filled: Story = {
  args: {
    label: 'Filled Variant',
    placeholder: 'Filled textarea',
    variant: 'filled',
  },
}

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Variant',
    placeholder: 'Unstyled textarea',
    variant: 'unstyled',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    placeholder: 'Extra small textarea',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    placeholder: 'Small textarea',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    placeholder: 'Medium textarea',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    placeholder: 'Large textarea',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    placeholder: 'Extra large textarea',
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

// Autosize
export const Autosize: Story = {
  args: {
    label: 'Auto-resizing Textarea',
    description: 'This textarea grows automatically as you type',
    placeholder: 'Start typing...',
    autosize: true,
    minRows: 3,
  },
}

export const AutosizeWithMinMax: Story = {
  args: {
    label: 'Auto-resizing with Min/Max',
    description: 'Grows between 2 and 8 rows',
    placeholder: 'Start typing...',
    autosize: true,
    minRows: 2,
    maxRows: 8,
  },
}

// States
export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    withAsterisk: true,
    error: 'Message is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'You cannot edit this',
    disabled: true,
    value:
      'This is a disabled textarea with some content that cannot be edited.',
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <Textarea
        label="Default"
        placeholder="Default variant"
        variant="default"
      />
      <Textarea
        label="Filled"
        placeholder="Filled variant"
        variant="filled"
      />
      <Textarea
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
      <Textarea
        size="xs"
        placeholder="Extra small (xs)"
      />
      <Textarea
        size="sm"
        placeholder="Small (sm)"
      />
      <Textarea
        size="md"
        placeholder="Medium (md)"
      />
      <Textarea
        size="lg"
        placeholder="Large (lg)"
      />
      <Textarea
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
      <Textarea
        radius="xs"
        placeholder="XS radius"
      />
      <Textarea
        radius="sm"
        placeholder="SM radius"
      />
      <Textarea
        radius="md"
        placeholder="MD radius"
      />
      <Textarea
        radius="lg"
        placeholder="LG radius"
      />
      <Textarea
        radius="xl"
        placeholder="XL radius"
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
      <Textarea
        label="Message"
        placeholder="Enter your message"
        withAsterisk
        error="Message is required"
      />
      <Textarea
        label="Description"
        placeholder="Enter description"
        withAsterisk
        error="Description must be at least 10 characters"
      />
      <Textarea
        label="Comments"
        placeholder="Enter your comments"
        withAsterisk
        error="Comments cannot exceed 500 characters"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const ContactForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Textarea
        label="Message"
        description="Please describe your inquiry"
        placeholder="How can we help you?"
        withAsterisk
        rows={5}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FeedbackForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Textarea
        label="What did you like?"
        description="Tell us what you enjoyed"
        placeholder="I really appreciated..."
        variant="filled"
      />
      <Textarea
        label="What could be improved?"
        description="Help us get better"
        placeholder="It would be great if..."
        variant="filled"
      />
      <Textarea
        label="Additional Comments"
        description="Optional"
        placeholder="Any other feedback..."
        variant="filled"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const BlogPostEditor: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-4">
      <Textarea
        label="Post Content"
        description="Write your blog post content here"
        placeholder="Start writing your story..."
        withAsterisk
        autosize
        minRows={10}
        maxRows={30}
        size="md"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SupportTicket: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Textarea
        label="Issue Description"
        description="Please describe the problem you're experiencing"
        placeholder="Describe the issue in detail..."
        withAsterisk
        rows={6}
      />
      <Textarea
        label="Steps to Reproduce"
        description="Help us understand how the issue occurred"
        placeholder="1. First I...\n2. Then I...\n3. Finally..."
        rows={5}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ProductReview: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Textarea
        label="Your Review"
        description="Share your experience with this product"
        placeholder="I've been using this product for..."
        withAsterisk
        variant="filled"
        autosize
        minRows={4}
        maxRows={10}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const JobApplication: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Textarea
        label="Cover Letter"
        description="Tell us why you're interested in this position"
        placeholder="Dear Hiring Manager..."
        withAsterisk
        rows={8}
      />
      <Textarea
        label="Additional Information"
        description="Optional: Any other relevant information"
        placeholder="I would also like to mention..."
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const CodeSnippet: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Textarea
        label="Code"
        description="Paste your code snippet here"
        placeholder="function example() {&#10;  return 'Hello World';&#10;}"
        variant="filled"
        rows={10}
        className="font-mono"
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
          <Textarea
            label="Default"
            placeholder="Default variant"
            variant="default"
          />
          <Textarea
            label="Filled"
            placeholder="Filled variant"
            variant="filled"
          />
          <Textarea
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
export const CharacterCounter: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('')
    const maxLength = 200

    return (
      <div className="w-96 space-y-2">
        <Textarea
          label="Bio"
          description={`${text.length}/${maxLength} characters`}
          placeholder="Tell us about yourself..."
          withAsterisk
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, maxLength))}
          maxLength={maxLength}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const AutosizeDemo: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('')

    return (
      <div className="w-96 space-y-2">
        <Textarea
          label="Notes"
          description="This textarea grows as you type (min 3 rows, max 12 rows)"
          placeholder="Start typing to see auto-resize..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          autosize
          minRows={3}
          maxRows={12}
        />
        <div className="text-xs text-gray-500">
          Lines: {text.split('\n').length}
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ValidationDemo: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [message, setMessage] = useState('')
    const minLength = 20
    const maxLength = 500

    const error =
      message && message.length < minLength
        ? `Message must be at least ${minLength} characters`
        : message && message.length > maxLength
          ? `Message cannot exceed ${maxLength} characters`
          : undefined

    return (
      <div className="w-96 space-y-2">
        <Textarea
          label="Message"
          description={`${message.length}/${maxLength} characters (minimum ${minLength})`}
          placeholder="Enter your message..."
          withAsterisk
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={error}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ResizableComparison: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <Textarea
          label="Resizable (Default)"
          description="You can resize this vertically"
          placeholder="Try resizing by dragging the corner..."
        />
      </div>
      <div>
        <Textarea
          label="Not Resizable (Autosize)"
          description="This automatically adjusts size"
          placeholder="This grows automatically..."
          autosize
          minRows={3}
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
