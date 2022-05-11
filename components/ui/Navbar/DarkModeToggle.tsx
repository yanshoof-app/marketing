import { useMemo } from 'react'
import { DarkMode, LightMode } from '../../icons'
import ThemeProvider, { useTheme } from '../../ThemeProvider'

export const variants = {
  white: 'text-white/50 hover:text-white',
  black:
    'text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white',
}

export type Variant = keyof typeof variants

export default function DarkModeToggle({
  variant = 'black',
}: {
  variant?: Variant
}) {
  const { theme, setTheme } = useTheme()
  const iconParams = {
    width: 28,
    height: 28,
    className: variants[variant],
  }
  const Icon =
    theme === 'dark' ? (
      <DarkMode {...iconParams} />
    ) : (
      <LightMode {...iconParams} />
    )
  console.log(Icon)
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {Icon}
    </button>
  )
}
