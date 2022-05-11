import { createSVGResource } from './svgFactory'

export const Done = createSVGResource(
  <path d="M0 0h24v24H0V0z" fill="none" />,
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
)

export const Notification = createSVGResource(
  <path d="M0 0h24v24H0V0z" fill="none" />,
  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
)

export const Warning = createSVGResource(
  <path d="M0 0h24v24H0z" fill="none" />,
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
)

export const Settings = createSVGResource(
  <path d="M0,0h24v24H0V0z" fill="none" />,
  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
)

export const Calendar = createSVGResource(
  <path d="M0 0h24v24H0z" fill="none" />,
  <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
)

export const LightBulb = createSVGResource(
  <path d="M0 0h24v24H0z" fill="none" />,
  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
)

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

export const Delete = createSVGResource(
  <path d="M0 0h24v24H0V0z" fill="none" />,
  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z" />
)

export const Close = createSVGResource(
  <path d="M0 0h24v24H0V0z" fill="none" />,
  <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
)

export const Expand = createSVGResource(
  <path d="M0 0h24v24H0z" fill="none" />,
  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
)

export const Edit = createSVGResource(
  <path d="M0 0h24v24H0z" fill="none" />,
  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
)

export const Copy = createSVGResource(
  <path d="M0 0h24v24H0V0z" fill="none" />,
  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
)

export const Clear = createSVGResource(
  <path d="M0 0h24v24H0V0z" fill="none" />,
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
)

export const List = createSVGResource(
  <path d="M0 0h24v24H0V0z" fill="none" />,
  <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
)

export const Logo = ({ className = '' }: { className?: string }) => (
  <svg
    width="575"
    height="298"
    viewBox="0 0 575 298"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="151" cy="128" r="120" stroke="white" strokeWidth="16" />
    <circle cx="125" cy="128" r="26" fill="white" />
    <circle cx="424" cy="128" r="120" stroke="white" strokeWidth="16" />
    <circle cx="398" cy="128" r="26" fill="white" />
    <line
      x1="271"
      y1="119.5"
      x2="308"
      y2="119.5"
      stroke="white"
      strokeWidth="17"
    />
    <line x1="545" y1="120" x2="575" y2="120" stroke="white" strokeWidth="16" />
    <line y1="120" x2="30" y2="120" stroke="white" strokeWidth="16" />
    <path
      d="M251.398 234.32L276.405 209.314C282.653 203.065 292.756 203.093 298.969 209.376L323.836 234.522L287.516 270.842L251.398 234.32Z"
      fill="white"
    />
    <path d="M287.417 298L323.286 234.622H251.549L287.417 298Z" fill="white" />
  </svg>
)

export const Clock = createSVGResource(
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
)

export const Room = createSVGResource(
  <path d="M0 0h24v24H0z" fill="none" />,
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
)

export const Filter = createSVGResource(
  <path d="M0,0h24 M24,24H0" fill="none" />,
  <path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />,
  <path d="M0,0h24v24H0V0z" fill="none" />
)

export const GitHub = createSVGResource(
  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
)

export const Shahaf404 = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 198 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.3487 32.832V18.072C27.3487 18.024 27.3247 18 27.2767 18C27.1807 18 27.1327 18.024 27.1327 18.072L16.6207 33.264L16.5487 33.336V33.408C16.5487 33.456 16.5727 33.48 16.6207 33.48H26.7007C27.1327 33.48 27.3487 33.264 27.3487 32.832ZM44.1247 33.48C45.2287 33.48 46.1887 33.888 47.0047 34.704C47.8207 35.52 48.2287 36.48 48.2287 37.584V40.536C48.2287 41.64 47.8207 42.6 47.0047 43.416C46.1887 44.232 45.2287 44.64 44.1247 44.64H41.6047C41.2207 44.64 41.0287 44.856 41.0287 45.288V49.896C41.0287 51 40.6207 51.96 39.8047 52.776C38.9887 53.592 38.0287 54 36.9247 54H31.4527C30.3487 54 29.3887 53.592 28.5727 52.776C27.7567 51.96 27.3487 51 27.3487 49.896V45.288C27.3487 44.856 27.1327 44.64 26.7007 44.64H8.41275C7.30875 44.64 6.34875 44.232 5.53275 43.416C4.71675 42.6 4.30875 41.64 4.30875 40.536V37.584C4.30875 34.896 5.10075 32.424 6.68475 30.168L24.9727 4.752C26.5567 2.544 28.7167 1.44 31.4527 1.44H36.9247C38.0287 1.44 38.9887 1.848 39.8047 2.664C40.6207 3.48 41.0287 4.44 41.0287 5.544V32.832C41.0287 33.264 41.2207 33.48 41.6047 33.48H44.1247ZM170.64 32.832V18.072C170.64 18.024 170.616 18 170.568 18C170.472 18 170.424 18.024 170.424 18.072L159.912 33.264L159.84 33.336V33.408C159.84 33.456 159.864 33.48 159.912 33.48H169.992C170.424 33.48 170.64 33.264 170.64 32.832ZM187.416 33.48C188.52 33.48 189.48 33.888 190.296 34.704C191.112 35.52 191.52 36.48 191.52 37.584V40.536C191.52 41.64 191.112 42.6 190.296 43.416C189.48 44.232 188.52 44.64 187.416 44.64H184.896C184.512 44.64 184.32 44.856 184.32 45.288V49.896C184.32 51 183.912 51.96 183.096 52.776C182.28 53.592 181.32 54 180.216 54H174.744C173.64 54 172.68 53.592 171.864 52.776C171.048 51.96 170.64 51 170.64 49.896V45.288C170.64 44.856 170.424 44.64 169.992 44.64H151.704C150.6 44.64 149.64 44.232 148.824 43.416C148.008 42.6 147.6 41.64 147.6 40.536V37.584C147.6 34.896 148.392 32.424 149.976 30.168L168.264 4.752C169.848 2.544 172.008 1.44 174.744 1.44H180.216C181.32 1.44 182.28 1.848 183.096 2.664C183.912 3.48 184.32 4.44 184.32 5.544V32.832C184.32 33.264 184.512 33.48 184.896 33.48H187.416Z"
        fill="white"
      />
      <g clipPath="url(#clip0_158_485)">
        <path
          d="M143.716 54C144.239 51.274 144.5 48.4442 144.5 45.5625C144.5 20.4058 123.955 0 98.6258 0C73.297 0 52.7517 20.4058 52.7517 45.5625C52.7517 48.4442 53.0131 51.274 53.5359 54"
          fill="url(#paint0_radial_158_485)"
        />
        <path
          d="M67.7817 18.5885C67.7817 18.5885 86.994 13.7596 94.3129 19.2115C94.3129 19.2115 100.848 13.2404 117.577 12.9808C117.577 12.9808 100.325 10.6442 94.3129 15.0577C94.3129 15.0577 72.3561 11.501 67.7817 18.5885Z"
          fill="#16455C"
        />
        <path
          d="M35.5 41.2789C35.5 41.2789 57.1954 32.4519 69.4808 40.7596C69.4808 40.7596 85.9484 25.4423 100.064 26.7404C100.064 26.7404 79.0648 20.5097 67.5 33.5001C67.5 33.5001 47.524 29.3365 35.5 41.2789Z"
          fill="#16455C"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_158_485"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(98.4951 35.0481) rotate(90) scale(39.3317 39.6007)"
        >
          <stop stopColor="#FFD200" />
          <stop offset="1" stopColor="#FF892D" />
        </radialGradient>
        <clipPath id="clip0_158_485">
          <rect
            width="109"
            height="54"
            fill="white"
            transform="translate(35.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
