import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsApi from "../../api/productsApi";
import ShopPagination from "../Pagination/ShopPagination";

const ShoppageFruitShop = () => {
  const [product, setProducts] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const productPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productdata = await productsApi(-1);
        setProducts(productdata);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

   // Paginate products
   const indexOfLastProduct = currentPage * productPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productPerPage;
   const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePagination = (pagenumber) => {
    setCurrentpage(pagenumber);
  };
  return (
    <>
      <div className="shorting text-right mb-10 rounded-xl bg-theme-gray p-5 w-max ml-auto sm:w-full sm:text-center">
        <label htmlFor="shorting-label" className="font-sans">
          Default Shorting:
        </label>
        <select name="short-list" id="shortlist" className="bg-theme-gray ml-5">
          <option value="Oraganic">Oraganic</option>
          <option value="Popularity">Popularity</option>
          <option value="Fantastic">Fantastic</option>
          <option value="Nothing">Nothing</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 lg:grid-cols-2">
        {currentProducts.map((productItem, index) => (
          <div
            key={index}
            className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-gold"
          >
            <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
              <Link to={`/product/${productItem.id}`}>
              <img
                src={productItem.image}
                alt="fruite-item-5"
                className="hover:scale-120 max-w-full transition-all duration-300 w-full h-[245px] object-contain"
              />
              </Link>
              <div className="category text-white bg-default-gold px-4 py-1 absolute top-5 left-5 rounded-xl">
                {productItem.category}
              </div>
            </div>
            <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
              <h4 className="text-2xl font-semibold line-clamp-2">
              <Link to={`/product/${productItem.id}`}>
                {productItem.title}
              </Link>
              </h4>
              <p className="text-gray-600 py-5 line-clamp-2 mb-6">
                {productItem.description}
              </p>
              <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                <span className="font-semibold text-xl">
                  $ {productItem.price}
                </span>
                <Link
                  to="/"
                  className="rounded-full border border-default-gold px-3 py-2 hover:bg-default-gold duration-300 transition-all text-default-green  hover:text-white"
                >
                  <FontAwesomeIcon icon={faLock} color="#81c408" />
                  <span className="pl-3 font-semibold">Add to cart</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ShopPagination
        length = {product.length}
        handlePagination = {handlePagination}
        productPerPage = {productPerPage}
        currentPage = {currentPage}
      />
    </>
  );
};

export default ShoppageFruitShop;
