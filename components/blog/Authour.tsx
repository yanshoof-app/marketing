import { IAuthour } from './Head'
import Image from 'next/image'
import Link from 'next/link'

export default function PostAuthour(authour: IAuthour) {
  return (
    <div className="flex gap-2">
      <Image
        src={authour.image}
        alt={authour.name}
        width={44}
        height={44}
        className="rounded-full m-0 p-0"
      />
      <div className="flex flex-col text-right">
        <p className="font-bold dark:text-white sm:text-base text-sm">
          {authour.name}
        </p>
        <Link href={authour.link} passHref>
          <a className="text-primary-500 sm:text-sm text-xs cursor-pointer w-fit font-semibold">
            {authour.username}@
          </a>
        </Link>
      </div>
    </div>
  )
}
