import { MutableRefObject, useState } from 'react'
import { Expand } from '../../icons'
import DropdownNavLink, { Variant } from './DropdownNavLink'
import { NavLinkProps } from './NavLink'

export interface MultipleNavLinkProps {
  label: string
  to: { ref: MutableRefObject<HTMLElement>; link: string }
}

export default function MultipleNavLinks({
  label,
  navLinks,
  variant = 'default',
}: {
  label: string
  navLinks: MultipleNavLinkProps[]
  variant?: Variant
}) {
  const [opened, setOpen] = useState(false)
  return (
    <div
      className="flex sm:flex-row flex-col sm:items-center items-start cursor-pointer"
      onMouseOver={() => setOpen(true)}
    >
      <div className="flex items-center">
        <a className={`font-bold sm:text-lg text-3xl`}>{label}</a>
        <Expand width={24} height={24} className="sm:block hidden" />
      </div>
      <DropdownNavLink
        navLinks={navLinks}
        variant={variant}
        setOpen={setOpen}
        opened={opened}
      />
    </div>
  )
}
