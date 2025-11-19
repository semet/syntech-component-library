/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  FiAlertCircle,
  FiCheckCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi'

import Button from '../Button/Button'

import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    opened: {
      control: 'boolean',
      description: 'Modal open state',
    },
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        'full',
      ],
      description: 'Modal size',
    },
    centered: {
      control: 'boolean',
      description: 'Center modal vertically',
    },
    fullScreen: {
      control: 'boolean',
      description: 'Full screen modal',
    },
    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    overlayBlur: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Overlay blur amount',
    },
    scrollable: {
      control: 'boolean',
      description: 'Make body scrollable with fixed header/footer',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close on Escape key',
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: 'Close on outside click',
    },
    withOverlay: {
      control: 'boolean',
      description: 'Show overlay',
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for interactive stories
const ModalWrapper = ({ children, ...args }: any) => {
  const [opened, setOpened] = useState(false)
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal
        {...args}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        {children}
      </Modal>
    </div>
  )
}

// Basic Stories
export const Default: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          This is the body content of the modal. It can contain any content you
          want.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button>Confirm</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

export const WithoutCloseButton: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Modal.Header>
        <Modal.Title>Confirm Action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button color="danger">Delete</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

export const WithoutFooter: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <Modal.Header>
        <Modal.Title>Information</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          This modal has no footer. Just header and body content.
        </p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const BodyOnly: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <Modal.Body>
        <p className="text-gray-600">
          Simple modal with only body content, no header or footer.
        </p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

// Size Variations
export const SizeExtraSmall: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="xs"
      centered
    >
      <Modal.Header>
        <Modal.Title>Extra Small</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-sm text-gray-600">XS modal (max-w-xs / 20rem)</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const SizeSmall: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="sm"
      centered
    >
      <Modal.Header>
        <Modal.Title>Small Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Small modal (max-w-sm / 24rem)</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const SizeMedium: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="md"
      centered
    >
      <Modal.Header>
        <Modal.Title>Medium Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          Medium modal (max-w-md / 28rem) - Default
        </p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const SizeLarge: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>Large Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Large modal (max-w-lg / 32rem)</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const SizeExtraLarge: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="xl"
      centered
    >
      <Modal.Header>
        <Modal.Title>Extra Large Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">XL modal (max-w-xl / 36rem)</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const Size2XL: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="2xl"
      centered
    >
      <Modal.Header>
        <Modal.Title>2XL Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">2XL modal (max-w-2xl / 42rem)</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

// Radius Variations
export const RadiusNone: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      radius="none"
      centered
      size="sm"
    >
      <Modal.Header>
        <Modal.Title>No Radius</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with sharp corners</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const RadiusSmall: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      radius="sm"
      centered
      size="sm"
    >
      <Modal.Header>
        <Modal.Title>Small Radius</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with small border radius</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const RadiusLarge: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      radius="lg"
      centered
      size="sm"
    >
      <Modal.Header>
        <Modal.Title>Large Radius</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with large border radius</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const RadiusExtraLarge: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      radius="xl"
      centered
      size="sm"
    >
      <Modal.Header>
        <Modal.Title>Extra Large Radius</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with extra large border radius</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

// Overlay Blur Variations
export const OverlayBlurNone: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      overlayBlur="none"
      centered
    >
      <Modal.Header>
        <Modal.Title>No Blur</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with no overlay blur</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const OverlayBlurSmall: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      overlayBlur="sm"
      centered
    >
      <Modal.Header>
        <Modal.Title>Small Blur</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with small overlay blur</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const OverlayBlurMedium: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      overlayBlur="md"
      centered
    >
      <Modal.Header>
        <Modal.Title>Medium Blur</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with medium overlay blur</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const OverlayBlurLarge: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      overlayBlur="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>Large Blur</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">Modal with large overlay blur</p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

// Position Variations
export const Centered: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      centered
    >
      <Modal.Header>
        <Modal.Title>Centered Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          This modal is vertically centered on the screen.
        </p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const TopAligned: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      centered={false}
    >
      <Modal.Header>
        <Modal.Title>Top Aligned Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          This modal is aligned to the top of the screen.
        </p>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const FullScreen: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      fullScreen
    >
      <Modal.Header>
        <Modal.Title>Full Screen Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-4 text-gray-600">
          <p>This modal takes up the entire screen.</p>
          <p>
            It's useful for showing detailed content or forms that need more
            space.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

