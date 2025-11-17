/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { GiPaintBucket } from 'react-icons/gi'

import ColorPicker from './ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh',
          paddingTop: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'unstyled'],
      description: 'ColorPicker variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'ColorPicker size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    format: {
      control: 'select',
      options: ['hex', 'hexa', 'rgb', 'rgba', 'hsl', 'hsla'],
      description: 'Color format',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    withAsterisk: {
      control: 'boolean',
      description: 'Show asterisk for required field',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button',
    },
    withPicker: {
      control: 'boolean',
      description: 'Show color picker dropdown',
    },
    withEyeDropper: {
      control: 'boolean',
      description: 'Show eye dropper icon',
    },
    disallowInput: {
      control: 'boolean',
      description: 'Prevent manual input',
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
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    label: 'Choose Color',
    placeholder: 'Pick a color',
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f6')
    return (
      <ColorPicker
        label="Brand Color"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Background Color',
    placeholder: 'Select background color',
    value: '#8b5cf6',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Theme Color',
    description: 'Choose your primary theme color',
    placeholder: 'Pick a color',
    value: '#10b981',
  },
}

export const Required: Story = {
  args: {
    label: 'Primary Color',
    withAsterisk: true,
    placeholder: 'Select primary color',
    value: '#ef4444',
  },
}

export const WithError: Story = {
  args: {
    label: 'Accent Color',
    error: 'This field is required',
    placeholder: 'Select accent color',
  },
}

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('#f59e0b')
    return (
      <ColorPicker
        label="Highlight Color"
        description="Click the X icon to clear the color"
        value={value}
        onChange={setValue}
        clearable
      />
    )
  },
}

// Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default Variant',
    variant: 'default',
    value: '#3b82f6',
  },
}

export const FilledVariant: Story = {
  args: {
    label: 'Filled Variant',
    variant: 'filled',
    value: '#8b5cf6',
  },
}

export const UnstyledVariant: Story = {
  args: {
    label: 'Unstyled Variant',
    variant: 'unstyled',
    value: '#10b981',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    size: 'xs',
    value: '#3b82f6',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
    value: '#3b82f6',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
    value: '#3b82f6',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
    value: '#3b82f6',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    size: 'xl',
    value: '#3b82f6',
  },
}

// Radius
export const RadiusSmall: Story = {
  args: {
    label: 'Small Radius',
    radius: 'sm',
    value: '#3b82f6',
  },
}

export const RadiusMedium: Story = {
  args: {
    label: 'Medium Radius',
    radius: 'md',
    value: '#3b82f6',
  },
}

export const RadiusLarge: Story = {
  args: {
    label: 'Large Radius',
    radius: 'lg',
    value: '#3b82f6',
  },
}

export const RadiusExtraLarge: Story = {
  args: {
    label: 'Extra Large Radius',
    radius: 'xl',
    value: '#3b82f6',
  },
}

