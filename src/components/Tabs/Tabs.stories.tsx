/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  FiHome,
  FiUser,
  FiSettings,
  FiMail,
  FiImage,
  FiVideo,
  FiMusic,
  FiFile,
  FiShoppingCart,
  FiStar,
  FiTrendingUp,
  FiActivity,
  FiPieChart,
} from 'react-icons/fi'

import Button from '../Button/Button'

import Tabs from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'filled'],
      description: 'Visual style variant',
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
      description: 'Color theme',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tab orientation',
    },
    grow: {
      control: 'boolean',
      description: 'Make tabs fill available space',
    },
    position: {
      control: 'select',
      options: ['left', 'center', 'right', 'apart'],
      description: 'Tab alignment',
    },
    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    keepMounted: {
      control: 'boolean',
      description: 'Keep inactive panels mounted in DOM',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    defaultValue: 'home',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab
            value="home"
            leftSection={<FiHome size={16} />}
          >
            Home
          </Tabs.Tab>
          <Tabs.Tab
            value="profile"
            leftSection={<FiUser size={16} />}
          >
            Profile
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<FiSettings size={16} />}
          >
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="home">
          <p className="text-gray-600">
            Welcome to the home tab. This is the default tab content.
          </p>
        </Tabs.Panel>

        <Tabs.Panel value="profile">
          <p className="text-gray-600">
            Your profile information and settings are displayed here.
          </p>
        </Tabs.Panel>

        <Tabs.Panel value="settings">
          <p className="text-gray-600">
            Manage your application settings and preferences.
          </p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const WithoutIcons: Story = {
  args: {
    defaultValue: 'tab1',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Content for tab 1</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const WithRightSection: Story = {
  args: {
    defaultValue: 'messages',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab
            value="messages"
            leftSection={<FiMail size={16} />}
            rightSection={
              <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                3
              </span>
            }
          >
            Messages
          </Tabs.Tab>
          <Tabs.Tab
            value="notifications"
            leftSection={<FiActivity size={16} />}
            rightSection={
              <span className="ml-1 rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">
                12
              </span>
            }
          >
            Notifications
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<FiSettings size={16} />}
          >
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="messages">
          <p className="text-gray-600">You have 3 unread messages</p>
        </Tabs.Panel>

        <Tabs.Panel value="notifications">
          <p className="text-gray-600">You have 12 new notifications</p>
        </Tabs.Panel>

        <Tabs.Panel value="settings">
          <p className="text-gray-600">Manage your settings</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const WithDisabledTab: Story = {
  args: {
    defaultValue: 'available',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="available">Available</Tabs.Tab>
          <Tabs.Tab
            value="disabled"
            disabled
          >
            Disabled
          </Tabs.Tab>
          <Tabs.Tab value="enabled">Enabled</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="available">
          <p className="text-gray-600">This tab is available</p>
        </Tabs.Panel>

        <Tabs.Panel value="disabled">
          <p className="text-gray-600">This content is disabled</p>
        </Tabs.Panel>

        <Tabs.Panel value="enabled">
          <p className="text-gray-600">This tab is enabled</p>
        </Tabs.Panel>
      </>
    ),
  },
}

// Variant Stories
export const VariantDefault: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'default',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Default Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Default Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Default Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">
            Default variant with underline indicator
          </p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const VariantOutline: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'outline',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Outline Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Outline Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Outline Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Outline variant with bordered tabs</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const VariantFilled: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'filled',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Filled Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Filled Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Filled Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Filled variant with pill-style tabs</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

// Color Stories
export const ColorPrimary: Story = {
  args: {
    defaultValue: 'tab1',
    color: 'primary',
    variant: 'filled',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Primary</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Primary color theme</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const ColorSecondary: Story = {
  args: {
    defaultValue: 'tab1',
    color: 'secondary',
    variant: 'filled',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Secondary</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Secondary color theme</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const ColorSuccess: Story = {
  args: {
    defaultValue: 'tab1',
    color: 'success',
    variant: 'filled',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Success</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Success color theme</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const ColorDanger: Story = {
  args: {
    defaultValue: 'tab1',
    color: 'danger',
    variant: 'filled',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Danger</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Danger color theme</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

// Orientation Stories
export const OrientationHorizontal: Story = {
  args: {
    defaultValue: 'tab1',
    orientation: 'horizontal',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab
            value="tab1"
            leftSection={<FiHome size={16} />}
          >
            Horizontal 1
          </Tabs.Tab>
          <Tabs.Tab
            value="tab2"
            leftSection={<FiUser size={16} />}
          >
            Horizontal 2
          </Tabs.Tab>
          <Tabs.Tab
            value="tab3"
            leftSection={<FiSettings size={16} />}
          >
            Horizontal 3
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Horizontal orientation (default)</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const OrientationVertical: Story = {
  args: {
    defaultValue: 'tab1',
    orientation: 'vertical',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab
            value="tab1"
            leftSection={<FiHome size={16} />}
          >
            Vertical 1
          </Tabs.Tab>
          <Tabs.Tab
            value="tab2"
            leftSection={<FiUser size={16} />}
          >
            Vertical 2
          </Tabs.Tab>
          <Tabs.Tab
            value="tab3"
            leftSection={<FiSettings size={16} />}
          >
            Vertical 3
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Vertical orientation with side tabs</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

// Position Stories
export const PositionLeft: Story = {
  args: {
    defaultValue: 'tab1',
    position: 'left',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Left 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Left 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Left 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Tabs aligned to the left</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const PositionCenter: Story = {
  args: {
    defaultValue: 'tab1',
    position: 'center',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Center 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Center 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Center 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Tabs centered</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const PositionRight: Story = {
  args: {
    defaultValue: 'tab1',
    position: 'right',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Right 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Right 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Right 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Tabs aligned to the right</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const PositionApart: Story = {
  args: {
    defaultValue: 'tab1',
    position: 'apart',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Apart 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Apart 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Apart 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Tabs spaced apart evenly</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

// Grow
export const Grow: Story = {
  args: {
    defaultValue: 'tab1',
    grow: true,
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Tabs fill available space equally</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

// Radius Stories
export const RadiusSmall: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'filled',
    radius: 'sm',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Small</Tabs.Tab>
          <Tabs.Tab value="tab2">Radius</Tabs.Tab>
          <Tabs.Tab value="tab3">Tabs</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Small border radius</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

export const RadiusLarge: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'filled',
    radius: 'lg',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Large</Tabs.Tab>
          <Tabs.Tab value="tab2">Radius</Tabs.Tab>
          <Tabs.Tab value="tab3">Tabs</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <p className="text-gray-600">Large border radius</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <p className="text-gray-600">Content for tab 2</p>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <p className="text-gray-600">Content for tab 3</p>
        </Tabs.Panel>
      </>
    ),
  },
}

// Controlled
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('tab1')

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            size="xs"
            onClick={() => setValue('tab1')}
          >
            Go to Tab 1
          </Button>
          <Button
            size="xs"
            onClick={() => setValue('tab2')}
          >
            Go to Tab 2
          </Button>
          <Button
            size="xs"
            onClick={() => setValue('tab3')}
          >
            Go to Tab 3
          </Button>
        </div>
        <Tabs
          value={value}
          onChange={setValue}
        >
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="tab1">
            <p className="text-gray-600">Controlled tabs - Current: {value}</p>
          </Tabs.Panel>

          <Tabs.Panel value="tab2">
            <p className="text-gray-600">Controlled tabs - Current: {value}</p>
          </Tabs.Panel>

          <Tabs.Panel value="tab3">
            <p className="text-gray-600">Controlled tabs - Current: {value}</p>
          </Tabs.Panel>
        </Tabs>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Default</h3>
        <Tabs
          defaultValue="tab1"
          variant="default"
        >
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">
            <p className="text-sm text-gray-600">Default variant content</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab2">
            <p className="text-sm text-gray-600">Tab 2 content</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab3">
            <p className="text-sm text-gray-600">Tab 3 content</p>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Outline</h3>
        <Tabs
          defaultValue="tab1"
          variant="outline"
        >
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">
            <p className="text-sm text-gray-600">Outline variant content</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab2">
            <p className="text-sm text-gray-600">Tab 2 content</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab3">
            <p className="text-sm text-gray-600">Tab 3 content</p>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Filled</h3>
        <Tabs
          defaultValue="tab1"
          variant="filled"
        >
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">
            <p className="text-sm text-gray-600">Filled variant content</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab2">
            <p className="text-sm text-gray-600">Tab 2 content</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab3">
            <p className="text-sm text-gray-600">Tab 3 content</p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Colors Showcase
export const AllColors: Story = {
  render: () => (
    <div className="space-y-6">
      {[
        { color: 'primary', label: 'Primary' },
        { color: 'secondary', label: 'Secondary' },
        { color: 'info', label: 'Info' },
        { color: 'success', label: 'Success' },
        { color: 'warning', label: 'Warning' },
        { color: 'danger', label: 'Danger' },
        { color: 'dark', label: 'Dark' },
        { color: 'gray', label: 'Gray' },
      ].map(({ color, label }) => (
        <div key={color}>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">{label}</h3>
          <Tabs
            defaultValue="tab1"
            color={color as any}
            variant="filled"
          >
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">
              <p className="text-sm text-gray-600">Content for {label}</p>
            </Tabs.Panel>
            <Tabs.Panel value="tab2">
              <p className="text-sm text-gray-600">Tab 2</p>
            </Tabs.Panel>
            <Tabs.Panel value="tab3">
              <p className="text-sm text-gray-600">Tab 3</p>
            </Tabs.Panel>
          </Tabs>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const MediaGallery: Story = {
  render: () => (
    <div className="w-[600px]">
      <Tabs
        defaultValue="images"
        color="info"
      >
        <Tabs.List>
          <Tabs.Tab
            value="images"
            leftSection={<FiImage size={18} />}
          >
            Images
          </Tabs.Tab>
          <Tabs.Tab
            value="videos"
            leftSection={<FiVideo size={18} />}
          >
            Videos
          </Tabs.Tab>
          <Tabs.Tab
            value="music"
            leftSection={<FiMusic size={18} />}
          >
            Music
          </Tabs.Tab>
          <Tabs.Tab
            value="documents"
            leftSection={<FiFile size={18} />}
          >
            Documents
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="images">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-linear-to-br from-blue-400 to-purple-500"
              />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="videos">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center rounded-lg bg-linear-to-br from-pink-400 to-red-500"
              >
                <FiVideo className="h-12 w-12 text-white" />
              </div>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="music">
          <div className="space-y-3">
            {['Summer Vibes', 'Chill Mix', 'Workout Beats'].map((name) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-linear-to-br from-green-400 to-blue-500">
                  <FiMusic className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{name}</div>
                  <div className="text-xs text-gray-500">12 tracks</div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="documents">
          <div className="space-y-2">
            {['Report.pdf', 'Presentation.pptx', 'Data.xlsx'].map((name) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
              >
                <FiFile className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Dashboard: Story = {
  render: () => (
    <div className="w-[700px]">
      <Tabs
        defaultValue="overview"
        color="primary"
      >
        <Tabs.List>
          <Tabs.Tab
            value="overview"
            leftSection={<FiActivity size={18} />}
          >
            Overview
          </Tabs.Tab>
          <Tabs.Tab
            value="analytics"
            leftSection={<FiPieChart size={18} />}
          >
            Analytics
          </Tabs.Tab>
          <Tabs.Tab
            value="sales"
            leftSection={<FiShoppingCart size={18} />}
          >
            Sales
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="text-sm font-medium text-blue-900">Revenue</div>
              <div className="mt-2 text-2xl font-bold text-blue-600">
                $12,345
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs text-blue-700">
                <FiTrendingUp size={12} />
                +12%
              </div>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <div className="text-sm font-medium text-green-900">Orders</div>
              <div className="mt-2 text-2xl font-bold text-green-600">245</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-green-700">
                <FiTrendingUp size={12} />
                +8%
              </div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4">
              <div className="text-sm font-medium text-purple-900">
                Customers
              </div>
              <div className="mt-2 text-2xl font-bold text-purple-600">
                1,234
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs text-purple-700">
                <FiTrendingUp size={12} />
                +5%
              </div>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="analytics">
          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <FiPieChart className="mx-auto h-16 w-16 text-gray-400" />
            <p className="mt-3 text-sm text-gray-600">
              Analytics charts and graphs would appear here
            </p>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="sales">
          <div className="space-y-3">
            {[
              { product: 'Product A', sales: '$1,234', trend: '+12%' },
              { product: 'Product B', sales: '$987', trend: '+8%' },
              { product: 'Product C', sales: '$654', trend: '+5%' },
            ].map((item) => (
              <div
                key={item.product}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
              >
                <div>
                  <div className="font-medium text-gray-900">
                    {item.product}
                  </div>
                  <div className="text-sm text-gray-500">{item.sales}</div>
                </div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <FiTrendingUp size={14} />
                  {item.trend}
                </div>
              </div>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const Ecommerce: Story = {
  render: () => (
    <div className="w-[600px]">
      <Tabs
        defaultValue="trending"
        variant="filled"
        color="warning"
      >
        <Tabs.List>
          <Tabs.Tab
            value="trending"
            leftSection={<FiTrendingUp size={16} />}
          >
            Trending
          </Tabs.Tab>
          <Tabs.Tab
            value="new"
            leftSection={<FiStar size={16} />}
          >
            New Arrivals
          </Tabs.Tab>
          <Tabs.Tab
            value="sale"
            leftSection={<FiShoppingCart size={16} />}
          >
            On Sale
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="trending">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 p-3"
              >
                <div className="aspect-square rounded bg-linear-to-br from-yellow-400 to-orange-500" />
                <div className="mt-2">
                  <div className="text-sm font-medium text-gray-900">
                    Product {i}
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    ${99 + i * 10}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="new">
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
              >
                <div className="h-16 w-16 rounded bg-linear-to-br from-blue-400 to-purple-500" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    New Product {i}
                  </div>
                  <div className="text-sm text-gray-500">Just arrived</div>
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ${199 + i * 50}
                </div>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="sale">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 p-4"
              >
                <div className="relative">
                  <div className="aspect-square rounded bg-linear-to-br from-red-400 to-pink-500" />
                  <span className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                    -50%
                  </span>
                </div>
                <div className="mt-3">
                  <div className="font-medium text-gray-900">Sale Item {i}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">
                      ${50 + i * 25}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${100 + i * 50}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
