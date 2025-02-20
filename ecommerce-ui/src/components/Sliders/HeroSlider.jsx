import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import "slick-carousel"; // Import slick-carousel JavaScript
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  useEffect(() => {
    // Initialize the slick slider when the component mounts
    $('.slides').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      
    });
    // Cleanup on unmount
    return () => {
      $(".slick-slider").slick("unslick"); // Destroy the slick slider on unmount
    };
  }, []);

  return (
    <div className="homebannerslider pl-20 sm:p-0 sm:my-6 md:p-0 lg:pl-0">
        <div className="slides">
            <div className="slider">
                <div className="image-section bg-default-gold rounded-md relative">
                    <img src="src/images/Vesitables.jpg" alt="Fruites" className='rounded-md w-full'/>
                    <Link to="/" className="px-4 py-2 text-white text-2xl rounded-md font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gold-gradient">Vesitables</Link>
                </div>
            </div>
            <div className="slider">
                <div className="image-section bg-default-gold rounded-md relative">
                    <img src="src/images/Fruites.png" alt="Fruites" className='rounded-md w-full'/>
                    <Link to="/" className="px-4 py-2 text-white text-2xl rounded-md font-semibold absolute abso top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gold-gradient">Fruits</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSlider