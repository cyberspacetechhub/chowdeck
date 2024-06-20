import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <div className=' px-4 font-sans'>
      <Header />
      <div className='outlet '>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home
