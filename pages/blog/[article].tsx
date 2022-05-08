import BlogBody from '../../components/blog/Body'
import BlogHead from '../../components/blog/Head'
import Layout from '../../components/Layout'
import Navbar from '../../components/ui/Navbar'
import { BLOG_POST_EXAMPLE } from '../../samples'
import { readFileSync } from 'fs'
import path from 'path'

const BlogArticale = (props) => {
  return (
    <Layout className="flex flex-col justify-center items-center">
      <Navbar />
      <div>
        <BlogHead
          title="Timetable V1.5"
          publishDate={new Date()}
          authours={[
            {
              name: 'Itay Oshri',
              username: 'itay36',
              image:
                'https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg',
              link: 'https://www.google.com/search?q=authour&oq=authour&aqs=chrome..69i57j0i10l6j46i10i199i465j0i10l2.1006j0j7&sourceid=chrome&ie=UTF-8',
            },
            {
              name: 'Itay Oshri',
              username: 'itay36',
              image:
                'https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg',
              link: 'https://www.google.com/search?q=authour&oq=authour&aqs=chrome..69i57j0i10l6j46i10i199i465j0i10l2.1006j0j7&sourceid=chrome&ie=UTF-8',
            },
          ]}
        />
      </div>
      <BlogBody body={props.post ? props.post : ''} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const file_path = `${params.article}.md`
  const postsDirectory = 'public/blog/'
  const post = readFileSync(path.join(postsDirectory, file_path), 'utf-8')
  return { props: { post: post } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { article: '' } }],
    fallback: true,
  }
}

export default BlogArticale
