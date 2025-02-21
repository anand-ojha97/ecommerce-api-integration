import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import productsApi from "../../api/productsApi";

const Bestseller = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = await productsApi(4);
        setProductList(product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    const fullstars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullstars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-default-gold"
        />
      );
    }
    return stars;
  };
  return (
    <>
      <div className="bestseller py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl m-auto">
            <h2 className="text-gray-600 text-6xl font-semibold mb-4">
              Bestseller Products
            </h2>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>
          <div className="grid grid-cols-3 py-10 gap-8 md:grid-cols-2 xl:gap-3 sm:grid-cols-1">
            {productList.map((selleritem, index) => (
              <div
                key={index}
                className="products-list bg-theme-gray rounded-lg grid grid-cols-2 gap-5 items-center justify-between p-6 xl:p-3 xl:gap-3"
              >
                <div className="producst-img">
                  <img
                    src={selleritem.image}
                    alt="best-product"
                    className="w-full rounded-full h-[172px] object-contain lg:h-[150px] md:h-[160px]"
                  />
                </div>
                <div className="products-description">
                  <h2 className="text-xl font-semibold mb-3">
                    {selleritem.title}
                  </h2>
                  <div className="rating mb-3">
                    {renderStars(selleritem.rating.rate)}(
                    <span>{selleritem.rating.count}</span>)
                  </div>
                  <span className="price text-2xl font-semibold block mb-3">
                    ${selleritem.price}
                  </span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-gold px-3 py-2 inline-block hover:bg-default-gold text-default-green hover:text-white ease-linear duration-200"
                  >
                    <FontAwesomeIcon icon={faLock} color="#81c408" />
                    <span className="pl-3 font-semibold">Add to cart</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Example Product (static product section) */}
          <div className="grid grid-cols-4 gap-5 sm:grid-cols-2">
            {productList.map((selleritem, index) => (
              <div key={index} className="productlist text-center">
                <div className="product-img">
                  <img
                    src={selleritem.image}
                    alt={selleritem.title}
                    className="w-full rounded-xl h-[215px] object-contain"
                  />
                </div>
                <div className="products-description mt-4">
                  <h2 className="text-xl font-semibold mb-3">
                    {selleritem.title}
                  </h2>
                  <div className="rating mb-3">
                    {renderStars(selleritem.rating.rate)}(
                    {selleritem.rating.count})
                  </div>
                  <span className="price text-2xl font-semibold block mb-3">
                    ${selleritem.price}
                  </span>
                  <Link
                    to="/"
                    className="rounded-full border border-default-gold px-3 py-2 inline-block hover:bg-default-gold text-default-green hover:text-white ease-linear duration-200"
                  >
                    <FontAwesomeIcon icon={faLock} color="#81c408" />
                    <span className="pl-3 font-semibold">Add to cart</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
