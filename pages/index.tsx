import type { NextPage } from 'next'
import Layout from '../components/Layout'
import FirstHome from '../components/home/First'
import Navbar from '../components/ui/Navbar'
import Updates from '../components/updates'
import TeacherSchedule from '../components/home/TeacherSchedule'
import Features from '../components/home/Features'

const Home: NextPage = () => {
  return (
    <Layout className="flex flex-col justify-center items-center bg-primary-700">
      <Navbar className=" text-white !bg-primary-700" />
      <div className="w-full flex h-24 justify-center items-center">
        <Updates />
      </div>
      <FirstHome />
      <Features />
    </Layout>
  )
}

export default Home
