import React from 'react';
import Slider from 'react-slick'; // Import react-slick Slider
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// Slider settings for react-slick
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1025, // iPads, Tablets, etc. (screen width < 1024px)
      settings: {
        slidesToShow: 2, // Show 2 slides
        slidesToScroll: 2, // Scroll 2 slides
      }
    },
    {
      breakpoint: 821, // Mobile devices (screen width < 768px)
      settings: {
        slidesToShow: 1, // Show 1 slide
        slidesToScroll: 1, // Scroll 1 slide
        arrows: true, // Hide arrows on mobile
        autoplay: true, // Enable autoplay on mobile
      }
    },
  ]
};

const Reviews = () => {
  return (
    <>
      <div className="testmonial-section py-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl m-auto">
            <span className='text-default-green text-2xl font-medium'>Our Testimonial</span>
            <h2 className="text-gray-600 text-5xl font-semibold mb-4 mt-2">
              Our Client Saying!
            </h2>
          </div>

          {/* React-slick Slider */}
          <Slider {...sliderSettings} className="testimonial-slider -mx-4">
            {/* Slide 1 */}
            <div className="testimonial-slides bg-theme-gray p-5 rounded-lg">
              <p className='text-md border-b border-default-gold pb-5'>
                Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="users grid grid-cols-2 items-center">
                <div className="user flex mt-5 gap-5 items-center">
                  <div className="user-img rounded-lg overflow-hidden">
                    <img src="src/images/testimonial-1.jpg" alt="testimonial" className='w-[100px] h-[100px] sm:object-cover'/>
                  </div>
                  <div className="userprofesional">
                    <h4 className='text-2xl font-semibold sm:text-xl'>Client Name</h4>
                    <span className='my-1 block'>Profession</span>
                  </div>
                </div>
                <div className="quoteicon text-right">
                  <FontAwesomeIcon icon={faQuoteRight} size='3x' color='#FFB524' />
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="testimonial-slides bg-theme-gray p-5 rounded-lg">
              <p className='text-md border-b border-default-gold pb-5'>
                Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="users grid grid-cols-2 items-center">
                <div className="user flex mt-5 gap-5 items-center">
                  <div className="user-img rounded-lg overflow-hidden">
                    <img src="src/images/testimonial-1.jpg" alt="testimonial" className='w-[100px] h-[100px] sm:object-cover'/>
                  </div>
                  <div className="userprofesional">
                    <h4 className='text-2xl font-semibold sm:text-xl'>Client Name</h4>
                    <span className='my-1 block'>Profession</span>
                  </div>
                </div>
                <div className="quoteicon text-right">
                  <FontAwesomeIcon icon={faQuoteRight} size='3x' color='#FFB524' />
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="testimonial-slides bg-theme-gray p-5 rounded-lg">
              <p className='text-md border-b border-default-gold pb-5'>
                Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="users grid grid-cols-2 items-center">
                <div className="user flex mt-5 gap-5 items-center">
                  <div className="user-img rounded-lg overflow-hidden">
                    <img src="src/images/testimonial-1.jpg" alt="testimonial" className='w-[100px] h-[100px] sm:object-cover'/>
                  </div>
                  <div className="userprofesional">
                    <h4 className='text-2xl font-semibold sm:text-xl'>Client Name</h4>
                    <span className='my-1 block'>Profession</span>
                  </div>
                </div>
                <div className="quoteicon text-right">
                  <FontAwesomeIcon icon={faQuoteRight} size='3x' color='#FFB524' />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Reviews;
