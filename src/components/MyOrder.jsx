import { AccountBalanceWallet, ChevronRight, Clear, CreditCard, Done, ExpandCircleDownOutlined, ExpandLess, ExpandMore, FavoriteBorder, FileDownload, FileDownloadOutlined, FilterAlt, FilterAltOutlined, Home, HomeOutlined, LocalShipping, LogoutOutlined, ManageAccounts, Receipt, Redeem, SearchOutlined, Settings, SettingsOutlined, Star, StarOutline, Sync, UnfoldLess, UnfoldMore, Visibility, VisibilityOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Trackorder from '../assets/imgs/trackorder.svg'

const MyOrder = () => {
  return (
    <div className=' dark:bg-accent bg-opacity-20 h-auto px-4'>
      <header className=' flex justify-between items-center text-gray text-opacity-60 px-4'>
        <ul className=' flex justify-center items-center gap-4 py-4'>
            <li className=' flex items-center gap-2 font-medium'>
                <Link className=' flex items-center gap-2 hover:text-primary'>
                    <Home/>
                    <span>Home</span>
                </Link>
                <span>
                    <ChevronRight/>
                </span>
            </li>
            <li className=' flex items-center gap-2 font-medium'>
                <Link className=' hover:text-primary'>
                    <span>My account</span>
                </Link>
                <span>
                    <ChevronRight/>
                </span>
            </li>
            <li className=' font-medium'>
                All orders
            </li>
        </ul>
      </header>
      <h1 className=' mb-5 text-2xl font-medium text-primary'>My Orders</h1>
      <main className=' flex gap-8'>
        <nav className=' sidenav left-0 h-screen bg-gray bg-opacity-10 px-4 border border-graybg border-opacity-15 rounded-md max-lg:hidden'>
            <div className=' py-4 pb-2'>
                <Link className=' flex justify-between gap-4 items-center rounded-md hover:bg-gray hover:bg-opacity-10 text-primary py-1 px-2'>
                    <div className=' flex items-center gap-4'>
                        <div className=' w-10 h-10 rounded-lg'>
                            <img src="" alt="" className=' h-full w-full rounded-lg' />
                        </div>
                        <span>
                            <span>Name</span>
                            <p>Email</p>
                        </span>
                    </div>
                    <span className=''>
                        <span><UnfoldMore />
                        </span>
                        <span className=' hidden'><UnfoldLess /></span>
                    </span>
                </Link>
            </div>
            <hr className=' border-graybg border-opacity-20' />
            <div className=' my-4 grid grid-cols-3 gap-4 w-full'>
                <div className=' bg-lightcyan bg-opacity-15 hover:bg-lightcyan hover:bg-opacity-30 cursor-pointer py-2 rounded-lg'>
                    <Link className=' flex flex-col justify-center items-center gap-2'>
                        <span className=' bg-lightcyan bg-opacity-30 rounded-full flex justify-center items-center w-8 h-8 text-primary'><ManageAccounts fontSize='small' /></span>
                        <span className=' text-primary font-medium'>Profile</span>
                    </Link>
                </div>
                <div className=' bg-lightviolet bg-opacity-15 hover:bg-lightviolet hover:bg-opacity-30 cursor-pointer py-2 rounded-lg'>
                    <Link className=' flex flex-col justify-center items-center gap-2'>
                        <span className=' bg-lightviolet bg-opacity-25 rounded-full flex justify-center items-center w-8 h-8 text-primary'><Redeem fontSize='small' /></span>
                        <span className=' text-primary font-medium'>Gifts</span>
                    </Link>
                </div>
                <div className=' bg-lightteal bg-opacity-15 hover:bg-lightteal hover:bg-opacity-30 cursor-pointer py-2 rounded-lg'>
                    <Link className=' flex flex-col justify-center items-center gap-2'>
                        <span className=' bg-lightteal bg-opacity-20 rounded-full flex justify-center items-center w-8 h-8 text-primary'><AccountBalanceWallet fontSize='small' /></span>
                        <span className=' text-primary font-medium'>Wallet</span>
                    </Link>
                </div>
            </div>
            <hr className=' border-graybg border-opacity-20' />
            <div className=' my-4'>
                <ul className=' flex flex-col gap-2 w-full'>
                    <li className=''>
                        <Link className='block w-full hover:bg-gray hover:bg-opacity-25 py-1 px-1 rounded-md text-gray hover:text-primary font-medium'>
                            <span className=' pr-4'><LocalShipping /></span>
                            <span className=' text-graybg'>My orders</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='block w-full hover:bg-gray hover:bg-opacity-25 py-1 px-1 rounded-md text-gray hover:text-primary font-medium'>
                            <span className=' pr-4'><StarOutline /></span>
                            <span className=' text-graybg'>Reviews</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='block w-full hover:bg-gray hover:bg-opacity-25 py-1 px-1 rounded-md text-gray hover:text-primary font-medium'>
                            <span className=' pr-4'><HomeOutlined /></span>
                            <span className=' text-graybg'>Delivery addresses</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='block w-full hover:bg-gray hover:bg-opacity-25 py-1 px-1 rounded-md text-gray hover:text-primary font-medium'>
                            <span className=' pr-4'><VisibilityOutlined /></span>
                            <span className=' text-graybg'>Recently viewed</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='block w-full hover:bg-gray hover:bg-opacity-25 py-1 px-1 rounded-md text-gray hover:text-primary font-medium'>
                            <span className=' pr-4'><FavoriteBorder /></span>
                            <span className=' text-graybg'>Favourite items</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className=' border-graybg border-opacity-20' />
        <div className=' my-4'>
            <ul className=' flex flex-col gap-2'>
                <li className=''>
                    <Link className='block w-full hover:bg-gray hover:bg-opacity-25 py-1 px-1 rounded-md text-gray hover:text-primary font-medium'>
                        <span className=' pr-4'><SettingsOutlined /></span>
                        <span className=' text-graybg'>Settings</span>
                    </Link>
                </li>
                <li className=''>
                    <Link className='block w-full hover:bg-gray hover:bg-opacity-25 py-1 px-1 rounded-md text-red text-opacity-70 font-medium'>
                        <span className=' pr-4'><LogoutOutlined /></span>
                        <span className=''>Log out</span>
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
        <section className='right-section right-0 top-0 max-lg:w-full'>
            <div className=' flex justify-between max-lg:flex-col gap-4'>
                <div className=' w-1/2 max-lg:w-full relative'>
                    <input type="text" className=' w-full py-2 relative rounded-md pr-16 pl-8 focus:outline-lightgreen bg-gray bg-opacity-20 border border-gray border-opacity-15 text-primary' placeholder='Search by order ID' />
                    <span className=' absolute left-0 px-1 pt-2 text-primary'><SearchOutlined /></span>
                    <span className='bg-lightgreen absolute right-0 h-auto px-2 py-2 text-primary font-medium rounded-r-md'>Search</span>
                </div>
                <div className=' flex items-center gap-6 max-lg:w-full'>
                    <div className=' max-lg:w-1/2'>
                        <Link className=' flex items-center max-lg:justify-center gap-2 bg-gray bg-opacity-20 border border-gray border-opacity-15 rounded-md px-2 py-2'>
                            <span className=' text-primary font-medium flex gap-2'>
                                <FilterAltOutlined />
                                Filter by:
                            </span>
                            <span className=' text-primary font-medium'>Completed</span>
                            <span className=' text-primary'>
                                <ExpandMore />
                                <span className='hidden'>
                                    <ExpandLess />
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className=' max-lg:w-1/2'>
                        <Link className=' flex items-center max-lg:justify-center gap-2 bg-gray bg-opacity-20 border border-gray border-opacity-15 rounded-md py-2 px-2'>
                            <span className=' text-primary font-medium '>Last 7 days</span>
                            <span className='text-primary'>
                                <ExpandMore />
                                <span className='hidden'>
                                    <ExpandLess />
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' bg-gray bg-opacity-20 text-primary border border-gray border-opacity-15 rounded-md mt-5 p-4'>
                <div className=''>
                    <div className=' flex justify-between items-center pb-4'>
                        <div className=' flex gap-2 items-center'>
                            <span className=' text-xl font-light text-gray text-opacity-60'>Order ID:
                                <span className=' text-primary text-lg font-normal'> #BCUBYBCS</span>
                            </span>
                            <span className=' bg-lightcyan bg-opacity-25 rounded-md text-sm font-light px-2'>Pre-order</span>
                        </div>
                        <div className=''>
                            <button className=' flex items-center gap-1 text-lightteal text-lg font-normal'>
                                <span><FileDownloadOutlined /></span>
                                Download invoice
                            </button>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 mb-5'>
                        <button className='bg-red p-1 rounded-md'>
                            <Link className=' font-normal'>
                                <span>Cancel order</span>
                            </Link>
                        </button>
                        <button className='border border-gray border-opacity-15 p-1 rounded-md'>
                            <Link className=' font-normal text-gray text-opacity-60 hover:text-primary'>
                                <span className=' flex items-center gap-1'>
                                    <span className=''>
                                    <Receipt fontSize='' />
                                    </span>
                                    Track order
                                </span>
                            </Link>
                        </button>
                        <button className='border border-gray border-opacity-15 p-1 rounded-md'>
                            <Link className=' font-normal text-gray text-opacity-60 hover:text-primary'>
                                <span>Order details</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <hr className=' border-gray border-opacity-30' />
                <div className=' mt-5'>
                    <div className=' flex justify-between items-center gap-4 pb-5'>
                        <span className=' inline-flex gap-2 items-center font-normal text-primary'>
                            Order date:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'>16 july 2024</span>
                        </span>
                        <span className=' inline-flex gap-2 items-center font-normal'>
                            Email:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'> yourmail@gmsil.com</span>
                        </span>
                        <span className='inline-flex items-center gap-2 font-normal'>
                            Payment Method: 
                            <span className=' text-gray text-opacity-60 font-normal'>
                                 <CreditCard />
                                 Credit card
                            </span>
                        </span>
                    </div>
                    <p className='bg-gray bg-opacity-15 p-2 inline-flex items-center gap-2 w-full rounded-md text-lightorange'>
                        <span><LocalShipping /></span>
                        Expected delivery on Monday 23 july 2024
                    </p>
                </div>
            </div>
            <div className=' bg-gray bg-opacity-20 text-primary border border-gray border-opacity-15 rounded-md mt-5 p-4'>
                <div className=''>
                    <div className=' flex justify-between items-center pb-4'>
                        <div className=' flex gap-2 items-center'>
                            <span className=' text-xl font-light text-gray text-opacity-60'>Order ID:
                                <span className=' text-primary text-lg font-normal'> #BCUBYBCS</span>
                            </span>
                            <span className=' bg-gold rounded-md text-lightorange text-opacity- text-sm font-normal inline-flex gap-1 items-center px-2'>
                                <LocalShipping fontSize='' />
                                in transit
                            </span>
                        </div>
                        <div className=''>
                            <button className=' flex items-center gap-1 text-lightteal text-lg font-normal'>
                                <span><FileDownloadOutlined /></span>
                                Download invoice
                            </button>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 mb-5'>
                        <button className='bg-red p-1 rounded-md'>
                            <Link className=' font-normal'>
                                <span>Cancel order</span>
                            </Link>
                        </button>
                        <button className='border border-gray border-opacity-15 p-1 rounded-md'>
                            <Link className=' font-normal text-gray text-opacity-60 hover:text-primary'>
                                <span className=' flex items-center gap-1'>
                                    <span className=''>
                                    <Receipt fontSize='' />
                                    </span>
                                    Track order
                                </span>
                            </Link>
                        </button>
                        <button className='border border-gray border-opacity-15 p-1 rounded-md'>
                            <Link className=' font-normal text-gray text-opacity-60 hover:text-primary'>
                                <span>Order details</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <hr className=' border-gray border-opacity-30' />
                <div className=' mt-5'>
                    <div className=' flex justify-between items-center gap-4 pb-5'>
                        <span className=' inline-flex gap-2 items-center font-normal text-primary'>
                            Order date:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'>16 july 2024</span>
                        </span>
                        <span className=' inline-flex gap-2 items-center font-normal'>
                            Email:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'> yourmail@gmsil.com</span>
                        </span>
                        <span className='inline-flex items-center gap-2 font-normal'>
                            Payment Method: 
                            <span className=' text-gray text-opacity-60 font-normal'>
                                 <CreditCard />
                                 Credit card
                            </span>
                        </span>
                    </div>
                    <p className='bg-gray bg-opacity-15 p-2 inline-flex items-center gap-2 w-full rounded-md text-lightorange'>
                        <span><LocalShipping fontSize='' /></span>
                        Expected delivery Today
                    </p>
                </div>
            </div>
            <div className=' bg-gray bg-opacity-20 text-primary border border-gray border-opacity-15 rounded-md mt-5 p-4'>
                <div className=''>
                    <div className=' flex justify-between items-center pb-4'>
                        <div className=' flex gap-2 items-center'>
                            <span className=' text-xl font-light text-gray text-opacity-60'>Order ID:
                                <span className=' text-primary text-lg font-normal'> #BCUBYBCS</span>
                            </span>
                            <span className=' bg-lightcyan bg-opacity-25 rounded-md text-sm font-thin inline-flex gap-1 items-center px-2'>
                                <Done fontSize='' />
                                Completed
                            </span>
                        </div>
                        <div className=''>
                            <button className=' flex items-center gap-1 text-lightteal text-lg font-normal'>
                                <span><FileDownloadOutlined /></span>
                                Download invoice
                            </button>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 mb-5'>
                        <button className='bg-lightteal bg-opacity-40 p-1 rounded-md'>
                            <Link className=' font-normal'>
                                <span>
                                    <Sync />
                                    Order again
                                </span>
                            </Link>
                        </button>
                        <button className='border border-gray border-opacity-15 p-1 rounded-md'>
                            <Link className=' font-normal text-gray text-opacity-60 hover:text-primary'>
                                <span>Order details</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <hr className=' border-gray border-opacity-30' />
                <div className=' mt-5'>
                    <div className=' flex justify-between items-center gap-4 pb-5'>
                        <span className=' inline-flex gap-2 items-center font-normal text-primary'>
                            Order date:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'>16 july 2024</span>
                        </span>
                        <span className=' inline-flex gap-2 items-center font-normal'>
                            Email:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'> yourmail@gmsil.com</span>
                        </span>
                        <span className='inline-flex items-center gap-2 font-normal'>
                            Payment Method: 
                            <span className=' text-gray text-opacity-60 font-normal'>
                                 <CreditCard />
                                 Credit card
                            </span>
                        </span>
                    </div>
                    <p className='bg-gray bg-opacity-15 p-2 inline-flex items-center gap-2 w-full rounded-md text-gray'>
                        <span><ExpandCircleDownOutlined /></span>
                        Expected delivery on Monday 23 july 2024
                    </p>
                </div>
            </div>
            <div className=' bg-gray bg-opacity-20 text-primary border border-gray border-opacity-15 rounded-md mt-5 p-4'>
                <div className=''>
                    <div className=' flex justify-between items-center pb-4'>
                        <div className=' flex gap-2 items-center'>
                            <span className=' text-xl font-light text-gray text-opacity-60'>Order ID:
                                <span className=' text-primary text-lg font-normal'> #BCUBYBCS</span>
                            </span>
                            <span className=' bg-red bg-opacity-25 rounded-md text-sm font-thin inline-flex gap-1 items-center px-2'>
                                <Clear fontSize='' />
                                Cancelled
                            </span>
                        </div>
                        <div className=''>
                            <button className=' flex items-center gap-1 text-lightteal text-lg font-normal'>
                                <span><FileDownloadOutlined /></span>
                                Download invoice
                            </button>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 mb-5'>
                        <button className='bg-lightteal bg-opacity-40 p-1 rounded-md'>
                            <Link className=' font-normal'>
                                <span>
                                    <Sync />
                                    Order again
                                </span>
                            </Link>
                        </button>
                        <button className='border border-gray border-opacity-15 p-1 rounded-md'>
                            <Link className=' font-normal text-gray text-opacity-60 hover:text-primary'>
                                <span>Order details</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <hr className=' border-gray border-opacity-30' />
                <div className=' mt-5'>
                    <div className=' flex justify-between items-center gap-4 pb-5'>
                        <span className=' inline-flex gap-2 items-center font-normal text-primary'>
                            Order date:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'>16 july 2024</span>
                        </span>
                        <span className=' inline-flex gap-2 items-center font-normal'>
                            Email:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'> yourmail@gmsil.com</span>
                        </span>
                        <span className='inline-flex items-center gap-2 font-normal'>
                            Payment Method: 
                            <span className=' text-gray text-opacity-60 font-normal'>
                                 <CreditCard />
                                 Credit card
                            </span>
                        </span>
                    </div>
                    <p className='bg-gray bg-opacity-15 p-2 inline-flex items-center gap-2 w-full rounded-md text-gray'>
                        <span><ExpandCircleDownOutlined /></span>
                        Expected delivery on Monday 23 july 2024
                    </p>
                </div>
            </div>
            <div className=' bg-gray bg-opacity-20 text-primary border border-gray border-opacity-15 rounded-md mt-5 p-4'>
                <div className=''>
                    <div className=' flex justify-between items-center pb-4'>
                        <div className=' flex gap-2 items-center'>
                            <span className=' text-xl font-light text-gray text-opacity-60'>Order ID:
                                <span className=' text-primary text-lg font-normal'> #BCUBYBCS</span>
                            </span>
                            <span className=' bg-lightcyan bg-opacity-25 rounded-md text-sm font-thin inline-flex gap-1 items-center px-2'>
                                <Done fontSize='' />
                                Completed
                            </span>
                        </div>
                        <div className=''>
                            <button className=' flex items-center gap-1 text-lightteal text-lg font-normal'>
                                <span><FileDownloadOutlined /></span>
                                Download invoice
                            </button>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 mb-5'>
                        <button className='bg-lightteal bg-opacity-40 p-1 rounded-md'>
                            <Link className=' font-normal'>
                                <span>
                                    <Sync />
                                    Order again
                                </span>
                            </Link>
                        </button>
                        <button className='border border-gray border-opacity-15 p-1 rounded-md'>
                            <Link className=' font-normal text-gray text-opacity-60 hover:text-primary'>
                                <span>Order details</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <hr className=' border-gray border-opacity-30' />
                <div className=' mt-5'>
                    <div className=' flex justify-between items-center gap-4 pb-5'>
                        <span className=' inline-flex gap-2 items-center font-normal text-primary'>
                            Order date:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'>16 july 2024</span>
                        </span>
                        <span className=' inline-flex gap-2 items-center font-normal'>
                            Email:
                            <span className=' text-gray text-opacity-60 font-normal text-lg'> yourmail@gmsil.com</span>
                        </span>
                        <span className='inline-flex items-center gap-2 font-normal'>
                            Payment Method: 
                            <span className=' text-gray text-opacity-60 font-normal'>
                                 <CreditCard />
                                 Credit card
                            </span>
                        </span>
                    </div>
                    <p className='bg-gray bg-opacity-15 p-2 inline-flex items-center gap-2 w-full rounded-md text-gray'>
                        <span><ExpandCircleDownOutlined /></span>
                        Expected delivery on Monday 23 july 2024
                    </p>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}

export default MyOrder
