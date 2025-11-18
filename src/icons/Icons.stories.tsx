import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Icons from './index'

const meta: Meta = {
  title: 'Icons/Gallery',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

// Get all icon components and their names
const iconEntries = Object.entries(Icons).map(([name, Component]) => ({
  name,
  Component,
}))

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 p-6">
      {iconEntries.map(({ name, Component }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-slate-50 p-4 transition-shadow hover:shadow-md"
        >
          <div className="flex size-12 items-center justify-center">
            <Component className="size-10 text-slate-700" />
          </div>
          <span className="text-center text-xs wrap-break-word text-gray-600">
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
}

// Different sizes showcase
export const Sizes: Story = {
  render: () => {
    const sizes = [
      { className: 'size-6', label: '24px' },
      { className: 'size-8', label: '32px' },
      { className: 'size-12', label: '48px' },
      { className: 'size-16', label: '64px' },
    ]
    const SampleIcon = Icons.DashboardIcon

    return (
      <div className="flex items-center gap-8">
        {sizes.map(({ className, label }) => (
          <div
            key={label}
            className="rounded border border-slate-200 p-2 text-center"
          >
            <SampleIcon className={className} />
            <p className="mt-2 text-xs">{label}</p>
          </div>
        ))}
      </div>
    )
  },
}

// Dark mode variant
export const DarkMode: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 rounded-lg bg-gray-900 p-6">
      {iconEntries.map(({ name, Component }) => (
        <div
          key={name}
          className="hover:bg-gray-750 flex flex-col items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 p-4 transition-colors"
        >
          <div className="flex h-12 w-12 items-center justify-center text-white">
            <Component />
          </div>
          <span className="text-center text-xs wrap-break-word text-gray-300">
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
}

// With different colors
export const Colored: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 p-6">
      {iconEntries.map(({ name, Component }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-linear-to-br from-blue-50 to-purple-50 p-4 transition-all hover:from-blue-100 hover:to-purple-100"
        >
          <div className="flex items-center justify-center text-blue-600">
            <Component className="size-10" />
          </div>
          <span className="text-center text-xs font-medium wrap-break-word text-gray-700">
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
}
