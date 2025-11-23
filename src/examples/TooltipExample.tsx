import Tooltip from '@/components/Tooltip/Tooltip'

export default function TooltipExample() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Tooltip Component
          </h1>
          <p className="text-gray-600">
            Hover, focus, or touch elements to see tooltips
          </p>
        </div>

        {/* Basic Positions */}
        <div className="rounded-lg bg-white p-8 shadow">
          <h2 className="mb-6 text-xl font-semibold">Basic Positions</h2>
          <div className="flex min-h-[300px] items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-16">
              <Tooltip
                content="Top tooltip"
                position="top"
              >
                <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Top
                </button>
              </Tooltip>

              <div className="flex gap-8">
                <Tooltip
                  content="Left tooltip"
                  position="left"
                >
                  <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Left
                  </button>
                </Tooltip>

                <Tooltip
                  content="Right tooltip"
                  position="right"
                >
                  <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Right
                  </button>
                </Tooltip>
              </div>

              <Tooltip
                content="Bottom tooltip"
                position="bottom"
              >
                <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Bottom
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Alignment Variations */}
        <div className="rounded-lg bg-white p-8 shadow">
          <h2 className="mb-6 text-xl font-semibold">Alignment Variations</h2>
          <div className="space-y-8">
            <div className="flex justify-center gap-4">
              <Tooltip
                content="Top Start"
                position="top-start"
              >
                <button className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                  Top Start
                </button>
              </Tooltip>
              <Tooltip
                content="Top Center"
                position="top"
              >
                <button className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                  Top Center
                </button>
              </Tooltip>
              <Tooltip
                content="Top End"
                position="top-end"
              >
                <button className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                  Top End
                </button>
              </Tooltip>
            </div>

            <div className="flex justify-center gap-4">
              <Tooltip
                content="Bottom Start"
                position="bottom-start"
              >
                <button className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                  Bottom Start
                </button>
              </Tooltip>
              <Tooltip
                content="Bottom Center"
                position="bottom"
              >
                <button className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                  Bottom Center
                </button>
              </Tooltip>
              <Tooltip
                content="Bottom End"
                position="bottom-end"
              >
                <button className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                  Bottom End
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Colors & Styles */}
        <div className="rounded-lg bg-white p-8 shadow">
          <h2 className="mb-6 text-xl font-semibold">Colors & Styles</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Tooltip
              content="Dark tooltip (default)"
              color="dark"
            >
              <button className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
                Dark
              </button>
            </Tooltip>

            <Tooltip
              content="Light tooltip"
              color="light"
            >
              <button className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
                Light
              </button>
            </Tooltip>

            <Tooltip
              content="This is a multiline tooltip that wraps to multiple lines with more content"
              multiline
            >
              <button className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                Multiline
              </button>
            </Tooltip>

            <Tooltip
              content="No arrow tooltip"
              withArrow={false}
            >
              <button className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">
                No Arrow
              </button>
            </Tooltip>

            <Tooltip
              content="Custom width tooltip"
              width={200}
            >
              <button className="rounded bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">
                Custom Width
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Focus & Touch Events */}
        <div className="rounded-lg bg-white p-8 shadow">
          <h2 className="mb-6 text-xl font-semibold">Event Triggers</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Tooltip
              content="Hover only"
              events={{ hover: true, focus: false, touch: false }}
            >
              <button className="rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                Hover Only
              </button>
            </Tooltip>

            <Tooltip
              content="Focus only (try tabbing)"
              events={{ hover: false, focus: true, touch: false }}
            >
              <button className="rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700">
                Focus Only
              </button>
            </Tooltip>

            <Tooltip
              content="All events enabled"
              events={{ hover: true, focus: true, touch: true }}
            >
              <button className="rounded bg-rose-600 px-4 py-2 text-white hover:bg-rose-700">
                All Events
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Disabled State */}
        <div className="rounded-lg bg-white p-8 shadow">
          <h2 className="mb-6 text-xl font-semibold">Disabled Tooltip</h2>
          <div className="flex justify-center gap-4">
            <Tooltip
              content="This tooltip is disabled"
              disabled
            >
              <button className="rounded bg-gray-400 px-4 py-2 text-white">
                Disabled Tooltip
              </button>
            </Tooltip>

            <Tooltip content="This tooltip works normally">
              <button className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                Enabled Tooltip
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Rich Content */}
        <div className="rounded-lg bg-white p-8 shadow">
          <h2 className="mb-6 text-xl font-semibold">Rich Content</h2>
          <div className="flex justify-center">
            <Tooltip
              content={
                <div className="space-y-2">
                  <div className="font-semibold">Rich Tooltip Content</div>
                  <div className="text-sm">You can include:</div>
                  <ul className="list-inside list-disc text-sm">
                    <li>Multiple lines</li>
                    <li>Formatted text</li>
                    <li>Custom JSX</li>
                  </ul>
                </div>
              }
              multiline
              width={250}
            >
              <button className="rounded bg-violet-600 px-4 py-2 text-white hover:bg-violet-700">
                Rich Content
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
