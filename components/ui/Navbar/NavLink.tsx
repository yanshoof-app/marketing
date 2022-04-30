import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export interface NavLinkProps {
  label: string
  to: string
}

export default function NavLink({ label, to }: NavLinkProps) {
  const router = useRouter()
  const active = useMemo(() => router.pathname == to, [router.pathname, to])

  return (
    <Link href={to} passHref>
      <p className={`font-bold text-lg  ${active && 'text-primary-500'}`}>
        {label}
      </p>
    </Link>
  )
}