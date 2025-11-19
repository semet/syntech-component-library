/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

import ComboBox from './ComboBox'
import type {
  ComboBoxOption,
  SingleValueComponentProps,
  OptionComponentProps,
} from './ComboBox'

// Example Data Types
type CountryOption = ComboBoxOption & {
  code: string
  continent: string
  flag: string
}

type FrameworkOption = ComboBoxOption & {
  category: string
  popularity: number
  icon: string
}

type ColorOption = ComboBoxOption & {
  hex: string
  rgb: string
}

type ProductOption = ComboBoxOption & {
  price: number
  category: string
  inStock: boolean
  image: string
}

// Sample Data
const countryOptions: CountryOption[] = [
  {
    label: 'United States',
    value: 'us',
    code: 'US',
    continent: 'North America',
    flag: '🇺🇸',
  },
  {
    label: 'Canada',
    value: 'ca',
    code: 'CA',
    continent: 'North America',
    flag: '🇨🇦',
  },
  {
    label: 'United Kingdom',
    value: 'uk',
    code: 'GB',
    continent: 'Europe',
    flag: '🇬🇧',
  },
  {
    label: 'Germany',
    value: 'de',
    code: 'DE',
    continent: 'Europe',
    flag: '🇩🇪',
  },
  {
    label: 'France',
    value: 'fr',
    code: 'FR',
    continent: 'Europe',
    flag: '🇫🇷',
  },
  {
    label: 'Japan',
    value: 'jp',
    code: 'JP',
    continent: 'Asia',
    flag: '🇯🇵',
  },
  {
    label: 'Australia',
    value: 'au',
    code: 'AU',
    continent: 'Oceania',
    flag: '🇦🇺',
  },
  {
    label: 'Brazil',
    value: 'br',
    code: 'BR',
    continent: 'South America',
    flag: '🇧🇷',
  },
  {
    label: 'India',
    value: 'in',
    code: 'IN',
    continent: 'Asia',
    flag: '🇮🇳',
  },
  {
    label: 'China',
    value: 'cn',
    code: 'CN',
    continent: 'Asia',
    flag: '🇨🇳',
  },
]

const frameworkOptions: FrameworkOption[] = [
  {
    label: 'React',
    value: 'react',
    category: 'Library',
    popularity: 95,
    icon: '⚛️',
  },
  {
    label: 'Vue',
    value: 'vue',
    category: 'Framework',
    popularity: 85,
    icon: '💚',
  },
  {
    label: 'Angular',
    value: 'angular',
    category: 'Framework',
    popularity: 75,
    icon: '🅰️',
  },
  {
    label: 'Svelte',
    value: 'svelte',
    category: 'Framework',
    popularity: 70,
    icon: '🔥',
  },
  {
    label: 'Solid',
    value: 'solid',
    category: 'Library',
    popularity: 65,
    icon: '💎',
  },
  {
    label: 'Next.js',
    value: 'nextjs',
    category: 'Framework',
    popularity: 90,
    icon: '▲',
  },
  {
    label: 'Nuxt',
    value: 'nuxt',
    category: 'Framework',
    popularity: 80,
    icon: '💚',
  },
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
    image: '💻',
  },
  {
    label: 'Wireless Mouse',
    value: 'mouse',
    price: 29,
    category: 'Accessories',
    inStock: true,
    image: '🖱️',
  },
  {
    label: 'Mechanical Keyboard',
    value: 'keyboard',
    price: 149,
    category: 'Accessories',
    inStock: false,
    image: '⌨️',
  },
  {
    label: 'Monitor 4K',
    value: 'monitor',
    price: 599,
    category: 'Electronics',
    inStock: true,
    image: '🖥️',
  },
  {
    label: 'USB-C Hub',
    value: 'hub',
    price: 79,
    category: 'Accessories',
    inStock: true,
    image: '🔌',
  },
  {
    label: 'Webcam HD',
    value: 'webcam',
    price: 89,
    category: 'Electronics',
    inStock: false,
    image: '📹',
  },
]

const simpleOptions: ComboBoxOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
]

// Custom Components for Countries
const CountrySingleValue = ({
  option,
}: SingleValueComponentProps<CountryOption>) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{option.flag}</span>
      <span>{option.label}</span>
    </div>
  )
}

const CountryOption = ({
  option,
  isSelected,
  classNames,
}: OptionComponentProps<CountryOption>) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg">{option.flag}</span>
        <div className="flex flex-col">
          <span>{option.label}</span>
          <span className="text-xs text-gray-500">{option.continent}</span>
        </div>
      </div>
      {isSelected && <IoCheckmarkSharp className={classNames?.checkIcon} />}
    </div>
  )
}

// Custom Components for Frameworks
const FrameworkSingleValue = ({
  option,
}: SingleValueComponentProps<FrameworkOption>) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{option.icon}</span>
      <span>{option.label}</span>
    </div>
  )
}

const FrameworkOption = ({
  option,
  isSelected,
  classNames,
}: OptionComponentProps<FrameworkOption>) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg">{option.icon}</span>
        <div className="flex flex-col">
          <span>{option.label}</span>
          <span className="text-xs text-gray-500">
            {option.category} • Popularity: {option.popularity}%
          </span>
        </div>
      </div>
      {isSelected && <IoCheckmarkSharp className={classNames?.checkIcon} />}
    </div>
  )
}

// Custom Components for Colors
const ColorSingleValue = ({
  option,
}: SingleValueComponentProps<ColorOption>) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-4 w-4 rounded border border-gray-300"
        style={{ backgroundColor: option.hex }}
      />
      <span>{option.label}</span>
    </div>
  )
}

