/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import Switch from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },

  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outline'],
      description: 'Switch variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Switch size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    onLabel: {
      control: 'text',
      description: 'Label shown when switch is on',
    },
    offLabel: {
      control: 'text',
      description: 'Label shown when switch is off',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Enable notifications"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const WithValue: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        label="Dark mode"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Enable notifications"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Email notifications"
        description="Receive email updates about your account activity"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const WithOnOffLabels: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Auto-save"
        description="Automatically save your work"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        onLabel="Enabled"
        offLabel="Disabled"
      />
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Terms and conditions"
        error="You must accept the terms and conditions"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// Label Position
export const LabelRight: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Label on right (default)"
        labelPosition="right"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const LabelLeft: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Label on left"
        labelPosition="left"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const LabelLeftWithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        label="Two-factor authentication"
        description="Add an extra layer of security to your account"
        labelPosition="left"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// Sizes
export const ExtraSmall: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        size="xs"
        label="Extra Small"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const Small: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        size="sm"
        label="Small"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const Medium: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        size="md"
        label="Medium"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const Large: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        size="lg"
        label="Large"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const ExtraLarge: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        size="xl"
        label="Extra Large"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// Variants
export const DefaultVariant: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        variant="default"
        label="Default variant"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const FilledVariant: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        variant="filled"
        label="Filled variant"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const OutlineVariant: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        variant="outline"
        label="Outline variant"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// Radius
export const RadiusXS: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        radius="xs"
        label="Extra Small radius"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const RadiusSM: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        radius="sm"
        label="Small radius"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const RadiusMD: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        radius="md"
        label="Medium radius"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const RadiusLG: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        radius="lg"
        label="Large radius"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const RadiusXL: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        radius="xl"
        label="Extra Large radius"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const RadiusFull: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        radius="full"
        label="Full radius (default)"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// States
export const Disabled: Story = {
  render: () => {
    return (
      <Switch
        label="Disabled"
        disabled
      />
    )
  },
}

export const DisabledChecked: Story = {
  render: () => {
    return (
      <Switch
        label="Disabled and checked"
        disabled
        defaultChecked
      />
    )
  },
}

export const WithErrorState: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        label="Accept terms"
        error="You must accept the terms and conditions"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

// Real World Examples
export const NotificationSettings: Story = {
  render: () => {
    const [emailNotifs, setEmailNotifs] = useState(true)
    const [pushNotifs, setPushNotifs] = useState(false)
    const [smsNotifs, setSmsNotifs] = useState(false)
    const [marketingEmails, setMarketingEmails] = useState(false)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Notification Settings</h3>
        <Switch
          label="Email notifications"
          description="Receive email updates about your account"
          checked={emailNotifs}
          onChange={(e) => setEmailNotifs(e.target.checked)}
        />
        <Switch
          label="Push notifications"
          description="Get notified on your mobile device"
          checked={pushNotifs}
          onChange={(e) => setPushNotifs(e.target.checked)}
        />
        <Switch
          label="SMS notifications"
          description="Receive text messages for important updates"
          checked={smsNotifs}
          onChange={(e) => setSmsNotifs(e.target.checked)}
        />
        <hr className="my-4" />
        <Switch
          label="Marketing emails"
          description="Get updates about new features and promotions"
          checked={marketingEmails}
          onChange={(e) => setMarketingEmails(e.target.checked)}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const PrivacySettings: Story = {
  render: () => {
    const [publicProfile, setPublicProfile] = useState(true)
    const [showEmail, setShowEmail] = useState(false)
    const [showActivity, setShowActivity] = useState(true)
    const [allowMessages, setAllowMessages] = useState(true)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Privacy Settings</h3>
        <Switch
          label="Public profile"
          description="Make your profile visible to everyone"
          checked={publicProfile}
          onChange={(e) => setPublicProfile(e.target.checked)}
          onLabel="Public"
          offLabel="Private"
        />
        <Switch
          label="Show email address"
          description="Display your email on your profile"
          checked={showEmail}
          onChange={(e) => setShowEmail(e.target.checked)}
          disabled={!publicProfile}
        />
        <Switch
          label="Show activity status"
          description="Let others see when you're online"
          checked={showActivity}
          onChange={(e) => setShowActivity(e.target.checked)}
          onLabel="Visible"
          offLabel="Hidden"
        />
        <Switch
          label="Allow direct messages"
          description="Receive messages from other users"
          checked={allowMessages}
          onChange={(e) => setAllowMessages(e.target.checked)}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ApplicationSettings: Story = {
  render: () => {
    const [darkMode, setDarkMode] = useState(false)
    const [autoSave, setAutoSave] = useState(true)
    const [soundEffects, setSoundEffects] = useState(true)
    const [animations, setAnimations] = useState(true)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Application Settings</h3>
        <Switch
          label="Dark mode"
          description="Use dark theme across the application"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
          onLabel="Dark"
          offLabel="Light"
          size="md"
        />
        <Switch
          label="Auto-save"
          description="Automatically save your work every 5 minutes"
          checked={autoSave}
          onChange={(e) => setAutoSave(e.target.checked)}
          onLabel="On"
          offLabel="Off"
          size="md"
        />
        <Switch
          label="Sound effects"
          description="Play sounds for actions and notifications"
          checked={soundEffects}
          onChange={(e) => setSoundEffects(e.target.checked)}
          size="md"
        />
        <Switch
          label="Animations"
          description="Enable smooth transitions and animations"
          checked={animations}
          onChange={(e) => setAnimations(e.target.checked)}
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FeatureToggles: Story = {
  render: () => {
    const [betaFeatures, setBetaFeatures] = useState(false)
    const [analytics, setAnalytics] = useState(true)
    const [aiAssistant, setAiAssistant] = useState(true)
    const [experimentalUI, setExperimentalUI] = useState(false)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Feature Toggles</h3>
        <div className="rounded-md bg-blue-50 p-3 text-sm text-blue-800">
          Enable or disable experimental features
        </div>
        <Switch
          label="Beta features"
          description="Access new features before they're released"
          checked={betaFeatures}
          onChange={(e) => setBetaFeatures(e.target.checked)}
          variant="filled"
        />
        <Switch
          label="Analytics"
          description="Help us improve by sharing usage data"
          checked={analytics}
          onChange={(e) => setAnalytics(e.target.checked)}
          variant="filled"
        />
        <Switch
          label="AI Assistant"
          description="Enable AI-powered suggestions and help"
          checked={aiAssistant}
          onChange={(e) => setAiAssistant(e.target.checked)}
          variant="filled"
        />
        <Switch
          label="Experimental UI"
          description="Try our new interface design (may be unstable)"
          checked={experimentalUI}
          onChange={(e) => setExperimentalUI(e.target.checked)}
          variant="filled"
          error={
            experimentalUI ? 'Warning: This feature is experimental' : undefined
          }
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CompactSettings: Story = {
  render: () => {
    const [wifi, setWifi] = useState(true)
    const [bluetooth, setBluetooth] = useState(false)
    const [location, setLocation] = useState(true)
    const [notifications, setNotifications] = useState(true)

    return (
      <div className="w-80 space-y-3 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-base font-semibold">Quick Settings</h3>
        <Switch
          label="Wi-Fi"
          size="xs"
          variant="filled"
          labelPosition="left"
          checked={wifi}
          onChange={(e) => setWifi(e.target.checked)}
          onLabel="On"
          offLabel="Off"
        />
        <Switch
          label="Bluetooth"
          size="xs"
          variant="filled"
          labelPosition="left"
          checked={bluetooth}
          onChange={(e) => setBluetooth(e.target.checked)}
          onLabel="On"
          offLabel="Off"
        />
        <Switch
          label="Location"
          size="xs"
          variant="filled"
          labelPosition="left"
          checked={location}
          onChange={(e) => setLocation(e.target.checked)}
          onLabel="On"
          offLabel="Off"
        />
        <Switch
          label="Notifications"
          size="xs"
          variant="filled"
          labelPosition="left"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
          onLabel="On"
          offLabel="Off"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const PermissionsPanel: Story = {
  render: () => {
    const [camera, setCamera] = useState(false)
    const [microphone, setMicrophone] = useState(false)
    const [location, setLocation] = useState(true)
    const [contacts, setContacts] = useState(false)
    const [storage, setStorage] = useState(true)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">App Permissions</h3>
        <p className="text-sm text-gray-600">
          Manage what this app can access on your device
        </p>
        <Switch
          label="Camera"
          description="Allow access to take photos and videos"
          checked={camera}
          onChange={(e) => setCamera(e.target.checked)}
          labelPosition="left"
          size="md"
        />
        <Switch
          label="Microphone"
          description="Allow access to record audio"
          checked={microphone}
          onChange={(e) => setMicrophone(e.target.checked)}
          labelPosition="left"
          size="md"
        />
        <Switch
          label="Location"
          description="Allow access to your device location"
          checked={location}
          onChange={(e) => setLocation(e.target.checked)}
          labelPosition="left"
          size="md"
        />
        <Switch
          label="Contacts"
          description="Allow access to your contact list"
          checked={contacts}
          onChange={(e) => setContacts(e.target.checked)}
          labelPosition="left"
          size="md"
        />
        <Switch
          label="Storage"
          description="Allow access to save files on your device"
          checked={storage}
          onChange={(e) => setStorage(e.target.checked)}
          labelPosition="left"
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const AccessibilitySettings: Story = {
  render: () => {
    const [largeText, setLargeText] = useState(false)
    const [highContrast, setHighContrast] = useState(false)
    const [reduceMotion, setReduceMotion] = useState(false)
    const [screenReader, setScreenReader] = useState(true)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Accessibility</h3>
        <Switch
          label="Large text"
          description="Increase text size across the app"
          checked={largeText}
          onChange={(e) => setLargeText(e.target.checked)}
          size="lg"
        />
        <Switch
          label="High contrast"
          description="Improve visibility with higher contrast colors"
          checked={highContrast}
          onChange={(e) => setHighContrast(e.target.checked)}
          size="lg"
        />
        <Switch
          label="Reduce motion"
          description="Minimize animations and transitions"
          checked={reduceMotion}
          onChange={(e) => setReduceMotion(e.target.checked)}
          size="lg"
        />
        <Switch
          label="Screen reader support"
          description="Optimize for screen reader accessibility"
          checked={screenReader}
          onChange={(e) => setScreenReader(e.target.checked)}
          size="lg"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
