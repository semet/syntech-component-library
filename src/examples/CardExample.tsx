import { Button } from '@/components'
import Card from '@/components/Card/Card'

export default function CardExample() {
  return (
    <Card
      withBorder
      shadow="sm"
      radius="sm"
      as="section"
      scrollable
    >
      <Card.Header>
        <h1>Title</h1>
      </Card.Header>
      <Card.Body style={{ maxHeight: 500 }}>
        {Array.from({ length: 100 }).map((_, index) => (
          <p key={index}>This is some content inside the card body.</p>
        ))}
      </Card.Body>
      <Card.Footer>
        <Button>Click Me</Button>
      </Card.Footer>
    </Card>
  )
}