// Color Formats
export const FormatHex: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f6')
    return (
      <ColorPicker
        label="HEX Format (#RRGGBB)"
        format="hex"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatHexa: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f680')
    return (
      <ColorPicker
        label="HEXA Format (#RRGGBBAA)"
        description="Includes alpha channel for transparency"
        format="hexa"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatRgb: Story = {
  render: () => {
    const [value, setValue] = useState('rgb(59, 130, 246)')
    return (
      <ColorPicker
        label="RGB Format"
        format="rgb"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatRgba: Story = {
  render: () => {
    const [value, setValue] = useState('rgba(59, 130, 246, 0.5)')
    return (
      <ColorPicker
        label="RGBA Format"
        description="Includes alpha channel for transparency"
        format="rgba"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatHsl: Story = {
  render: () => {
    const [value, setValue] = useState('hsl(217, 91%, 60%)')
    return (
      <ColorPicker
        label="HSL Format"
        format="hsl"
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FormatHsla: Story = {
  render: () => {
    const [value, setValue] = useState('hsla(217, 91%, 60%, 0.5)')
    return (
      <ColorPicker
        label="HSLA Format"
        description="Includes alpha channel for transparency"
        format="hsla"
        value={value}
        onChange={setValue}
      />
    )
  },
}

// With Swatches
export const WithSwatches: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f6')
    const swatches = [
      '#ef4444',
      '#f97316',
      '#f59e0b',
      '#eab308',
      '#84cc16',
      '#22c55e',
      '#10b981',
      '#14b8a6',
      '#06b6d4',
      '#0ea5e9',
      '#3b82f6',
      '#6366f1',
      '#8b5cf6',
      '#a855f7',
      '#d946ef',
      '#ec4899',
      '#f43f5e',
    ]

    return (
      <ColorPicker
        label="Select Color"
        description="Choose from predefined colors or use the picker"
        value={value}
        onChange={setValue}
        swatches={swatches}
      />
    )
  },
}

export const CustomSwatchesGrid: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f6')
    const swatches = [
      '#000000',
      '#ffffff',
      '#ef4444',
      '#f59e0b',
      '#10b981',
      '#3b82f6',
      '#8b5cf6',
      '#ec4899',
    ]

    return (
      <ColorPicker
        label="Color Palette"
        value={value}
        onChange={setValue}
        swatches={swatches}
        swatchesPerRow={4}
      />
    )
  },
}

export const WithoutPicker: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f6')
    const swatches = [
      '#ef4444',
      '#f59e0b',
      '#10b981',
      '#3b82f6',
      '#8b5cf6',
      '#ec4899',
    ]

    return (
      <ColorPicker
        label="Preset Colors Only"
        description="Choose from predefined colors"
        value={value}
        onChange={setValue}
        swatches={swatches}
        withPicker={false}
      />
    )
  },
}

// Input Options
export const DisallowInput: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f6')
    return (
      <ColorPicker
        label="Picker Only"
        description="Manual input is disabled"
        value={value}
        onChange={setValue}
        disallowInput
      />
    )
  },
}

export const WithEyeDropper: Story = {
  args: {
    label: 'Color Picker',
    withEyeDropper: true,
    value: '#3b82f6',
  },
}

// States
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('#3b82f6')
    return (
      <ColorPicker
        label="Disabled"
        disabled
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const DisabledEmpty: Story = {
  args: {
    label: 'Disabled (No Value)',
    disabled: true,
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <ColorPicker
        label="Default Variant"
        variant="default"
        placeholder="Select a color"
        value="#3b82f6"
      />
      <ColorPicker
        label="Filled Variant"
        variant="filled"
        placeholder="Select a color"
        value="#8b5cf6"
      />
      <ColorPicker
        label="Unstyled Variant"
        variant="unstyled"
        placeholder="Select a color"
        value="#10b981"
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
    <div className="w-96 space-y-6">
      <ColorPicker
        label="Extra Small"
        size="xs"
        value="#3b82f6"
      />
      <ColorPicker
        label="Small"
        size="sm"
        value="#3b82f6"
      />
      <ColorPicker
        label="Medium"
        size="md"
        value="#3b82f6"
      />
      <ColorPicker
        label="Large"
        size="lg"
        value="#3b82f6"
      />
      <ColorPicker
        label="Extra Large"
        size="xl"
        value="#3b82f6"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// All Formats Showcase
export const AllFormats: Story = {
  render: () => {
    const [hex, setHex] = useState('#3b82f6')
    const [hexa, setHexa] = useState('#3b82f680')
    const [rgb, setRgb] = useState('rgb(59, 130, 246)')
    const [rgba, setRgba] = useState('rgba(59, 130, 246, 0.5)')
    const [hsl, setHsl] = useState('hsl(217, 91%, 60%)')
    const [hsla, setHsla] = useState('hsla(217, 91%, 60%, 0.5)')

    return (
      <div className="w-96 space-y-6">
        <ColorPicker
          label="HEX"
          format="hex"
          value={hex}
          onChange={setHex}
        />
        <ColorPicker
          label="HEXA (with alpha)"
          format="hexa"
          value={hexa}
          onChange={setHexa}
        />
        <ColorPicker
          label="RGB"
          format="rgb"
          value={rgb}
          onChange={setRgb}
        />
        <ColorPicker
          label="RGBA (with alpha)"
          format="rgba"
          value={rgba}
          onChange={setRgba}
        />
        <ColorPicker
          label="HSL"
          format="hsl"
          value={hsl}
          onChange={setHsl}
        />
        <ColorPicker
          label="HSLA (with alpha)"
          format="hsla"
          value={hsla}
          onChange={setHsla}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Clearable Comparison
export const ClearableComparison: Story = {
  render: () => {
    const [color1, setColor1] = useState('#3b82f6')
    const [color2, setColor2] = useState('#8b5cf6')

    return (
      <div className="w-96 space-y-6">
        <ColorPicker
          label="Not Clearable (Default)"
          value={color1}
          onChange={setColor1}
          clearable={false}
        />
        <ColorPicker
          label="Clearable"
          description="Click X to clear the color"
          value={color2}
          onChange={setColor2}
          clearable
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const ThemeCustomizer: Story = {
  render: () => {
    const [primary, setPrimary] = useState('#3b82f6')
    const [secondary, setSecondary] = useState('#8b5cf6')
    const [accent, setAccent] = useState('#10b981')
    const [background, setBackground] = useState('#ffffff')

    const swatches = [
      '#ef4444',
      '#f59e0b',
      '#10b981',
      '#3b82f6',
      '#8b5cf6',
      '#ec4899',
      '#000000',
      '#ffffff',
    ]

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Theme Customizer</h3>
        <ColorPicker
          label="Primary Color"
          description="Main brand color"
          withAsterisk
          value={primary}
          onChange={setPrimary}
          swatches={swatches}
          format="hex"
          clearable
        />
        <ColorPicker
          label="Secondary Color"
          description="Secondary brand color"
          value={secondary}
          onChange={setSecondary}
          swatches={swatches}
          format="hex"
          clearable
        />
        <ColorPicker
          label="Accent Color"
          description="Accent and highlight color"
          value={accent}
          onChange={setAccent}
          swatches={swatches}
          format="hex"
          clearable
        />
        <ColorPicker
          label="Background Color"
          value={background}
          onChange={setBackground}
          swatches={swatches}
          format="hex"
          clearable
        />
        <div className="mt-6 rounded-md border border-gray-200 p-4">
          <p className="mb-2 text-sm font-medium text-gray-700">Preview</p>
          <div
            className="h-20 rounded-md"
            style={{
              background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`,
            }}
          />
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const BrandingKit: Story = {
  render: () => {
    const [logo, setLogo] = useState('#000000')
    const [headline, setHeadline] = useState('#1f2937')
    const [body, setBody] = useState('#6b7280')
    const [link, setLink] = useState('#3b82f6')
    const [button, setButton] = useState('#10b981')
    const [buttonHover, setButtonHover] = useState('#059669')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Brand Colors</h3>
        <ColorPicker
          label="Logo Color"
          withAsterisk
          value={logo}
          onChange={setLogo}
          size="sm"
          clearable
        />
        <ColorPicker
          label="Headline Color"
          value={headline}
          onChange={setHeadline}
          size="sm"
          clearable
        />
        <ColorPicker
          label="Body Text Color"
          value={body}
          onChange={setBody}
          size="sm"
          clearable
        />
        <ColorPicker
          label="Link Color"
          value={link}
          onChange={setLink}
          size="sm"
          clearable
        />
        <ColorPicker
          label="Button Color"
          value={button}
          onChange={setButton}
          size="sm"
          clearable
        />
        <ColorPicker
          label="Button Hover Color"
          value={buttonHover}
          onChange={setButtonHover}
          size="sm"
          clearable
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const DesignSystem: Story = {
  render: () => {
    const [success, setSuccess] = useState('#10b981')
    const [warning, setWarning] = useState('#f59e0b')
    const [error, setError] = useState('#ef4444')
    const [info, setInfo] = useState('#3b82f6')

    const statusSwatches = [
      '#10b981',
      '#059669',
      '#f59e0b',
      '#d97706',
      '#ef4444',
      '#dc2626',
      '#3b82f6',
      '#2563eb',
    ]

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">System Colors</h3>
        <ColorPicker
          label="Success"
          description="Success states and confirmations"
          value={success}
          onChange={setSuccess}
          swatches={statusSwatches}
          format="hex"
          clearable
        />
        <ColorPicker
          label="Warning"
          description="Warning and caution states"
          value={warning}
          onChange={setWarning}
          swatches={statusSwatches}
          format="hex"
          clearable
        />
        <ColorPicker
          label="Error"
          description="Error states and alerts"
          value={error}
          onChange={setError}
          swatches={statusSwatches}
          format="hex"
          clearable
        />
        <ColorPicker
          label="Info"
          description="Informational states"
          value={info}
          onChange={setInfo}
          swatches={statusSwatches}
          format="hex"
          clearable
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const GraphicsEditor: Story = {
  render: () => {
    const [fill, setFill] = useState('#3b82f6')
    const [stroke, setStroke] = useState('#000000')
    const [shadow, setShadow] = useState('rgba(0, 0, 0, 0.25)')

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">
          <GiPaintBucket className="mr-2 inline h-5 w-5" />
          Graphics Properties
        </h3>
        <ColorPicker
          label="Fill Color"
          value={fill}
          onChange={setFill}
          format="hexa"
          variant="filled"
          clearable
        />
        <ColorPicker
          label="Stroke Color"
          value={stroke}
          onChange={setStroke}
          format="hex"
          variant="filled"
          clearable
        />
        <ColorPicker
          label="Shadow Color"
          value={shadow}
          onChange={setShadow}
          format="rgba"
          variant="filled"
          clearable
        />
        <div className="mt-6 flex items-center justify-center rounded-md border border-gray-200 bg-gray-50 p-8">
          <div
            className="h-24 w-24 rounded-lg"
            style={{
              backgroundColor: fill,
              border: `3px solid ${stroke}`,
              boxShadow: `4px 4px 12px ${shadow}`,
            }}
          />
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const TextHighlighter: Story = {
  render: () => {
    const [highlight, setHighlight] = useState('rgba(253, 224, 71, 0.5)')
    const highlightSwatches = [
      'rgba(253, 224, 71, 0.5)',
      'rgba(134, 239, 172, 0.5)',
      'rgba(147, 197, 253, 0.5)',
      'rgba(196, 181, 253, 0.5)',
      'rgba(251, 207, 232, 0.5)',
    ]

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Text Highlighter</h3>
        <ColorPicker
          label="Highlight Color"
          description="Adjust transparency for better readability"
          value={highlight}
          onChange={setHighlight}
          format="rgba"
          swatches={highlightSwatches}
          swatchesPerRow={5}
          clearable
        />
        <div className="mt-6 rounded-md border border-gray-200 p-4">
          <p className="text-sm text-gray-700">
            This is sample text with{' '}
            <span style={{ backgroundColor: highlight }}>highlighted</span>{' '}
            content to show the effect.
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ColorPalette: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState('#3b82f6')
    const palette = [
      { name: 'Red', value: '#ef4444' },
      { name: 'Orange', value: '#f97316' },
      { name: 'Amber', value: '#f59e0b' },
      { name: 'Yellow', value: '#eab308' },
      { name: 'Lime', value: '#84cc16' },
      { name: 'Green', value: '#22c55e' },
      { name: 'Emerald', value: '#10b981' },
      { name: 'Teal', value: '#14b8a6' },
      { name: 'Cyan', value: '#06b6d4' },
      { name: 'Sky', value: '#0ea5e9' },
      { name: 'Blue', value: '#3b82f6' },
      { name: 'Indigo', value: '#6366f1' },
      { name: 'Violet', value: '#8b5cf6' },
      { name: 'Purple', value: '#a855f7' },
      { name: 'Fuchsia', value: '#d946ef' },
      { name: 'Pink', value: '#ec4899' },
      { name: 'Rose', value: '#f43f5e' },
    ]

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Color Palette Builder</h3>
        <ColorPicker
          label="Custom Color"
          description="Pick a color or choose from palette"
          value={selectedColor}
          onChange={setSelectedColor}
          swatches={palette.map((c) => c.value)}
          swatchesPerRow={6}
          format="hex"
          clearable
        />
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-gray-700">Selected Color</p>
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-lg border border-gray-300 shadow-sm"
              style={{ backgroundColor: selectedColor }}
            />
            <div>
              <p className="font-mono text-sm font-medium">{selectedColor}</p>
              <p className="text-xs text-gray-500">
                {palette.find((c) => c.value === selectedColor)?.name ||
                  'Custom'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CompactColorPickers: Story = {
  render: () => (
    <div className="w-80 space-y-3 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-base font-semibold">Color Settings</h3>
      <ColorPicker
        label="Primary"
        size="xs"
        variant="filled"
        value="#3b82f6"
        clearable
      />
      <ColorPicker
        label="Secondary"
        size="xs"
        variant="filled"
        value="#8b5cf6"
        clearable
      />
      <ColorPicker
        label="Accent"
        size="xs"
        variant="filled"
        value="#10b981"
        clearable
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const FormWithValidation: Story = {
  render: () => {
    const [primary, setPrimary] = useState('')
    const [secondary, setSecondary] = useState('')
    const [errors, setErrors] = useState({ primary: '', secondary: '' })

    const validateColors = () => {
      const newErrors = { primary: '', secondary: '' }

      if (!primary) {
        newErrors.primary = 'Primary color is required'
      }
      if (!secondary) {
        newErrors.secondary = 'Secondary color is required'
      }
      if (primary && secondary && primary === secondary) {
        newErrors.secondary = 'Secondary must be different from primary'
      }

      setErrors(newErrors)
      return !newErrors.primary && !newErrors.secondary
    }

    const handleSubmit = () => {
      if (validateColors()) {
        alert('Colors validated successfully!')
      }
    }

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Theme Colors</h3>
        <ColorPicker
          label="Primary Color"
          withAsterisk
          value={primary}
          onChange={(value) => {
            setPrimary(value)
            setErrors({ ...errors, primary: '' })
          }}
          error={errors.primary}
          clearable
        />
        <ColorPicker
          label="Secondary Color"
          withAsterisk
          value={secondary}
          onChange={(value) => {
            setSecondary(value)
            setErrors({ ...errors, secondary: '' })
          }}
          error={errors.secondary}
          clearable
        />
        <button
          onClick={handleSubmit}
          className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Validate Colors
        </button>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
