/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import ComboBox from './ComboBox'
import type { ComboBoxOption } from './ComboBox'

// Example Data Types
type CountryOption = {
  label: string
  value: string
  code: string
  continent: string
}

type FrameworkOption = {
  label: string
  value: string
  category: string
  popularity: number
}

type ColorOption = {
  label: string
  value: string
  hex: string
  rgb: string
}

type ProductOption = {
  label: string
  value: string
  price: number
  category: string
  inStock: boolean
}

// Sample Data
const countryOptions: CountryOption[] = [
  {
    label: 'United States',
    value: 'us',
    code: 'US',
    continent: 'North America',
  },
  { label: 'Canada', value: 'ca', code: 'CA', continent: 'North America' },
  { label: 'United Kingdom', value: 'uk', code: 'GB', continent: 'Europe' },
  { label: 'Germany', value: 'de', code: 'DE', continent: 'Europe' },
  { label: 'France', value: 'fr', code: 'FR', continent: 'Europe' },
  { label: 'Japan', value: 'jp', code: 'JP', continent: 'Asia' },
  { label: 'Australia', value: 'au', code: 'AU', continent: 'Oceania' },
  { label: 'Brazil', value: 'br', code: 'BR', continent: 'South America' },
  { label: 'India', value: 'in', code: 'IN', continent: 'Asia' },
  { label: 'China', value: 'cn', code: 'CN', continent: 'Asia' },
]

const frameworkOptions: FrameworkOption[] = [
  { label: 'React', value: 'react', category: 'Library', popularity: 95 },
  { label: 'Vue', value: 'vue', category: 'Framework', popularity: 85 },
  { label: 'Angular', value: 'angular', category: 'Framework', popularity: 75 },
  { label: 'Svelte', value: 'svelte', category: 'Framework', popularity: 70 },
  { label: 'Solid', value: 'solid', category: 'Library', popularity: 65 },
  { label: 'Next.js', value: 'nextjs', category: 'Framework', popularity: 90 },
  { label: 'Nuxt', value: 'nuxt', category: 'Framework', popularity: 80 },
]

const colorOptions: ColorOption[] = [
  { label: 'Red', value: 'red', hex: '#ef4444', rgb: 'rgb(239, 68, 68)' },
  { label: 'Blue', value: 'blue', hex: '#3b82f6', rgb: 'rgb(59, 130, 246)' },
  { label: 'Green', value: 'green', hex: '#10b981', rgb: 'rgb(16, 185, 129)' },
  { label: 'Yellow', value: 'yellow', hex: '#eab308', rgb: 'rgb(234, 179, 8)' },
  {
    label: 'Purple',
    value: 'purple',
    hex: '#a855f7',
    rgb: 'rgb(168, 85, 247)',
  },
  { label: 'Pink', value: 'pink', hex: '#ec4899', rgb: 'rgb(236, 72, 153)' },
  {
    label: 'Orange',
    value: 'orange',
    hex: '#f97316',
    rgb: 'rgb(249, 115, 22)',
  },
]

const productOptions: ProductOption[] = [
  {
    label: 'Laptop Pro',
    value: 'laptop-pro',
    price: 1299,
    category: 'Electronics',
    inStock: true,
  },
  {
    label: 'Wireless Mouse',
    value: 'mouse',
    price: 29,
    category: 'Accessories',
    inStock: true,
  },
  {
    label: 'Mechanical Keyboard',
    value: 'keyboard',
    price: 149,
    category: 'Accessories',
    inStock: false,
  },
  {
    label: 'Monitor 4K',
    value: 'monitor',
    price: 599,
    category: 'Electronics',
    inStock: true,
  },
  {
    label: 'USB-C Hub',
    value: 'hub',
    price: 79,
    category: 'Accessories',
    inStock: true,
  },
  {
    label: 'Webcam HD',
    value: 'webcam',
    price: 89,
    category: 'Electronics',
    inStock: false,
  },
]

const simpleOptions: ComboBoxOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
]

