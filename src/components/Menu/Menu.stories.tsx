/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  FiEdit,
  FiTrash2,
  FiCopy,
  FiDownload,
  FiShare2,
  FiSettings,
  FiUser,
  FiLogOut,
  FiHelpCircle,
  FiMail,
} from 'react-icons/fi'

import Button from '../Button/Button'

import Menu from './Menu'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: 'How the menu opens',
    },
    position: {
      control: 'select',
      options: [
        'bottom-start',
        'bottom-end',
        'bottom-center',
        'top-start',
        'top-end',
        'top-center',
        'left-start',
        'left-end',
        'left-center',
        'right-start',
        'right-end',
        'right-center',
      ],
      description: 'Menu position',
    },
    withArrow: {
      control: 'boolean',
      description: 'Show arrow pointing to trigger',
    },
    closeOnItemClick: {
      control: 'boolean',
      description: 'Close menu when item is clicked',
    },
  },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Open Menu</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item leftSection={<FiEdit size={16} />}>Edit</Menu.Item>
        <Menu.Item leftSection={<FiCopy size={16} />}>Copy</Menu.Item>
        <Menu.Item leftSection={<FiDownload size={16} />}>Download</Menu.Item>
        <Menu.Divider />
        <Menu.Item
          leftSection={<FiTrash2 size={16} />}
          color="danger"
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Menu withArrow>
      <Menu.Button>With Arrow</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item leftSection={<FiEdit size={16} />}>Edit</Menu.Item>
        <Menu.Item leftSection={<FiCopy size={16} />}>Copy</Menu.Item>
        <Menu.Item leftSection={<FiTrash2 size={16} />}>Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const HoverTrigger: Story = {
  render: () => (
    <Menu
      trigger="hover"
      withArrow
    >
      <Menu.Button>Hover Me</Menu.Button>
      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>
        <Menu.Item leftSection={<FiEdit size={16} />}>Edit</Menu.Item>
        <Menu.Item leftSection={<FiCopy size={16} />}>Copy</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<FiShare2 size={16} />}>Share</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Actions</Menu.Button>
      <Menu.Dropdown>
        <Menu.Label>File Operations</Menu.Label>
        <Menu.Item leftSection={<FiEdit size={16} />}>Edit</Menu.Item>
        <Menu.Item leftSection={<FiCopy size={16} />}>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Share</Menu.Label>
        <Menu.Item leftSection={<FiShare2 size={16} />}>Share Link</Menu.Item>
        <Menu.Item leftSection={<FiMail size={16} />}>Send via Email</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger Zone</Menu.Label>
        <Menu.Item
          leftSection={<FiTrash2 size={16} />}
          color="danger"
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item leftSection={<FiEdit size={16} />}>Edit</Menu.Item>
        <Menu.Item
          leftSection={<FiCopy size={16} />}
          disabled
        >
          Copy (Disabled)
        </Menu.Item>
        <Menu.Item leftSection={<FiDownload size={16} />}>Download</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const WithRightSection: Story = {
  render: () => (
    <Menu>
      <Menu.Button>Shortcuts</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<FiEdit size={16} />}
          rightSection={<span className="text-xs text-gray-400">⌘E</span>}
        >
          Edit
        </Menu.Item>
        <Menu.Item
          leftSection={<FiCopy size={16} />}
          rightSection={<span className="text-xs text-gray-400">⌘C</span>}
        >
          Copy
        </Menu.Item>
        <Menu.Item
          leftSection={<FiDownload size={16} />}
          rightSection={<span className="text-xs text-gray-400">⌘D</span>}
        >
          Download
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

// Position Stories
export const PositionBottomStart: Story = {
  render: () => (
    <Menu
      position="bottom-start"
      withArrow
    >
      <Menu.Button>Bottom Start</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const PositionBottomEnd: Story = {
  render: () => (
    <Menu
      position="bottom-end"
      withArrow
    >
      <Menu.Button>Bottom End</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const PositionTopStart: Story = {
  render: () => (
    <Menu
      position="top-start"
      withArrow
    >
      <Menu.Button>Top Start</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const PositionRightCenter: Story = {
  render: () => (
    <Menu
      position="right-center"
      withArrow
    >
      <Menu.Button>Right Center</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

// Width Stories
export const WidthSmall: Story = {
  render: () => (
    <Menu width="xs">
      <Menu.Button>Small Width</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const WidthLarge: Story = {
  render: () => (
    <Menu width="xl">
      <Menu.Button>Large Width</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Edit Document</Menu.Item>
        <Menu.Item>Copy to Clipboard</Menu.Item>
        <Menu.Item>Download as PDF</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

// Controlled
export const Controlled: Story = {
  render: () => {
    const [opened, setOpened] = useState(false)

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            size="xs"
            onClick={() => setOpened(true)}
          >
            Open Menu
          </Button>
          <Button
            size="xs"
            onClick={() => setOpened(false)}
          >
            Close Menu
          </Button>
        </div>
        <Menu
          opened={opened}
          onChange={setOpened}
        >
          <Menu.Button>Controlled Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item onClick={() => console.log('Edit')}>Edit</Menu.Item>
            <Menu.Item onClick={() => console.log('Copy')}>Copy</Menu.Item>
            <Menu.Item onClick={() => console.log('Delete')}>Delete</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const UserMenu: Story = {
  render: () => (
    <Menu
      position="bottom-end"
      withArrow
    >
      <Menu.Button>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
            JD
          </div>
        </div>
      </Menu.Button>
      <Menu.Dropdown>
        <Menu.Label>John Doe</Menu.Label>
        <Menu.Item leftSection={<FiUser size={16} />}>Profile</Menu.Item>
        <Menu.Item leftSection={<FiSettings size={16} />}>Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<FiHelpCircle size={16} />}>
          Help & Support
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          leftSection={<FiLogOut size={16} />}
          color="danger"
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const ContextMenu: Story = {
  render: () => (
    <Menu>
      <Menu.Button variant="outline">Right Click Menu</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<FiEdit size={16} />}
          rightSection={<span className="text-xs text-gray-400">⌘E</span>}
        >
          Edit
        </Menu.Item>
        <Menu.Item
          leftSection={<FiCopy size={16} />}
          rightSection={<span className="text-xs text-gray-400">⌘C</span>}
        >
          Copy
        </Menu.Item>
        <Menu.Item
          leftSection={<FiDownload size={16} />}
          rightSection={<span className="text-xs text-gray-400">⌘S</span>}
        >
          Save As...
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<FiShare2 size={16} />}>Share</Menu.Item>
        <Menu.Divider />
        <Menu.Item
          leftSection={<FiTrash2 size={16} />}
          color="danger"
          rightSection={<span className="text-xs text-gray-400">⌘⌫</span>}
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ),
}

export const FileActions: Story = {
  render: () => (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-100">
            <FiSettings className="text-blue-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">project-files.zip</div>
            <div className="text-sm text-gray-500">2.4 MB</div>
          </div>
        </div>
        <Menu
          position="bottom-end"
          withArrow
        >
          <Menu.Button
            variant="outline"
            size="sm"
          >
            •••
          </Menu.Button>
          <Menu.Dropdown>
            <Menu.Item leftSection={<FiDownload size={16} />}>
              Download
            </Menu.Item>
            <Menu.Item leftSection={<FiShare2 size={16} />}>Share</Menu.Item>
            <Menu.Item leftSection={<FiEdit size={16} />}>Rename</Menu.Item>
            <Menu.Divider />
            <Menu.Item
              leftSection={<FiTrash2 size={16} />}
              color="danger"
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {[
        'bottom-start',
        'bottom-center',
        'bottom-end',
        'top-start',
        'top-center',
        'top-end',
        'left-start',
        'left-center',
        'left-end',
        'right-start',
        'right-center',
        'right-end',
      ].map((position) => (
        <Menu
          key={position}
          position={position as any}
          withArrow
        >
          <Menu.Button size="xs">{position}</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>Option 1</Menu.Item>
            <Menu.Item>Option 2</Menu.Item>
            <Menu.Item>Option 3</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
