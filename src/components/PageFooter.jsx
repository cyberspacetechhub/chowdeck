import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/imgs/Logo+name (dark).svg'

const PageFooter = () => {
  return (
    <div>
        <hr />
        <footer className=''>
        <div className=' px-8 my-8'>
            <div className=' px-4 py-8 flex gap-8 flex-wrap  border border-gray '>
                <div className=' p-4 w-1/3'>
                    <img src={Logo} alt="img" className=' w-72 max-md:w-ful' />
                </div>
                <div className=' flex flex-wrap gap-8 px-2'>
                    <div className=' px-2 max-md:w-2/5'>
                        <h2 className=' py-2 text-xl font-semibold'>COMPANY</h2>
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
                        <h2 className=' py-2 text-xl font-semibold'>CUISINES NEAR YOU</h2>
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
                        <h2 className=' py-2 text-xl font-semibold'>POPULAR</h2>
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

export default PageFooter
