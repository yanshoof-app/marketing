import InfoLine from './InfoLine'
import useLessonInfo from './useLessonInfo'

export default function LessonInfo(info) {
  const { newTeacher, newRoom, newHour } = useLessonInfo(
    'changes' in info ? info.changes : []
  )
  if (!('subject' in info)) return <></>
  return (
    <div className={`flex flex-col gap-[1.4rem] items-stretch max-w-full`}>
      <InfoLine info={info.subject} newInfo={newHour} bold />
      {'teacher' in info && (
        <InfoLine info={info.teacher} newInfo={newTeacher} />
      )}
      {info.class && <InfoLine info={info.class} newInfo={newRoom} bold />}
    </div>
  )
}
