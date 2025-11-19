import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FiHeart,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiClock,
} from 'react-icons/fi'

import Button from '../Button/Button'

import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Border radius',
    },
    withBorder: {
      control: 'boolean',
      description: 'Show border',
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Shadow size',
    },
    scrollable: {
      control: 'boolean',
      description: 'Make body scrollable',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Card Title</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">
            This is the body content of the card. It can contain any content you
            want.
          </p>
        </Card.Body>
        <Card.Footer>
          <div className="flex justify-end gap-2">
            <Button
              variant="subtle"
              color="gray"
            >
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </Card.Footer>
      </>
    ),
  },
}

export const WithoutHeader: Story = {
  args: {
    children: (
      <>
        <Card.Body>
          <p className="text-gray-600">
            A card with just body content, no header or footer.
          </p>
        </Card.Body>
      </>
    ),
  },
}

export const WithoutFooter: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Card Title</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">
            A card with header and body, but no footer.
          </p>
        </Card.Body>
      </>
    ),
  },
}

export const BodyOnly: Story = {
  args: {
    children: (
      <Card.Body>
        <p className="text-gray-600">Simple card with only body content.</p>
      </Card.Body>
    ),
  },
}

// Radius Variations
export const RadiusNone: Story = {
  args: {
    radius: 'none',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">No Radius</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with no border radius.</p>
        </Card.Body>
      </>
    ),
  },
}

export const RadiusSmall: Story = {
  args: {
    radius: 'sm',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Small Radius</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with small border radius.</p>
        </Card.Body>
      </>
    ),
  },
}

export const RadiusMedium: Story = {
  args: {
    radius: 'md',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Medium Radius</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with medium border radius.</p>
        </Card.Body>
      </>
    ),
  },
}

export const RadiusLarge: Story = {
  args: {
    radius: 'lg',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Large Radius</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with large border radius.</p>
        </Card.Body>
      </>
    ),
  },
}

export const RadiusExtraLarge: Story = {
  args: {
    radius: '2xl',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Extra Large Radius</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with extra large border radius.</p>
        </Card.Body>
      </>
    ),
  },
}

// Shadow Variations
export const ShadowNone: Story = {
  args: {
    shadow: 'none',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">No Shadow</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with no shadow.</p>
        </Card.Body>
      </>
    ),
  },
}

export const ShadowSmall: Story = {
  args: {
    shadow: 'sm',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Small Shadow</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with small shadow.</p>
        </Card.Body>
      </>
    ),
  },
}

export const ShadowMedium: Story = {
  args: {
    shadow: 'md',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Medium Shadow</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with medium shadow.</p>
        </Card.Body>
      </>
    ),
  },
}

export const ShadowLarge: Story = {
  args: {
    shadow: 'lg',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Large Shadow</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with large shadow.</p>
        </Card.Body>
      </>
    ),
  },
}

export const ShadowExtraLarge: Story = {
  args: {
    shadow: 'xl',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Extra Large Shadow</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with extra large shadow.</p>
        </Card.Body>
      </>
    ),
  },
}

// Border Variations
export const WithBorder: Story = {
  args: {
    withBorder: true,
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">With Border</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card with border.</p>
        </Card.Body>
      </>
    ),
  },
}

export const WithoutBorder: Story = {
  args: {
    withBorder: false,
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Without Border</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">Card without border.</p>
        </Card.Body>
      </>
    ),
  },
}

// Scrollable
export const Scrollable: Story = {
  args: {
    scrollable: true,
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Scrollable Card</h3>
        </Card.Header>
        <Card.Body style={{ height: '200px' }}>
          <p className="text-gray-600">
            This is a very long content that will require scrolling. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="mt-4 text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button fullWidth>Action</Button>
        </Card.Footer>
      </>
    ),
  },
}

