/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  FiFile,
  FiFileText,
  FiImage,
  FiMusic,
  FiVideo,
  FiUpload,
} from 'react-icons/fi'

import FileInput from './FileInput'

const meta: Meta<typeof FileInput> = {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    docs: {},
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
      description: 'FileInput variant style',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'FileInput size',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius',
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
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
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
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    label: 'Upload File',
    placeholder: 'Choose a file',
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Document"
        value={value}
        onChange={setValue}
        placeholder="Select a file"
      />
    )
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Profile Picture',
    placeholder: 'Upload your photo',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Attachment',
    description: 'Maximum file size is 10MB',
    placeholder: 'Choose file',
  },
}

export const Required: Story = {
  args: {
    label: 'Resume',
    withAsterisk: true,
    placeholder: 'Upload your resume',
  },
}

export const WithError: Story = {
  args: {
    label: 'Document',
    error: 'File is required',
    placeholder: 'Choose file',
  },
}

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Upload File"
        description="Click the X icon to clear the file"
        value={value}
        onChange={setValue}
        clearable
      />
    )
  },
}

export const MultipleFiles: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Upload Multiple Files"
        description="Select one or more files"
        value={value}
        onChange={setValue}
        multiple
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
    placeholder: 'Choose file',
  },
}

export const FilledVariant: Story = {
  args: {
    label: 'Filled Variant',
    variant: 'filled',
    placeholder: 'Choose file',
  },
}

export const UnstyledVariant: Story = {
  args: {
    label: 'Unstyled Variant',
    variant: 'unstyled',
    placeholder: 'Choose file',
  },
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    size: 'xs',
    placeholder: 'Choose file',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
    placeholder: 'Choose file',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
    placeholder: 'Choose file',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
    placeholder: 'Choose file',
  },
}

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    size: 'xl',
    placeholder: 'Choose file',
  },
}

// Radius
export const RadiusSmall: Story = {
  args: {
    label: 'Small Radius',
    radius: 'sm',
    placeholder: 'Choose file',
  },
}

export const RadiusMedium: Story = {
  args: {
    label: 'Medium Radius',
    radius: 'md',
    placeholder: 'Choose file',
  },
}

export const RadiusLarge: Story = {
  args: {
    label: 'Large Radius',
    radius: 'lg',
    placeholder: 'Choose file',
  },
}

export const RadiusExtraLarge: Story = {
  args: {
    label: 'Extra Large Radius',
    radius: 'xl',
    placeholder: 'Choose file',
  },
}

// Custom Icons
export const CustomIcon: Story = {
  args: {
    label: 'Custom Icon',
    icon: <FiFile className="size-4" />,
    placeholder: 'Choose file',
  },
}

export const DocumentIcon: Story = {
  args: {
    label: 'Upload Document',
    icon: <FiFileText className="size-4" />,
    placeholder: 'Choose document',
  },
}

export const ImageIcon: Story = {
  args: {
    label: 'Upload Image',
    icon: <FiImage className="size-4 text-blue-600" />,
    placeholder: 'Choose image',
  },
}

export const MusicIcon: Story = {
  args: {
    label: 'Upload Audio',
    icon: <FiMusic className="size-4 text-purple-600" />,
    placeholder: 'Choose audio file',
  },
}

export const VideoIcon: Story = {
  args: {
    label: 'Upload Video',
    icon: <FiVideo className="size-4 text-red-600" />,
    placeholder: 'Choose video',
  },
}

// File Type Restrictions
export const ImagesOnly: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Profile Picture"
        description="PNG, JPG or GIF (max 5MB)"
        value={value}
        onChange={setValue}
        accept="image/*"
        icon={<FiImage className="size-4" />}
        clearable
      />
    )
  },
}

export const PDFOnly: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Upload PDF"
        description="PDF files only"
        value={value}
        onChange={setValue}
        accept=".pdf"
        icon={<FiFileText className="size-4" />}
        clearable
      />
    )
  },
}

export const DocumentsOnly: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Upload Document"
        description="PDF, DOC, or DOCX"
        value={value}
        onChange={setValue}
        accept=".pdf,.doc,.docx"
        icon={<FiFileText className="size-4" />}
        clearable
      />
    )
  },
}

export const SpreadsheetOnly: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Upload Spreadsheet"
        description="XLS or XLSX files"
        value={value}
        onChange={setValue}
        accept=".xls,.xlsx"
        icon={<FiFile className="size-4 text-green-600" />}
        clearable
      />
    )
  },
}

// States
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)
    return (
      <FileInput
        label="Disabled"
        disabled
        value={value}
        onChange={setValue}
        placeholder="Choose file"
      />
    )
  },
}

