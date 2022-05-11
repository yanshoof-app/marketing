import { Icon } from '../../icons/svgFactory'

export interface IFeature {
  name: string
  description: string
  icon: Icon
  label?: string
}

export default function Feature({
  name,
  description,
  icon: Icon,
  label = '',
}: IFeature) {
  return (
    <div className="flex flex-col items-center w-64 justify-start text-center gap-2 text-white pb-16">
      <p className="text-primary-500">
        <Icon width={44} height={44} />
      </p>
      <div className="flex flex-col justify-start text-center items-center gap-2">
        <div className="flex items-center">
          <h1 className="font-bold text-xl">{name}</h1>
          {label && (
            <span className="bg-primary-700 rounded-[5px] relative right-2 px-[7px] pt-[1px] h-[22px] text-[13px] font-bold select-none">
              {label}
            </span>
          )}
        </div>
        <p className="font-semibold">{description}</p>
      </div>
    </div>
  )
}
