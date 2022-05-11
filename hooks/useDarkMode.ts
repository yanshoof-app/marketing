import { useMemo, useState } from 'react'

export type Theme = 'light' | 'dark'

export default function useDarkMode() {
  const [theme, setTheme] = useState('light' as Theme)
  return useMemo(() => {
    const isDarkMode = theme === 'dark'
    return { isDarkMode, setTheme, theme }
  }, [theme])
}
