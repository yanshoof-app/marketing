import Image from 'next/image'
import Logo from '../../Logo'
import NavLink from './NavLink'

const FEATURES = 'תכונות'
const WHATS_NEW = 'מה חדש'
const ABOUT = 'אודות'

export default function Navbar() {
  return (
    <nav className="flex h-16 max-w-5xl sticky justify-between w-full">
      <div className="flex gap-10 items-center h-full">
        <Logo className="w-40" />
        <div className="flex gap-7">
          <NavLink to="/1" label={FEATURES} />
          <NavLink to="/2" label={WHATS_NEW} />
          <NavLink to="/3" label={ABOUT} />
        </div>
      </div>
    </nav>
  )
}
