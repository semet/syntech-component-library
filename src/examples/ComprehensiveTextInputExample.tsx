import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'
import z from 'zod'

import Card from '@/components/Card/Card'
import TextInput from '@/components/TextInput/TextInput'

const schema = z.object({
  default: z.string().optional(),
  number: z.string().optional(),
  integer: z.string().optional(),
  positiveNumber: z.string().optional(),
  decimal: z.string().optional(),
  currency: z.string().optional(),
  alphabet: z.string().optional(),
  alphanumeric: z.string().optional(),
  uppercase: z.string().optional(),
  lowercase: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ComprehensiveTextInputExample() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      default: '',
      number: '',
      integer: '',
      positiveNumber: '',
      decimal: '',
      currency: '',
      alphabet: '',
      alphanumeric: '',
      uppercase: '',
      lowercase: '',
    },
  })

  const formValues = useWatch({ control })

  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log('Form submitted:', data)
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div className="space-y-6">
      <Card>
        <Card.Header>
          <h2 className="text-2xl font-bold">
            Comprehensive TextInput Modes Example
          </h2>
          <p className="mt-2 text-gray-600">
            Examples of all available input modes with formatting and validation
          </p>
        </Card.Header>
        <Card.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Default Mode */}
            <div className="space-y-4">
              <h3 className="border-b pb-2 text-xl font-semibold text-gray-800">
                Default Mode
              </h3>

              <TextInput
                {...register('default')}
                label="Default (No Mode)"
                description="Accepts any characters - normal text input behavior"
                placeholder="Type anything: abc123!@#$%"
                error={errors.default?.message}
              />
            </div>

            {/* Numeric Modes */}
            <div className="space-y-4">
              <h3 className="border-b pb-2 text-xl font-semibold text-gray-800">
                Numeric Modes
              </h3>

              <TextInput
                {...register('number')}
                label="Number"
                mode="number"
                description="Accepts numbers with decimals and negative values (e.g., -123.45)"
                placeholder="Enter any number"
                error={errors.number?.message}
              />

              <TextInput
                {...register('integer')}
                label="Integer"
                mode="integer"
                description="Only whole numbers, no decimals allowed (e.g., -123)"
                placeholder="Enter integer"
                error={errors.integer?.message}
              />

              <TextInput
                {...register('positiveNumber')}
                label="Positive Number"
                mode="positive-number"
                description="Only positive numbers (e.g., 123.45)"
                placeholder="Enter positive number"
                error={errors.positiveNumber?.message}
              />

              <TextInput
                {...register('decimal')}
                label="Decimal"
                mode="decimal"
                decimalPlaces={12}
                description="Decimal numbers with up to 4 decimal places (e.g., 123.4567)"
                placeholder="0.0000"
                error={errors.decimal?.message}
              />

              <TextInput
                {...register('currency')}
                label="Currency"
                mode="currency"
                decimalPlaces={2}
                leftSection={<span className="text-gray-500">$</span>}
                description="Currency format with thousand separators (e.g., $1,234.56)"
                placeholder="0.00"
                error={errors.currency?.message}
              />
            </div>

            {/* Text Format Modes */}
            <div className="space-y-4">
              <h3 className="border-b pb-2 text-xl font-semibold text-gray-800">
                Text Format Modes
              </h3>

              <TextInput
                {...register('alphabet')}
                label="Alphabet Only"
                mode="alphabet"
                description="Only letters (a-z, A-Z) and spaces allowed"
                placeholder="Enter letters only"
                error={errors.alphabet?.message}
              />

              <TextInput
                {...register('alphanumeric')}
                label="Alphanumeric"
                mode="alphanumeric"
                description="Letters, numbers, and spaces only"
                placeholder="Enter letters and numbers"
                error={errors.alphanumeric?.message}
              />

              <TextInput
                {...register('uppercase')}
                label="Uppercase"
                mode="uppercase"
                description="Automatically converts to UPPERCASE"
                placeholder="TYPE ANYTHING"
                error={errors.uppercase?.message}
              />

              <TextInput
                {...register('lowercase')}
                label="Lowercase"
                mode="lowercase"
                description="Automatically converts to lowercase"
                placeholder="type anything"
                error={errors.lowercase?.message}
              />
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 border-t pt-4">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Submit Form
              </button>
              <button
                type="button"
                onClick={() => globalThis.location.reload()}
                className="rounded-md bg-gray-200 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-300"
              >
                Reset
              </button>
            </div>
          </form>
        </Card.Body>
      </Card>

      {/* Live Preview Card */}
      <Card>
        <Card.Header>
          <h3 className="text-xl font-semibold">Live Form Values</h3>
        </Card.Header>
        <Card.Body>
          <pre className="overflow-auto rounded-lg bg-gray-50 p-4 text-sm">
            {JSON.stringify(formValues, null, 2)}
          </pre>
        </Card.Body>
      </Card>

      {/* Usage Examples Card */}
      <Card>
        <Card.Header>
          <h3 className="text-xl font-semibold">Quick Usage Reference</h3>
        </Card.Header>
        <Card.Body>
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">Default Mode:</h4>
                <ul className="list-inside list-disc space-y-1 text-gray-600">
                  <li>
                    <code className="rounded bg-gray-100 px-1">
                      no mode prop
                    </code>{' '}
                    - Accepts any input (normal text input)
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">Numeric Modes:</h4>
                <ul className="list-inside list-disc space-y-1 text-gray-600">
                  <li>
                    <code className="rounded bg-gray-100 px-1">number</code> -
                    Any number with decimals
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">integer</code> -
                    Whole numbers only
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">
                      positive-number
                    </code>{' '}
                    - Positive only
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">decimal</code> -
                    Precise decimals
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">currency</code> -
                    Money format
                  </li>
                </ul>
              </div>

              <div className="space-y-2 md:col-span-2">
                <h4 className="font-semibold text-gray-700">Text Formats:</h4>
                <ul className="list-inside list-disc space-y-1 text-gray-600">
                  <li>
                    <code className="rounded bg-gray-100 px-1">alphabet</code> -
                    Letters only
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">
                      alphanumeric
                    </code>{' '}
                    - Letters + numbers
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">uppercase</code>{' '}
                    - Auto CAPS
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">lowercase</code>{' '}
                    - Auto lowercase
                  </li>
                </ul>
              </div>

              <div className="space-y-2 md:col-span-2">
                <h4 className="font-semibold text-gray-700">
                  Available Props:
                </h4>
                <ul className="list-inside list-disc space-y-1 text-gray-600">
                  <li>
                    <code className="rounded bg-gray-100 px-1">
                      decimalPlaces
                    </code>{' '}
                    - Control decimal precision (for decimal and currency modes)
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">
                      allowNegative
                    </code>{' '}
                    - Enable/disable negative numbers (default: true)
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">
                      leftSection
                    </code>{' '}
                    - Add prefix icon or symbol
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-1">
                      rightSection
                    </code>{' '}
                    - Add suffix icon or symbol
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <h4 className="mb-2 font-semibold text-blue-900">
                💡 Quick Examples:
              </h4>
              <div className="space-y-1 font-mono text-xs text-blue-800">
                <div>{`<TextInput /> // Default - accepts everything`}</div>
                <div>
                  {`<TextInput mode="currency" leftSection={<span>$</span>} />`}
                </div>
                <div>{`<TextInput mode="decimal" decimalPlaces={4} />`}</div>
                <div>
                  {`<TextInput mode="positive-number" allowNegative={false} />`}
                </div>
                <div>{`<TextInput mode="uppercase" />`}</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
