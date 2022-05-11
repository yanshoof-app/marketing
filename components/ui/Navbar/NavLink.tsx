import Link from 'next/link'
import { useRouter } from 'next/router'
import { MutableRefObject, useMemo } from 'react'

export interface NavLinkProps {
  label: string
  to: string
}

export default function NavLink({ label, to }: NavLinkProps) {
  const router = useRouter()
  const active = useMemo(() => router.pathname == to, [router.pathname, to])

  return (
    <Link href={to as string} passHref>
      <a
        className={`font-bold text-lg cursor-pointer ${
          active ? ' text-primary-500' : ''
        }`}
      >
        {label}
      </a>
    </Link>
  )
}
