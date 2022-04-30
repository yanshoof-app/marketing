import type { NextPage } from 'next'
import Layout from '../components/Layout'
import FirstHome from '../components/home/first'
import Navbar from '../components/ui/Navbar'
import Updates from '../components/updates'

const Home: NextPage = () => {
  return (
    <Layout className="flex flex-col justify-center items-center">
      <Navbar />
      <Updates />
      <FirstHome />
    </Layout>
  )
}

export default Home
