import Image from 'next/image'
import logo from '../public/logo.png'
import blackLogo from '../public/black_logo.png'

export default function Logo({
  className = '',
  active = false,
}: {
  className?: string
  active?
}) {
  return (
    <div className={`${className} flex items-center p-0 m-0`}>
      <Image
        src={active ? logo : blackLogo}
        alt={'logo'}
        className={className}
      ></Image>
    </div>
  )
}
