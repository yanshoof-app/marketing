import Button from '../forms/Buttons'
import mySchedule from '../../public/mySchedule.png'
import Image from 'next/image'

const YOUR_SCHEDULE = 'מערכת השעות שלכם.'
const WITH_YOUR_LESSONS = 'עם השיעורים שלכם.'

const DESCRIPTION = [
  'מערכת השעות הראשונה והיחידה שמאפשרת לכם לבנות את המערכת שלכם,',
  'ומציגה לכם רק את השיעורים והשינויים שלכם.',
]
const ENTER_SITE = 'כניסה לאתר'

export default function FirstHome() {
  return (
    <div className="flex  w-full h-[50rem] cursor-default gap-9 justify-center mt-14">
      <div className="flex flex-col gap-4 w-fit mt-24">
        <div className="flex flex-col gap-2">
          <div className="w-fit text-6xl font-bold text-white">
            <p>{YOUR_SCHEDULE}</p>
            <p>{WITH_YOUR_LESSONS}</p>
          </div>
          <div className="text-base text-slate-300 font-semibold">
            <p>{DESCRIPTION[0]}</p>
            <p>{DESCRIPTION[1]}</p>
          </div>
        </div>
        <Button>{ENTER_SITE}</Button>
      </div>
      <div className="max-w-[250px]">
        <Image src={mySchedule} alt={'המערכת שלי'} />
      </div>
    </div>
  )
}
