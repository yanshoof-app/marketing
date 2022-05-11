import { Context, Dispatch, SetStateAction, useContext } from 'react'
import { createContext, useLayoutEffect } from 'react'
import useDarkMode, { Theme } from '../hooks/useDarkMode'
import { Wrapper } from './types'

export function createUseContextHook<T>(ctx: Context<T>) {
  return function useSpecificContext(): T {
    return useContext(ctx)
  }
}

export interface IThemeProvider {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const StorageContext = createContext({} as IThemeProvider)

export const useTheme = createUseContextHook(StorageContext)

export default function ThemeProvider({ children }: Wrapper) {
  const { isDarkMode, setTheme, theme } = useDarkMode()
  useLayoutEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDarkMode])
  return (
    <StorageContext.Provider value={{ theme, setTheme }}>
      {children}
    </StorageContext.Provider>
  )
}
