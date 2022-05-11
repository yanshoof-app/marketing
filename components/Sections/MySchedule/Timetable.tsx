import Lesson from './Lesson'

export default function Timetable({
  lessons,
  day,
}: {
  lessons: [][]
  day: number
}) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {lessons[day].map((lesson, hour) => (
        <Lesson hour={hour} lesson={lesson} key={`${day}${hour}`} />
      ))}
    </div>
  )
}
