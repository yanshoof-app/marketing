import LessonInfo from './LessonInfo'
import ShadowedWrapper from './ShadowedWrapper'
import useModification, { ColorMapper, ThemeColor } from './useModification'

export interface LessonProps {
  hour: number
  lesson: any
}

export const changeTextColor: ColorMapper = (color: ThemeColor) =>
  ({
    event: 'text-event-600',
    change: 'text-change-500',
    celebration: 'text-celebration-500',
    primary: 'text-primary-500',
    gray: 'text-gray-900',
  }[color])

export default function Lesson({ hour, lesson }: LessonProps) {
  const [color, modificationMessage] = useModification(
    'changes' in lesson ? lesson.changes[0] : undefined
  )
  return (
    <div className="flex flex-col gap-8 text-black">
      <ShadowedWrapper
        color={color}
        className="flex flex-row rounded-3xl gap-[1.6rem] p-[1.6rem] items-center justify-stretch overflow-hidden"
      >
        <p className=" font-roboto font-bold text-[48px] text-gray-500">
          {hour}
        </p>
        <div className="flex-grow flex flex-col gap-[1.4rem] max-w-[calc(100%-3.2rem)]">
          <LessonInfo {...lesson} />
          {modificationMessage && (
            <p
              className={` mb-[-0.92rem] mt-[-0.92rem] font-bold text-[32px] ${changeTextColor(
                color
              )}`}
            >
              {modificationMessage}
            </p>
          )}
        </div>
      </ShadowedWrapper>
    </div>
  )
}
