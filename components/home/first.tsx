import Button from '../forms/Buttons'
import mySchedule from '../../public/mySchedule.png'
import Image from 'next/image'

const YOUR_SCHEDULE = 'מערכת השעות שלכם.'
const WITH_YOUR_LESSONS = 'עם השיעורים שלכם.'

const DESCRIPTION =
  'מערכת השעות הראשונה והיחידה שמאפשרת לכם לבנות את המערכת שלכם, ומציגה לכם רק את השיעורים והשינויים שלכם.'
const ENTER_SITE = 'כניסה לאתר'

export default function FirstHome() {
  return (
    <div className="flex max-w-4xl cursor-default">
      <div className="flex flex-col gap-4 w-fit mt-24">
        <div className="flex flex-col gap-2">
          <div className="w-fit text-6xl font-bold">
            <p>{YOUR_SCHEDULE}</p>
            <p>{WITH_YOUR_LESSONS}</p>
          </div>
          <p className="text-lg max-w-[64%] text-gray-400 font-semibold">
            {DESCRIPTION}
          </p>
        </div>
        <Button>{ENTER_SITE}</Button>
      </div>
      <div className="max-w-[290px]">
        <Image src={mySchedule} alt={'המערכת שלי'} />
      </div>
    </div>
  )
}
