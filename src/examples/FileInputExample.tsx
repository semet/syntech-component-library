import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components'
import Alert from '@/components/Alert/Alert'
import FileInput from '@/components/FileInput/FileInput'
import { WarningIcon } from '@/icons'

const schema = z.object({
  file: z.file().refine((file) => file.size <= 5 * 1024 * 1024, {
    message: 'File size must be less than 5MB',
  }),
})

export default function FileInputExample() {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  })
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4">
      <div className="mx-auto max-w-md bg-white p-8 shadow-md">
        <form
          onSubmit={handleSubmit((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
          })}
          className="flex flex-col gap-5"
        >
          <Alert
            variant="light"
            color="primary"
            title="File Upload Instructions"
            icon={<WarningIcon />}
          >
            Please ensure your file is less than 5MB in size before uploading.
          </Alert>
          <Controller
            name="file"
            control={control}
            render={({ field, fieldState }) => (
              <FileInput
                label="Upload File"
                description="Please upload a file less than 5MB"
                withAsterisk
                clearable
                placeholder="Choose a file"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <div className="flex justify-center gap-4">
            <Button
              type="reset"
              size="sm"
              color="gray"
              onClick={() => reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              size="sm"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
