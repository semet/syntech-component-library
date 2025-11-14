import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FiInfo,
  FiHeart,
  FiSettings,
  FiTrash2,
  FiUser,
  FiMail,
  FiDownload,
} from 'react-icons/fi'

import Tooltip from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    // Add padding to prevent tooltip cutoff
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
    position: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
      description: 'Tooltip position',
    },
    offset: {
      control: 'number',
      description: 'Distance between tooltip and target',
    },
    withArrow: {
      control: 'boolean',
      description: 'Show arrow',
    },
    arrowOffset: {
      control: 'number',
      description: 'Arrow position offset',
    },
    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    color: {
      control: 'select',
      options: ['dark', 'light', 'primary', 'success', 'danger', 'warning'],
      description: 'Tooltip color',
    },
    multiline: {
      control: 'boolean',
      description: 'Allow multiline content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable tooltip',
    },
    openDelay: {
      control: 'number',
      description: 'Delay before showing (ms)',
    },
    closeDelay: {
      control: 'number',
      description: 'Delay before hiding (ms)',
    },
    inline: {
      control: 'boolean',
      description: 'Inline display',
    },
    width: {
      control: 'number',
      description: 'Tooltip width (auto or number)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Hover me
      </button>
    ),
  },
}

export const WithoutArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    withArrow: false,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        No Arrow
      </button>
    ),
  },
}

export const LongContent: Story = {
  args: {
    content:
      'This is a tooltip with much longer content that will wrap to multiple lines',
    multiline: true,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Long Content
      </button>
    ),
  },
}

// Position Stories
export const TopPosition: Story = {
  args: {
    content: 'Top position',
    position: 'top',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Top
      </button>
    ),
  },
}

export const TopStartPosition: Story = {
  args: {
    content: 'Top start position',
    position: 'top-start',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Top Start
      </button>
    ),
  },
}

export const TopEndPosition: Story = {
  args: {
    content: 'Top end position',
    position: 'top-end',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Top End
      </button>
    ),
  },
}

export const BottomPosition: Story = {
  args: {
    content: 'Bottom position',
    position: 'bottom',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Bottom
      </button>
    ),
  },
}

export const BottomStartPosition: Story = {
  args: {
    content: 'Bottom start position',
    position: 'bottom-start',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Bottom Start
      </button>
    ),
  },
}

export const BottomEndPosition: Story = {
  args: {
    content: 'Bottom end position',
    position: 'bottom-end',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Bottom End
      </button>
    ),
  },
}

export const LeftPosition: Story = {
  args: {
    content: 'Left position',
    position: 'left',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Left
      </button>
    ),
  },
}

export const LeftStartPosition: Story = {
  args: {
    content: 'Left start position',
    position: 'left-start',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Left Start
      </button>
    ),
  },
}

export const LeftEndPosition: Story = {
  args: {
    content: 'Left end position',
    position: 'left-end',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Left End
      </button>
    ),
  },
}

export const RightPosition: Story = {
  args: {
    content: 'Right position',
    position: 'right',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Right
      </button>
    ),
  },
}

export const RightStartPosition: Story = {
  args: {
    content: 'Right start position',
    position: 'right-start',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Right Start
      </button>
    ),
  },
}

export const RightEndPosition: Story = {
  args: {
    content: 'Right end position',
    position: 'right-end',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Right End
      </button>
    ),
  },
}

// Color Stories
export const DarkColor: Story = {
  args: {
    content: 'Dark tooltip',
    color: 'dark',
    children: (
      <button className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
        Dark
      </button>
    ),
  },
}

export const LightColor: Story = {
  args: {
    content: 'Light tooltip',
    color: 'light',
    children: (
      <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300">
        Light
      </button>
    ),
  },
}

export const PrimaryColor: Story = {
  args: {
    content: 'Primary tooltip',
    color: 'primary',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Primary
      </button>
    ),
  },
}

export const SuccessColor: Story = {
  args: {
    content: 'Success tooltip',
    color: 'success',
    children: (
      <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
        Success
      </button>
    ),
  },
}

export const WarningColor: Story = {
  args: {
    content: 'Warning tooltip',
    color: 'warning',
    children: (
      <button className="rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
        Warning
      </button>
    ),
  },
}

export const DangerColor: Story = {
  args: {
    content: 'Danger tooltip',
    color: 'danger',
    children: (
      <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">
        Danger
      </button>
    ),
  },
}

// Radius Stories
export const RadiusNone: Story = {
  args: {
    content: 'No radius',
    radius: 'none',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        None
      </button>
    ),
  },
}

export const RadiusXS: Story = {
  args: {
    content: 'Extra small radius',
    radius: 'xs',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        XS
      </button>
    ),
  },
}

export const RadiusSM: Story = {
  args: {
    content: 'Small radius',
    radius: 'sm',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        SM
      </button>
    ),
  },
}

export const RadiusMD: Story = {
  args: {
    content: 'Medium radius',
    radius: 'md',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        MD
      </button>
    ),
  },
}

