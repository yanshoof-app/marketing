import Markdown from 'markdown-to-jsx'
import H1 from './H1'

export default function BlogBody({ body }) {
  return (
    <div className="w-full">
      <Markdown
        options={{
          overrides: {
            h1: {
              component: H1,
            },
          },
        }}
      >
        {body}
      </Markdown>
    </div>
  )
}
