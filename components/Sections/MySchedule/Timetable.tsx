import Lesson from './Lesson'

export const MIN_HOUR = 1

const FindLastLesson = (timetable) => {
  let lastLesson: number
  for (let lesson in timetable) {
    'subject' in timetable[lesson] && (lastLesson = Number(lesson))
  }
  return lastLesson
}

const ShowLesson = (lesson, index, lastLesson) => {
  return 'subject' in lesson || (index > MIN_HOUR - 1 && index <= lastLesson)
}
export default function Timetable({
  lessons,
  day,
}: {
  lessons: [][]
  day: number
}) {
  const lastLesson = FindLastLesson(lessons[day])
  return (
    <div className="flex flex-col gap-8 w-full">
      {lessons[day].map(
        (lesson, hour) =>
          ShowLesson(lesson, hour, lastLesson) && (
            <Lesson hour={hour} lesson={lesson} key={`${day}${hour}`} />
          )
      )}
    </div>
  )
}