export const RadiusLG: Story = {
  args: {
    content: 'Large radius',
    radius: 'lg',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        LG
      </button>
    ),
  },
}

export const RadiusXL: Story = {
  args: {
    content: 'Extra large radius',
    radius: 'xl',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        XL
      </button>
    ),
  },
}

// Offset Stories
export const SmallOffset: Story = {
  args: {
    content: 'Small offset (5px)',
    offset: 5,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Offset 5
      </button>
    ),
  },
}

export const MediumOffset: Story = {
  args: {
    content: 'Medium offset (15px)',
    offset: 15,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Offset 15
      </button>
    ),
  },
}

export const LargeOffset: Story = {
  args: {
    content: 'Large offset (30px)',
    offset: 30,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Offset 30
      </button>
    ),
  },
}

// Arrow Offset Stories
export const ArrowOffsetLeft: Story = {
  args: {
    content: 'Arrow offset -20',
    arrowOffset: -20,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Arrow Left
      </button>
    ),
  },
}

export const ArrowOffsetCenter: Story = {
  args: {
    content: 'Arrow offset 0 (center)',
    arrowOffset: 0,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Arrow Center
      </button>
    ),
  },
}

export const ArrowOffsetRight: Story = {
  args: {
    content: 'Arrow offset 20',
    arrowOffset: 20,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Arrow Right
      </button>
    ),
  },
}

// Delay Stories
export const OpenDelay: Story = {
  args: {
    content: 'Opens after 500ms',
    openDelay: 500,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Open Delay
      </button>
    ),
  },
}

export const CloseDelay: Story = {
  args: {
    content: 'Closes after 500ms',
    closeDelay: 500,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Close Delay
      </button>
    ),
  },
}

export const BothDelays: Story = {
  args: {
    content: 'Opens after 300ms, closes after 300ms',
    openDelay: 300,
    closeDelay: 300,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Both Delays
      </button>
    ),
  },
}

// Width Stories
export const AutoWidth: Story = {
  args: {
    content: 'Auto width tooltip',
    width: 'auto',
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Auto Width
      </button>
    ),
  },
}

export const CustomWidth: Story = {
  args: {
    content:
      'This tooltip has a custom width of 200px and the content will wrap accordingly',
    width: 200,
    multiline: true,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Custom Width
      </button>
    ),
  },
}

export const WideTooltip: Story = {
  args: {
    content: 'This is a very wide tooltip with width set to 400px',
    width: 400,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Wide Tooltip
      </button>
    ),
  },
}

// Disabled Story
export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: (
      <button className="cursor-not-allowed rounded-md bg-gray-400 px-4 py-2 text-white">
        Disabled
      </button>
    ),
  },
}

// With Icons
export const WithIcon: Story = {
  args: {
    content: 'User profile',
    children: (
      <button className="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700">
        <FiUser size={20} />
      </button>
    ),
  },
}

export const IconSettings: Story = {
  args: {
    content: 'Settings',
    color: 'primary',
    position: 'bottom',
    children: (
      <button className="rounded-md bg-gray-600 p-2 text-white hover:bg-gray-700">
        <FiSettings size={20} />
      </button>
    ),
  },
}

export const IconHeart: Story = {
  args: {
    content: 'Like this item',
    color: 'danger',
    children: (
      <button className="rounded-md bg-red-600 p-2 text-white hover:bg-red-700">
        <FiHeart size={20} />
      </button>
    ),
  },
}

export const IconDelete: Story = {
  args: {
    content: 'Delete item',
    color: 'danger',
    position: 'right',
    children: (
      <button className="rounded-md bg-red-600 p-2 text-white hover:bg-red-700">
        <FiTrash2 size={20} />
      </button>
    ),
  },
}

export const IconMail: Story = {
  args: {
    content: 'Send message',
    color: 'success',
    children: (
      <button className="rounded-md bg-green-600 p-2 text-white hover:bg-green-700">
        <FiMail size={20} />
      </button>
    ),
  },
}

export const IconInfo: Story = {
  args: {
    content: 'More information about this feature',
    color: 'light',
    position: 'bottom',
    multiline: true,
    width: 200,
    children: (
      <button className="rounded-md bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
        <FiInfo size={20} />
      </button>
    ),
  },
}

// Inline Story
export const InlineTooltip: Story = {
  args: {
    content: 'This is an inline tooltip',
    inline: true,
    color: 'primary',
    children: (
      <span className="cursor-help text-blue-600 underline">
        inline with text
      </span>
    ),
  },
  render: (arguments_) => (
    <div className="max-w-md rounded-lg bg-white p-4 shadow">
      <div className="text-gray-700">
        You can use tooltips <Tooltip {...arguments_} /> to provide additional
        context.
      </div>
    </div>
  ),
}

// Complex Content Story
export const ComplexContent: Story = {
  args: {
    content: (
      <div className="space-y-1">
        <div className="font-semibold">User Information</div>
        <div className="text-xs">Email: user@example.com</div>
        <div className="text-xs">Role: Administrator</div>
      </div>
    ),
    multiline: true,
    width: 200,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Complex Content
      </button>
    ),
  },
}

