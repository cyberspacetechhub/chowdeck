import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import PageFooter from './PageFooter'

const Home = () => {
  return (
    <div className=' font-sans'>
      <Nav />
      <div className=''>
        <Outlet />
      </div>
      <PageFooter />
    </div>
  )
}

export default Home
