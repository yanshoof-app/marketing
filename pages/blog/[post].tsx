import PostBody from '../../components/blog/Body'
import PostHead from '../../components/blog/Head'
import Layout from '../../components/Layout'
import Navbar from '../../components/ui/Navbar'
import { readFileSync } from 'fs'
import path from 'path'

const BlogPost = (props) => {
  return (
    props.postInfo && (
      <Layout className="flex flex-col justify-center items-center sm:px-0 px-7 dark:text-white">
        <Navbar className="sm:border-b-[1px] border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col w-full max-w-3xl gap-8">
          <PostHead {...props.postInfo} />
          <PostBody body={props.post ? props.post : ''} />
        </div>
      </Layout>
    )
  )
}

export async function getStaticProps({ params }) {
  const postPath = params.post

  const full_path = `public/blogPosts/posts/${postPath}`

  const POST = 'post.md'
  const post_path = path.join(full_path, POST)
  const post = readFileSync(post_path, 'utf-8')

  const postInfo = require(`/public/blogPosts/posts/${postPath}/info.json`)

  return { props: { post: post, postInfo: postInfo, title: postInfo.title } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { post: 'timetable-1.0' } }],
    fallback: true,
  }
}

export default BlogPost
