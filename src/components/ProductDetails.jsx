import { Add, BookmarkBorderOutlined, DeleteOutlined, InfoOutlined, Remove, StarOutlined, WatchLaterOutlined, WestRounded } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Rice1 from '../assets/imgs/rice.jpeg'
import Pkgbag from '../assets/imgs/brown-bag.jpg'
import SuyaSpice from '../assets/imgs/suya-spice.jpeg'

const ProductDetails = () => {
  return (
    <div className=' bg-white max-lg:mt-36'>
      <div className=' flex w-full justify-center gap'>
        <div className='pr-card w-2/5 h-lvh overflow-auto border-r border-gray-400 p-4'>
            <div>
                <Link to='/restaurant'>
                    <span><WestRounded fontSize='' /></span>
                    <span className=' text-sm'>Restaurant</span>
                </Link>
            </div>
            <Link to='' className=' w-full p-2'>
                <div className=' relative z-0 w-full rounded-lg h-48'>
                    <img src={Rice1} alt="" className=' w-full rounded-lg h-full' />
                    <div className=' pb-1 absolute z-10 bottom-1 m-2 '>
                        <span className=' flex items-center gap-1 text-cyan-700 bg-white py-2 px-2 rounded border border-gray-800'><WatchLaterOutlined fontSize='s' /> <span className=' text-gray-600'>16-26 mins</span></span>
                    </div>
                </div>
                <div>
                    <div className=' flex justify-between items-center py-2'>
                        <h2 className=' text-lg font-normal'>Food and Liquor</h2>
                        <span className=' flex items-center gap-1 text-sm text-orange-300'><span className=' text-gray-600'>4.3</span> <StarOutlined fontSize='' /></span>
                    </div>
                    
                    <div className=' flex flex-row gap-4 py-2 border-b border-gray-300 pb-6'>
                        <Link className=' uppercase text-cyan-700 text-sm font-medium'>meat</Link>
                    </div>
                </div>
            </Link>
            <div className=' mt-3'>
                <div className=' flex justify-between items-center'>
                    <p className=' flex flex-col'>
                        <span className=' text-base font-normal text-gray-900'>Opening time</span>
                        <span className=' text-sm text-gray-400'>12:00 pm - 11:55 pm</span>
                    </p>
                    <p className=' text-gray-600'>
                        <span>Min order: <span>&#8358;2,000</span></span>
                    </p>
                </div>
            </div>
            <div className=' mt-8 border-b border-gray-300 pb-4'>
                <div className=' flex justify-start gap-8 text-center'>
                    <Link className=' px-4 py-1 bg-blue-100 rounded uppercase'>All</Link>
                    <Link className=' px-4 py-1 bg-blue-100 rounded uppercase'>Suya Spice1</Link>
                </div>
            </div>
            <div className=' mt-8'>
                <div className=' flex justify-between items-center border border-gray-300 rounded p-4 w-3/4'>
                    <div className=' flex flex-col'>
                        <h3 className=' text-base font-semibold'>Suya Spice</h3>
                        <span className=' text-sm text-gray-400'>Suya spice</span>
                        <span className=' text-cyan-500'>&#8358;15,000</span>
                    </div>
                    <div className=' w-20 h-20'>
                        <img src={SuyaSpice} alt="" className=' w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-2/6 stick -top-16 h-lvh p-4 overflow-auto'>
            <div className=' flex justify-between items-center pb-4'>
                <p className=' text-sm text-cyan-600'>Lekki's global suya spot</p>
                <button className=' py-1 px-3 rounded-full bg-cyan-200'>
                    <span className=' text-sm font-normal text-cyan-700'>+ Add another pack</span>
                </button>
            </div>
            <div className=' border border-dashed border-gray-300 rounded-lg'>
                <div className=' flex justify-between items-center py-2 px-2'>
                    <div>
                        <h3 className=' text-sm font-medium'>Pack 1</h3>
                    </div>
                    <div>
                        <span className=' text-red-600'><DeleteOutlined /></span>
                    </div>
                </div>
                <div className=' flex justify-between items-center py-2 px-2'>
                    <p className=' flex flex-col items-center'>
                        <span className=' text-xs text-gray-600'>Suya spice</span>
                        <span className=' text-gray-500 text-xs'>&#8358;<span>10,000.00</span></span>
                    </p>
                    <span className=' px-2 rounded-full bg-gray-200 flex items-center gap-2'>
                        <button className=' text-gray-700'> <Remove fontSize='' /></button>
                        <span className=' text-sm'>1</span>
                        <button className=' text-gray-700'><Add fontSize='' /></button>
                    </span>
                </div>
                <div className=' flex justify-between px-2 py-3'>
                    <button className=' border border-gray-300 px-2 rounded-full'>
                        <span className=' text-sm'>+ Add to this pack</span>
                    </button>
                    <button className=' border border-dashed border-gray-300 px-2 rounded-full'>
                        <span className=' text-sm'>Duplicate this pack</span>
                    </button>
                </div>
            </div>
            <Link>
                <div className=' flex justify-between items-center border-y py-4 my-4'>
                    <div className=' flex items-center gap-4'>
                        <div className=' w-12 h-1/2'>
                            <img src={Pkgbag} alt="" className=' w-full h-full' />
                        </div>
                        <div>
                            <h1 className=' text-lg font-medium'>Need a Chowdeck brown bag?</h1>
                            <p className=' text-xs'>package your order in a brown bag for just &#8358;200</p>
                        </div>
                    </div>
                    <div>
                        <input type="radio" className=' focus:bg-teal-600 cursor-pointer' />
                    </div>
                </div>
            </Link>
            <div className='py-4'>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Payment Method</span>
                        <button className=' text-cyan-800'>Choose</button>
                    </p>
                </div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Promo code</span>
                        <button className=' text-cyan-800'>Choose</button>
                    </p>
                </div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Choose Address</span>
                        <button className=' text-cyan-800'>Change</button>
                    </p>
                </div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Delivery instructions</span>
                        <button className=' text-cyan-800'>Add</button>
                    </p>
                </div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Vendor instructions</span>
                        <button className=' text-cyan-800'>Add</button>
                    </p>
                </div>
            </div>
            <div className=' flex justify-between items-center border-y py-6 my-4'>
                <div className=' flex items-center gap-2 bg-cyan-100 py-2 px-1 rounded'>
                    <div className=''>
                        <span className=' text-cyan-800'><InfoOutlined /></span>
                    </div>
                    <div className=' text-gray-800'>
                        <h1 className=' text-sm font-normal'>Delivery includes PIN confirmation</h1>
                        <p className=' text-xs'>This helps ensure that your order is given to the right person</p>
                    </div>
                </div>
            </div>
            <div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Sub total<span>(1 item)</span></span>
                        <span className=''>&#8358;12,000</span>
                    </p>
                </div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Delivery fee</span>
                        <span className=''>&#8358;0.0</span>
                    </p>
                </div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-normal'>
                        <span>Service fee</span>
                        <span className=''>&#8358;0.0</span>
                    </p>
                </div>
                <div className=' py-2'>
                    <p className=' flex justify-between items-center text-sm font-semibold'>
                        <span className=''>Total</span>
                        <span className=''>&#8358;12,000</span>
                    </p>
                </div>
                <div className=' pt-3 text-center w-full'>
                    <button className=' w-full bg-cyan-900 py-4 px-3 rounded'>
                        <span className=' text-gray-300'>Place order</span>
                    </button>
                </div>
                <div className=' pt-3 text-center w-full'>
                    <button className=' w-full bg-red-100 py-4 px-3 rounded'>
                        <span className=' text-red-600'>Clear order</span>
                    </button>
                </div>
                <div className=' w-full'>
                    <button className=' w-full py-2 px-3'>
                        <span className=' text-cyan-800'><BookmarkBorderOutlined fontSize=''  /></span>
                        <span className=' text-cyan-800 text-sm'>Save for later</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
