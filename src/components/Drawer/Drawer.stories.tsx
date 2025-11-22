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
  FiShoppingCart,
  FiFilter,
} from 'react-icons/fi'

import Button from '../Button/Button'

import Drawer from './Drawer'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
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
      description: 'Drawer open state',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Drawer position',
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
      description: 'Drawer size',
    },
    overlayBlur: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg'],
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
    withCloseButton: {
      control: 'boolean',
      description: 'Show close button in header',
    },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for interactive stories
const DrawerWrapper = ({ children, ...args }: any) => {
  const [opened, setOpened] = useState(false)
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      <Drawer
        {...args}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        {children}
      </Drawer>
    </div>
  )
}

// Basic Stories
export const Default: Story = {
  render: (args) => (
    <DrawerWrapper {...args}>
      <Drawer.Header>
        <Drawer.Title>Drawer Title</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This is the body content of the drawer. It can contain any content you
          want.
        </p>
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button>Confirm</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

export const WithoutCloseButton: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Drawer.Header>
        <Drawer.Title>Confirm Action</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button color="danger">Delete</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

export const WithoutFooter: Story = {
  render: (args) => (
    <DrawerWrapper {...args}>
      <Drawer.Header>
        <Drawer.Title>Information</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This drawer has no footer. Just header and body content.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const BodyOnly: Story = {
  render: (args) => (
    <DrawerWrapper {...args}>
      <Drawer.Body>
        <p className="text-gray-600">
          Simple drawer with only body content, no header or footer.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

// Position Variations
export const PositionLeft: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="left"
    >
      <Drawer.Header>
        <Drawer.Title>Left Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This drawer slides in from the left side of the screen.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const PositionRight: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>Right Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This drawer slides in from the right side of the screen.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const PositionTop: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="top"
    >
      <Drawer.Header>
        <Drawer.Title>Top Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This drawer slides in from the top of the screen.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const PositionBottom: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="bottom"
    >
      <Drawer.Header>
        <Drawer.Title>Bottom Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This drawer slides in from the bottom of the screen. Great for
          mobile-friendly actions.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

// Size Variations
export const SizeExtraSmall: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      size="xs"
      position="left"
    >
      <Drawer.Header>
        <Drawer.Title>Extra Small</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-sm text-gray-600">XS drawer (16rem / 256px)</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const SizeSmall: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      size="sm"
      position="left"
    >
      <Drawer.Header>
        <Drawer.Title>Small Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">Small drawer (20rem / 320px)</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const SizeMedium: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      size="md"
      position="left"
    >
      <Drawer.Header>
        <Drawer.Title>Medium Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">Medium drawer (24rem / 384px) - Default</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const SizeLarge: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      size="lg"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>Large Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">Large drawer (28rem / 448px)</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const SizeExtraLarge: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      size="xl"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>Extra Large Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">XL drawer (32rem / 512px)</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const Size2XL: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      size="2xl"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>2XL Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">2XL drawer (36rem / 576px)</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const SizeFull: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      size="full"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>Full Width Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This drawer takes up the full width/height of the screen.
        </p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const CustomSize: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      customSize="50%"
      position="left"
    >
      <Drawer.Header>
        <Drawer.Title>Custom Size (50%)</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          You can use customSize prop to set arbitrary dimensions like
          percentages or pixel values.
        </p>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Examples: "50%", "400px", "30vw"
          </p>
        </div>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

// Overlay Blur Variations
export const OverlayBlurNone: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      overlayBlur="none"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>No Blur</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">Drawer with no overlay blur</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const OverlayBlurSmall: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      overlayBlur="sm"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>Small Blur</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">Drawer with small overlay blur</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const OverlayBlurMedium: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      overlayBlur="md"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>Medium Blur</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">Drawer with medium overlay blur</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

export const OverlayBlurLarge: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      overlayBlur="lg"
      position="right"
    >
      <Drawer.Header>
        <Drawer.Title>Large Blur</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">Drawer with large overlay blur</p>
      </Drawer.Body>
    </DrawerWrapper>
  ),
}

// Scrollable
export const Scrollable: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      scrollable
      position="right"
      size="md"
    >
      <Drawer.Header>
        <Drawer.Title>Terms and Conditions</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
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
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Decline
        </Button>
        <Button>Accept</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

// Polymorphic
export const SemanticElements: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="right"
    >
      <Drawer.Header as="header">
        <Drawer.Title as="h1">Semantic Drawer</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body as="section">
        <p className="text-gray-600">
          This drawer uses semantic HTML elements (header, h1, section, footer).
        </p>
      </Drawer.Body>
      <Drawer.Footer as="footer">
        <Button>Close</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

// Real World Examples
export const ShoppingCart: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="right"
      size="lg"
    >
      <Drawer.Header>
        <div className="flex items-center gap-2">
          <FiShoppingCart className="h-5 w-5 text-gray-700" />
          <Drawer.Title>Shopping Cart (3)</Drawer.Title>
        </div>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <div className="space-y-4">
          {[
            { name: 'Wireless Headphones', price: 99.99 },
            { name: 'Smart Watch', price: 299.99 },
            { name: 'Phone Case', price: 19.99 },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
            >
              <div>
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <button className="text-sm text-red-600 hover:text-red-700">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-2 border-t border-gray-200 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-900">$419.97</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-gray-900">$10.00</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-semibold text-gray-900">$429.97</span>
          </div>
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button fullWidth>Checkout</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

export const FilterPanel: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="left"
      size="md"
    >
      <Drawer.Header>
        <div className="flex items-center gap-2">
          <FiFilter className="h-5 w-5 text-gray-700" />
          <Drawer.Title>Filters</Drawer.Title>
        </div>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Price Range
            </h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Category
            </h3>
            <div className="space-y-2">
              {['Electronics', 'Clothing', 'Books', 'Home & Garden'].map(
                (cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{cat}</span>
                  </label>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Rating</h3>
            <div className="space-y-2">
              {['4+ Stars', '3+ Stars', '2+ Stars', '1+ Stars'].map(
                (rating) => (
                  <label
                    key={rating}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="rating"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{rating}</span>
                  </label>
                ),
              )}
            </div>
          </div>
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Clear All
        </Button>
        <Button>Apply Filters</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

export const UserProfile: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="right"
      size="md"
    >
      <Drawer.Header>
        <Drawer.Title>Edit Profile</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <FiUser className="h-10 w-10" />
            </div>
          </div>
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
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          variant="outline"
          color="gray"
        >
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

export const NotificationPanel: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="right"
      size="sm"
    >
      <Drawer.Header>
        <Drawer.Title>Notifications</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <div className="space-y-3">
          {[
            {
              icon: FiCheckCircle,
              color: 'text-green-600',
              bg: 'bg-green-100',
              title: 'Payment successful',
              time: '2 minutes ago',
            },
            {
              icon: FiAlertCircle,
              color: 'text-yellow-600',
              bg: 'bg-yellow-100',
              title: 'Update available',
              time: '1 hour ago',
            },
            {
              icon: FiUser,
              color: 'text-blue-600',
              bg: 'bg-blue-100',
              title: 'New follower',
              time: '3 hours ago',
            },
            {
              icon: FiMail,
              color: 'text-purple-600',
              bg: 'bg-purple-100',
              title: 'New message',
              time: '1 day ago',
            },
          ].map((notification, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${notification.bg}`}
              >
                <notification.icon
                  className={`h-5 w-5 ${notification.color}`}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          fullWidth
          variant="outline"
        >
          Mark all as read
        </Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

export const ContactInfo: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="right"
      size="md"
    >
      <Drawer.Body className="p-0">
        <div className="h-32 bg-linear-to-br from-blue-400 to-purple-500" />
      </Drawer.Body>
      <Drawer.Body>
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
      </Drawer.Body>
      <Drawer.Footer>
        <Button
          fullWidth
          variant="outline"
        >
          Message
        </Button>
        <Button fullWidth>Follow</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}

export const CustomStyles: Story = {
  render: (args) => (
    <DrawerWrapper
      {...args}
      position="right"
      size="md"
      classNames={{
        content: 'bg-linear-to-br from-purple-50 to-pink-50',
        header: 'bg-purple-100 border-purple-200',
        body: 'bg-white/50',
        footer: 'bg-pink-100 border-pink-200',
      }}
    >
      <Drawer.Header>
        <Drawer.Title className="text-purple-900">
          Custom Styled Drawer
        </Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body>
        <p className="text-gray-600">
          This drawer has custom background colors for each section using
          classNames prop.
        </p>
      </Drawer.Body>
      <Drawer.Footer>
        <Button color="info">Action</Button>
      </Drawer.Footer>
    </DrawerWrapper>
  ),
}
