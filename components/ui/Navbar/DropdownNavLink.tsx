import NavLink, { NavLinkProps } from './NavLink'
import Link from 'next/link'

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
  navLinks: NavLinkProps[]
  variant: Variant
  setOpen(boolean): unknown
}) {
  return (
    <div
      className={`flex flex-col absolute top-14 w-36 ${variants[variant]} border-[2px] rounded-lg overflow-hidden shadow-md`}
      onMouseLeave={() => setOpen(false)}
    >
      {navLinks.map((navLink, index) => (
        <Link href={navLink.to} passHref key={index}>
          <a key={index} className="w-full px-3 py-1 hover:text-primary-500">
            <p className={`font-semibold text-md cursor-pointer w-full`}>
              {navLink.label}
            </p>
          </a>
        </Link>
      ))}
    </div>
  )
}
