import { useMemo } from 'react'

export type ThemeColor = 'primary' | 'gray' | 'event' | 'change' | 'celebration'

export type ColorMapper = (color: ThemeColor) => string

export declare enum LessonModification {
  None = 0,
  Canceled = 1,
  Exam = 2,
  NewTeacher = 3,
  NewRoom = 4,
  NewHour = 5,
  Other = 6,
}

const LESSON_CANCELED = 'ביטול שיעור'
const NEW_TEACHER = 'החלפת מורה'
const NEW_ROOM = 'החלפת חדר'
const NEW_LESSON = 'החלפת שיעור'

const DEFAULT_DATA = {
  modification: 0,
  modData: '',
}

/**
 * Gets information about a modification
 * @param modification the modification to check
 * @returns a tuple of the matching color and modification message
 */
export default function useModification({
  modification,
  modData,
} = DEFAULT_DATA): [ThemeColor, string] {
  return useMemo(() => {
    switch (modification) {
      case 1:
        return ['celebration', LESSON_CANCELED]
      case 2:
        return ['event', modData as string]
      case 3:
        return ['change', NEW_TEACHER]
      case 4:
        return ['change', NEW_ROOM]
      case 5:
        return ['change', NEW_LESSON]
      case 6:
        return ['event', modData as string]
      default:
        return ['gray', undefined]
    }
  }, [modification, modData])
}
