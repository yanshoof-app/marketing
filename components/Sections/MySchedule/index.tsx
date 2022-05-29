import { ILesson } from '@yanshoof/types'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { timetable_example } from '../../../samples'
import { buildTitleGetStaticProps } from '../../DocumentHead'
import { Calendar } from '../../icons'
import { useRefs } from '../../RefsProvider'
import DayPick from './DayPick'
import Timetable from './Timetable'

const MY_SCHEDULE = 'המערכת שלי'
const DESCRIPTION =
  'באמצעות מערכת שלי ניתן להגדיר את המערכת שלכם, כך שיוצגו לכם רק השיעורים שלכם וכן גם השינויים שלכם'

export default function MySchedule() {
  const { mySchedule } = useRefs()
  const [date, changeDate] = useState(0)

  return (
    <div
      ref={mySchedule}
      className="flex flex-col overflow-x-hidden sm:gap-16 gap-11 -mt-1 items-center justify-center w-full bg-white dark:bg-gray-900"
    >
      <div className="w-full max-w-5xl flex flex-col gap-1 sm:px-0 px-6 pt-16 items-start ">
        <div className="flex flex-col gap-7 text-primary-500">
          <Calendar width={60} height={60} />
          <div className="flex flex-col items-leftgap-4 dark:text-white text-black">
            <h1 className="sm:text-6xl text-4xl font-extrabold">
              {MY_SCHEDULE}
            </h1>
            <h2 className="sm:text-2xl text-lg font-semibold dark:text-gray-300">
              {DESCRIPTION}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex origin-top relative justify-center w-full sm:h-fit h-[22rem] overflow-hidden bg-gray-100 dark:bg-slate-850">
        <div className="flex justify-start sm:w-[64rem]">
          <div className="flex flex-col gap-4 w-full h-[40rem] origin-top sm:scale-100 scale-[60%] overflow-hidden p-2">
            <DayPick day={date} onChange={changeDate} />
            <Timetable lessons={timetable_example as ILesson[][]} day={date} />
          </div>
        </div>
      </div>
    </div>
  )
}
