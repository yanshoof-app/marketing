import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { Close, DarkMode, Menu } from '../../icons'
import Logo from '../../Logo'
import { useRefs } from '../../RefsProvider'
import { useTheme } from '../../ThemeProvider'
import DarkModeToggle from './DarkModeToggle'
import MultipleNavLinks from './MultipleNavLinks'
import NavLink from './NavLink'

const FEATURES = 'תכונות'
const BLOG = 'בלוג'
const ABOUT = 'אודות'
const MENU_BUTTON_SIZE = 35

export default function Navbar({ className = '' }: { className? }) {
  const router = useRouter()
  const active = useMemo(() => router.pathname == '/', [router.pathname])
  const { theme } = useTheme()
  const { mySchedule } = useRefs()
  const [opened, setOpened] = useState(false)

  return (
    <nav
      className={`flex sm:h-16 sticky sm:gap-0 gap-3 h-16 top-0 right-0 justify-center items-center bg-white dark:bg-slate-850 transition-colors dark:text-white sm:w-full w-screen z-50 m-0 sm:p-0 px-6 ${
        active && 'text-white !bg-primary-700/90 backdrop-blur-sm'
      } ${className}`}
    >
      <button className="sm:hidden block" onClick={() => setOpened(!opened)}>
        {opened ? (
          <Close height={MENU_BUTTON_SIZE} width={MENU_BUTTON_SIZE} />
        ) : (
          <Menu height={MENU_BUTTON_SIZE} width={MENU_BUTTON_SIZE} />
        )}
      </button>
      <div className="flex gap-10 items-center justify-between h-full w-full max-w-5xl">
        <Link href={'/'} passHref>
          <a
            onClick={() => {
              if (opened) setOpened(false)
            }}
          >
            <Logo
              className="w-40"
              variant={active || theme === 'dark' ? 'white' : 'black'}
            />
          </a>
        </Link>
        <div
          className={`sm:flex sm:relative transition-colors absolute sm:top-0 top-16 w-screen h-screen sm:w-auto sm:h-auto right-0 px-6 py-3 sm:p-0 ${
            active
              ? 'bg-primary-700/90 backdrop-blur-sm'
              : 'bg-white dark:bg-slate-850'
          } sm:!bg-transparent sm:flex-row flex-col sm:gap-7 gap-6 sm:backdrop-blur-none ${
            opened ? 'flex' : 'hidden'
          }`}
        >
          <MultipleNavLinks
            label={FEATURES}
            navLinks={[
              {
                label: 'מערכת שלי',
                to: { ref: active ? mySchedule : null, link: '/' },
              },
              {
                label: 'מערכת מורה',
                to: { ref: active ? mySchedule : null, link: '/' },
              },
            ]}
            variant={active ? 'alwaysDark' : 'default'}
          />
          <NavLink to="/blog/timetable-1.0" label={BLOG} />
          <NavLink to="/about" label={ABOUT} />
        </div>
        <div>
          <DarkModeToggle variant={active ? 'white' : 'black'} />
        </div>
      </div>
    </nav>
  )
}
