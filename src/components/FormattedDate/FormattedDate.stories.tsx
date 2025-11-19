import type { Meta, StoryObj } from '@storybook/react-vite'

import FormattedDate from './FormattedDate'

const meta: Meta<typeof FormattedDate> = {
  title: 'Components/FormattedDate',
  component: FormattedDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    date: {
      control: 'date',
      description: 'Date to format',
    },
    format: {
      control: 'select',
      options: [
        'YYYY-MM-DD',
        'DD-MM-YYYY',
        'MM/DD/YYYY',
        'DD/MM/YYYY',
        'YYYY-MM-DD HH:mm',
        'DD-MM-YYYY HH:mm',
        'YYYY-MM-DD HH:mm:ss',
        'D MMMM YYYY',
        'MMMM D, YYYY',
        'dddd, MMMM D, YYYY',
        'HH:mm',
        'hh:mm A',
      ],
      description: 'Date format string',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'bold',
        'muted',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Text size',
    },
    locale: {
      control: 'select',
      options: ['en', 'id', 'zh', 'vi', 'th', 'pt', 'es'],
      description: 'Locale for formatting',
    },
    timeZone: {
      control: 'select',
      options: [
        'Asia/Jakarta',
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'UTC',
      ],
      description: 'Timezone',
    },
    timePosition: {
      control: 'select',
      options: [undefined, 'start', 'end'],
      description: 'Time position adjustment',
    },
    useUtc: {
      control: 'boolean',
      description: 'Use UTC mode',
    },
    as: {
      control: 'select',
      options: ['time', 'span', 'div', 'p'],
      description: 'HTML element to render',
    },
  },
} satisfies Meta<typeof FormattedDate>

export default meta
type Story = StoryObj<typeof meta>

const sampleDate = '2024-02-22T14:30:00Z'
const today = new Date()

// Basic Stories
export const Default: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD',
  },
}

export const WithTime: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
  },
}

export const LongFormat: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'en',
  },
}

// Variant Stories
export const DefaultVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'default',
    locale: 'en',
  },
}

export const BoldVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'bold',
    locale: 'en',
  },
}

export const MutedVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'muted',
    locale: 'en',
  },
}

export const PrimaryVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'primary',
    locale: 'en',
  },
}

export const SecondaryVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'secondary',
    locale: 'en',
  },
}

export const SuccessVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'success',
    locale: 'en',
  },
}

export const WarningVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'warning',
    locale: 'en',
  },
}

export const DangerVariant: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'danger',
    locale: 'en',
  },
}

// Size Stories
export const ExtraSmall: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    size: 'xs',
    locale: 'en',
  },
}

export const Small: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    size: 'sm',
    locale: 'en',
  },
}

export const Medium: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    size: 'md',
    locale: 'en',
  },
}

export const Large: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    size: 'lg',
    locale: 'en',
  },
}

export const ExtraLarge: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    size: 'xl',
    locale: 'en',
  },
}

// Format Stories
export const FormatISO: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD',
  },
}

export const FormatDDMMYYYY: Story = {
  args: {
    date: sampleDate,
    format: 'DD-MM-YYYY',
  },
}

export const FormatUS: Story = {
  args: {
    date: sampleDate,
    format: 'MM/DD/YYYY',
  },
}

export const FormatEU: Story = {
  args: {
    date: sampleDate,
    format: 'DD/MM/YYYY',
  },
}

export const FormatWithTime24h: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
  },
}

export const FormatWithTime12h: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD hh:mm A',
  },
}

export const FormatWithSeconds: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm:ss',
  },
}

export const FormatLongDate: Story = {
  args: {
    date: sampleDate,
    format: 'D MMMM YYYY',
    locale: 'en',
  },
}

export const FormatFullDate: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'en',
  },
}

export const FormatTimeOnly24h: Story = {
  args: {
    date: sampleDate,
    format: 'HH:mm',
  },
}

export const FormatTimeOnly12h: Story = {
  args: {
    date: sampleDate,
    format: 'hh:mm A',
  },
}

// Locale Stories
export const LocaleEnglish: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'en',
  },
}

export const LocaleIndonesian: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'id',
  },
}

export const LocaleChinese: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'zh',
  },
}

export const LocaleVietnamese: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'vi',
  },
}

export const LocaleThai: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'th',
  },
}

export const LocalePortuguese: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'pt',
  },
}

export const LocaleSpanish: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    locale: 'es',
  },
}

// Timezone Stories
export const TimezoneJakarta: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
    timeZone: 'Asia/Jakarta',
  },
}

