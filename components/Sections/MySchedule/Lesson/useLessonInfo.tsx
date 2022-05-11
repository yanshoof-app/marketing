import { useMemo } from 'react'

export type LessonInfoHook = {
  newHour?: string | boolean
  newTeacher?: string | boolean
  newRoom?: string | boolean
}

export default function useLessonInfo(modifications) {
  return useMemo(() => {
    let info: LessonInfoHook = {}
    for (let { modification, modData } of modifications) {
      switch (modification) {
        case 1:
          info = { newRoom: true, newTeacher: true, newHour: true }
          break
        case 3:
          info['newTeacher'] = modData.toString()
          break
        case 4:
          info['newRoom'] = modData.toString()
          break
        case 5:
          info['newHour'] = modData.toString()
          break
        case 2:
          info['newHour'] = true
          break
        case 6:
          info['newHour'] = true
          break
      }
    }
    return info
  }, [modifications])
}
