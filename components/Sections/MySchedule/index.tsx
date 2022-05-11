import { useState } from 'react'
import { timetable_example } from '../../../samples'
import { Calendar } from '../../icons'
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
      className="flex flex-col gap-16 items-center justify-center w-full bg-white dark:bg-gray-900"
    >
      <div className="w-full max-w-5xl flex flex-col gap-10 pt-16 items-start ">
        <div className="flex flex-col gap-7 text-primary-500">
          <Calendar width={60} height={60} />
          <div className="flex flex-col items-left gap-4 dark:text-white text-black">
            <h1 className=" text-6xl font-extrabold">המערכת שלי</h1>
            <h2 className=" text-2xl font-semibold dark:text-gray-300">
              תיאור
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-gray-100 dark:bg-slate-850">
        <div className="flex justify-start w-[64rem] -mt-8">
          <div className="flex flex-col gap-4 w-full h-[40rem] overflow-hidden p-2">
            <DayPick day={date} onChange={changeDate} />
            <Timetable lessons={timetable_example} day={date} />
          </div>
        </div>
      </div>
    </div>
  )
}