const ColorOption = ({
  option,
  isSelected,
  classNames,
}: OptionComponentProps<ColorOption>) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          className="h-6 w-6 rounded border border-gray-300"
          style={{ backgroundColor: option.hex }}
        />
        <div className="flex flex-col">
          <span>{option.label}</span>
          <span className="text-xs text-gray-500">{option.hex}</span>
        </div>
      </div>
      {isSelected && <IoCheckmarkSharp className={classNames?.checkIcon} />}
    </div>
  )
}

// Custom Components for Products
const ProductSingleValue = ({
  option,
}: SingleValueComponentProps<ProductOption>) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{option.image}</span>
      <span>{option.label}</span>
    </div>
  )
}

const ProductOption = ({
  option,
  isSelected,
  classNames,
}: OptionComponentProps<ProductOption>) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{option.image}</span>
        <div className="flex flex-col">
          <span>{option.label}</span>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>${option.price}</span>
            <span>•</span>
            <span
              className={option.inStock ? 'text-green-600' : 'text-red-600'}
            >
              {option.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
      {isSelected && <IoCheckmarkSharp className={classNames?.checkIcon} />}
    </div>
  )
}

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
      <div className="w-64">
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

// Custom Components Stories
export const CountryWithFlags: Story = {
  render: () => {
    const [value, setValue] = useState<CountryOption | null>(null)
    return (
      <ComboBox
        label="Select Country"
        description="Countries with flags and continents"
        placeholder="Choose a country"
        options={countryOptions}
        value={value}
        onChange={setValue}
        searchable
        clearable
        components={{
          SingleValue: CountrySingleValue,
          Option: CountryOption,
        }}
      />
    )
  },
}

export const FrameworkWithIcons: Story = {
  render: () => {
    const [value, setValue] = useState<FrameworkOption | null>(null)
    return (
      <ComboBox
        label="Select Framework"
        description="Frameworks with icons and popularity"
        placeholder="Choose a framework"
        options={frameworkOptions}
        value={value}
        onChange={setValue}
        searchable
        clearable
        components={{
          SingleValue: FrameworkSingleValue,
          Option: FrameworkOption,
        }}
      />
    )
  },
}

export const ColorPicker: Story = {
  render: () => {
    const [value, setValue] = useState<ColorOption | null>(null)
    return (
      <ComboBox
        label="Select Color"
        description="Colors with preview and hex code"
        placeholder="Choose a color"
        options={colorOptions}
        value={value}
        onChange={setValue}
        searchable
        clearable
        components={{
          SingleValue: ColorSingleValue,
          Option: ColorOption,
        }}
      />
    )
  },
}

export const ProductSelector: Story = {
  render: () => {
    const [value, setValue] = useState<ProductOption | null>(null)
    return (
      <ComboBox
        label="Select Product"
        description="Products with price and stock status"
        placeholder="Choose a product"
        options={productOptions}
        value={value}
        onChange={setValue}
        searchable
        clearable
        components={{
          SingleValue: ProductSingleValue,
          Option: ProductOption,
        }}
      />
    )
  },
}

export const MultiSelectCountries: Story = {
  render: () => {
    const [value, setValue] = useState<CountryOption[]>([])
    return (
      <ComboBox
        label="Select Countries"
        description="Multiple countries with flags"
        placeholder="Choose countries"
        options={countryOptions}
        value={value}
        onChange={setValue}
        multiple
        searchable
        clearable
        components={{
          SingleValue: CountrySingleValue,
          Option: CountryOption,
        }}
      />
    )
  },
}

export const MultiSelectFrameworks: Story = {
  render: () => {
    const [value, setValue] = useState<FrameworkOption[]>([])
    return (
      <ComboBox
        label="Tech Stack"
        description="Select multiple frameworks"
        placeholder="Choose frameworks"
        options={frameworkOptions}
        value={value}
        onChange={setValue}
        multiple
        searchable
        clearable
        components={{
          SingleValue: FrameworkSingleValue,
          Option: FrameworkOption,
        }}
      />
    )
  },
}

export const MultiSelectColors: Story = {
  render: () => {
    const [value, setValue] = useState<ColorOption[]>([])
    return (
      <ComboBox
        label="Color Palette"
        description="Select multiple colors"
        placeholder="Choose colors"
        options={colorOptions}
        value={value}
        onChange={setValue}
        multiple
        searchable
        clearable
        components={{
          SingleValue: ColorSingleValue,
          Option: ColorOption,
        }}
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
          components={{
            SingleValue: CountrySingleValue,
            Option: CountryOption,
          }}
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
          components={{
            SingleValue: ColorSingleValue,
            Option: ColorOption,
          }}
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
          components={{
            SingleValue: ProductSingleValue,
            Option: ProductOption,
          }}
        />
        {product && (
          <div className="space-y-2 rounded-md bg-gray-50 p-4">
            <h4 className="flex items-center gap-2 font-semibold">
              <span className="text-2xl">{product.image}</span>
              {product.label}
            </h4>
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
          components={{
            SingleValue: CountrySingleValue,
            Option: CountryOption,
          }}
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
          components={{
            SingleValue: FrameworkSingleValue,
            Option: FrameworkOption,
          }}
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
          components={{
            SingleValue: FrameworkSingleValue,
            Option: FrameworkOption,
          }}
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
          components={{
            SingleValue: ColorSingleValue,
            Option: ColorOption,
          }}
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
          components={{
            SingleValue: CountrySingleValue,
            Option: CountryOption,
          }}
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
          components={{
            SingleValue: FrameworkSingleValue,
            Option: FrameworkOption,
          }}
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
