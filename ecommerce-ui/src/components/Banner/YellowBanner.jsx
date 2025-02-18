import React from 'react'
import { Link } from 'react-router-dom'

const YellowBanner = () => {
  return (
    <>
        <div className="bannersection py-12 bg-default-gold">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 items-center sm:grid-cols-1 gap-y-8">
                    <div className="banner-content pr-14 md:p-0">
                        <h5 className='text-6xl text-white font-semibold sm:text-5xl'>Fresh Exotic Fruits<span className='text-gray-600 font-medium my-8 block'>in Our Store</span></h5>
                        <p className='text-gray-600'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                        <Link to="/" className='mt-10 px-10 font-semibold py-3 inline-block uppercase border-2 border-white rounded-full hover:bg-default-green duration-300 ease-in-out'>Buy</Link>
                    </div>
                    <div className="banner-poster relative">
                        <img src="src//images/baner-1.png" alt="baner" className='w-full'/>
                        <div className="bannerOffer w-[140px] h-[140px] rounded-full bg-white absolute top-0 flex left-0 items-center justify-center">
                            <h3 className='text-8xl text-gray-600 font-semibold'>1</h3>
                            <div className="flex flex-col">
                                <span className='text-3xl font-semibold'>50$</span>
                                <span className='text-2xl font-semibold text-gray-500'>kg</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default YellowBanner