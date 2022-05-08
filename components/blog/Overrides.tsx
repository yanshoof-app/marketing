export function H1({ children }) {
  return <h1 className="font-bold text-3xl pb-4 hover:underline">{children}</h1>
}

export function H2({ children }) {
  return (
    <h2 className="font-bold text-2xl pb-3 hover:underline mt-8">{children}</h2>
  )
}

export function H3({ children }) {
  return <h3 className="font-semibold text-xl  mt-1">{children}</h3>
}

export function P({ children }) {
  return <p className="leading-6 mt-2">{children}</p>
}

export function Ul({ children }) {
  return <ul className="pb-6 flex flex-col gap-1 mt-3">{children}</ul>
}

export function Li({ children }) {
  return (
    <li className='before:content-["-"] before:inline-block before:-mr-6 before:absolute before:text-gray-500 before:font-semibold mr-10 mb-2 leading-6'>
      {children}
    </li>
  )
}