// Polymorphic
export const AsArticle: Story = {
  args: {
    as: 'article',
    children: (
      <>
        <Card.Header as="header">
          <h3 className="text-lg font-semibold">Semantic Article Card</h3>
        </Card.Header>
        <Card.Body as="section">
          <p className="text-gray-600">
            This card uses semantic HTML elements (article, header, section,
            footer).
          </p>
        </Card.Body>
        <Card.Footer as="footer">
          <Button
            variant="text"
            color="primary"
          >
            Read More
          </Button>
        </Card.Footer>
      </>
    ),
  },
}

export const AsSection: Story = {
  args: {
    as: 'section',
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Section Card</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">This card is rendered as a section.</p>
        </Card.Body>
      </>
    ),
  },
}

// Custom ClassNames
export const CustomClassNames: Story = {
  args: {
    classNames: {
      root: 'bg-linear-to-br from-blue-50 to-purple-50',
      header: 'bg-blue-100',
      body: 'bg-white/50',
      footer: 'bg-purple-100',
    },
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold text-blue-900">
            Custom Styled Card
          </h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">
            This card has custom background colors for each section.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button>Action</Button>
        </Card.Footer>
      </>
    ),
  },
}

// All Radius Showcase
export const AllRadius: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card radius="none">
        <Card.Body>
          <p className="text-sm text-gray-600">None</p>
        </Card.Body>
      </Card>
      <Card radius="xs">
        <Card.Body>
          <p className="text-sm text-gray-600">XS</p>
        </Card.Body>
      </Card>
      <Card radius="sm">
        <Card.Body>
          <p className="text-sm text-gray-600">SM</p>
        </Card.Body>
      </Card>
      <Card radius="md">
        <Card.Body>
          <p className="text-sm text-gray-600">MD</p>
        </Card.Body>
      </Card>
      <Card radius="lg">
        <Card.Body>
          <p className="text-sm text-gray-600">LG</p>
        </Card.Body>
      </Card>
      <Card radius="xl">
        <Card.Body>
          <p className="text-sm text-gray-600">XL</p>
        </Card.Body>
      </Card>
      <Card radius="2xl">
        <Card.Body>
          <p className="text-sm text-gray-600">2XL</p>
        </Card.Body>
      </Card>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Shadows Showcase
