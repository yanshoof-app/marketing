import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'
import FirstHome from '../components/Sections/First'
import Navbar from '../components/ui/Navbar'
import Updates from '../components/updates'
import Features from '../components/Sections/Features'
import MySchedule from '../components/Sections/MySchedule'
import { buildTitleGetStaticProps } from '../components/DocumentHead'

const Home: NextPage = () => {
  return (
    <Layout className="flex flex-col justify-center items-center bg-primary-700">
      <Navbar />
      <div className="w-full sm:mt-0 mt-20 flex sm:px-0 px-5 h-24 justify-center items-center">
        <Updates />
      </div>
      <FirstHome />
      <Features />
      <MySchedule />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps =
  buildTitleGetStaticProps('Yanshoof')

export default Home
