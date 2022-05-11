import NavLink, { NavLinkProps } from './NavLink'
import Link from 'next/link'
import { MutableRefObject, useMemo } from 'react'
import { MultipleNavLinkProps } from './MultipleNavLinks'
import { useRouter } from 'next/router'

export const variants = {
  default: 'bg-white dark:bg-slate-850 border-gray-200 dark:border-gray-700',
  alwaysDark:
    'bg-white dark:bg-slate-850 border-gray-300 dark:border-gray-700 text-black dark:text-white',
}

export type Variant = keyof typeof variants

export default function DropdownNavLink({
  navLinks,
  variant = 'default',
  setOpen,
}: {
  navLinks: MultipleNavLinkProps[]
  variant: Variant
  setOpen(boolean): unknown
}) {
  const router = useRouter()

  return (
    <div
      className={`flex flex-col absolute top-14 w-36 ${variants[variant]} border-[2px] rounded-lg overflow-hidden shadow-md`}
      onMouseLeave={() => setOpen(false)}
    >
      {navLinks.map((navLink, index) => (
        <ClickableNavLink {...navLink} key={index} />
      ))}
    </div>
  )
}

export function ClickableNavLink({ label, to }: MultipleNavLinkProps) {
  const router = useRouter()
  const active = router.pathname === to.link

  return active ? (
    <a
      className="w-full px-3 py-2 hover:text-primary-500"
      onClick={() => to.ref.current.scrollIntoView()}
    >
      <p className={`font-semibold text-md cursor-pointer w-full`}>{label}</p>
    </a>
  ) : (
    <Link href={to.link} passHref>
      <a className="w-full px-3 py-2 hover:text-primary-500">
        <p className={`font-semibold text-md cursor-pointer w-full`}>{label}</p>
      </a>
    </Link>
  )
}
