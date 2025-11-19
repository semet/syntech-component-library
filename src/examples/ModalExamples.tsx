/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'

import { Card, Button, Modal } from '@/components'

export default function ModalExamples() {
  const [basicModal, setBasicModal] = useState(false)
  const [centeredModal, setCenteredModal] = useState(false)
  const [largeModal, setLargeModal] = useState(false)
  const [fullScreenModal, setFullScreenModal] = useState(false)
  const [noCloseButtonModal, setNoCloseButtonModal] = useState(false)
  const [blurredModal, setBlurredModal] = useState(false)
  const [formModal, setFormModal] = useState(false)

  // Size variants
  const [xsModal, setXsModal] = useState(false)
  const [smModal, setSmModal] = useState(false)
  const [mdModal, setMdModal] = useState(false)
  const [lgModal, setLgModal] = useState(false)
  const [xlModal, setXlModal] = useState(false)
  const [xxlModal, setXxlModal] = useState(false)
  const [xxxlModal, setXxxxlModal] = useState(false)
  const [xxxxxlModal, setXxxxxlModal] = useState(false)

  // Radius variants
  const [radiusNone, setRadiusNone] = useState(false)
  const [radiusXs, setRadiusXs] = useState(false)
  const [radiusSm, setRadiusSm] = useState(false)
  const [radiusMd, setRadiusMd] = useState(false)
  const [radiusLg, setRadiusLg] = useState(false)
  const [radiusXl, setRadiusXl] = useState(false)

  // Combined styles
  const [styledModal1, setStyledModal1] = useState(false)
  const [styledModal2, setStyledModal2] = useState(false)
  const [styledModal3, setStyledModal3] = useState(false)

  // Scrollable examples
  const [scrollableModal, setScrollableModal] = useState(false)
  const [scrollableLargeModal, setScrollableLargeModal] = useState(false)
  const [scrollableFormModal, setScrollableFormModal] = useState(false)

  return (
    <Card
      withBorder
      shadow="sm"
      radius="sm"
    >
      <Card.Header>
        <h1>Modal Examples</h1>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col gap-6">
          {/* Basic Examples */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Basic Usage
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => setBasicModal(true)}>Basic Modal</Button>
              <Button onClick={() => setCenteredModal(true)}>
                Centered Modal
              </Button>
              <Button onClick={() => setLargeModal(true)}>Large Modal</Button>
              <Button onClick={() => setFullScreenModal(true)}>
                Full Screen
              </Button>
              <Button onClick={() => setNoCloseButtonModal(true)}>
                No Close Button
              </Button>
              <Button onClick={() => setBlurredModal(true)}>
                Blurred Overlay
              </Button>
              <Button onClick={() => setFormModal(true)}>Form Modal</Button>
            </div>
          </section>

          {/* Size Variants */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Size Variants
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                onClick={() => setXsModal(true)}
              >
                XS (max-w-xs)
              </Button>
              <Button
                size="sm"
                onClick={() => setSmModal(true)}
              >
                SM (max-w-sm)
              </Button>
              <Button
                size="sm"
                onClick={() => setMdModal(true)}
              >
                MD (max-w-md)
              </Button>
              <Button
                size="sm"
                onClick={() => setLgModal(true)}
              >
                LG (max-w-lg)
              </Button>
              <Button
                size="sm"
                onClick={() => setXlModal(true)}
              >
                XL (max-w-xl)
              </Button>
              <Button
                size="sm"
                onClick={() => setXxlModal(true)}
              >
                2XL (max-w-2xl)
              </Button>
              <Button
                size="sm"
                onClick={() => setXxlModal(true)}
              >
                3XL (max-w-3xl)
              </Button>
              <Button
                size="sm"
                onClick={() => setXxxxlModal(true)}
              >
                4XL (max-w-4xl)
              </Button>
              <Button
                size="sm"
                onClick={() => setXxxxxlModal(true)}
              >
                5XL (max-w-5xl)
              </Button>
            </div>
          </section>

          {/* Radius Variants */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Border Radius Variants
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setRadiusNone(true)}
              >
                None
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setRadiusXs(true)}
              >
                XS
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setRadiusSm(true)}
              >
                SM
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setRadiusMd(true)}
              >
                MD (Default)
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setRadiusLg(true)}
              >
                LG
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setRadiusXl(true)}
              >
                XL
              </Button>
            </div>
          </section>

          {/* Combined Styles */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Combined Styles
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="light"
                onClick={() => setStyledModal1(true)}
              >
                Compact + Sharp
              </Button>
              <Button
                variant="light"
                onClick={() => setStyledModal2(true)}
              >
                Large + Rounded + Blur
              </Button>
              <Button
                variant="default"
                onClick={() => setStyledModal3(true)}
              >
                Extra Large + Subtle
              </Button>
            </div>
          </section>

          {/* Scrollable Examples */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Scrollable Body with Fixed Footer
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => setScrollableModal(true)}
              >
                Scrollable Content
              </Button>
              <Button
                variant="outline"
                onClick={() => setScrollableLargeModal(true)}
              >
                Large Scrollable List
              </Button>
              <Button
                variant="outline"
                onClick={() => setScrollableFormModal(true)}
              >
                Scrollable Form
              </Button>
            </div>
          </section>
        </div>

        {/* Basic Modals - Using Composite Pattern */}
        <Modal
          opened={basicModal}
          onClose={() => setBasicModal(false)}
        >
          <Modal.Header>
            <Modal.Title>Basic Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a basic modal with default settings. You can close it by
              clicking the X button, pressing Escape, or clicking outside the
              modal.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setBasicModal(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setBasicModal(false)}>Confirm</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={centeredModal}
          onClose={() => setCenteredModal(false)}
          centered
          size="sm"
        >
          <Modal.Header>
            <Modal.Title>Centered Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal is vertically centered on the screen.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setCenteredModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={largeModal}
          onClose={() => setLargeModal(false)}
          size="2xl"
          centered
        >
          <Modal.Header>
            <Modal.Title>Large Modal with Long Content</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4 text-gray-700">
              <p>This is a large modal that can contain more content.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setLargeModal(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setLargeModal(false)}>
                  Save Changes
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={fullScreenModal}
          onClose={() => setFullScreenModal(false)}
          fullScreen
        >
          <Modal.Header>
            <Modal.Title>Full Screen Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4 text-gray-700">
              <p>This modal takes up the entire screen.</p>
              <p>
                It's useful for showing detailed content or forms that need more
                space.
              </p>
              <div className="mt-8 flex justify-end">
                <Button onClick={() => setFullScreenModal(false)}>Close</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={noCloseButtonModal}
          onClose={() => setNoCloseButtonModal(false)}
          centered
          size="sm"
          closeOnClickOutside={false}
          closeOnEscape={false}
        >
          <Modal.Header>
            <Modal.Title>Confirm Action</Modal.Title>
            {/* No close button */}
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setNoCloseButtonModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="outline"
                onClick={() => setNoCloseButtonModal(false)}
              >
                Delete
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={blurredModal}
          onClose={() => setBlurredModal(false)}
          overlayBlur="md"
          centered
        >
          <Modal.Header>
            <Modal.Title>Blurred Background</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal has a blurred overlay effect. Notice how the background
              content is blurred.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setBlurredModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={formModal}
          onClose={() => setFormModal(false)}
          size="lg"
          centered
        >
          <Modal.Header>
            <Modal.Title>Create New User</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setFormModal(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setFormModal(false)}>Create User</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Size Variants */}
        <Modal
          opened={xsModal}
          onClose={() => setXsModal(false)}
          size="xs"
          centered
        >
          <Modal.Header>
            <Modal.Title>Extra Small Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-sm text-gray-700">
              This is an XS modal (max-w-xs / 20rem).
            </p>
            <div className="mt-3 flex justify-end">
              <Button
                size="sm"
                onClick={() => setXsModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={smModal}
          onClose={() => setSmModal(false)}
          size="sm"
          centered
        >
          <Modal.Header>
            <Modal.Title>Small Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a small modal (max-w-sm / 24rem).
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setSmModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={mdModal}
          onClose={() => setMdModal(false)}
          size="md"
          centered
        >
          <Modal.Header>
            <Modal.Title>Medium Modal (Default)</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a medium modal (max-w-md / 28rem). This is the default
              size.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setMdModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={lgModal}
          onClose={() => setLgModal(false)}
          size="lg"
          centered
        >
          <Modal.Header>
            <Modal.Title>Large Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a large modal (max-w-lg / 32rem). Good for forms and
              detailed content.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setLgModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={xlModal}
          onClose={() => setXlModal(false)}
          size="xl"
          centered
        >
          <Modal.Header>
            <Modal.Title>Extra Large Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is an XL modal (max-w-xl / 36rem). Perfect for rich content.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setXlModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={xxlModal}
          onClose={() => setXxlModal(false)}
          size="2xl"
          centered
        >
          <Modal.Header>
            <Modal.Title>2XL Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a 2XL modal (max-w-2xl / 42rem). Great for dashboards and
              tables.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setXxlModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={xxxlModal}
          onClose={() => setXxxxlModal(false)}
          size="3xl"
          centered
        >
          <Modal.Header>
            <Modal.Title>3XL Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a 3XL modal (max-w-3xl / 48rem). Suitable for wide content
              layouts.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setXxxxlModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={xxxlModal}
          onClose={() => setXxxxlModal(false)}
          size="4xl"
          centered
        >
          <Modal.Header>
            <Modal.Title>4XL Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a 4XL modal (max-w-4xl / 56rem). Very spacious for complex
              interfaces.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setXxxxlModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={xxxxxlModal}
          onClose={() => setXxxxxlModal(false)}
          size="5xl"
          centered
        >
          <Modal.Header>
            <Modal.Title>5XL Modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This is a 5XL modal (max-w-5xl / 64rem). Almost full-width on most
              screens.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setXxxxxlModal(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* Radius Variants */}
        <Modal
          opened={radiusNone}
          onClose={() => setRadiusNone(false)}
          radius="none"
          centered
          size="sm"
        >
          <Modal.Header>
            <Modal.Title>No Border Radius</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal has sharp corners (rounded-none).
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setRadiusNone(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={radiusXs}
          onClose={() => setRadiusXs(false)}
          radius="xs"
          centered
          size="sm"
        >
          <Modal.Header>
            <Modal.Title>XS Border Radius</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal has XS rounded corners (rounded / 0.25rem).
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setRadiusXs(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={radiusSm}
          onClose={() => setRadiusSm(false)}
          radius="sm"
          centered
          size="sm"
        >
          <Modal.Header>
            <Modal.Title>SM Border Radius</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal has small rounded corners (rounded-md / 0.375rem).
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setRadiusSm(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={radiusMd}
          onClose={() => setRadiusMd(false)}
          radius="md"
          centered
          size="sm"
        >
          <Modal.Header>
            <Modal.Title>MD Border Radius (Default)</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal has medium rounded corners (rounded-lg / 0.5rem). This
              is the default.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setRadiusMd(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={radiusLg}
          onClose={() => setRadiusLg(false)}
          radius="lg"
          centered
          size="sm"
        >
          <Modal.Header>
            <Modal.Title>LG Border Radius</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal has large rounded corners (rounded-xl / 0.75rem).
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setRadiusLg(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={radiusXl}
          onClose={() => setRadiusXl(false)}
          radius="xl"
          centered
          size="sm"
        >
          <Modal.Header>
            <Modal.Title>XL Border Radius</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              This modal has extra large rounded corners (rounded-2xl / 1rem).
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setRadiusXl(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* Combined Styles */}
        <Modal
          opened={styledModal1}
          onClose={() => setStyledModal1(false)}
          size="xs"
          radius="none"
          centered
        >
          <Modal.Header>
            <Modal.Title>Compact Alert</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <p className="text-sm text-gray-700">
              A small, sharp-cornered modal for quick alerts.
            </p>
            <div className="mt-3 flex justify-end">
              <Button
                size="sm"
                onClick={() => setStyledModal1(false)}
              >
                Got it
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          opened={styledModal2}
          onClose={() => setStyledModal2(false)}
          size="xl"
          radius="xl"
          overlayBlur="lg"
          centered
        >
          <Modal.Header>
            <Modal.Title>Premium Dialog</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-3 text-gray-700">
              <p>
                This modal combines large size, extra rounded corners, and heavy
                blur for a premium feel.
              </p>
              <p className="text-sm text-gray-500">
                Perfect for important confirmations or featured content.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              onClick={() => setStyledModal2(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setStyledModal2(false)}>Continue</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          opened={styledModal3}
          onClose={() => setStyledModal3(false)}
          size="4xl"
          radius="sm"
          overlayBlur="sm"
          centered
        >
          <Modal.Header>
            <Modal.Title>Wide Content View</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-gray-100 p-4">
                <h3 className="font-semibold text-gray-900">Column 1</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Extra large modal with subtle styling.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4">
                <h3 className="font-semibold text-gray-900">Column 2</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Perfect for complex layouts.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4">
                <h3 className="font-semibold text-gray-900">Column 3</h3>
                <p className="mt-2 text-sm text-gray-600">
                  With light blur and small radius.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setStyledModal3(false)}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* Scrollable Modals with Footer */}
        <Modal
          opened={scrollableModal}
          onClose={() => setScrollableModal(false)}
          scrollable
          centered
          size="lg"
        >
          <Modal.Header>
            <Modal.Title>Terms and Conditions</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-gray-900">1. Introduction</h3>
              <p>
                Welcome to our service. By accessing or using our service, you
                agree to be bound by these Terms and Conditions.
              </p>

              <h3 className="font-semibold text-gray-900">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on our website for personal, non-commercial transitory
                viewing only.
              </p>

              <h3 className="font-semibold text-gray-900">3. Disclaimer</h3>
              <p>
                The materials on our website are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>

              <h3 className="font-semibold text-gray-900">4. Limitations</h3>
              <p>
                In no event shall our company or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on our website.
              </p>

              <h3 className="font-semibold text-gray-900">
                5. Accuracy of Materials
              </h3>
              <p>
                The materials appearing on our website could include technical,
                typographical, or photographic errors. We do not warrant that
                any of the materials on its website are accurate, complete or
                current.
              </p>

              <h3 className="font-semibold text-gray-900">6. Links</h3>
              <p>
                We have not reviewed all of the sites linked to our website and
                are not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by us of
                the site.
              </p>

              <h3 className="font-semibold text-gray-900">7. Modifications</h3>
              <p>
                We may revise these terms of service for its website at any time
                without notice. By using this website you are agreeing to be
                bound by the then current version of these terms of service.
              </p>

              <h3 className="font-semibold text-gray-900">8. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws and you irrevocably submit to the
                exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              onClick={() => setScrollableModal(false)}
            >
              Decline
            </Button>
            <Button onClick={() => setScrollableModal(false)}>Accept</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          opened={scrollableLargeModal}
          onClose={() => setScrollableLargeModal(false)}
          scrollable
          centered
          size="xl"
        >
          <Modal.Header>
            <Modal.Title>User Directory (50 Users)</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-2">
              {Array.from({ length: 50 }, (_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                      {String.fromCodePoint(65 + (i % 26))}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">User {i + 1}</p>
                      <p className="text-sm text-gray-500">
                        user{i + 1}@example.com
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    View
                  </Button>
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setScrollableLargeModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          opened={scrollableFormModal}
          onClose={() => setScrollableFormModal(false)}
          scrollable
          centered
          size="lg"
        >
          <Modal.Header>
            <Modal.Title>Complete Registration</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-700"
                >
                  I agree to the Terms and Conditions and Privacy Policy
                </label>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-gray-700"
                >
                  Send me newsletters and promotional content
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              onClick={() => setScrollableFormModal(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setScrollableFormModal(false)}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  )
}
