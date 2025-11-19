import { Card } from '@/components'
import FormattedDate from '@/components/FormattedDate/FormattedDate'

export default function FormattedDateExample() {
  const sampleDate = '2024-02-22T14:30:00Z'
  const sampleDateString = '2024-02-22'

  return (
    <div className="space-y-6 p-6">
      <Card
        withBorder
        shadow="sm"
        radius="sm"
      >
        <Card.Header>
          <h1 className="text-2xl font-bold">
            FormattedDate Component - All Examples
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Comprehensive showcase of all formatting options
          </p>
        </Card.Header>
        <Card.Body>
          {/* Basic Date Formats */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">
              1. Basic Date Formats
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  ISO Date (YYYY-MM-DD):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">DD-MM-YYYY:</div>
                <FormattedDate
                  date={sampleDate}
                  format="DD-MM-YYYY"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">DD/MM/YYYY:</div>
                <FormattedDate
                  date={sampleDate}
                  format="DD/MM/YYYY"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  MM/DD/YYYY (US):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="MM/DD/YYYY"
                />
              </div>
            </div>
          </div>

          {/* Long Date Formats */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">2. Long Date Formats</h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Full weekday:</div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Short weekday:</div>
                <FormattedDate
                  date={sampleDate}
                  format="ddd, MMM D, YYYY"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Full month:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Short month:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMM D, YYYY"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Day Month Year:</div>
                <FormattedDate
                  date={sampleDate}
                  format="D MMMM YYYY"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Ordinal day:</div>
                <FormattedDate
                  date={sampleDate}
                  format="Do MMMM YYYY"
                  locale="en"
                />
              </div>
            </div>
          </div>

          {/* Date with Time */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">
              3. Date with Time Formats
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">24-hour format:</div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">12-hour format:</div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD hh:mm A"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  With seconds (24h):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  With seconds (12h):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD hh:mm:ss A"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  DD-MM-YYYY HH:mm:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="DD-MM-YYYY HH:mm"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  DD-MM-YYYY HH:mm:ss:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="DD-MM-YYYY HH:mm:ss"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Long format with time:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="D MMMM YYYY, HH:mm"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Full with 12h time:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY h:mm A"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  D/MMMM/YYYY HH:mm:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="D/MMMM/YYYY HH:mm"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  DD/MM/YYYY HH:mm:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="DD/MM/YYYY HH:mm"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  ddd, MMM D, YYYY h:mm A:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="ddd, MMM D, YYYY h:mm A"
                  locale="en"
                />
              </div>
            </div>
          </div>

          {/* Time Only Formats */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">4. Time Only Formats</h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  24-hour (HH:mm):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="HH:mm"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  12-hour (hh:mm A):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="hh:mm A"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  With seconds (24h):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="HH:mm:ss"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  With seconds (12h):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="hh:mm:ss A"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  With milliseconds (24h):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="HH:mm:ss.SSS"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  With milliseconds (12h):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="hh:mm:ss.SSS A"
                />
              </div>
            </div>
          </div>

          {/* ISO & Special Formats */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">
              5. ISO & Special Formats
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">ISO 8601:</div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DDTHH:mm:ssZ"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  ISO with milliseconds:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DDTHH:mm:ss.SSSZ"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">ISO literal Z:</div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Filename friendly:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY_MM_DD_HH_mm_ss"
                />
              </div>
            </div>
          </div>

          {/* Variant Styles */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">6. Variant Styles</h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Default:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="default"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Bold:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="bold"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Muted:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="muted"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Primary:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="primary"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Secondary:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="secondary"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Success:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="success"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Warning:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="warning"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Danger:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="danger"
                  locale="en"
                />
              </div>
            </div>
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">7. Size Variants</h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Extra Small (xs):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  size="xs"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Small (sm):</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  size="sm"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Medium (md):</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  size="md"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Large (lg):</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  size="lg"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Extra Large (xl):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  size="xl"
                  locale="en"
                />
              </div>
            </div>
          </div>

          {/* Locale Examples */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">8. Locale Examples</h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">English (en):</div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Indonesian (id):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="id"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Chinese (zh):</div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="zh"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Vietnamese (vi):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="vi"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Thai (th):</div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="th"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Portuguese (pt):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="pt"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Spanish (es):</div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  locale="es"
                />
              </div>
            </div>
          </div>

          {/* Timezone Examples */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">9. Timezone Examples</h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Jakarta (Asia/Jakarta):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm"
                  timeZone="Asia/Jakarta"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  New York (America/New_York):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm"
                  timeZone="America/New_York"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  London (Europe/London):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm"
                  timeZone="Europe/London"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Tokyo (Asia/Tokyo):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm"
                  timeZone="Asia/Tokyo"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">UTC:</div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm"
                  useUtc={true}
                />
              </div>
            </div>
          </div>

          {/* Time Position */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">
              10. Time Position (Start/End of Day)
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Original date:</div>
                <FormattedDate
                  date={sampleDateString}
                  format="YYYY-MM-DD HH:mm:ss"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Start of day:</div>
                <FormattedDate
                  date={sampleDateString}
                  format="YYYY-MM-DD HH:mm:ss"
                  timePosition="start"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">End of day:</div>
                <FormattedDate
                  date={sampleDateString}
                  format="YYYY-MM-DD HH:mm:ss"
                  timePosition="end"
                />
              </div>
            </div>
          </div>

          {/* Polymorphic (as prop) */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">
              11. Polymorphic Component (as prop)
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  As time (default):
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">As span:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  as="span"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">As div:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  as="div"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">As p:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  as="p"
                  locale="en"
                />
              </div>
            </div>
          </div>

          {/* Combined Examples */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">
              12. Combined Styling Examples
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Large Primary:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="primary"
                  size="lg"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">Small Muted:</div>
                <FormattedDate
                  date={sampleDate}
                  format="MMM D, YYYY"
                  variant="muted"
                  size="sm"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">XL Success:</div>
                <FormattedDate
                  date={sampleDate}
                  format="dddd, MMMM D, YYYY"
                  variant="success"
                  size="xl"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Danger with timezone:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="YYYY-MM-DD HH:mm"
                  variant="danger"
                  timeZone="America/Los_Angeles"
                />
              </div>
            </div>
          </div>

          {/* Custom className */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">13. Custom className</h3>
            <div className="space-y-3">
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  With custom styles:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  className="italic underline"
                  locale="en"
                />
              </div>
              <div className="flex gap-4 rounded bg-gray-50 p-3">
                <div className="min-w-[200px] font-medium">
                  Custom + variant:
                </div>
                <FormattedDate
                  date={sampleDate}
                  format="MMMM D, YYYY"
                  variant="primary"
                  className="tracking-wide uppercase"
                  locale="en"
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
