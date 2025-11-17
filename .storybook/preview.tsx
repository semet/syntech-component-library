import type { Preview } from '@storybook/react-vite'

import { ToastProvider } from '../src/components/Toast/ToastProvider'
import '../src/styles/app.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f9fafb',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
  },
}

export default preview