// Scrollable
export const Scrollable: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      scrollable
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>Terms and Conditions</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-gray-900">1. Introduction</h3>
          <p>
            Welcome to our service. By accessing or using our service, you agree
            to be bound by these Terms and Conditions.
          </p>

          <h3 className="font-semibold text-gray-900">2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on our website for personal, non-commercial transitory
            viewing only.
          </p>

          <h3 className="font-semibold text-gray-900">3. Disclaimer</h3>
          <p>
            The materials on our website are provided on an 'as is' basis. We
            make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>

          <h3 className="font-semibold text-gray-900">4. Limitations</h3>
          <p>
            In no event shall our company or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on our website.
          </p>

          <h3 className="font-semibold text-gray-900">
            5. Accuracy of Materials
          </h3>
          <p>
            The materials appearing on our website could include technical,
            typographical, or photographic errors. We do not warrant that any of
            the materials on its website are accurate, complete or current.
          </p>

          <h3 className="font-semibold text-gray-900">6. Links</h3>
          <p>
            We have not reviewed all of the sites linked to our website and are
            not responsible for the contents of any such linked site.
          </p>

          <h3 className="font-semibold text-gray-900">7. Modifications</h3>
          <p>
            We may revise these terms of service for its website at any time
            without notice. By using this website you are agreeing to be bound
            by the then current version of these terms of service.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Decline
        </Button>
        <Button>Accept</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

// Polymorphic
export const SemanticElements: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      centered
    >
      <Modal.Header as="header">
        <Modal.Title as="h1">Semantic Modal</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body as="section">
        <p className="text-gray-600">
          This modal uses semantic HTML elements (header, h1, section, footer).
        </p>
      </Modal.Body>
      <Modal.Footer as="footer">
        <Button>Close</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

// Real World Examples
export const ConfirmDelete: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="sm"
      centered
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Modal.Header>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <FiAlertCircle className="h-5 w-5 text-red-600" />
          </div>
          <Modal.Title>Delete Account</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          Are you sure you want to delete your account? This action cannot be
          undone and all your data will be permanently removed.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button color="danger">Delete Account</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

export const SuccessMessage: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="sm"
      centered
    >
      <Modal.Body>
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <FiCheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Payment Successful!
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Your payment has been processed successfully. You will receive a
            confirmation email shortly.
          </p>
          <div className="mt-6">
            <Button fullWidth>Continue</Button>
          </div>
        </div>
      </Modal.Body>
    </ModalWrapper>
  ),
}

export const UserProfileForm: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>Edit Profile</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="john@example.com"
              defaultValue="john@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Tell us about yourself..."
              defaultValue="Software engineer passionate about building great products."
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

export const ContactCard: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      size="md"
      centered
      radius="lg"
    >
      <Modal.Body className="p-0">
        <div className="h-32 bg-linear-to-br from-blue-400 to-purple-500" />
      </Modal.Body>
      <Modal.Body>
        <div className="-mt-16 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow-lg">
            <FiUser className="h-10 w-10" />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FiMail className="h-4 w-4 text-gray-400" />
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FiPhone className="h-4 w-4 text-gray-400" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FiMapPin className="h-4 w-4 text-gray-400" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          fullWidth
          variant="outline"
        >
          Message
        </Button>
        <Button fullWidth>Follow</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

export const LongScrollableForm: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      scrollable
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>Complete Registration</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          {[
            'First Name',
            'Last Name',
            'Email',
            'Phone',
            'Address',
            'City',
            'State',
            'ZIP Code',
          ].map((field) => (
            <div key={field}>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {field}
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          ))}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button>Submit</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}

export const CustomStyles: Story = {
  render: (args) => (
    <ModalWrapper
      {...args}
      centered
      size="md"
      classNames={{
        content: 'bg-gradient-to-br from-purple-50 to-pink-50',
        header: 'bg-purple-100 border-purple-200',
        body: 'bg-white/50',
        footer: 'bg-pink-100 border-pink-200',
      }}
    >
      <Modal.Header>
        <Modal.Title className="text-purple-900">
          Custom Styled Modal
        </Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">
          This modal has custom background colors for each section using
          classNames prop.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button color="info">Action</Button>
      </Modal.Footer>
    </ModalWrapper>
  ),
}
