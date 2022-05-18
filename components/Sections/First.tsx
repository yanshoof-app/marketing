import Button from '../forms/Buttons'
import mySchedule from '../../public/mySchedule.png'
import Image from 'next/image'

const YOUR_SCHEDULE = 'מערכת השעות שלכם.'
const WITH_YOUR_LESSONS = 'עם השיעורים שלכם.'

const DESCRIPTION =
  'מערכת השעות הראשונה והיחידה שמאפשרת לכם לבנות את המערכת שלכם, \nומציגה לכם רק את השיעורים והשינויים שלכם.'
const ENTER_SITE = 'כניסה לאתר'

export default function FirstHome() {
  return (
    <div className="flex w-full sm:h-[50rem] h-[30rem] sm:items-start items-center sm:justify-center cursor-default justify-center gap-9 sm:mt-14 sm:py-0 py-14">
      <div className="flex flex-col items-center sm:items-start gap-4 w-fit sm:mt-24">
        <div className="flex flex-col gap-2 sm:px-0 px-6 sm:items-start items-center sm:text-right text-center">
          <div className="w-fit sm:text-6xl text-4xl font-bold text-white">
            <p>{YOUR_SCHEDULE}</p>
            <p>{WITH_YOUR_LESSONS}</p>
          </div>
          <div className="sm:text-base sm:max-w-[460px] text-lg text-slate-300 font-semibold">
            <p>{DESCRIPTION}</p>
          </div>
        </div>
        <Button>{ENTER_SITE}</Button>
      </div>
      <div className="sm:max-w-[250px] sm:block hidden">
        <Image src={mySchedule} alt={'המערכת שלי'} />
      </div>
    </div>
  )
}