// All Positions Showcase
export const AllPositions: Story = {
  args: {
    content: '',
    children: null,
  },
  render: () => (
    <div className="space-y-12 p-8">
      {/* Top positions */}
      <div className="flex justify-center gap-4">
        <Tooltip
          content="Top Start"
          position="top-start"
        >
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Top Start
          </button>
        </Tooltip>
        <Tooltip
          content="Top"
          position="top"
        >
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Top
          </button>
        </Tooltip>
        <Tooltip
          content="Top End"
          position="top-end"
        >
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Top End
          </button>
        </Tooltip>
      </div>

      {/* Side positions */}
      <div className="flex justify-center gap-32">
        <div className="flex flex-col gap-4">
          <Tooltip
            content="Left Start"
            position="left-start"
          >
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Left Start
            </button>
          </Tooltip>
          <Tooltip
            content="Left"
            position="left"
          >
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Left
            </button>
          </Tooltip>
          <Tooltip
            content="Left End"
            position="left-end"
          >
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Left End
            </button>
          </Tooltip>
        </div>

        <div className="flex flex-col gap-4">
          <Tooltip
            content="Right Start"
            position="right-start"
          >
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Right Start
            </button>
          </Tooltip>
          <Tooltip
            content="Right"
            position="right"
          >
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Right
            </button>
          </Tooltip>
          <Tooltip
            content="Right End"
            position="right-end"
          >
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Right End
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Bottom positions */}
      <div className="flex justify-center gap-4">
        <Tooltip
          content="Bottom Start"
          position="bottom-start"
        >
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Bottom Start
          </button>
        </Tooltip>
        <Tooltip
          content="Bottom"
          position="bottom"
        >
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Bottom
          </button>
        </Tooltip>
        <Tooltip
          content="Bottom End"
          position="bottom-end"
        >
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Bottom End
          </button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Colors Showcase
export const AllColors: Story = {
  args: {
    content: '',
    children: null,
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip
        content="Dark tooltip"
        color="dark"
      >
        <button className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
          Dark
        </button>
      </Tooltip>
      <Tooltip
        content="Light tooltip"
        color="light"
      >
        <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300">
          Light
        </button>
      </Tooltip>
      <Tooltip
        content="Primary tooltip"
        color="primary"
      >
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Primary
        </button>
      </Tooltip>
      <Tooltip
        content="Success tooltip"
        color="success"
      >
        <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
          Success
        </button>
      </Tooltip>
      <Tooltip
        content="Warning tooltip"
        color="warning"
      >
        <button className="rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
          Warning
        </button>
      </Tooltip>
      <Tooltip
        content="Danger tooltip"
        color="danger"
      >
        <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">
          Danger
        </button>
      </Tooltip>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Icon Buttons Showcase
export const IconButtons: Story = {
  args: {
    content: '',
    children: null,
  },
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="User profile">
        <button className="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700">
          <FiUser size={20} />
        </button>
      </Tooltip>
      <Tooltip
        content="Settings"
        color="primary"
      >
        <button className="rounded-md bg-gray-600 p-2 text-white hover:bg-gray-700">
          <FiSettings size={20} />
        </button>
      </Tooltip>
      <Tooltip
        content="Like"
        color="danger"
      >
        <button className="rounded-md bg-red-600 p-2 text-white hover:bg-red-700">
          <FiHeart size={20} />
        </button>
      </Tooltip>
      <Tooltip
        content="Delete"
        color="danger"
      >
        <button className="rounded-md bg-red-600 p-2 text-white hover:bg-red-700">
          <FiTrash2 size={20} />
        </button>
      </Tooltip>
      <Tooltip
        content="Send message"
        color="success"
      >
        <button className="rounded-md bg-green-600 p-2 text-white hover:bg-green-700">
          <FiMail size={20} />
        </button>
      </Tooltip>
      <Tooltip
        content="Download file"
        position="bottom"
      >
        <button className="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700">
          <FiDownload size={20} />
        </button>
      </Tooltip>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Example
export const RealWorldExample: Story = {
  args: {
    content: '',
    children: null,
  },
  render: () => (
    <div className="max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">User Dashboard</h3>
        <div className="flex gap-2">
          <Tooltip
            content="Account settings"
            position="bottom"
          >
            <button className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
              <FiSettings size={18} />
            </button>
          </Tooltip>
          <Tooltip
            content="View notifications"
            position="bottom"
            color="primary"
          >
            <button className="relative rounded-md p-2 text-gray-600 hover:bg-gray-100">
              <FiInfo size={18} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </Tooltip>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Tooltip
            content="This user is currently active and available for messaging"
            multiline
            width={200}
            color="success"
          >
            <div className="flex h-10 w-10 cursor-help items-center justify-center rounded-full bg-green-100 text-green-600">
              <FiUser size={20} />
            </div>
          </Tooltip>
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-500">john@example.com</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Tooltip content="Send a message">
            <button className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Message
            </button>
          </Tooltip>
          <Tooltip
            content="Add to favorites"
            color="danger"
          >
            <button className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">
              <FiHeart size={18} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
