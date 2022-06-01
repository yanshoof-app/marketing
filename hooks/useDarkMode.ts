import { useMemo, useState } from 'react'

/*const systemPreferences = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}
*/
export type Theme = 'light' | 'dark'

export default function useDarkMode() {
  const [theme, setTheme] = useState('light')
  return useMemo(() => {
    const isDarkMode = theme === 'dark'
    return { isDarkMode, setTheme, theme }
  }, [theme])
}
