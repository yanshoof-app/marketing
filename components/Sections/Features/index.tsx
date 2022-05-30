import {
  Calendar,
  Clock,
  DarkMode,
  Edit,
  Filter,
  LightBulb,
  List,
  Room,
} from '../../icons'
import Feature, { IFeature } from './Feature'

const features: IFeature[] = [
  {
    name: 'מערכת שלי',
    description:
      'מאפשרת לכם להרכיב את המערכת שלכם, בה מופיעים רק השיעורים והשינויים שלכם',
    icon: Calendar,
  },
  {
    name: 'שינויים',
    description: 'מציג לכם את כל השינויים והאירועים במערכת השבוע',
    icon: List,
  },
  {
    name: 'מערכת מורה',
    description:
      'מציגה לכם את המערכת של כל אחד מן המורים שמלמד אתכם, כולל שינויים',
    icon: LightBulb,
    label: 'לא יציב',
  },
  {
    name: 'מערכת הבאה',
    description: 'מאפשרת לכם לבחור מאיזו שעה תוצג המערכת של מחר',
    icon: Clock,
  },
  {
    name: 'שינויים של אחרים',
    description:
      'מאפשר לכם להציג מידע על שינויים של קבוצות לימודים שלא נמצאות לכם במערכת',
    icon: Filter,
  },
  {
    name: 'עריכה מתקדמת',
    description: 'מאפשרת לכם לערוך את כל המערכת שלכם, כולל מחיקת שיעורים',
    icon: Edit,
  },
  {
    name: 'חדרים פנויים',
    description: 'כלי המציג לכם את רשימת החדרים הפנויים בבית הספר',
    icon: Room,
    label: 'בעבודה',
  },
  {
    name: 'מצב כהה',
    description: 'מתאים לשימוש בחושך',
    icon: DarkMode,
  },
]

const TITLE_TEXT = "עם פיצ'רים מיוחדים"

export default function Features() {
  return (
    <div className="flex flex-col transition-colors items-center w-full dark:bg-slate-850 bg-white sm:gap-20 gap-16 sm:py-40 py-16">
      <div className="flex flex-col sm:text-right text-center items-center sm:gap-4 gap-3">
        <h1 className="sm:text-6xl text-4xl font-extrabold text-slate-850 dark:text-white">
          {TITLE_TEXT}
        </h1>
        <h2 className="sm:text-xl text-md sm:px-0 px-8 font-semibold text-slate-850 dark:text-white">
          <a className="font-roboto text-primary-500">timetable</a> כולל מספר
          פיצ׳רים המאפשרים נוחות, התאמה אישית ויכולות חדשות
        </h2>
      </div>
      <div className="flex sm:gap-6 gap-2 max-w-6xl flex-wrap justify-center">
        {features.map((feature, index) => (
          <Feature {...feature} key={index} />
        ))}
      </div>
    </div>
  )
}
