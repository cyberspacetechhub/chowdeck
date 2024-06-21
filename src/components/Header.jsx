import React from 'react'
import {ExpandMore, HomeOutlined, LocationOn, PersonOutlined, SearchOffOutlined, SearchOutlined, ShoppingCart, ShoppingCartOutlined} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-4 max-lg: pb-8 fixed top-0 z-40 bg-white w-full pr-8'>
      <div className=' flex justify-between'>
        <div className=' flex items-center gap-4 w-1/2'>
            <div className=' bg-cyan-900 py-2 px-3 rounded-md cursor-pointer'>
                <Link to='/'>
                    <span className=' text-orange-500 font-bold'> <HomeOutlined /></span>
                </Link>
            </div>
            <div>
                <Link className=' flex items-center font-normal text-sm max-lg:text-xs max-lg:font-medium'>
                    <span className=' text-cyan-600'><LocationOn />
                    </span><span>Enter address</span>
                    <span><ExpandMore /></span>
                </Link>
            </div>
        </div>
        <div className=' flex items-center gap-4'>
            <div className=' flex items-center gap-2'>
                <Link className=' bg-cyan-900 rounded-full flex justify-center items-center h-10 w-10'>
                    <div className=' text-gray-100'><ShoppingCartOutlined /></div>
                </Link>
                <Link className=' bg-cyan-900 rounded-full flex justify-center items-center h-10 w-10'>
                    <span className=' text-gray-100'><PersonOutlined /></span>
                </Link>
            </div>
        </div>
      </div>
      <div className=' absolute top-5 right-40 w-1/4 max-lg:hidden'>
                <span className=' absolute z-10 top-2 left-1'><SearchOutlined /></span>
                <div className=''>
                    <input type="search" placeholder='search the store' className=' w-full pl-8 pr-2 py-2 relative z-0 bg-gray-100 focus:outline-gray-300 '/>
                </div>
            </div>
      <div className=' relative max-lg:w-full hidden max-lg:block py-2'>
            <span className=' absolute z-10 top-3 left-0'><SearchOutlined /></span>
            <div className=' w-full block'>
                <input type="text" placeholder='search the store' className=' w-full pl-6 py-2 relative z-0 bg-gray-100 focus:outline-gray-300'/>
            </div>
        </div>
    </div>
  )
}

export default Header
