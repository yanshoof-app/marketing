import NavLink, { NavLinkProps } from './NavLink'
import Link from 'next/link'
import { MutableRefObject, useMemo } from 'react'
import { MultipleNavLinkProps } from './MultipleNavLinks'
import { useRouter } from 'next/router'

export const variants = {
  default:
    'sm:bg-white sm:dark:bg-slate-850 sm:border-gray-200 sm:dark:border-gray-700',
  alwaysDark:
    'sm:bg-white sm:dark:bg-slate-850 sm:border-gray-300 sm:dark:border-gray-700 sm:text-black sm:dark:text-white',
}

export type Variant = keyof typeof variants

export default function DropdownNavLink({
  navLinks,
  variant = 'default',
  setOpen,
  opened,
}: {
  navLinks: MultipleNavLinkProps[]
  variant: Variant
  setOpen(boolean): unknown
  opened
}) {
  return (
    <div
      className={`${
        opened ? 'sm:flex' : 'sm:hidden'
      } flex flex-col sm:absolute sm:top-10 sm:text-base text-lg w-36 ${
        variants[variant]
      } sm:border-[2px] rounded-lg overflow-hidden sm:shadow-md`}
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
