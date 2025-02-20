import React from 'react';
import Slider from 'react-slick'; // Import react-slick Slider
import { Link } from 'react-router-dom';

// Slider settings for react-slick
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

const BannerSlider = () => {
  return (
    <div className="homebannerslider pl-20 sm:p-0 sm:my-6 md:p-0 lg:pl-0">
      <Slider {...sliderSettings}>
        {/* First Slide */}
        <div className="slider">
          <div className="image-section bg-default-gold rounded-md relative">
            <img src="src/images/Vesitables.jpg" alt="Vegetables" className="rounded-md w-full" />
            <Link 
              to="/" 
              className="px-4 py-2 text-white text-2xl rounded-md font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gold-gradient"
            >
              Vegetables
            </Link>
          </div>
        </div>

        {/* Second Slide */}
        <div className="slider">
          <div className="image-section bg-default-gold rounded-md relative">
            <img src="src/images/Fruites.png" alt="Fruits" className="rounded-md w-full" />
            <Link 
              to="/" 
              className="px-4 py-2 text-white text-2xl rounded-md font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gold-gradient"
            >
              Fruits
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default BannerSlider;
