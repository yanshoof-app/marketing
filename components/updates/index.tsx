import { ForwardRTL } from '../icons'

const NEW = 'חדש'

export default function Updates() {
  const update = 'כוללת את פיצר "לפי חדר", תמיכה מלאה בPWA'
  const version = 'V1.5'
  return (
    <div className="flex items-center h-12 bg-primary-500 rounded-xl px-4 text-white gap-2">
      <p className="font-bold text-sm">{NEW}</p>
      <div className="flex">
        <p>
          <span className="font-bold text-sm font-roboto">{version}:</span>{' '}
          <span>{update}</span>
        </p>
        <ForwardRTL width={18} />
      </div>
    </div>
  )
}
