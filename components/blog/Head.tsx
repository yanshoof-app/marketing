import useHebrewDate from '../../hooks/useHebrewDate'
import PostAuthour from './Authour'
export interface IAuthour {
  name: string
  image?: string
  username?: string
  link?: string
}

export interface IBlogHeadProps {
  title: string
  publishDate: string
  authours: IAuthour[]
}

export default function PostHead({
  title,
  publishDate,
  authours,
}: IBlogHeadProps) {
  const hebrewPublishDate = useHebrewDate(new Date(publishDate))
  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center py-8 border-b-[1px] border-gray-200 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">{title}</h1>
        <h2 className="text-base text-gray-500 font-semibold">
          {hebrewPublishDate}
        </h2>
      </div>
      <div className="flex gap-4 flex-wrap">
        {authours.map((authour, index) => (
          <PostAuthour {...authour} key={index} />
        ))}
      </div>
    </div>
  )
}
