import Markdown from 'markdown-to-jsx'
import { H1, H2, H3, Li, P, Ul } from './Overrides'

export default function PostBody({ body }) {
  return (
    <div className="dark:text-white">
      <Markdown
        options={{
          overrides: {
            h1: {
              component: H1,
            },

            h2: {
              component: H2,
            },

            h3: {
              component: H3,
            },

            p: {
              component: P,
            },

            ul: {
              component: Ul,
            },

            li: {
              component: Li,
            },
          },
        }}
      >
        {body}
      </Markdown>
    </div>
  )
}