export const TimezoneNewYork: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
    timeZone: 'America/New_York',
  },
}

export const TimezoneLondon: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
    timeZone: 'Europe/London',
  },
}

export const TimezoneTokyo: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
    timeZone: 'Asia/Tokyo',
  },
}

export const TimezoneUTC: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
    useUtc: true,
  },
}

// Time Position Stories
export const TimePositionDefault: Story = {
  args: {
    date: '2024-02-22',
    format: 'YYYY-MM-DD HH:mm:ss',
  },
}

export const TimePositionStart: Story = {
  args: {
    date: '2024-02-22',
    format: 'YYYY-MM-DD HH:mm:ss',
    timePosition: 'start',
  },
}

export const TimePositionEnd: Story = {
  args: {
    date: '2024-02-22',
    format: 'YYYY-MM-DD HH:mm:ss',
    timePosition: 'end',
  },
}

// Polymorphic Stories
export const AsTime: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    as: 'time',
    locale: 'en',
  },
}

export const AsSpan: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    as: 'span',
    locale: 'en',
  },
}

export const AsDiv: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    as: 'div',
    locale: 'en',
  },
}

export const AsParagraph: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    as: 'p',
    locale: 'en',
  },
}

// Combined Examples
export const LargePrimaryBold: Story = {
  args: {
    date: sampleDate,
    format: 'MMMM D, YYYY',
    variant: 'primary',
    size: 'lg',
    locale: 'en',
  },
}

export const SmallMuted: Story = {
  args: {
    date: sampleDate,
    format: 'MMM D, YYYY',
    variant: 'muted',
    size: 'sm',
    locale: 'en',
  },
}

export const ExtraLargeSuccess: Story = {
  args: {
    date: sampleDate,
    format: 'dddd, MMMM D, YYYY',
    variant: 'success',
    size: 'xl',
    locale: 'en',
  },
}

export const DangerWithTimezone: Story = {
  args: {
    date: sampleDate,
    format: 'YYYY-MM-DD HH:mm',
    variant: 'danger',
    timeZone: 'America/Los_Angeles',
  },
}

// Showcase Stories
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Default</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="default"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Bold</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="bold"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Muted</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="muted"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Primary</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="primary"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Secondary</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="secondary"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Success</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="success"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Warning</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="warning"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Danger</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          variant="danger"
          locale="en"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Extra Small (xs)
        </div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          size="xs"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Small (sm)</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          size="sm"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Medium (md)
        </div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          size="md"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Large (lg)</div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          size="lg"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Extra Large (xl)
        </div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          size="xl"
          locale="en"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const AllFormats: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">YYYY-MM-DD</div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">DD-MM-YYYY</div>
        <FormattedDate
          date={sampleDate}
          format="DD-MM-YYYY"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">MM/DD/YYYY</div>
        <FormattedDate
          date={sampleDate}
          format="MM/DD/YYYY"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">DD/MM/YYYY</div>
        <FormattedDate
          date={sampleDate}
          format="DD/MM/YYYY"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          D MMMM YYYY
        </div>
        <FormattedDate
          date={sampleDate}
          format="D MMMM YYYY"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          MMMM D, YYYY
        </div>
        <FormattedDate
          date={sampleDate}
          format="MMMM D, YYYY"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          dddd, MMMM D, YYYY
        </div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          YYYY-MM-DD HH:mm
        </div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD HH:mm"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          YYYY-MM-DD hh:mm A
        </div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD hh:mm A"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">HH:mm</div>
        <FormattedDate
          date={sampleDate}
          format="HH:mm"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">hh:mm A</div>
        <FormattedDate
          date={sampleDate}
          format="hh:mm A"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const AllLocales: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          English (en)
        </div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="en"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Indonesian (id)
        </div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="id"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Chinese (zh)
        </div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="zh"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Vietnamese (vi)
        </div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="vi"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">Thai (th)</div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="th"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Portuguese (pt)
        </div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="pt"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Spanish (es)
        </div>
        <FormattedDate
          date={sampleDate}
          format="dddd, MMMM D, YYYY"
          locale="es"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const AllTimezones: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Jakarta (Asia/Jakarta)
        </div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD HH:mm"
          timeZone="Asia/Jakarta"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          New York (America/New_York)
        </div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD HH:mm"
          timeZone="America/New_York"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          London (Europe/London)
        </div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD HH:mm"
          timeZone="Europe/London"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">
          Tokyo (Asia/Tokyo)
        </div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD HH:mm"
          timeZone="Asia/Tokyo"
        />
      </div>
      <div>
        <div className="mb-1 text-xs font-medium text-gray-500">UTC</div>
        <FormattedDate
          date={sampleDate}
          format="YYYY-MM-DD HH:mm"
          useUtc={true}
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

