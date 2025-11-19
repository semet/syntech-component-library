/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
  FiXCircle,
  FiHeart,
  FiSettings,
} from 'react-icons/fi'

import Alert from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'transparent'],
      description: 'Alert variant style',
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
      description: 'Alert color theme',
    },
    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    withCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Primary: Story = {
  args: {
    title: 'Alert title',
    children: 'This is a primary alert with some important information.',
    color: 'primary',
    variant: 'light',
  },
}

export const Success: Story = {
  args: {
    title: 'Success',
    children: 'Your changes have been saved successfully.',
    color: 'success',
    variant: 'light',
    icon: <FiCheckCircle size={20} />,
  },
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    children: 'Please review your information before proceeding.',
    color: 'warning',
    variant: 'light',
    icon: <FiAlertTriangle size={20} />,
  },
}

export const Danger: Story = {
  args: {
    title: 'Error',
    children: 'An error occurred while processing your request.',
    color: 'danger',
    variant: 'light',
    icon: <FiXCircle size={20} />,
  },
}

export const Info: Story = {
  args: {
    title: 'Information',
    children: 'Here is some helpful information for you.',
    color: 'info',
    variant: 'light',
    icon: <FiInfo size={20} />,
  },
}

// Variants
export const Filled: Story = {
  args: {
    title: 'Filled Alert',
    children: 'This is a filled variant alert with white text.',
    variant: 'filled',
    color: 'primary',
    icon: <FiInfo size={20} />,
  },
}

export const Light: Story = {
  args: {
    title: 'Light Alert',
    children: 'This is a light variant alert with subtle background.',
    variant: 'light',
    color: 'primary',
    icon: <FiInfo size={20} />,
  },
}

export const Outline: Story = {
  args: {
    title: 'Outline Alert',
    children: 'This is an outline variant alert with border.',
    variant: 'outline',
    color: 'primary',
    icon: <FiInfo size={20} />,
  },
}

export const Transparent: Story = {
  args: {
    title: 'Transparent Alert',
    children: 'This is a transparent variant alert without background.',
    variant: 'transparent',
    color: 'primary',
    icon: <FiInfo size={20} />,
  },
}

// With Close Button
export const WithCloseButton: Story = {
  args: {
    title: 'Dismissible Alert',
    children: 'This alert can be closed by clicking the X button.',
    color: 'info',
    variant: 'light',
    icon: <FiInfo size={20} />,
    withCloseButton: true,
  },
}

export const WithCloseButtonFilled: Story = {
  args: {
    title: 'Dismissible Filled Alert',
    children: 'This filled alert can be dismissed.',
    color: 'success',
    variant: 'filled',
    icon: <FiCheckCircle size={20} />,
    withCloseButton: true,
  },
}

// Without Title
export const WithoutTitle: Story = {
  args: {
    children: 'This is an alert without a title, just the message content.',
    color: 'primary',
    variant: 'light',
    icon: <FiInfo size={20} />,
  },
}

// Without Icon
export const WithoutIcon: Story = {
  args: {
    title: 'Alert Without Icon',
    children: 'This alert does not have an icon.',
    color: 'primary',
    variant: 'light',
  },
}

// Radius
export const RadiusNone: Story = {
  args: {
    title: 'No Radius',
    children: 'This alert has sharp corners.',
    radius: 'none',
    icon: <FiInfo size={20} />,
  },
}

export const RadiusLarge: Story = {
  args: {
    title: 'Large Radius',
    children: 'This alert has large rounded corners.',
    radius: 'lg',
    icon: <FiInfo size={20} />,
  },
}

export const RadiusExtraLarge: Story = {
  args: {
    title: 'Extra Large Radius',
    children: 'This alert has extra large rounded corners.',
    radius: 'xl',
    icon: <FiInfo size={20} />,
  },
}

