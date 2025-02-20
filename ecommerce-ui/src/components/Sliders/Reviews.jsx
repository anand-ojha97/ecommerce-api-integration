import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import "slick-carousel"; // Import slick-carousel JavaScript

const Reviews = () => {
    useEffect(() => {
        // Initialize the slick slider when the component mounts
        $('.testimonial-slider').slick({
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
                        slidesToShow: 2, // Show 3 slides
                        slidesToScroll: 2, // Scroll 2 slides
                    }
                },
                {
                    breakpoint: 821, // Mobile devices (screen width < 768px)
                    settings: {
                        slidesToShow: 1, // Show 2 slides
                        slidesToScroll: 1, // Scroll 1 slide
                        arrows: true, // Hide arrows on mobile
                        autoplay: true, // Enable autoplay on mobile
                    }
                },
            ]
        });
    
        // Cleanup on unmount
        return () => {
            $(".slick-slider").slick("unslick"); // Destroy the slick slider on unmount
        };
    }, []);
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
                    <div className="testimonial-slider -mx-4">
                        <div className="testimonial-slides bg-theme-gray p-5 rounded-lg">
                            <p className='text-md border-b border-default-gold pb-5'>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
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
                        <div className="testimonial-slides bg-theme-gray p-5 rounded-lg">
                            <p className='text-md border-b border-default-gold pb-5'>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
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
                        <div className="testimonial-slides bg-theme-gray p-5 rounded-lg">
                            <p className='text-md border-b border-default-gold pb-5'>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews