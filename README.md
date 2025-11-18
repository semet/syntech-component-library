# Syntech Component Library

A modern, accessible, and customizable React component library built with Vite and Tailwind CSS v4. This library provides a comprehensive set of UI components designed for building beautiful and functional web applications.

## Features

- 🎨 **Modern UI Components** - A rich collection of form controls, inputs, and interactive components
- 🎯 **Built with Vite** - Lightning-fast development and optimized production builds
- 💨 **Tailwind CSS v4** - Utility-first styling with the latest Tailwind features
- 📦 **TypeScript** - Full type safety and excellent developer experience
- 🧩 **Tree-shakeable** - Import only what you need
- ♿ **Accessible** - ARIA compliant components following best practices
- 🎭 **React 19 Ready** - Compatible with both React 18 and React 19
- 📖 **Storybook** - Interactive component documentation
- ✅ **Tested** - Comprehensive unit and component tests with Vitest

## Installation

```bash
# Using npm
npm install syntech-fe-library

# Using yarn
yarn add syntech-fe-library

# Using pnpm
pnpm add syntech-fe-library
```

### Peer Dependencies

Make sure to install the required peer dependencies:

```bash
npm install react react-dom react-hook-form zod dayjs tailwind-merge tailwind-variants
```

## Usage

### Import Components

```tsx
import { Button, TextInput, Form } from 'syntech-fe-library/components'
import { DashboardIcon, UserIcon } from 'syntech-fe-library/icons'
import 'syntech-fe-library/styles.css'
```

### Basic Example

```tsx
import { Button, TextInput } from 'syntech-fe-library/components'
import 'syntech-fe-library/styles.css'

function App() {
  return (
    <div>
      <TextInput
        label="Email"
        placeholder="Enter your email"
      />
      <Button variant="primary">Submit</Button>
    </div>
  )
}
```

### Form Example with Validation

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, TextInput, Button } from 'syntech-fe-library/components'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

function LoginForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Email"
        {...register('email')}
      />
      <TextInput
        label="Password"
        type="password"
        {...register('password')}
      />
      <Button type="submit">Login</Button>
    </form>
  )
}
```

## Available Components

### Form Controls

- **Button** - Customizable button with variants
- **TextInput** - Text input with label and validation
- **PasswordInput** - Password input with show/hide toggle
- **Textarea** - Multi-line text input
- **Select** - Dropdown select component
- **ComboBox** - Searchable select component
- **Checkbox** - Checkbox input with label
- **Radio** - Radio button input
- **Switch** - Toggle switch component

### Pickers & Advanced Inputs

- **DatePicker** - Date selection component
- **ColorPicker** - Color selection component
- **CaptchaInput** - Captcha verification input

### Utilities

- **Form** - Form wrapper with validation support
- **Toast** - Toast notification system
- **Tooltip** - Tooltip component
- **Copy** - Copy to clipboard component

### Icons

60+ customizable SVG icons including:

- Dashboard, User, Settings icons
- Game-related icons (Casino, Sport, Slot, etc.)
- Financial icons (Bank, Wallet, Transfer, etc.)
- Action icons (Search, Upload, Download, etc.)

## Development

### Prerequisites

- Node.js >= 22.12.0
- pnpm 10

### Setup

```bash
# Clone the repository
git clone https://github.com/semet/syntech-component-library.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Storybook
pnpm storybook
```

### Build

```bash
# Build the library
pnpm build:lib

# Build Storybook
pnpm build-storybook
```

### Testing

```bash
# Run all tests
pnpm test

# Run unit tests
pnpm test:unit

# Run tests with coverage
pnpm test:coverage

# Run tests in UI mode
pnpm test:ui
```

### Code Quality

```bash
# Lint code
pnpm lint

# Format code
pnpm format

# Validate unused exports
pnpm validate
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Vitest** - Testing framework
- **Storybook** - Component documentation
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Browser Support

Modern browsers supporting ES2015+ features:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Repository

[GitHub](https://github.com/semet/syntech-component-library)

## Issues

Report issues at: [GitHub Issues](https://github.com/semet/syntech-component-library/issues)
