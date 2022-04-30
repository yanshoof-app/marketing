import Link from 'next/link'
import useUpdates from '../../hooks/useUpdates'
import { ForwardRTL } from '../icons'

const NEW = 'חדש'

export interface IUpdatesProps {}

export default function Updates() {
  const { version, label } = useUpdates()
  return (
    <Link href={'/'} passHref>
      <div className="flex items-center h-12 bg-primary-500 hover:bg-primary-700 duration-75 rounded-xl px-4 text-white gap-2 cursor-pointer select-none">
        <p className="font-bold text-sm">{NEW}</p>
        <div className="flex">
          <p>
            <span className="font-bold text-sm font-roboto">{version}:</span>{' '}
            <span>{label}</span>
          </p>
          <ForwardRTL width={18} />
        </div>
      </div>
    </Link>
  )
}
