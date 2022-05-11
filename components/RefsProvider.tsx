import {
  Context,
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useContext,
  useRef,
} from 'react'
import { createContext, useLayoutEffect } from 'react'
import useDarkMode, { Theme } from '../hooks/useDarkMode'
import { Wrapper } from './types'

export function createUseContextHook<T>(ctx: Context<T>) {
  return function useSpecificContext(): T {
    return useContext(ctx)
  }
}

export interface IRefsProvider {
  mySchedule: MutableRefObject<undefined>
}

export const StorageContext = createContext({} as IRefsProvider)

export const useRefs = createUseContextHook(StorageContext)

export default function RefsProvider({ children }: Wrapper) {
  const mySchedule = useRef()

  return (
    <StorageContext.Provider value={{ mySchedule }}>
      {children}
    </StorageContext.Provider>
  )
}
