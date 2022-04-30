import Image from 'next/image'
import logo from '../public/logo.png'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} flex items-center p-0 m-0`}>
      <Image src={logo} alt={'logo'} className={className}></Image>
    </div>
  )
}