export const AllShadows: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Card shadow="none">
        <Card.Body>
          <p className="text-sm font-medium text-gray-900">None</p>
          <p className="text-xs text-gray-600">No shadow</p>
        </Card.Body>
      </Card>
      <Card shadow="sm">
        <Card.Body>
          <p className="text-sm font-medium text-gray-900">Small</p>
          <p className="text-xs text-gray-600">Subtle shadow</p>
        </Card.Body>
      </Card>
      <Card shadow="md">
        <Card.Body>
          <p className="text-sm font-medium text-gray-900">Medium</p>
          <p className="text-xs text-gray-600">Default shadow</p>
        </Card.Body>
      </Card>
      <Card shadow="lg">
        <Card.Body>
          <p className="text-sm font-medium text-gray-900">Large</p>
          <p className="text-xs text-gray-600">Prominent shadow</p>
        </Card.Body>
      </Card>
      <Card shadow="xl">
        <Card.Body>
          <p className="text-sm font-medium text-gray-900">Extra Large</p>
          <p className="text-xs text-gray-600">Maximum shadow</p>
        </Card.Body>
      </Card>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const UserProfile: Story = {
  render: () => (
    <Card
      radius="lg"
      shadow="md"
      className="w-80"
    >
      <Card.Header>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FiUser className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiMail className="h-4 w-4" />
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiPhone className="h-4 w-4" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiMapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="flex gap-2">
          <Button
            fullWidth
            variant="outline"
          >
            Message
          </Button>
          <Button fullWidth>Follow</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ProductCard: Story = {
  render: () => (
    <Card
      radius="lg"
      shadow="md"
      className="w-72"
    >
      <Card.Body className="p-0">
        <div className="h-48 bg-linear-to-br from-purple-400 to-pink-400" />
      </Card.Body>
      <Card.Body>
        <h3 className="text-lg font-semibold text-gray-900">
          Premium Headphones
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          High-quality wireless headphones with noise cancellation.
        </p>
        <p className="mt-3 text-2xl font-bold text-gray-900">$299.99</p>
      </Card.Body>
      <Card.Footer>
        <div className="flex gap-2">
          <Button
            leftSection={<FiHeart />}
            variant="outline"
            color="gray"
            compact
          />
          <Button
            fullWidth
            leftSection={<span>🛒</span>}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Footer>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const EventCard: Story = {
  render: () => (
    <Card
      radius="lg"
      shadow="lg"
      className="w-96"
    >
      <Card.Header>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Design Conference 2024
            </h3>
            <p className="text-sm text-gray-500">Annual Design Summit</p>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            Featured
          </span>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FiCalendar className="h-5 w-5 text-gray-400" />
            <span>March 15-17, 2024</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FiClock className="h-5 w-5 text-gray-400" />
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FiMapPin className="h-5 w-5 text-gray-400" />
            <span>San Francisco Convention Center</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Join us for three days of inspiring talks, workshops, and networking
          with design professionals from around the world.
        </p>
      </Card.Body>
      <Card.Footer>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-xl font-bold text-gray-900">$499</p>
          </div>
          <Button size="lg">Register Now</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card
        radius="lg"
        shadow="md"
      >
        <Card.Body>
          <p className="text-sm text-gray-600">Total Users</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">12,543</p>
          <p className="mt-1 text-xs text-green-600">↑ 12% from last month</p>
        </Card.Body>
      </Card>
      <Card
        radius="lg"
        shadow="md"
      >
        <Card.Body>
          <p className="text-sm text-gray-600">Revenue</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">$45,231</p>
          <p className="mt-1 text-xs text-green-600">↑ 8% from last month</p>
        </Card.Body>
      </Card>
      <Card
        radius="lg"
        shadow="md"
      >
        <Card.Body>
          <p className="text-sm text-gray-600">Active Sessions</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">3,456</p>
          <p className="mt-1 text-xs text-red-600">↓ 3% from last month</p>
        </Card.Body>
      </Card>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SimpleNotification: Story = {
  render: () => (
    <Card
      radius="md"
      shadow="sm"
      withBorder
      className="w-80"
    >
      <Card.Body>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
            <FiMail className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">New Message</h4>
            <p className="mt-1 text-sm text-gray-600">
              You have received a new message from Sarah.
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                variant="text"
                color="gray"
              >
                Dismiss
              </Button>
              <Button
                size="sm"
                variant="text"
                color="primary"
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card
        radius="lg"
        shadow="md"
      >
        <Card.Header>
          <h3 className="font-semibold text-gray-900">Card 1</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">
            This is the first card in a grid layout.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button
            fullWidth
            variant="outline"
          >
            Action
          </Button>
        </Card.Footer>
      </Card>
      <Card
        radius="lg"
        shadow="md"
      >
        <Card.Header>
          <h3 className="font-semibold text-gray-900">Card 2</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">
            This is the second card in a grid layout.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button
            fullWidth
            variant="outline"
          >
            Action
          </Button>
        </Card.Footer>
      </Card>
      <Card
        radius="lg"
        shadow="md"
      >
        <Card.Header>
          <h3 className="font-semibold text-gray-900">Card 3</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">
            This is the third card in a grid layout.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button
            fullWidth
            variant="outline"
          >
            Action
          </Button>
        </Card.Footer>
      </Card>
      <Card
        radius="lg"
        shadow="md"
      >
        <Card.Header>
          <h3 className="font-semibold text-gray-900">Card 4</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-gray-600">
            This is the fourth card in a grid layout.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button
            fullWidth
            variant="outline"
          >
            Action
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