// Real World Examples
export const BlogPostDate: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-2 text-lg font-semibold">Blog Post Title</h3>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-500">Published on</span>
        <FormattedDate
          date={today}
          format="MMMM D, YYYY"
          variant="muted"
          locale="en"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const EventCard: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="mb-1 text-lg font-semibold">Annual Conference 2024</h3>
          <p className="mb-3 text-sm text-gray-600">
            Join us for the biggest tech conference of the year
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Date:</span>
              <FormattedDate
                date="2024-06-15T09:00:00Z"
                format="dddd, MMMM D, YYYY"
                variant="primary"
                size="sm"
                locale="en"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Time:</span>
              <FormattedDate
                date="2024-06-15T09:00:00Z"
                format="hh:mm A"
                variant="default"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const OrderHistory: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold">Order History</h3>
      <div className="space-y-3">
        {[
          { id: '#12345', date: '2024-02-20T14:30:00Z', status: 'Delivered' },
          { id: '#12344', date: '2024-02-15T10:20:00Z', status: 'Shipped' },
          { id: '#12343', date: '2024-02-10T16:45:00Z', status: 'Processing' },
        ].map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between border-b border-gray-100 pb-3"
          >
            <div>
              <div className="text-sm font-medium">{order.id}</div>
              <FormattedDate
                date={order.date}
                format="MMM D, YYYY"
                variant="muted"
                size="xs"
                locale="en"
              />
            </div>
            <span
              className={`rounded px-2 py-1 text-xs ${
                order.status === 'Delivered'
                  ? 'bg-green-100 text-green-700'
                  : order.status === 'Shipped'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const ActivityFeed: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
      <div className="space-y-4">
        {[
          {
            action: 'Updated profile',
            date: new Date(Date.now() - 2 * 60 * 60 * 1000),
          },
          {
            action: 'Uploaded document',
            date: new Date(Date.now() - 5 * 60 * 60 * 1000),
          },
          {
            action: 'Changed password',
            date: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
          {
            action: 'Logged in',
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          },
        ].map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <div>
              <div className="text-sm font-medium">{activity.action}</div>
              <FormattedDate
                date={activity.date}
                format="dddd, MMMM D, YYYY h:mm A"
                variant="muted"
                size="xs"
                locale="en"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const NotificationTimestamp: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold">Notifications</h3>
      <div className="space-y-3">
        {[
          {
            title: 'New message received',
            date: new Date(Date.now() - 30 * 60 * 1000),
            unread: true,
          },
          {
            title: 'Payment successful',
            date: new Date(Date.now() - 2 * 60 * 60 * 1000),
            unread: true,
          },
          {
            title: 'Profile view',
            date: new Date(Date.now() - 24 * 60 * 60 * 1000),
            unread: false,
          },
        ].map((notification, index) => (
          <div
            key={index}
            className={`flex items-start justify-between rounded p-3 ${notification.unread ? 'bg-blue-50' : 'bg-gray-50'}`}
          >
            <div className="flex-1">
              <div
                className={`text-sm ${notification.unread ? 'font-semibold' : 'font-normal'}`}
              >
                {notification.title}
              </div>
              <FormattedDate
                date={notification.date}
                format="HH:mm"
                variant="muted"
                size="xs"
              />
            </div>
            {notification.unread && (
              <div className="h-2 w-2 rounded-full bg-blue-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

export const DataTable: Story = {
  render: () => (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
      <table className="w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Transaction ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {[
            {
              id: 'TXN-001',
              date: '2024-02-22T14:30:00Z',
              amount: '$125.00',
              status: 'Completed',
            },
            {
              id: 'TXN-002',
              date: '2024-02-21T10:15:00Z',
              amount: '$89.50',
              status: 'Pending',
            },
            {
              id: 'TXN-003',
              date: '2024-02-20T16:45:00Z',
              amount: '$210.00',
              status: 'Completed',
            },
          ].map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                {transaction.id}
              </td>
              <td className="px-6 py-4 text-sm whitespace-nowrap">
                <FormattedDate
                  date={transaction.date}
                  format="dddd, MMMM D, YYYY h:mm A"
                  size="sm"
                  locale="en"
                />
              </td>
              <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                {transaction.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                    transaction.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
