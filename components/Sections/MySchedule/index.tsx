import { useState } from 'react'
import { timetable_example } from '../../../samples'
import { useRefs } from '../../RefsProvider'
import DayPick from './DayPick'
import Lesson from './Lesson'
import Timetable from './Timetable'

export default function MySchedule() {
  const { mySchedule } = useRefs()
  const [date, changeDate] = useState(0)

  return (
    <div
      ref={mySchedule}
      className="flex flex-col justify-center w-full bg-gray-200"
    >
      <div className="flex flex-col gap-4 w-1/2">
        <DayPick day={date} onChange={changeDate} />
        <Timetable lessons={timetable_example} day={date} />
      </div>
    </div>
  )
}
