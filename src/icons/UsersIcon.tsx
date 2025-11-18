import type { ComponentProps } from 'react'

export default function UsersIcon({
  width = 18,
  height = 14,
  ...props
}: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="currentColor"
      {...props}
    >
      <path
        d="M13.4863 5.99616C14.5873 5.84146 15.435 4.89753 15.4373 3.75392C15.4373 2.62688 14.6157 1.69242 13.5384 1.51562"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9395 8.64453C16.0057 8.80396 16.75 9.17727 16.75 9.94678C16.75 10.4764 16.3996 10.8205 15.8329 11.0367"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.74997 8.96875C6.21335 8.96875 4.04688 9.35311 4.04688 10.8882C4.04688 12.4225 6.19993 12.8179 8.74997 12.8179C11.2866 12.8179 13.4523 12.4375 13.4523 10.9016C13.4523 9.36574 11.3 8.96875 8.74997 8.96875Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75047 6.77824C10.415 6.77824 11.7646 5.42942 11.7646 3.76412C11.7646 2.0996 10.415 0.75 8.75047 0.75C7.08596 0.75 5.73635 2.0996 5.73635 3.76412C5.73004 5.42311 7.06938 6.77271 8.72837 6.77824H8.75047Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.01351 5.99616C2.91172 5.84146 2.06487 4.89753 2.0625 3.75392C2.0625 2.62688 2.8841 1.69242 3.96142 1.51562"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.56052 8.64453C1.49426 8.80396 0.75 9.17727 0.75 9.94678C0.75 10.4764 1.10042 10.8205 1.6671 11.0367"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