// All Colors Showcase
export const AllColors: Story = {
  render: () => (
    <div className="w-[600px] space-y-3">
      <Alert
        color="primary"
        title="Primary"
        icon={<FiInfo size={20} />}
      >
        This is a primary alert message.
      </Alert>
      <Alert
        color="secondary"
        title="Secondary"
        icon={<FiInfo size={20} />}
      >
        This is a secondary alert message.
      </Alert>
      <Alert
        color="info"
        title="Info"
        icon={<FiInfo size={20} />}
      >
        This is an info alert message.
      </Alert>
      <Alert
        color="success"
        title="Success"
        icon={<FiCheckCircle size={20} />}
      >
        This is a success alert message.
      </Alert>
      <Alert
        color="warning"
        title="Warning"
        icon={<FiAlertTriangle size={20} />}
      >
        This is a warning alert message.
      </Alert>
      <Alert
        color="danger"
        title="Danger"
        icon={<FiXCircle size={20} />}
      >
        This is a danger alert message.
      </Alert>
      <Alert
        color="dark"
        title="Dark"
        icon={<FiInfo size={20} />}
      >
        This is a dark alert message.
      </Alert>
      <Alert
        color="gray"
        title="Gray"
        icon={<FiInfo size={20} />}
      >
        This is a gray alert message.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-[600px] space-y-6">
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700">Light Variant</h3>
        <Alert
          variant="light"
          color="primary"
          title="Light Alert"
          icon={<FiInfo size={20} />}
        >
          This is a light variant alert with subtle background.
        </Alert>
        <Alert
          variant="light"
          color="success"
          title="Success"
          icon={<FiCheckCircle size={20} />}
        >
          Your operation completed successfully.
        </Alert>
        <Alert
          variant="light"
          color="danger"
          title="Error"
          icon={<FiXCircle size={20} />}
        >
          An error occurred during the operation.
        </Alert>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700">Filled Variant</h3>
        <Alert
          variant="filled"
          color="primary"
          title="Filled Alert"
          icon={<FiInfo size={20} />}
        >
          This is a filled variant alert with solid background.
        </Alert>
        <Alert
          variant="filled"
          color="success"
          title="Success"
          icon={<FiCheckCircle size={20} />}
        >
          Your operation completed successfully.
        </Alert>
        <Alert
          variant="filled"
          color="danger"
          title="Error"
          icon={<FiXCircle size={20} />}
        >
          An error occurred during the operation.
        </Alert>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700">Outline Variant</h3>
        <Alert
          variant="outline"
          color="primary"
          title="Outline Alert"
          icon={<FiInfo size={20} />}
        >
          This is an outline variant alert with border.
        </Alert>
        <Alert
          variant="outline"
          color="success"
          title="Success"
          icon={<FiCheckCircle size={20} />}
        >
          Your operation completed successfully.
        </Alert>
        <Alert
          variant="outline"
          color="danger"
          title="Error"
          icon={<FiXCircle size={20} />}
        >
          An error occurred during the operation.
        </Alert>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700">
          Transparent Variant
        </h3>
        <Alert
          variant="transparent"
          color="primary"
          title="Transparent Alert"
          icon={<FiInfo size={20} />}
        >
          This is a transparent variant alert without background.
        </Alert>
        <Alert
          variant="transparent"
          color="success"
          title="Success"
          icon={<FiCheckCircle size={20} />}
        >
          Your operation completed successfully.
        </Alert>
        <Alert
          variant="transparent"
          color="danger"
          title="Error"
          icon={<FiXCircle size={20} />}
        >
          An error occurred during the operation.
        </Alert>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SuccessNotification: Story = {
  render: () => (
    <div className="w-[600px] space-y-4">
      <Alert
        color="success"
        variant="light"
        title="Changes saved successfully"
        icon={<FiCheckCircle size={20} />}
        withCloseButton
      >
        Your profile information has been updated. You can view the changes in
        your account settings.
      </Alert>

      <Alert
        color="success"
        variant="filled"
        title="Payment processed"
        icon={<FiCheckCircle size={20} />}
        withCloseButton
      >
        Your payment of $99.99 has been successfully processed. Receipt has been
        sent to your email.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SystemMessages: Story = {
  render: () => (
    <div className="w-[600px] space-y-4">
      <Alert
        color="info"
        variant="light"
        title="Scheduled maintenance"
        icon={<FiInfo size={20} />}
      >
        The system will be under maintenance on Saturday, 2:00 AM - 4:00 AM EST.
        Some features may be temporarily unavailable.
      </Alert>

      <Alert
        color="warning"
        variant="light"
        title="Action required"
        icon={<FiAlertTriangle size={20} />}
        withCloseButton
      >
        Your subscription expires in 7 days. Renew now to avoid service
        interruption.
      </Alert>

      <Alert
        color="danger"
        variant="outline"
        title="Security alert"
        icon={<FiAlertCircle size={20} />}
      >
        We detected a login attempt from an unrecognized device. If this
        wasn&apos;t you, please change your password immediately.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const WithLongContent: Story = {
  render: () => (
    <div className="w-[600px] space-y-4">
      <Alert
        color="primary"
        variant="light"
        title="Terms and Conditions Update"
        icon={<FiInfo size={20} />}
        withCloseButton
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt corporis
        natus veniam quis cupiditate enim architecto mollitia numquam
        temporibus, consectetur nam laboriosam voluptates nemo facilis?
        Exercitationem aut praesentium quibusdam reiciendis. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const SimpleMessages: Story = {
  render: () => (
    <div className="w-[600px] space-y-4">
      <Alert
        color="info"
        variant="light"
        icon={<FiInfo size={20} />}
      >
        New features are available! Check out what&apos;s new in version 2.0.
      </Alert>

      <Alert
        color="success"
        variant="transparent"
        icon={<FiCheckCircle size={20} />}
      >
        File uploaded successfully.
      </Alert>

      <Alert
        color="warning"
        variant="outline"
      >
        This action cannot be undone.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const CustomIcons: Story = {
  render: () => (
    <div className="w-[600px] space-y-3">
      <Alert
        color="danger"
        variant="light"
        title="Favorites"
        icon={<FiHeart size={20} />}
      >
        You have 5 new items in your favorites list.
      </Alert>

      <Alert
        color="secondary"
        variant="light"
        title="Settings Updated"
        icon={<FiSettings size={20} />}
        withCloseButton
      >
        Your notification preferences have been updated.
      </Alert>

      <Alert
        color="info"
        variant="filled"
        title="Custom Icon"
        icon={<FiAlertCircle size={20} />}
      >
        You can use any icon you want in alerts.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// ClassNames Showcase
export const CustomClassNames: Story = {
  render: () => (
    <div className="w-[600px] space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Root Styling
        </h3>
        <Alert
          color="primary"
          variant="light"
          title="Enhanced Shadow"
          icon={<FiInfo size={20} />}
          classNames={{
            root: 'shadow-xl',
          }}
        >
          This alert has enhanced shadow styling.
        </Alert>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Icon Styling
        </h3>
        <Alert
          color="success"
          variant="light"
          title="Large Icon"
          icon={<FiCheckCircle size={20} />}
          classNames={{
            icon: 'text-green-600',
          }}
        >
          The icon color is customized.
        </Alert>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Title Styling
        </h3>
        <Alert
          color="danger"
          variant="outline"
          title="Bold Title"
          icon={<FiXCircle size={20} />}
          classNames={{
            title: 'text-lg font-bold',
          }}
        >
          The title has custom font size and weight.
        </Alert>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Custom Message Styling
        </h3>
        <Alert
          color="warning"
          variant="light"
          title="Emphasized Message"
          icon={<FiAlertTriangle size={20} />}
          classNames={{
            message: 'text-base font-medium',
          }}
        >
          The message text has custom styling applied.
        </Alert>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Combined Custom Styles
        </h3>
        <Alert
          color="info"
          variant="filled"
          title="Fully Customized"
          icon={<FiInfo size={20} />}
          withCloseButton
          classNames={{
            root: 'shadow-2xl border-2 border-blue-400',
            title: 'text-xl font-bold',
            message: 'text-base',
            icon: 'pt-1',
            closeButton: 'text-white hover:text-blue-200',
          }}
        >
          This alert demonstrates multiple custom style overrides working
          together.
        </Alert>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Radius Showcase
export const RadiusShowcase: Story = {
  render: () => (
    <div className="w-[600px] space-y-3">
      <Alert
        radius="none"
        title="No Radius"
        icon={<FiInfo size={20} />}
      >
        This alert has no border radius.
      </Alert>
      <Alert
        radius="xs"
        title="Extra Small Radius"
        icon={<FiInfo size={20} />}
      >
        This alert has extra small border radius.
      </Alert>
      <Alert
        radius="sm"
        title="Small Radius"
        icon={<FiInfo size={20} />}
      >
        This alert has small border radius.
      </Alert>
      <Alert
        radius="md"
        title="Medium Radius"
        icon={<FiInfo size={20} />}
      >
        This alert has medium border radius.
      </Alert>
      <Alert
        radius="lg"
        title="Large Radius"
        icon={<FiInfo size={20} />}
      >
        This alert has large border radius.
      </Alert>
      <Alert
        radius="xl"
        title="Extra Large Radius"
        icon={<FiInfo size={20} />}
      >
        This alert has extra large border radius.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Variant Comparison
export const VariantComparison: Story = {
  render: () => (
    <div className="w-[600px] space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Success Alerts - All Variants
        </h3>
        <div className="space-y-3">
          <Alert
            variant="light"
            color="success"
            title="Light Variant"
            icon={<FiCheckCircle size={20} />}
          >
            Subtle background with colored text and icon.
          </Alert>
          <Alert
            variant="filled"
            color="success"
            title="Filled Variant"
            icon={<FiCheckCircle size={20} />}
          >
            Solid background with white text.
          </Alert>
          <Alert
            variant="outline"
            color="success"
            title="Outline Variant"
            icon={<FiCheckCircle size={20} />}
          >
            Transparent background with colored border.
          </Alert>
          <Alert
            variant="transparent"
            color="success"
            title="Transparent Variant"
            icon={<FiCheckCircle size={20} />}
          >
            No background, just colored text and icon.
          </Alert>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Interactive Example
export const InteractiveDismissible: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      { id: 1, color: 'info' as const, message: 'Information alert' },
      { id: 2, color: 'success' as const, message: 'Success alert' },
      { id: 3, color: 'warning' as const, message: 'Warning alert' },
    ])

    return (
      <div className="w-[600px] space-y-3">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            color={alert.color}
            variant="light"
            icon={<FiInfo size={20} />}
            withCloseButton
            onClose={() => {
              setAlerts((prev) => prev.filter((a) => a.id !== alert.id))
            }}
          >
            {alert.message} - Click the X to dismiss
          </Alert>
        ))}
        {alerts.length === 0 && (
          <p className="text-center text-gray-500">All alerts dismissed!</p>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
