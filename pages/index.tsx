import type { NextPage } from 'next'
import Layout from '../components/Layout'
import FirstHome from '../components/Sections/First'
import Navbar from '../components/ui/Navbar'
import Updates from '../components/updates'
import TeacherSchedule from '../components/Sections/TeacherSchedule'
import Features from '../components/Sections/Features'
import MySchedule from '../components/Sections/MySchedule'
import { useRef } from 'react'

const Home: NextPage = () => {
  return (
    <Layout className="flex flex-col justify-center items-center bg-primary-700">
      <Navbar className=" text-white !bg-primary-700/90 backdrop-blur-sm" />
      <div className="w-full flex sm:px-0 px-5 h-24 justify-center items-center">
        <Updates />
      </div>
      <FirstHome />
      <Features />
      <MySchedule />
    </Layout>
  )
}

export default Home