const meta: Meta<typeof ComboBox> = {
  title: 'Components/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
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
          width: '400px',
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
      description: 'ComboBox variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'ComboBox size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multi-select',
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search/filter',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    withAsterisk: {
      control: 'boolean',
      description: 'Show asterisk for required field',
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
} satisfies Meta<typeof ComboBox>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Select Option"
        placeholder="Pick an option"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(simpleOptions[0])
    return (
      <ComboBox
        label="Country"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Country"
        placeholder="Select your country"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Framework"
        description="Choose your preferred JavaScript framework"
        placeholder="Pick a framework"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Required Field"
        withAsterisk
        placeholder="This field is required"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Country"
        error="This field is required"
        placeholder="Select a country"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

// Variants
export const DefaultVariant: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Default Variant"
        variant="default"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const FilledVariant: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Filled Variant"
        variant="filled"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const UnstyledVariant: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Unstyled Variant"
        variant="unstyled"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

// Sizes
export const ExtraSmall: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Extra Small"
        size="xs"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const Small: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Small"
        size="sm"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const Medium: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Medium"
        size="md"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const Large: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Large"
        size="lg"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const ExtraLarge: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Extra Large"
        size="xl"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

// Features
export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<CountryOption | null>(null)
    return (
      <ComboBox
        label="Country"
        description="Type to search countries"
        placeholder="Search countries..."
        options={countryOptions}
        value={value}
        onChange={setValue}
        searchable
      />
    )
  },
}

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(simpleOptions[0])
    return (
      <ComboBox
        label="Country"
        description="Click × to clear selection"
        options={simpleOptions}
        value={value}
        onChange={setValue}
        clearable
      />
    )
  },
}

export const SearchableAndClearable: Story = {
  render: () => {
    const [value, setValue] = useState<CountryOption | null>(null)
    return (
      <ComboBox
        label="Country"
        placeholder="Search and select..."
        options={countryOptions}
        value={value}
        onChange={setValue}
        searchable
        clearable
      />
    )
  },
}

// Multi-Select
export const MultiSelect: Story = {
  render: () => {
    const [value, setValue] = useState<FrameworkOption[]>([])
    return (
      <ComboBox
        label="Frameworks"
        description="Select multiple frameworks"
        placeholder="Pick frameworks"
        options={frameworkOptions}
        value={value}
        onChange={setValue}
        multiple
      />
    )
  },
}

export const MultiSelectWithValue: Story = {
  render: () => {
    const [value, setValue] = useState<FrameworkOption[]>([
      frameworkOptions[0],
      frameworkOptions[1],
    ])
    return (
      <ComboBox
        label="Frameworks"
        options={frameworkOptions}
        value={value}
        onChange={setValue}
        multiple
        clearable
      />
    )
  },
}

export const MultiSelectSearchable: Story = {
  render: () => {
    const [value, setValue] = useState<ColorOption[]>([])
    return (
      <ComboBox
        label="Colors"
        description="Search and select multiple colors"
        placeholder="Type to search..."
        options={colorOptions}
        value={value}
        onChange={setValue}
        multiple
        searchable
        clearable
      />
    )
  },
}

// Extended Option Types
export const WithExtendedData: Story = {
  render: () => {
    const [value, setValue] = useState<CountryOption | null>(null)
    return (
      <div className="space-y-4">
        <ComboBox
          label="Country"
          description="Returns full country object with code and continent"
          placeholder="Select a country"
          options={countryOptions}
          value={value}
          onChange={setValue}
          searchable
        />
        {value && (
          <div className="rounded-md bg-gray-50 p-4 text-sm">
            <div>
              <strong>Selected:</strong> {value.label}
            </div>
            <div>
              <strong>Code:</strong> {value.code}
            </div>
            <div>
              <strong>Continent:</strong> {value.continent}
            </div>
            <div>
              <strong>Value:</strong> {value.value}
            </div>
          </div>
        )}
      </div>
    )
  },
}

