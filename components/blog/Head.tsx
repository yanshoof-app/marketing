import useHebrewDate from '../../hooks/useHebrewDate'
import Authour from './Authour'
export interface IAuthour {
  name: string
  image?: string
  username?: string
  link?: string
}

export interface IBlogHeadProps {
  title: string
  publishDate: Date
  authours: IAuthour[]
}

export default function BlogHead({
  title,
  publishDate,
  authours,
}: IBlogHeadProps) {
  const hebrewPublishDate = useHebrewDate(publishDate)
  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center">
      <h1 className="font-bold text-4xl">{title}</h1>
      <h2 className="text-base text-gray-500 font-semibold">
        {hebrewPublishDate}
      </h2>
      <div className="flex gap-4 flex-wrap">
        {authours.map((authour, index) => (
          <Authour {...authour} key={index} />
        ))}
      </div>
    </div>
  )
}
