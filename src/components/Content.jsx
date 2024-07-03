import React, { useEffect, useState } from 'react'
import Loader from '../assets/imgs/download.svg'
import PlayStore from '../assets/imgs/play_store.png'
import AppStore from '../assets/imgs/app-store.png'
import Food1 from '../assets/imgs/food1.jpg'
import Food2 from '../assets/imgs/food_2.jpg'
import Food3 from '../assets/imgs/food_3.jpg'
import FoodApp from '../assets/imgs/food-app.gif'
import Drink from '../assets/imgs/drink.svg'
import Phoneimg from '../assets/imgs/image.webp'
import Promocode from '../assets/imgs/Promo-code.svg'
import Apple from '../assets/imgs/apple.svg'
import Playstore from '../assets/imgs/playstore.svg'
import { Link } from 'react-router-dom';
import { ArrowBack, ArrowDownward, ArrowForward, ChevronRight, ShoppingCart } from '@mui/icons-material'



const Content = () => {
    const data = [
        { text: 'Text 1', image: Food1},
        { text: 'Text 2', image: Food2},
        { text: 'Text 3', image: Food3},
    ];

    const [newIndex, setNewIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setNewIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, [data]);

    const handleNext = () => {
        setNewIndex((prevIndex) => (prevIndex + 1) % data.length);
      };
    
      const handlePrev = () => {
        setNewIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      };
    



    const texts = ['You don chop?', 'Have U eaten?', 'Iriela Nri?', 'Kun ci abinci?', 'Se o ti jeun?'];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3500);
    
        return () => clearInterval(intervalId);
    }, [texts]);
    
  return (
    <div className=' relative'>
      <div className="flex h-full justify-center items-center pt-0 mt-0 relative">
        <div className='relative w-full h-screen max-md:h-96'>
            <img src={Loader} alt="" className=' w-full h-full' />
        </div>
        <div className='absolute top-28 '>
            <p className=" text-8xl max-md:text-4xl font-bold">{texts[currentIndex]}</p>
        </div>
        <button className=' absolute mt-10 flex gap-8'>
            <Link className=' px-16 py-4 max-md:px-8 rounded-lg bg-background text-primary font-semibold text-2xl'>Book Now</Link>
            <Link className=' px-16 py-4 max-md:px-8 rounded-lg bg-background text-primary font-semibold text-2xl'>Order Now</Link>
        </button>
        </div>
        <div>
        </div>
        <main className=' my-12'>
            <div className=' py-8 text-center text-6xl max-md:text-3xl font-bold'>
                <h2>Try the app</h2>
            </div>
            <div className=' text-center pb-8'>
                <p className=' text-center font-normal text-xl text-balance max-md:text-sm max-md:text-center'>
                    Experience the convenience of swift delivery from numerous restaurants, featuring a broad spectrum of cuisines, including African, Continental, and many more! <br />Your cravings will be satisfied in no time.
                </p>
            </div>
            <div className=' flex justify-center items-center gap-8 px-4'>
                <button className="flex items-center border border-primary py-2 px-4 rounded-lg bg-accent">
                    <img
                    src={AppStore}
                    alt="Button Image"
                    className="w-40 h-10 object-cover rounded-lg"
                    />
                </button>
                <button className="flex items-center border border-gray-300 py-2 px-4 rounded-lg bg-accent">
                    <img
                    src={PlayStore}
                    alt="Button Image"
                    className="w-40 h-10 object-cover rounded-lg"
                    />
                </button>
            </div>
            <div className=' flex justify-center items-center mt-8'>
                <div className=' border border-primary py-4 px-4 rounded-3xl bg-accent'>
                    <img src={FoodApp} alt="" className='w-96 h-screen max-md:h-96 max-lg:w-48 rounded-3xl bg-primary relative' />
                </div>
                <div className=' w-96 max-lg:w-48 h-screen max-md:h-96 bg-accent bg-opacity-40 absolute flex justify-center rounded-3xl'>
                    <span className=' flex justify-center text-center items-center text-primary font-normal text-2xl'>Coming soon...</span>
                </div>
            </div>
        </main>
        <div className=' my-8'>
            <div className=' py-8 max-lg:py-4'>
                <h1 className=' flex justify-center items-center text-6xl max-lg:text-3xl max-lg:font-normal font-medium text-gray text-center'>
                    Join our growing network
                    <span className=' pt-5 max-lg:pt-2'><svg className=' max-lg:h-8 max-lg:w-8' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#B7B7B7"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg></span>
                </h1>
            </div>
            <section className=' grid grid-cols-3 gap-8 justify-center max-lg:flex max-lg:flex-wrap max-lg:justify-center px-8 mb-40 max-md:mb-20'>
                <div className=' flex flex-col max-lg:w-11/12 max-sm:w-full shadow-md bg-primary rounded p-4'>
                    <div className=' '>
                        <img src="" alt="" className=' w-full h-40' />
                    </div>
                    <div className=' border-t-2 border-gray-100'>
                        <span>icon</span>
                        <h2>Text</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eaque obcaecati neque sequi architecto, est non error distinctio, voluptates qui quia, enim deserunt quas doloribus consectetur temporibus. Mollitia ipsam culpa deserunt quo iusto fugit, dolorem, atque perferendis, facilis impedit a?
                        </p>
                        <button className=' my-4 p-2 rounded-xl'>
                            <span className=' font-medium text-xl'>see more <span><ChevronRight /></span></span>
                        </button>
                    </div>
                </div>
                <div className=' flex flex-col max-lg:w-11/12 max-sm:w-full shadow-md bg-primary rounded p-4'>
                    <div className=''>
                        <img src="" alt="" className=' w-full h-40' />
                    </div>
                    <div className=' border-t-2 border-gray-100'>
                        <span>icon</span>
                        <h2>Text</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eaque obcaecati neque sequi architecto, est non error distinctio, voluptates qui quia, enim deserunt quas doloribus consectetur temporibus. Mollitia ipsam culpa deserunt quo iusto fugit, dolorem, atque perferendis, facilis impedit a?
                        </p>
                        <button className=' my-4 p-2 rounded-xl'>
                            <span className=' font-medium text-xl'>see more <span><ChevronRight /></span></span>
                        </button>
                    </div>
                </div>
                <div className=' flex flex-col max-lg:w-11/12 max-sm:w-full shadow-md bg-primary rounded p-4'>
                    <div className=''>
                        <img src="" alt="" className=' w-full h-40' />
                    </div>
                    <div className=' border-t-2 border-gray-100'>
                        <span>icon</span>
                        <h2>Text</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eaque obcaecati neque sequi architecto, est non error distinctio, voluptates qui quia, enim deserunt quas doloribus consectetur temporibus. Mollitia ipsam culpa deserunt quo iusto fugit, dolorem, atque perferendis, facilis impedit a?
                        </p>
                        <button className=' my-4 p-2 rounded-xl'>
                            <span className=' font-medium text-xl'>see more <span><ChevronRight /></span></span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
       <div className=' relative'>
        <div className="flex h-96 max-md:h-auto justify-center items-center px-8 rounded-2xl absolute max-md:-top-10 z-20 w-full max-md:left-4 max-lg:left-8 max-lg:w-11/12 max-sm:w-full max-sm:left-0">
                <div className=" absolute text-3xl font-bold z-10">{data[newIndex].text}</div>
                <img
                    src={data[newIndex].image}
                    alt="Image"
                    className=" relative w-full h-lvh max-md:h-80 object-cover rounded-2xl"
                />
                <div className=' absolute -bottom-16 max-md:bottom-2 right-10 flex gap-4'>
                    <button onClick={handleNext}>
                        <span className=' bg-secondary text-primary rounded-full flex items-center p-3'><ArrowBack /></span>
                    </button>
                    <button onClick={handlePrev}>
                        <span className=' bg-secondary text-primary rounded-full flex items-center p-3'><ArrowForward /></span>
                    </button>
                </div>
            </div>
            <div className=' relative z-10 bg-background h-lvh max-md:h-80 px-8'>
            </div>
            <div className='bg-background pb-16 pt-4 px-4 relative h-auto'>
                <div className=' flex items-center max-lg:flex-col max-lg:items-start max-lg:px-12 gap-8 w-full'>
                    <h1 className=' w-1/2 text-7xl max-lg:text-3xl font-bold text-primary'>Chowdeck got you covered</h1>
                    <p className=' w-1/2 max-lg:w-full text-3xl max-lg:text-base font-normal text-primary'>
                        Are you Hungry? Not fit to cook? Have visitors, or u wan just chop life? Download chowdeck lets deliver happiness to your doorstep in minutes
                    </p>
                </div>
            </div>
            <div className=' flex items-center max-lg:flex-wrap max-lg:justify-center gap-4 my-16 px-4 max-lg:px-8'>
                <div className=' w-1/3 max-lg:w-11/12 max-sm:w-full border-4 border-accent rounded-lg'>
                    <h1 className=' flex items-center gap-2 text-xl font-medium p-4 pb-2'>
                        <div className=' w-4 h-4 rounded-full border-4 border-accent bg-red'>
                            {/* <div className='w-2 h-2 flex items-center rounded-full '></div> */}
                        </div>
                        Text 1
                    </h1>
                    <hr className=' border-2' />
                    <div className=' text-accent flex flex-col p-2 gap-4'>
                        <Link className=' flex justify-between p-4 border border-gray rounded-lg'>
                            <span className=' text-xl font-light'>Food area</span>
                            <button className=' bg-lightgreen bg-opacity-20 flex items-center p-2 rounded-full text-background'><ShoppingCart /></button>
                        </Link>
                        <Link className=' flex justify-between items-center p-4 border border-gray rounded-lg'>
                            <span className=' text-xl font-light'>Food area</span>
                            <button className=' bg-lightgreen bg-opacity-20 flex items-center p-2 rounded-full text-background'><ShoppingCart /></button>
                        </Link>
                    </div>
                </div>
                <div className=' w-1/3 max-lg:w-11/12 max-sm:w-full border-4 border-accent rounded-lg'>
                    <h1 className=' flex items-center gap-2 text-xl font-medium p-4 pb-2'>
                        <div className=' w-4 h-4 rounded-full border-4 border-accent bg-red'>
                            {/* <div className='w-2 h-2 flex items-center rounded-full bg-red'></div> */}
                        </div>
                        Text 1
                    </h1>
                    <hr className=' border-2' />
                    <div className=' text-accent flex flex-col p-2 gap-4'>
                        <Link className=' flex justify-between p-4 border border-gray rounded-lg'>
                            <span className=' text-xl font-light'>Food area</span>
                            <button className=' bg-lightgreen bg-opacity-20 flex items-center p-2 rounded-full text-background'><ShoppingCart /></button>
                        </Link>
                        <Link className=' flex justify-between items-center p-4 border border-gray rounded-lg'>
                            <span className=' text-xl font-light'>Food area</span>
                            <button className=' bg-lightgreen bg-opacity-20 flex items-center p-2 rounded-full text-background'><ShoppingCart /></button>
                        </Link>
                    </div>
                </div>
                <div className=' w-1/3 max-lg:w-11/12 max-sm:w-full border-4 border-accent rounded-lg'>
                    <h1 className=' flex items-center gap-2 text-xl font-medium p-4 pb-2'>
                        <div className=' w-4 h-4 rounded-full border-4 border-accent bg-red'>
                            {/* <div className='w-2 h-2 flex items-center rounded-full bg-red'></div> */}
                        </div>
                        Text 1
                    </h1>
                    <hr className=' border-2' />
                    <div className=' text-accent flex flex-col p-2 gap-4'>
                        <Link className=' flex justify-between p-4 border border-gray rounded-lg'>
                            <span className=' text-xl font-light'>Food area</span>
                            <button className=' bg-lightgreen bg-opacity-20 flex items-center p-2 rounded-full text-background'><ShoppingCart /></button>
                        </Link>
                        <Link className=' flex justify-between items-center p-4 border border-gray rounded-lg'>
                            <span className=' text-xl font-light'>Food area</span>
                            <button className=' bg-lightgreen bg-opacity-20 flex items-center p-2 rounded-full text-background'><ShoppingCart /></button>
                        </Link>
                    </div>
                </div>                    
            </div>
            <div className=' px-4 max-lg:px-8 mb-16'>
                <div className=' py-8 max-md:px-8'>
                    <h1 className=' text-7xl max-md:text-4xl font-bold'>Stories</h1>
                </div>
                <div className=' flex items-center max-lg:flex-wrap max-lg:justify-center gap-4'>
                    <div className=' w-1/3 max-lg:w-11/12 max-sm:w-full border-4 border-accent rounded-lg pb-2'>
                        <div className=' w-full border rounded-t-lg'>
                            <img src="" alt="dsp image" className='h-40 rounded-t-lg object-cover' />
                        </div>
                        <div className=' px-4 py-2'>
                            <h1 className=' text-xl font-semibold pb-2'>For heading</h1>
                            <p className=' text-lg font-normal text-grayTxt'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui.
                            </p>
                        </div>
                        <div className=' px-4'>
                            <button className=' bg-lightgreen bg-opacity-15 hover:bg-background w-full py-3 rounded-lg text-background hover:text-primary'>
                                <Link className=' font-semibold'>Read more</Link>
                            </button>
                        </div>
                    </div>
                    <div className=' w-1/3 max-lg:w-11/12 max-sm:w-full border-4 border-accent rounded-lg pb-2'>
                        <div className=' w-full border rounded-t-lg'>
                            <img src="" alt="dsp image" className='h-40 rounded-t-lg object-cover' />
                        </div>
                        <div className=' px-4 py-2'>
                            <h1 className=' text-xl font-semibold pb-2'>For heading</h1>
                            <p className=' text-lg font-normal text-grayTxt'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui.
                            </p>
                        </div>
                        <div className=' px-4'>
                            <button className=' bg-lightgreen bg-opacity-15 hover:bg-background w-full py-3 rounded-lg text-background hover:text-primary'>
                                <Link className=' font-semibold'>Read more</Link>
                            </button>
                        </div>
                    </div>
                    <div className=' w-1/3 max-lg:w-11/12 max-sm:w-full border-4 border-accent rounded-lg pb-2'>
                        <div className=' w-full border rounded-t-lg'>
                            <img src="" alt="dsp image" className='h-40 rounded-t-lg object-cover' />
                        </div>
                        <div className=' px-4 py-2'>
                            <h1 className=' text-xl font-semibold pb-2'>For heading</h1>
                            <p className=' text-lg font-normal text-grayTxt'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui.
                            </p>
                        </div>
                        <div className=' px-4'>
                            <button className=' bg-lightgreen bg-opacity-15 hover:bg-background w-full py-3 rounded-lg text-background hover:text-primary'>
                                <Link className=' font-semibold'>Read more</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-accent h-auto pt-20 pb-10'>
                <div className=' px-4 max-lg:px-8 h-auto mb-12'>
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-lg:flex max-lg:justify-center'>
                        <div className=' bg-background rounded-3xl relative max-lg:w-11/12 max-sm:w-full'>
                            <h1 className=' text-6xl max-md:text-3xl max-md:pr-10 font-bold p-8 pr-32'>Place your order in second</h1>
                            <div className=' p-8'>
                                <div className=' flex items-start gap-4 flex-col max-md:flex-row'>
                                    <Link className=' bg-primary py-3 px-2 rounded-lg flex items-center gap-2 max-md:rounded-full max-md:px-3'>
                                        <span className=' max-md:flex max-md:item-center max-md:justify-center'>
                                            <img src={Playstore} alt="" className=' w-8 h-8' />
                                        </span>
                                        <span className=' max-md:hidden text-background'>
                                            Download on Googleplay
                                        </span>
                                    </Link>
                                    <Link className=' bg-primary py-3 px-2 rounded-lg flex items-center gap-2 max-md:rounded-full max-md:px-3'>
                                        <span className=' max-md:flex max-md:item-center max-md:justify-center'>
                                            <img src={Apple} alt="" className=' w-8 h-8' />
                                        </span>
                                        <span className=' max-md:hidden text-background'>
                                            Download on App Store
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className=' mt-12 px-8 max-lg:pb-4'>
                                <div className=' flex items-start flex-col gap-4'>
                                    <img src={Promocode} alt=""  />
                                    <div>
                                        <p className=' border w-32 flex items-center py-3 gap-2 px-3 rounded-lg bg-secondary'>
                                            <div className=' border-4 rounded-full p-1 bg-background'></div>
                                            <span className=' font-semibold'>LGHDEN</span>
                                        </p>
                                        <p className=' text-xl font-normal pr-40 max-md:pr-10'>Get <span className=' font-medium text-secondary'>&#8358;300 off</span> your first order when you use this promo code</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-96 max-md:h-48 p-0 m-0 absolute right-3 bottom-2'>
                                <img src={Drink} alt="" className='h-full' />
                            </div>
                        </div>
                        <div className=' max-lg:hidden'>
                            <img src={Phoneimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Content
