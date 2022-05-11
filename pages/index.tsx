import type { NextPage } from 'next'
import Layout from '../components/Layout'
import FirstHome from '../components/Sections/First'
import Navbar from '../components/ui/Navbar'
import Updates from '../components/updates'
import TeacherSchedule from '../components/Sections/TeacherSchedule'
import Features from '../components/Sections/Features'

const Home: NextPage = () => {
  return (
    <Layout className="flex flex-col justify-center items-center bg-primary-700">
      <Navbar className=" text-white !bg-primary-700/80 backdrop-blur-sm" />
      <div className="w-full flex h-24 justify-center items-center">
        <Updates />
      </div>
      <FirstHome />
      <Features />
    </Layout>
  )
}

export default Home