export const DisabledEmpty: Story = {
  args: {
    label: 'Disabled (No Value)',
    disabled: true,
    placeholder: 'Choose file',
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <FileInput
        label="Default Variant"
        variant="default"
        placeholder="Choose file"
      />
      <FileInput
        label="Filled Variant"
        variant="filled"
        placeholder="Choose file"
      />
      <FileInput
        label="Unstyled Variant"
        variant="unstyled"
        placeholder="Choose file"
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
      <FileInput
        label="Extra Small"
        size="xs"
        placeholder="Choose file"
      />
      <FileInput
        label="Small"
        size="sm"
        placeholder="Choose file"
      />
      <FileInput
        label="Medium"
        size="md"
        placeholder="Choose file"
      />
      <FileInput
        label="Large"
        size="lg"
        placeholder="Choose file"
      />
      <FileInput
        label="Extra Large"
        size="xl"
        placeholder="Choose file"
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const ProfilePictureUpload: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Profile Settings</h3>
        <FileInput
          label="Profile Picture"
          description="PNG, JPG or GIF (max 5MB)"
          withAsterisk
          value={value}
          onChange={setValue}
          accept="image/*"
          icon={<FiImage className="size-4" />}
          clearable
          size="md"
        />
        {value && !Array.isArray(value) && (
          <div className="rounded-md bg-green-50 p-3 text-sm text-green-700">
            File ready to upload: {value.name} ({(value.size / 1024).toFixed(1)}{' '}
            KB)
          </div>
        )}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const ResumeUpload: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Job Application</h3>
        <FileInput
          label="Upload Resume"
          description="PDF or Word document (max 10MB)"
          withAsterisk
          value={value}
          onChange={setValue}
          accept=".pdf,.doc,.docx"
          icon={<FiFileText className="size-4" />}
          clearable
          variant="filled"
          size="md"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const MultipleAttachments: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Email Attachments</h3>
        <FileInput
          label="Attachments"
          description="Select one or more files to attach"
          value={value}
          onChange={setValue}
          multiple
          clearable
          icon={<FiUpload className="size-4" />}
          size="md"
        />
        {value && Array.isArray(value) && value.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              Selected files ({value.length}):
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              {value.map((file, index) => (
                <li
                  key={index}
                  className="truncate"
                >
                  • {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </li>
              ))}
            </ul>
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
    const [file, setFile] = useState<File | File[] | null>(null)
    const [error, setError] = useState('')

    const handleFileChange = (newFile: File | File[] | null) => {
      setFile(newFile)
      if (newFile && !Array.isArray(newFile)) {
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (newFile.size > maxSize) {
          setError('File size must be less than 5MB')
        } else {
          setError('')
        }
      } else {
        setError('')
      }
    }

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Document Upload</h3>
        <FileInput
          label="Upload Document"
          description="PDF files only (max 5MB)"
          withAsterisk
          value={file}
          onChange={handleFileChange}
          accept=".pdf"
          error={error}
          clearable
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const MediaLibrary: Story = {
  render: () => {
    const [images, setImages] = useState<File | File[] | null>(null)
    const [videos, setVideos] = useState<File | File[] | null>(null)
    const [audio, setAudio] = useState<File | File[] | null>(null)

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Media Library</h3>
        <FileInput
          label="Images"
          description="Upload one or more images"
          value={images}
          onChange={setImages}
          accept="image/*"
          multiple
          clearable
          icon={<FiImage className="size-4 text-blue-600" />}
          variant="filled"
        />
        <FileInput
          label="Videos"
          description="Upload one or more videos"
          value={videos}
          onChange={setVideos}
          accept="video/*"
          multiple
          clearable
          icon={<FiVideo className="size-4 text-red-600" />}
          variant="filled"
        />
        <FileInput
          label="Audio"
          description="Upload one or more audio files"
          value={audio}
          onChange={setAudio}
          accept="audio/*"
          multiple
          clearable
          icon={<FiMusic className="size-4 text-purple-600" />}
          variant="filled"
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CompactForm: Story = {
  render: () => (
    <div className="w-80 space-y-3 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-base font-semibold">Quick Upload</h3>
      <FileInput
        label="Document"
        size="xs"
        variant="filled"
        clearable
      />
      <FileInput
        label="Image"
        size="xs"
        variant="filled"
        accept="image/*"
        clearable
      />
      <FileInput
        label="Spreadsheet"
        size="xs"
        variant="filled"
        accept=".xls,.xlsx"
        clearable
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const KYCDocumentUpload: Story = {
  render: () => {
    const [idFront, setIdFront] = useState<File | File[] | null>(null)
    const [idBack, setIdBack] = useState<File | File[] | null>(null)
    const [proofOfAddress, setProofOfAddress] = useState<File | File[] | null>(
      null,
    )

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Identity Verification</h3>
        <FileInput
          label="ID Front"
          description="Clear photo of front side"
          withAsterisk
          value={idFront}
          onChange={setIdFront}
          accept="image/*"
          clearable
        />
        <FileInput
          label="ID Back"
          description="Clear photo of back side"
          withAsterisk
          value={idBack}
          onChange={setIdBack}
          accept="image/*"
          clearable
        />
        <FileInput
          label="Proof of Address"
          description="Utility bill or bank statement"
          withAsterisk
          value={proofOfAddress}
          onChange={setProofOfAddress}
          accept="image/*,.pdf"
          clearable
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const CustomValueComponent: Story = {
  render: () => {
    const [value, setValue] = useState<File | File[] | null>(null)

    const customValueComponent = (file: File | File[]) => {
      if (Array.isArray(file)) {
        const totalSize = file.reduce((acc, f) => acc + f.size, 0)
        return (
          <span className="font-medium">
            {file.length} files ({(totalSize / 1024 / 1024).toFixed(2)} MB)
          </span>
        )
      }
      return (
        <span className="font-medium">
          {file.name} ({(file.size / 1024).toFixed(1)} KB)
        </span>
      )
    }

    return (
      <div className="w-96 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Custom Display</h3>
        <FileInput
          label="Upload Files"
          description="Custom file name display with size"
          value={value}
          onChange={setValue}
          valueComponent={customValueComponent}
          multiple
          clearable
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
