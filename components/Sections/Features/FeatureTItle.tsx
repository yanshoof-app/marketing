import { Calendar } from '../../icons'
import { Icon } from '../../icons/svgFactory'

export interface FeatureTitleProps {
  icon: JSX.Element
  title: string
  description: string
}

export default function FeatureTitle({
  icon,
  title,
  description,
}: FeatureTitleProps) {
  return (
    <div className="w-full max-w-5xl flex flex-col gap-1 sm:px-0 px-6 pt-16 items-start ">
      <div className="flex flex-col gap-7 text-primary-500">
        <>
          {icon}
          <div className="flex flex-col items-leftgap-4 dark:text-white text-black">
            <h1 className="sm:text-6xl text-4xl font-extrabold">{title}</h1>
            <h2 className="sm:text-2xl text-lg font-semibold dark:text-gray-300">
              {description}
            </h2>
          </div>
        </>
      </div>
    </div>
  )
}
