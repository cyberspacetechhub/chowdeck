import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Article = () => {
  return (
    <div className=''>
       <Header />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Article
