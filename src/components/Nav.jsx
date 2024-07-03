import { Home, HomeOutlined, Segment, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
     <header className=' fixed bg-inherit z-40 flex justify-between items-center px-4 w-full top-0 py-4'>
        <div className=''>
            <Link className=' px-6 py-2 rounded-full bg-secondary flex items-center gap-4 text-primary font-semibold'>
                <span className=' text-background'><Home /></span>
                <h2>Chowdeck</h2>
            </Link>
        </div>
        <div className=' flex items-center gap-4'>
            <ul className=' flex items-center list-none gap-4 max-lg:hidden'>
                <li>
                    <Link className=' bg-primary px-10 py-3 rounded-full font-medium shadow-lg'>About</Link>
                </li>
                <li>
                    <Link className=' bg-primary px-10 py-3 rounded-full font-medium shadow-lg'>Book now</Link>
                </li>
                <li>
                    <Link className=' bg-primary px-10 py-3 rounded-full font-medium shadow-lg'>Order now</Link>
                </li>
            </ul>
            <Link to='/store' className=' bg-primary text-secondary flex justify-center items-center p-3 rounded-full shadow-lg'>
                <ShoppingCartOutlined />
            </Link>
            <button className=' max-2xl:hidden flex justify-center items-center bg-primary text-secondary rounded-full p-2 max-lg:block shadow-lg'>
                <Segment fontSize='large' />
            </button>
        </div>
     </header>
  )
}

export default Nav
