import { FavoriteBorder, StarOutlined, StoreRounded, WatchLaterOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Rice1 from '../assets/imgs/rice.jpeg'

const Store = () => {
  return (
    <div className=' store-container max-lg:mt-36'>
        <div className=' pl-32 max-lg:pl-0 pb-6'>
            <h1 className=' text-2xl font-normal'>Explore Categories</h1>
        </div>
        <div className='categories flex justify-center max-lg:justify-start items-center gap-8 overflow-auto w-full'>
            <div className=' flex flex-col items-center bg-cyan-100 py-7 px-4 rounded-lg'>
            <Link>
                <span><StoreRounded fontSize='large' /></span>
                <p>Restaurants</p>
            </Link>
            </div>
            <div className=' flex flex-col items-center bg-orange-100 py-7 px-4 rounded-lg'>
                <span><StoreRounded fontSize='large' /></span>
                <p>Restaurants</p>
            </div>
            <div className=' flex flex-col items-center bg-teal-100 py-7 px-4 rounded-lg'>
                <span><StoreRounded fontSize='large' /></span>
                <p>Restaurants</p>
            </div>
            <div className=' flex flex-col items-center bg-violet-100 py-7 px-4 rounded-lg'>
                <span><StoreRounded fontSize='large' /></span>
                <p>Restaurants</p>
            </div>
            <div className=' flex flex-col items-center bg-indigo-100 py-7 px-4 rounded-lg'>
                <span><StoreRounded fontSize='large' /></span>
                <p>Restaurants</p>
            </div>
            <div className=' flex flex-col items-center bg-cyan-100 py-7 px-4 rounded-lg'>
                <span><StoreRounded fontSize='large' /></span>
                <p>Restaurants</p>
            </div>
            <div className=' flex flex-col items-center bg-orange-100 py-7 px-4 rounded-lg'>
                <span><StoreRounded fontSize='large' /></span>
                <p>Restaurants</p>
            </div>
        </div>

        <div className=' mt-20'>
            <div className=' pl-32 max-lg:pl-0 pb-6'>
                <h1 className=' text-2xl font-normal'>All Restaurant</h1>
            </div>
            <div className='restaurant flex justify-center flex-wrap items-center gap-8 w-full'>
                <div className=' flex flex-col items-center bg-white rounded-lg w-1/4 max-lg:w-1/2 max-md:w-full hover:shadow-md'>
                <Link to='/product_details/' className=' w-full p-2'>
                        <div className=' relative w-full rounded-lg h-48'>
                            <img src={Rice1} alt="" className=' w-full rounded-lg h-full' />
                            <div className=' absolute top-2 left-3 bg-yellow-500 rounded-full h-8 w-8'>
                                <span className=' w-full h-full flex items-center justify-center text-white'><FavoriteBorder fontSize='' /></span>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between items-center py-2'>
                                <h2 className=' text-lg font-normal'>Food and Liquor</h2>
                                <span className=' flex items-center gap-1 text-sm text-orange-300'><span className=' text-gray-600'>4.3</span> <StarOutlined fontSize='' /></span>
                            </div>
                            <div className=' pb-1'>
                                <span className=' flex items-center text-blue-700'><WatchLaterOutlined fontSize='s' /> <span className=' text-gray-600'>16-26 mins</span></span>
                            </div>
                            <div className=' flex flex-row gap-4 py-2'>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Restaurant</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Dinner</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Food</Link>
                            </div>
                        </div>
                </Link>
                </div>
                <div className=' flex flex-col items-center bg-white rounded-lg w-1/4 max-lg:w-1/2 max-md:w-full hover:shadow-md'>
                <Link to='/product_details/' className=' w-full p-2'>
                        <div className=' relative w-full rounded-lg h-48'>
                            <img src={Rice1} alt="" className=' w-full rounded-lg h-full' />
                            <div className=' absolute top-2 left-3 bg-yellow-500 rounded-full h-8 w-8'>
                                <span className=' w-full h-full flex items-center justify-center text-white'><FavoriteBorder fontSize='' /></span>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between items-center py-2'>
                                <h2 className=' text-lg font-normal'>Food and Liquor</h2>
                                <span className=' flex items-center gap-1 text-sm text-orange-300'><span className=' text-gray-600'>4.3</span> <StarOutlined fontSize='' /></span>
                            </div>
                            <div className=' pb-1'>
                                <span className=' flex items-center text-blue-700'><WatchLaterOutlined fontSize='s' /> <span className=' text-gray-600'>16-26 mins</span></span>
                            </div>
                            <div className=' flex flex-row gap-4 py-2'>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Restaurant</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Dinner</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Food</Link>
                            </div>
                        </div>
                </Link>
                </div>
                <div className=' flex flex-col items-center bg-white rounded-lg w-1/4 max-lg:w-1/2 max-md:w-full hover:shadow-md'>
                <Link to='/product_details/' className=' w-full p-2'>
                        <div className=' relative w-full rounded-lg h-48'>
                            <img src={Rice1} alt="" className=' w-full rounded-lg h-full' />
                            <div className=' absolute top-2 left-3 bg-yellow-500 rounded-full h-8 w-8'>
                                <span className=' w-full h-full flex items-center justify-center text-white'><FavoriteBorder fontSize='' /></span>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between items-center py-2'>
                                <h2 className=' text-lg font-normal'>Food and Liquor</h2>
                                <span className=' flex items-center gap-1 text-sm text-orange-300'><span className=' text-gray-600'>4.3</span> <StarOutlined fontSize='' /></span>
                            </div>
                            <div className=' pb-1'>
                                <span className=' flex items-center text-blue-700'><WatchLaterOutlined fontSize='s' /> <span className=' text-gray-600'>16-26 mins</span></span>
                            </div>
                            <div className=' flex flex-row gap-4 py-2'>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Restaurant</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Dinner</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Food</Link>
                            </div>
                        </div>
                </Link>
                </div>
                <div className=' flex flex-col items-center bg-white rounded-lg w-1/4 max-lg:w-1/2 max-md:w-full hover:shadow-md'>
                <Link to='/product_details/' className=' w-full p-2'>
                        <div className=' relative w-full rounded-lg h-48'>
                            <img src={Rice1} alt="" className=' w-full rounded-lg h-full' />
                            <div className=' absolute top-2 left-3 bg-yellow-500 rounded-full h-8 w-8'>
                                <span className=' w-full h-full flex items-center justify-center text-white'><FavoriteBorder fontSize='' /></span>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between items-center py-2'>
                                <h2 className=' text-lg font-normal'>Food and Liquor</h2>
                                <span className=' flex items-center gap-1 text-sm text-orange-300'><span className=' text-gray-600'>4.3</span> <StarOutlined fontSize='' /></span>
                            </div>
                            <div className=' pb-1'>
                                <span className=' flex items-center text-blue-700'><WatchLaterOutlined fontSize='s' /> <span className=' text-gray-600'>16-26 mins</span></span>
                            </div>
                            <div className=' flex flex-row gap-4 py-2'>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Restaurant</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Dinner</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Food</Link>
                            </div>
                        </div>
                </Link>
                </div>
                <div className=' flex flex-col items-center bg-white rounded-lg w-1/4 max-lg:w-1/2 max-md:w-full hover:shadow-md'>
                <Link to='/product_details/' className=' w-full p-2'>
                        <div className=' relative w-full rounded-lg h-48'>
                            <img src={Rice1} alt="" className=' w-full rounded-lg h-full' />
                            <div className=' absolute top-2 left-3 bg-yellow-500 rounded-full h-8 w-8'>
                                <span className=' w-full h-full flex items-center justify-center text-white'><FavoriteBorder fontSize='' /></span>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between items-center py-2'>
                                <h2 className=' text-lg font-normal'>Food and Liquor</h2>
                                <span className=' flex items-center gap-1 text-sm text-orange-300'><span className=' text-gray-600'>4.3</span> <StarOutlined fontSize='' /></span>
                            </div>
                            <div className=' pb-1'>
                                <span className=' flex items-center text-blue-700'><WatchLaterOutlined fontSize='s' /> <span className=' text-gray-600'>16-26 mins</span></span>
                            </div>
                            <div className=' flex flex-row gap-4 py-2'>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Restaurant</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Dinner</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Food</Link>
                            </div>
                        </div>
                </Link>
                </div>
                <div className=' flex flex-col items-center bg-white rounded-lg w-1/4 max-lg:w-1/2 max-md:w-full hover:shadow-md'>
                <Link to='/product_details/' className=' w-full p-2'>
                        <div className=' relative w-full rounded-lg h-48'>
                            <img src={Rice1} alt="" className=' w-full rounded-lg h-full' />
                            <div className=' absolute top-2 left-3 bg-yellow-500 rounded-full h-8 w-8'>
                                <span className=' w-full h-full flex items-center justify-center text-white'><FavoriteBorder fontSize='' /></span>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between items-center py-2'>
                                <h2 className=' text-lg font-normal'>Food and Liquor</h2>
                                <span className=' flex items-center gap-1 text-sm text-orange-300'><span className=' text-gray-600'>4.3</span> <StarOutlined fontSize='' /></span>
                            </div>
                            <div className=' pb-1'>
                                <span className=' flex items-center text-blue-700'><WatchLaterOutlined fontSize='s' /> <span className=' text-gray-600'>16-26 mins</span></span>
                            </div>
                            <div className=' flex flex-row gap-4 py-2'>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Restaurant</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Dinner</Link>
                                <Link className=' uppercase text-cyan-700 text-sm font-medium'>Food</Link>
                            </div>
                        </div>
                </Link>
                </div>
            </div>
        </div>
        <div className=' my-20 w-full flex justify-center'>
            <button className=' py-2 px-2 border border-cyan-700 rounded-lg'>
                <Link className=' text-cyan-700'>
                    View More
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Store
