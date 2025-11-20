import { Button, Card } from '@/components'

export default function ButtonExamples() {
  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
    >
      <Card.Header>
        <h2 className="text-xl font-bold text-gray-900">Buttons</h2>
      </Card.Header>
      <Card.Body className="space-y-6">
        <div className="flex gap-4">
          <Button
            loading
            loaderType="oval"
            size="xs"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="oval"
            size="sm"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="oval"
            size="md"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="oval"
            size="lg"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="oval"
            size="xl"
          >
            Click me
          </Button>
        </div>
        <div className="flex gap-4">
          <Button
            loading
            loaderType="dots"
            size="xs"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="dots"
            size="sm"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="dots"
            size="md"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="dots"
            size="lg"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="dots"
            size="xl"
          >
            Click me
          </Button>
        </div>
        <div className="flex gap-4">
          <Button
            loading
            loaderType="bars"
            size="xs"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="bars"
            size="sm"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="bars"
            size="md"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="bars"
            size="lg"
          >
            Click me
          </Button>
          <Button
            loading
            loaderType="bars"
            size="xl"
          >
            Click me
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
