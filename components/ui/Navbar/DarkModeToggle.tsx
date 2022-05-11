import { DarkMode, LightMode } from '../../icons'
import ThemeProvider, { useTheme } from '../../ThemeProvider'

const iconParams = {
  width: 28,
  height: 28,
  className: 'text-white/50 hover:text-white',
}

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
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
