import Image from 'next/image'
import logo from '../public/logo.png'
import blackLogo from '../public/black_logo.png'
import whiteLogo from '../public/white_logo.png'

export type LogoVariants = keyof typeof variants

const variants = {
  blue: logo,
  black: blackLogo,
  white: whiteLogo,
}

export default function Logo({
  className = '',
  variant = 'black',
}: {
  className?: string
  variant?
}) {
  return (
    <div className={`${className} flex items-center p-0 m-0`}>
      <Image src={variants[variant]} alt={'logo'} className={className}></Image>
    </div>
  )
}
