import { useState } from 'react'
import { Expand } from '../../icons'
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
  const [opened, setOpen] = useState(false)
  return (
    <div
      className="flex items-center cursor-pointer"
      onMouseOver={() => setOpen(true)}
    >
      <a className={`font-bold text-lg`}>{label}</a>
      {opened && (
        <DropdownNavLink
          navLinks={navLinks}
          variant={variant}
          setOpen={setOpen}
        />
      )}
      <Expand width={24} height={24} />
    </div>
  )
}
