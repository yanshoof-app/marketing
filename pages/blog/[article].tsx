import PostBody from '../../components/blog/Body'
import PostHead from '../../components/blog/Head'
import Layout from '../../components/Layout'
import Navbar from '../../components/ui/Navbar'
import { BLOG_POST_EXAMPLE } from '../../samples'
import { readFileSync } from 'fs'
import path from 'path'
import { useRouter } from 'next/router'

const BlogArticale = (props) => {
  return (
    props.postInfo && (
      <Layout className="flex flex-col justify-center items-center">
        <Navbar className="border-b-[1px] border-gray-200" />
        <div className="flex flex-col w-full max-w-3xl gap-8">
          <PostHead {...props.postInfo} />
          <PostBody body={props.post ? props.post : ''} />
        </div>
      </Layout>
    )
  )
}

export async function getStaticProps({ params }) {
  const article = params.article

  const full_path = `public/blog/posts/${article}`

  const POST = 'post.md'
  const post_path = path.join(full_path, POST)
  const post = readFileSync(post_path, 'utf-8')

  const postInfo = require(`/public/blog/posts/${article}/info.json`)

  return { props: { post: post, postInfo: postInfo } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { article: '' } }],
    fallback: true,
  }
}

export default BlogArticale