export const ColorPickerWithPreview: Story = {
  render: () => {
    const [colors, setColors] = useState<ColorOption[]>([])
    return (
      <div className="space-y-4">
        <ComboBox
          label="Color Palette"
          description="Select colors and see their hex/rgb values"
          placeholder="Pick colors..."
          options={colorOptions}
          value={colors}
          onChange={setColors}
          multiple
          searchable
          clearable
        />
        {colors.length > 0 && (
          <div className="space-y-2">
            {colors.map((color) => (
              <div
                key={color.value}
                className="flex items-center gap-3 rounded-md bg-gray-50 p-3"
              >
                <div
                  className="h-8 w-8 rounded border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-sm">
                  <div className="font-medium">{color.label}</div>
                  <div className="text-gray-600">
                    {color.hex} • {color.rgb}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
}

export const ProductCatalog: Story = {
  render: () => {
    const [product, setProduct] = useState<ProductOption | null>(null)
    return (
      <div className="space-y-4">
        <ComboBox
          label="Product"
          description="Select a product to view details"
          placeholder="Search products..."
          options={productOptions}
          value={product}
          onChange={setProduct}
          searchable
          clearable
        />
        {product && (
          <div className="space-y-2 rounded-md bg-gray-50 p-4">
            <h4 className="font-semibold">{product.label}</h4>
            <div className="space-y-1 text-sm">
              <div>
                <strong>Price:</strong> ${product.price}
              </div>
              <div>
                <strong>Category:</strong> {product.category}
              </div>
              <div>
                <strong>Status:</strong>{' '}
                <span
                  className={
                    product.inStock ? 'text-green-600' : 'text-red-600'
                  }
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  },
}

// States
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(simpleOptions[0])
    return (
      <ComboBox
        label="Disabled"
        disabled
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const DisabledEmpty: Story = {
  render: () => {
    const [value, setValue] = useState<ComboBoxOption | null>(null)
    return (
      <ComboBox
        label="Disabled (No Value)"
        disabled
        placeholder="Cannot select"
        options={simpleOptions}
        value={value}
        onChange={setValue}
      />
    )
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => {
    const [value1, setValue1] = useState<ComboBoxOption | null>(null)
    const [value2, setValue2] = useState<ComboBoxOption | null>(null)
    const [value3, setValue3] = useState<ComboBoxOption | null>(null)
    return (
      <div className="w-96 space-y-6">
        <ComboBox
          label="Default Variant"
          variant="default"
          placeholder="Select an option"
          options={simpleOptions}
          value={value1}
          onChange={setValue1}
        />
        <ComboBox
          label="Filled Variant"
          variant="filled"
          placeholder="Select an option"
          options={simpleOptions}
          value={value2}
          onChange={setValue2}
        />
        <ComboBox
          label="Unstyled Variant"
          variant="unstyled"
          placeholder="Select an option"
          options={simpleOptions}
          value={value3}
          onChange={setValue3}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => {
    const [value1, setValue1] = useState<ComboBoxOption | null>(null)
    const [value2, setValue2] = useState<ComboBoxOption | null>(null)
    const [value3, setValue3] = useState<ComboBoxOption | null>(null)
    const [value4, setValue4] = useState<ComboBoxOption | null>(null)
    const [value5, setValue5] = useState<ComboBoxOption | null>(null)
    return (
      <div className="w-96 space-y-6">
        <ComboBox
          label="Extra Small"
          size="xs"
          placeholder="Select an option"
          options={simpleOptions}
          value={value1}
          onChange={setValue1}
        />
        <ComboBox
          label="Small"
          size="sm"
          placeholder="Select an option"
          options={simpleOptions}
          value={value2}
          onChange={setValue2}
        />
        <ComboBox
          label="Medium"
          size="md"
          placeholder="Select an option"
          options={simpleOptions}
          value={value3}
          onChange={setValue3}
        />
        <ComboBox
          label="Large"
          size="lg"
          placeholder="Select an option"
          options={simpleOptions}
          value={value4}
          onChange={setValue4}
        />
        <ComboBox
          label="Extra Large"
          size="xl"
          placeholder="Select an option"
          options={simpleOptions}
          value={value5}
          onChange={setValue5}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const UserRegistrationForm: Story = {
  render: () => {
    const [country, setCountry] = useState<CountryOption | null>(null)
    const [interests, setInterests] = useState<FrameworkOption[]>([])

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">User Registration</h3>
        <ComboBox
          label="Country"
          description="Select your country of residence"
          withAsterisk
          placeholder="Search countries..."
          options={countryOptions}
          value={country}
          onChange={setCountry}
          searchable
          clearable
        />
        <ComboBox
          label="Technical Interests"
          description="Select frameworks you're interested in"
          placeholder="Pick multiple..."
          options={frameworkOptions}
          value={interests}
          onChange={setInterests}
          multiple
          searchable
          clearable
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ProjectSettings: Story = {
  render: () => {
    const [frameworks, setFrameworks] = useState<FrameworkOption[]>([])
    const [primaryColor, setPrimaryColor] = useState<ColorOption | null>(null)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Project Configuration</h3>
        <ComboBox
          label="Tech Stack"
          description="Select technologies used in this project"
          withAsterisk
          placeholder="Add technologies..."
          options={frameworkOptions}
          value={frameworks}
          onChange={setFrameworks}
          multiple
          searchable
          size="md"
        />
        <ComboBox
          label="Primary Color"
          description="Choose your brand color"
          placeholder="Select a color..."
          options={colorOptions}
          value={primaryColor}
          onChange={setPrimaryColor}
          searchable
          clearable
          size="md"
        />
        {primaryColor && (
          <div className="flex items-center gap-2 rounded-md bg-gray-50 p-3">
            <div
              className="h-6 w-6 rounded border border-gray-300"
              style={{ backgroundColor: primaryColor.hex }}
            />
            <span className="text-sm font-medium">{primaryColor.hex}</span>
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FilterPanel: Story = {
  render: () => {
    const [categories, setCategories] = useState<ProductOption[]>([])
    const [priceRange, setPriceRange] = useState<ProductOption | null>(null)

    return (
      <div className="w-80 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Filter Products</h3>
        <ComboBox
          label="Categories"
          placeholder="All categories"
          options={productOptions}
          value={categories}
          onChange={setCategories}
          multiple
          searchable
          size="sm"
        />
        <ComboBox
          label="Price Range"
          placeholder="Any price"
          options={productOptions}
          value={priceRange}
          onChange={setPriceRange}
          searchable
          clearable
          size="sm"
        />
        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Apply Filters
        </button>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const FormWithValidation: Story = {
  render: () => {
    const [country, setCountry] = useState<CountryOption | null>(null)
    const [frameworks, setFrameworks] = useState<FrameworkOption[]>([])
    const [error, setError] = useState('')

    const handleFrameworksChange = (value: FrameworkOption[]) => {
      setFrameworks(value)
      if (value.length > 3) {
        setError('Maximum 3 frameworks allowed')
      } else {
        setError('')
      }
    }

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Developer Profile</h3>
        <ComboBox
          label="Country"
          withAsterisk
          placeholder="Select your country"
          options={countryOptions}
          value={country}
          onChange={setCountry}
          searchable
          error={country ? '' : 'Country is required'}
        />
        <ComboBox
          label="Frameworks (Max 3)"
          description="Select up to 3 frameworks"
          placeholder="Pick frameworks..."
          options={frameworkOptions}
          value={frameworks}
          onChange={handleFrameworksChange}
          multiple
          searchable
          error={error}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CompactForm: Story = {
  render: () => {
    const [value1, setValue1] = useState<ComboBoxOption | null>(null)
    const [value2, setValue2] = useState<ComboBoxOption | null>(null)
    const [value3, setValue3] = useState<ComboBoxOption | null>(null)
    return (
      <div className="w-80 space-y-3 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-base font-semibold">Quick Settings</h3>
        <ComboBox
          label="Region"
          size="xs"
          variant="filled"
          options={simpleOptions}
          value={value1}
          onChange={setValue1}
        />
        <ComboBox
          label="Language"
          size="xs"
          variant="filled"
          options={simpleOptions}
          value={value2}
          onChange={setValue2}
        />
        <ComboBox
          label="Theme"
          size="xs"
          variant="filled"
          options={simpleOptions}
          value={value3}
          onChange={setValue3}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
