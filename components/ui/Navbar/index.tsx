import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../Logo'
import NavLink from './NavLink'

const FEATURES = 'תכונות'
const WHATS_NEW = 'מה חדש'
const ABOUT = 'אודות'

export default function Navbar({ className = '' }: { className? }) {
  return (
    <nav
      className={`flex h-16  sticky top-0 justify-center bg-white w-full z-50 m-0 p-0 ${className}`}
    >
      <div className="flex gap-10 items-center h-full  w-full max-w-5xl">
        <Link href={'/asdasd'} passHref>
          <Logo className="w-40" />
        </Link>
        <div className="flex gap-7">
          <NavLink to="/1" label={FEATURES} />
          <NavLink to="/2" label={WHATS_NEW} />
          <NavLink to="/3" label={ABOUT} />
        </div>
      </div>
    </nav>
  )
}
