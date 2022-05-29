export function H1({ children }) {
  return (
    <h1 className="font-bold sm:text-4xl text-3xl mt-10 hover:underline">
      {children}
    </h1>
  )
}

export function H2({ children }) {
  return (
    <h2 className="font-bold sm:text-2xl text-xl hover:underline mt-6">
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return (
    <h3 className="font-semibold sm:text-xl text-lg pb-4 pt-4">{children}</h3>
  )
}

export function P({ children, className }) {
  return (
    <p className={`leading-6 mb-6 mt-3 font-medium ${className}`}>{children}</p>
  )
}

export function Ul({ children }) {
  return <ul className=" mb-8 mt-4 flex flex-col gap-1">{children}</ul>
}

export function Li({ children }) {
  return (
    <li className='before:content-["-"] before:inline-block before:-mr-6 before:absolute font-medium before:text-gray-500 before:font-semibold mr-10 mb-2 leading-6'>
      {children}
    </li>
  )
}
