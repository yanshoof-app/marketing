import { createSVGResource } from './svgFactory'

export const ForwardRTL = createSVGResource(
  <path d="M0 0h24v24H0z" fill="none" />,
  <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
)

export const BackRTL = createSVGResource(
  <g>
    <path d="M0,0h24v24H0V0z" fill="none" />
  </g>,
  <g>
    <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
  </g>
)
