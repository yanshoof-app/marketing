import { useCallback, useEffect, useRef, useState } from 'react'
import { IVersion } from '../pages/api/version/last'
import { useHTTP } from './useHTTP'

const LAST_VERSION_URL = '/api/version/last'

export default function useUpdates() {
  const hasFetched = useRef(false)
  const { data, doFetch: fetchUpdate } = useHTTP<IVersion, any>({
    path: LAST_VERSION_URL,
    fetchOnMount: false,
    initialValue: {},
  })

  const doFetch = useCallback(() => {
    if (hasFetched.current) return
    fetchUpdate()
    hasFetched.current = true
  }, [fetchUpdate])

  useEffect(() => doFetch(), [doFetch])

  return data
}
