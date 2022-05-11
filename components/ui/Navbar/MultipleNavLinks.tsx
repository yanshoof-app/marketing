import DropdownNavLink, { Variant } from './DropdownNavLink'
import { NavLinkProps } from './NavLink'

export default function MultipleNavLinks({
  label,
  navLinks,
  variant = 'default',
}: {
  label: string
  navLinks: NavLinkProps[]
  variant?: Variant
}) {
  const opened = true
  return (
    <div className="flex">
      <a className={`font-bold text-lg cursor-pointer`}>{label}</a>
      {opened && <DropdownNavLink navLinks={navLinks} variant={variant} />}
    </div>
  )
}
