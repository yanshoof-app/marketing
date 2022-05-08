export function H1({ children }) {
  return <h1 className="font-bold text-4xl pb-2 hover:underline">{children}</h1>
}

export function H2({ children }) {
  return (
    <h2 className="font-bold text-2xl pb-1 hover:underline mt-4">{children}</h2>
  )
}

export function H3({ children }) {
  return <h3 className="font-semibold text-xl pb-4 pt-4">{children}</h3>
}

export function P({ children, className }) {
  return (
    <p className={`leading-6 mt-2 font-medium pb-4 ${className}`}>{children}</p>
  )
}

export function Ul({ children }) {
  return <ul className="pb-8 flex flex-col gap-1">{children}</ul>
}

export function Li({ children }) {
  return (
    <li className='before:content-["-"] before:inline-block before:-mr-6 before:absolute font-medium before:text-gray-500 before:font-semibold mr-10 mb-2 leading-6'>
      {children}
    </li>
  )
}
