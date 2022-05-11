import { useRefs } from '../../RefsProvider'

export default function MySchedule() {
  const { mySchedule } = useRefs()
  return <div ref={mySchedule}></div>
}
