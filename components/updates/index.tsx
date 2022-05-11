import Link from 'next/link'
import useUpdates from '../../hooks/useUpdates'
import { ForwardRTL } from '../icons'

const NEW = 'חדש'
const VERSIONS_PATH = '/blog/timetable-'

export interface IUpdatesProps {}

export default function Updates() {
  const { version, label } = useUpdates()
  return (
    version && (
      <Link href={`${VERSIONS_PATH}${version}`} passHref>
        <a className="flex items-center h-12 bg-primary-500 hover:bg-primary-900 duration-75 rounded-xl px-4 text-white gap-2 cursor-pointer select-none">
          <p className="font-bold text-sm">{NEW}</p>
          <div className="flex">
            <p>
              <span className="font-bold text-sm font-roboto">V{version}:</span>{' '}
              <span>{label}</span>
            </p>
            <ForwardRTL width={18} />
          </div>
        </a>
      </Link>
    )
  )
}
