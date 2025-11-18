import type { ComponentProps } from 'react'

export default function ArrowUpIcon({
  width = 16,
  height = 9,
  ...props
}: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 9"
      fill="currentColor"
      {...props}
    >
      <path
        d="M1.21395e-07 8.07427C9.35215e-08 8.28683 0.0771485 8.49938 0.242466 8.66718C0.56208 8.99161 1.0911 8.99161 1.41071 8.66719L7.95729 2.02207L14.592 8.75668C14.9117 9.08111 15.4407 9.08111 15.7603 8.75668C16.0799 8.43226 16.0799 7.89528 15.7603 7.57085L8.54142 0.24332C8.2218 -0.0811049 7.69279 -0.0811049 7.37317 0.24332L0.242466 7.48136C0.0771486 7.63797 1.50735e-07 7.85053 1.21395e-07 8.07427Z"
        fill="currentColor"
      />
    </svg>
  )
}
