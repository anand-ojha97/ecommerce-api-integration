import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import "slick-carousel"; // Import slick-carousel JavaScript
import { Link } from 'react-router-dom';

const VegitableShop = () => {
    useEffect(() => {
        // Initialize the slick slider when the component mounts
        $('.veitablelslides').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1025, // iPads, Tablets, etc. (screen width < 1024px)
                    settings: {
                        slidesToShow: 3, // Show 3 slides
                        slidesToScroll: 2, // Scroll 2 slides
                    }
                },
                {
                    breakpoint: 821, // Mobile devices (screen width < 768px)
                    settings: {
                        slidesToShow: 2, // Show 2 slides
                        slidesToScroll: 1, // Scroll 1 slide
                        arrows: false, // Hide arrows on mobile
                        autoplay: true, // Enable autoplay on mobile
                    }
                },
                {
                    breakpoint: 600, // Small mobile devices (screen width < 480px)
                    settings: {
                        slidesToShow: 1, // Show 1 slide
                        slidesToScroll: 1, // Scroll 1 slide
                        arrows: true, // Hide arrows on very small screens
                        autoplay: true, // Enable autoplay
                    }
                }
            ]
        });
    
        // Cleanup on unmount
        return () => {
            $(".slick-slider").slick("unslick"); // Destroy the slick slider on unmount
        };
    }, []);
    
  return (
    <>
      <div className="vegitableSlider py-20">
        <div className="container mx-auto px-4">
          <div className="main-heading">
            <h2 className="text-4xl font-semibold">Fresh Organic Vegetables</h2>
          </div>
          <div className="veitablelslides -mx-4">
            <div className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-green">
              <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                <img
                  src="src/images/Whole Wheat Bread.jpg"
                  alt="fruite-item-5"
                  className="hover:scale-120 max-w-full transition-all duration-300 w-full"
                />
                <div className="category text-white bg-default-green px-4 py-1 absolute top-5 right-5 rounded-xl">
                  Bakery
                </div>
              </div>
              <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                <h4 className="text-2xl font-semibold">Whole Wheat Bread</h4>
                <p className="text-gray-600 py-5">
                  Whole wheat bread, rich in fiber and perfect for making
                  healthy sandwiches.
                </p>
                <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                  <span className="font-semibold text-xl">$4.99 / loaf</span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-green px-3 py-2"
                  >
                    <span className="pl-3 font-semibold text-default-green">
                      Add to cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-green">
              <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                <img
                  src="src/images/Whole Wheat Bread.jpg"
                  alt="fruite-item-5"
                  className="hover:scale-120 max-w-full transition-all duration-300 w-full"
                />
                <div className="category text-white bg-default-green px-4 py-1 absolute top-5 right-5 rounded-xl">
                  Bakery
                </div>
              </div>
              <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                <h4 className="text-2xl font-semibold">Whole Wheat Bread</h4>
                <p className="text-gray-600 py-5">
                  Whole wheat bread, rich in fiber and perfect for making
                  healthy sandwiches.
                </p>
                <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                  <span className="font-semibold text-xl">$4.99 / loaf</span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-green px-3 py-2"
                  >
                    <span className="pl-3 font-semibold text-default-green">
                      Add to cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-green">
              <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                <img
                  src="src/images/Whole Wheat Bread.jpg"
                  alt="fruite-item-5"
                  className="hover:scale-120 max-w-full transition-all duration-300 w-full"
                />
                <div className="category text-white bg-default-green px-4 py-1 absolute top-5 right-5 rounded-xl">
                  Bakery
                </div>
              </div>
              <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                <h4 className="text-2xl font-semibold">Whole Wheat Bread</h4>
                <p className="text-gray-600 py-5">
                  Whole wheat bread, rich in fiber and perfect for making
                  healthy sandwiches.
                </p>
                <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                  <span className="font-semibold text-xl">$4.99 / loaf</span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-green px-3 py-2"
                  >
                    <span className="pl-3 font-semibold text-default-green">
                      Add to cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-green">
              <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                <img
                  src="src/images/Whole Wheat Bread.jpg"
                  alt="fruite-item-5"
                  className="hover:scale-120 max-w-full transition-all duration-300 w-full"
                />
                <div className="category text-white bg-default-green px-4 py-1 absolute top-5 right-5 rounded-xl">
                  Bakery
                </div>
              </div>
              <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                <h4 className="text-2xl font-semibold">Whole Wheat Bread</h4>
                <p className="text-gray-600 py-5">
                  Whole wheat bread, rich in fiber and perfect for making
                  healthy sandwiches.
                </p>
                <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                  <span className="font-semibold text-xl">$4.99 / loaf</span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-green px-3 py-2"
                  >
                    <span className="pl-3 font-semibold text-default-green">
                      Add to cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-green">
              <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                <img
                  src="src/images/Whole Wheat Bread.jpg"
                  alt="fruite-item-5"
                  className="hover:scale-120 max-w-full transition-all duration-300 w-full"
                />
                <div className="category text-white bg-default-green px-4 py-1 absolute top-5 right-5 rounded-xl">
                  Bakery
                </div>
              </div>
              <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                <h4 className="text-2xl font-semibold">Whole Wheat Bread</h4>
                <p className="text-gray-600 py-5">
                  Whole wheat bread, rich in fiber and perfect for making
                  healthy sandwiches.
                </p>
                <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                  <span className="font-semibold text-xl">$4.99 / loaf</span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-green px-3 py-2"
                  >
                    <span className="pl-3 font-semibold text-default-green">
                      Add to cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-green">
              <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                <img
                  src="src/images/Whole Wheat Bread.jpg"
                  alt="fruite-item-5"
                  className="hover:scale-120 max-w-full transition-all duration-300 w-full"
                />
                <div className="category text-white bg-default-green px-4 py-1 absolute top-5 right-5 rounded-xl">
                  Bakery
                </div>
              </div>
              <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                <h4 className="text-2xl font-semibold">Whole Wheat Bread</h4>
                <p className="text-gray-600 py-5">
                  Whole wheat bread, rich in fiber and perfect for making
                  healthy sandwiches.
                </p>
                <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                  <span className="font-semibold text-xl">$4.99 / loaf</span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-green px-3 py-2"
                  >
                    <span className="pl-3 font-semibold text-default-green">
                      Add to cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VegitableShop;
