const variants = {
  primary: 'bg-sky-500 text-white sm:hover:bg-sky-700  hover:text-white',
  secondary:
    'bg-transparent text-sky-500 ring-1 ring-sky-500 hover:text-sky-700 hover:ring-sky-700',
}

export type ButtonVariant = keyof typeof variants

export interface ButtonProps {
  variant?: ButtonVariant
  onClick?(): unknown
  className?: string
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  onClick = () => {},
  children,
  className = '',
  disabled = false,
}) {
  return (
    <button
      className={`${variants[variant]} rounded-2xl px-8 py-4 font-semibold disabled:opacity-60 ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
