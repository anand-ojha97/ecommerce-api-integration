import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import react-slick
import { Link } from "react-router-dom";
import productApi from "../../api/productApi";

const VegitableShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi('electronics');
        setProducts(data);
      } catch (error) {
        console.log("Error occurred while fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Settings for the React Slick slider
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="vegitableSlider py-20">
        <div className="container mx-auto px-4">
          <div className="main-heading">
            <h2 className="text-4xl font-semibold">Fresh Organic Vegetables</h2>
          </div>
          <div className="vegitablelslides -mx-4">
            {/* Use Slider Component here */}
            <Slider {...sliderSettings}>
              {products.map((product, index) => (
                <div
                  key={index}
                  className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-green"
                >
                  <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="hover:scale-120 max-w-full transition-all duration-300 w-full h-[254px] object-contain bg-[#f4f6f8]"
                    />
                    <div className="category text-white bg-default-green px-4 py-1 absolute top-5 right-5 rounded-xl">
                      {product.category}
                    </div>
                  </div>
                  <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                    <h4 className="text-2xl font-semibold line-clamp-1">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 py-5 line-clamp-1 mb-6">
                      {product.description}
                    </p>
                    <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                      <span className="font-semibold text-xl">
                        ${product.price}
                      </span>
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
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VegitableShop;
