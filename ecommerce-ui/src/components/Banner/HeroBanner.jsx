import React from 'react';
import HeroSlider from '../Sliders/HeroSlider';
const HeroBanner = () => {

return (
    <div className="homeBanner bg-[url(images/hero-img.jpg)] py-28 bg-cover bg-center sm:py-12 md:py-10 xl:py-20">
        <div className="container mx-auto px-4">
            <div className="banner-img-div">
                <div className="grid grid-cols-2 gap-4 sm:block">
                    <div className="content-container pr-16 sm:p-0 md:p-0 xl:pr-0">
                        <div className="bannerheading">
                            <h1 className='text-default-gold text-2xl font-bold'>100% Organic Foods</h1>
                            <div className="content py-9">
                                <p className='text-default-green text-7xl font-semibold md:text-4xl lg:text-5xl'>Organic Veggies & Fruits Foods</p>
                            </div>
                        </div>
                        <div className="newslatter searchfrom sm:w-[80%] w-[85%] xl:w-[50%] md:w-[80%] lg:w-[80%]">
                            <input type="email" name="email" placeholder="Search" id="searchbox" className='p-4 bg-white rounded-full border-2 border-default-gold focus:outline-none w-[85%] sm:w-[70%]'/>
                            <button type="submit" className='bg-default-green hover:bg-default-gold rounded-full text-white border-2 border-default-gold font-semibold p-4 w-[25%] -m-16 sm:w-[50%] sm:-m-12 md:w-[50%] lg:w-[45%] lg:-m-24 xl:w-[50%]'>Search Now</button>
                        </div> 
                    </div>
                    <div className="slider">
                        <HeroSlider />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeroBanner