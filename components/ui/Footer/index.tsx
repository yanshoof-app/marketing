import Link from 'next/link'
import { GitHub } from '../../icons'
import Logo from '../../Logo'

const GITHUB_LINK = 'https://github.com/yanshoof-app'
const YANSHOOF_2022 = '2022 Yanshoof ©'

export default function Footer() {
  return (
    <div className="flex flex-col w-full justify-between bg-primary-600 py-8 sm:px-20 px-8 gap-8">
      <div className="w-full flex justify-between gap-5">
        <div className="text-white hover:text-white/50">
          <Link href={GITHUB_LINK} passHref>
            <a>
              <GitHub width={30} height={30} />
            </a>
          </Link>
        </div>
        <p className=" text-lg text-white font-roboto">{YANSHOOF_2022}</p>
      </div>
      <div className="border-t-[1px] pb-3 pt-8">
        <Logo variant={'white'} className="w-48" />
      </div>
    </div>
  )
}
