/* eslint-disable no-console */
import { useState } from 'react'

import { Card } from '@/components'
import Menu from '@/components/Menu/Menu'

export default function MenuExamples() {
  const [opened, setOpened] = useState(false)
  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
    >
      <Card.Header>
        <h3>Menu Example</h3>
      </Card.Header>
      <Card.Body className="min-h-64">
        <Menu
          position="bottom-start"
          withArrow
          width="target"
          opened={opened}
          onChange={setOpened}
        >
          <Menu.Button className="flex">Hover</Menu.Button>
          <Menu.Dropdown>
            <Menu.Label>User Options</Menu.Label>
            <Menu.Item onClick={() => console.log('Profile')}>
              Profile
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              as="a"
              href="/settings"
            >
              Settings
            </Menu.Item>
            <Menu.Item disabled>Disabled Item</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Card.Body>
    </Card>
  )
}
