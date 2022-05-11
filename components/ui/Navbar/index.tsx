import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { DarkMode } from '../../icons'
import Logo from '../../Logo'
import DarkModeToggle from './DarkModeToggle'
import NavLink from './NavLink'

const FEATURES = 'תכונות'
const WHATS_NEW = 'מה חדש'
const ABOUT = 'אודות'

export default function Navbar({ className = '' }: { className? }) {
  const router = useRouter()
  const active = useMemo(() => router.pathname == '/', [router.pathname])

  return (
    <nav
      className={`flex h-16  sticky top-0 justify-center bg-white w-full z-50 m-0 p-0 ${className}`}
    >
      <div className="flex gap-10 items-center justify-between h-full w-full max-w-5xl">
        <Link href={'/'} passHref>
          <a>
            <Logo className="w-40" variant={active ? 'white' : 'black'} />
          </a>
        </Link>
        <div className="flex gap-7">
          <NavLink to="/features" label={FEATURES} />
          <NavLink to="/whatsnew" label={WHATS_NEW} />
          <NavLink to="/about" label={ABOUT} />
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}
