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
        <a className="flex sm:flex-row flex-col items-start sm:items-center sm:h-12 h-fit bg-primary-500 hover:bg-primary-900 duration-75 rounded-xl sm:py-0 py-2 sm:px-4 px-3 text-white sm:gap-2 cursor-pointer select-none">
          <p className="font-bold text-sm">{NEW}</p>
          <div className="flex sm:justify-start items-center">
            <p>
              <span className="font-bold text-sm font-roboto">V{version}:</span>{' '}
              <span>{label}</span>
            </p>
            <div className="hidden sm:block">
              <ForwardRTL width={18} />
            </div>
          </div>
        </a>
      </Link>
    )
  )
}
