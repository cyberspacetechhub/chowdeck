import React from 'react'
import { Link } from 'react-router-dom'
import MedPlus2 from '../assets/imgs/med-plus.png'
const Footer = () => {
  return (
    <div className=' relative z-0'>
      <hr className=' my-6 w-full' />
      <footer>
        {/* <div className=' bg-black bg-opacity-20 h-full w-full absolute'></div> */}
        <div>
            <div className=' flex justify-center gap-8 flex-wrap '>
                <div className=''>
                    <img src={MedPlus2} alt="" className=' max-md:w-full' />
                </div>
                <div className=' flex flex-wrap gap-8 px-2'>
                    <div className=' px-2 max-md:w-2/5'>
                        <h2 className=' py-2 text-xl font-semibold'>Locations</h2>
                        <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>King Glad Maryland</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Unilag</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Alagejomi</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Aba</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Ijebu</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Enugu</Link>
                            </li>
                        </ul>
                        <button className=' my-4 underline text-cyan-600 text-sm'>see more</button>
                    </div>
                    <div className=' px-2 max-md:w-2/5'>
                        <h2 className=' py-2 text-xl font-semibold'>Download</h2>
                        <ul className=' flex flex-col gap-3 '>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Google Play Store</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>iOS App Store</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=' px-2 max-md:w-2/5'>
                        <h2 className=' py-2 text-xl font-semibold'>Get Help</h2>
                        <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>King Glad Maryland</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Unilag</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=' pl-2 max-md:w-2/5'>
                        <h2 className=' py-2 text-xl font-semibold'>Legal</h2>
                        <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className=' font-normal text-gray-500 hover:underline'>Terms of use</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

