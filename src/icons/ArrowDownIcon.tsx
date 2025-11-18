import type { ComponentProps } from 'react'

export default function ArrowDownIcon({
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
      fill="none"
      {...props}
    >
      <path
        d="M16 0.92573C16 0.713175 15.9229 0.500622 15.7575 0.332816C15.4379 0.00839091 14.9089 0.00839088 14.5893 0.332816L8.04271 6.97794L1.40796 0.243319C1.08834 -0.0811062 0.559325 -0.0811063 0.239711 0.243319C-0.0799036 0.567744 -0.0799036 1.10472 0.239711 1.42915L7.45858 8.75668C7.7782 9.08111 8.30722 9.08111 8.62683 8.75668L15.7575 1.51865C15.9229 1.36203 16 1.14947 16 0.92573Z"
        fill="white"
      />
    </svg>
  )
}
