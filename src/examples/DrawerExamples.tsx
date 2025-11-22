/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

import { Button } from '@/components'
import Drawer from '@/components/Drawer/Drawer'

export default function DrawerExamples() {
  const [leftDrawer, setLeftDrawer] = useState(false)
  const [rightDrawer, setRightDrawer] = useState(false)
  const [topDrawer, setTopDrawer] = useState(false)
  const [bottomDrawer, setBottomDrawer] = useState(false)
  const [blurredDrawer, setBlurredDrawer] = useState(false)
  const [scrollableDrawer, setScrollableDrawer] = useState(false)
  const [customSizeDrawer, setCustomSizeDrawer] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Drawer Component Examples
        </h1>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Position Examples */}
          <Button
            onClick={() => setLeftDrawer(true)}
            color="primary"
          >
            Left Drawer
          </Button>
          <Button
            onClick={() => setRightDrawer(true)}
            color="success"
          >
            Right Drawer
          </Button>
          <Button
            onClick={() => setTopDrawer(true)}
            color="secondary"
          >
            Top Drawer
          </Button>
          <Button
            onClick={() => setBottomDrawer(true)}
            color="warning"
          >
            Bottom Drawer
          </Button>

          {/* Feature Examples */}
          <Button
            onClick={() => setBlurredDrawer(true)}
            color="danger"
          >
            Blurred Overlay
          </Button>
          <Button
            onClick={() => setScrollableDrawer(true)}
            color="info"
          >
            Scrollable
          </Button>
          <Button
            onClick={() => setCustomSizeDrawer(true)}
            color="dark"
          >
            Custom Size
          </Button>
        </div>

        {/* Left Drawer */}
        <Drawer
          opened={leftDrawer}
          onClose={() => setLeftDrawer(false)}
          position="left"
        >
          <Drawer.Header>
            <Drawer.Title>Left Drawer</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-gray-700">
              This is a drawer that slides in from the left side of the screen.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">
                Default size is "md" (24rem / 384px)
              </p>
              <p className="text-sm text-gray-600">
                It includes smooth slide-in animations
              </p>
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <button
              onClick={() => setLeftDrawer(false)}
              className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            >
              Close
            </button>
          </Drawer.Footer>
        </Drawer>

        {/* Right Drawer */}
        <Drawer
          opened={rightDrawer}
          onClose={() => setRightDrawer(false)}
          position="right"
          size="lg"
        >
          <Drawer.Header>
            <Drawer.Title>Right Drawer (Large)</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-gray-700">
              This drawer slides in from the right and uses the "lg" size
              (28rem).
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">Available Sizes:</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• xs: 16rem (256px)</li>
                <li>• sm: 20rem (320px)</li>
                <li>• md: 24rem (384px) - default</li>
                <li>• lg: 28rem (448px)</li>
                <li>• xl: 32rem (512px)</li>
                <li>• 2xl, 3xl, 4xl, 5xl, full</li>
              </ul>
            </div>
          </Drawer.Body>
        </Drawer>

        {/* Top Drawer */}
        <Drawer
          opened={topDrawer}
          onClose={() => setTopDrawer(false)}
          position="top"
          size="md"
        >
          <Drawer.Header>
            <Drawer.Title>Top Drawer</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-gray-700">
              Drawers can slide from the top of the screen. For top/bottom
              drawers, the size controls height instead of width.
            </p>
          </Drawer.Body>
        </Drawer>

        {/* Bottom Drawer */}
        <Drawer
          opened={bottomDrawer}
          onClose={() => setBottomDrawer(false)}
          position="bottom"
          size="lg"
        >
          <Drawer.Header>
            <Drawer.Title>Bottom Drawer</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-gray-700">
              Bottom drawers are great for mobile-friendly actions and forms.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="rounded-md bg-blue-100 px-3 py-2 text-sm text-blue-700">
                Action 1
              </button>
              <button className="rounded-md bg-blue-100 px-3 py-2 text-sm text-blue-700">
                Action 2
              </button>
            </div>
          </Drawer.Body>
        </Drawer>

        {/* Blurred Overlay */}
        <Drawer
          opened={blurredDrawer}
          onClose={() => setBlurredDrawer(false)}
          overlayBlur="md"
          position="right"
        >
          <Drawer.Header>
            <Drawer.Title>Blurred Background</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-gray-700">
              This Drawer has a blurred overlay effect. Notice how the
              background content is blurred.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">Blur Options:</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• none (default)</li>
                <li>• xs: 2px blur</li>
                <li>• sm: small blur</li>
                <li>• md: medium blur</li>
                <li>• lg: large blur</li>
              </ul>
            </div>
          </Drawer.Body>
        </Drawer>

        {/* Scrollable Drawer */}
        <Drawer
          opened={scrollableDrawer}
          onClose={() => setScrollableDrawer(false)}
          scrollable
          position="right"
          size="md"
        >
          <Drawer.Header>
            <Drawer.Title>Scrollable Content</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-gray-100 p-4"
                >
                  <h3 className="font-semibold text-gray-900">Item {i + 1}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    When scrollable is true, the header stays fixed at the top
                    and the body content scrolls independently.
                  </p>
                </div>
              ))}
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <button
              onClick={() => setScrollableDrawer(false)}
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Done
            </button>
          </Drawer.Footer>
        </Drawer>

        {/* Custom Size Drawer */}
        <Drawer
          opened={customSizeDrawer}
          onClose={() => setCustomSizeDrawer(false)}
          customSize="50%"
          position="left"
        >
          <Drawer.Header>
            <Drawer.Title>Custom Size (50%)</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <p className="text-gray-700">
              You can use customSize prop to set arbitrary dimensions like
              percentages or pixel values.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Examples: "50%", "400px", "30vw"
              </p>
              <p className="mt-2 text-sm text-gray-600">
                For left/right drawers, it sets the width.
                <br />
                For top/bottom drawers, it sets the height.
              </p>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  )
}
