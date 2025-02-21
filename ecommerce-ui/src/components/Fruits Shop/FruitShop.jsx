import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import categoriesApi from "../../api/categoriesApi";
import categoryproductApi from "../../api/categoryproductApi";
const FruitShop = () => {
  const [categories, setCategoreis] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCateory] = useState("electronics");

  const handleTabClick = (category) => {
    setCurrentCateory(category);
    fetchProducts(category);
  };

  const fetchProducts = async (category = "electronics") => {
    try {
      const data = await categoryproductApi(category, 4);
      setProducts(data);
    } catch (error) {
      console.log("Error occurred while fetching products:", error);
    }
  };

  useEffect(() => {
    const categories = async () => {
      try {
        const categoriesList = await categoriesApi();
        setCategoreis(categoriesList);
      } catch (error) {
        console.log("Error occurred while fetching categories:", error);
      }
    };

    categories();
    fetchProducts();
  }, []);
  return (
    <>
      <div className="fruitshop">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center sm:block">
            <div className="main-heading">
              <h2 className="text-4xl font-semibold">Our Organic Products</h2>
            </div>
            <div className="categories col-span-2 mt-4">
              <div className="category-title grid grid-cols-4 gap-3 lg:grid-cols-3 sm:flex sm:justify-center sm:flex-wrap">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    onClick={() => handleTabClick(category)}
                    className={`rounded-full px-6 py-2 text-center cursor-pointer transition-all duration-300 ${
                      currentCategory === category
                        ? "bg-default-gold text-white"
                        : "bg-theme-gray"
                    } `}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="products-section col-span-12">
              <div className="products-list my-16">
                <div className="grid grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-gold"
                    >
                      <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                        <img
                          src={product.image}
                          alt="fruite-item-5"
                          className="hover:scale-120 max-w-full transition-all duration-300 w-full h-[254px] object-contain"
                        />
                        <div className="category text-white bg-default-gold px-4 py-1 absolute top-5 left-5 rounded-xl">
                          {product.category}
                        </div>
                      </div>
                      <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                        <h4 className="text-2xl font-semibold line-clamp-2">
                          {product.title}
                        </h4>
                        <p className="text-gray-600 py-5 line-clamp-2 mb-6">
                          {product.description}
                        </p>
                        <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                          <span className="font-semibold text-xl">
                            ${product.price}
                          </span>
                          <Link
                            to="/"
                            className="rounded-full border border-default-gold px-3 py-2 hover:bg-default-gold duration-300 transition-all text-default-green  hover:text-white"
                          >
                            <FontAwesomeIcon icon={faLock} color="#81c408" />
                            <span className="pl-3 font-semibold">
                              Add to cart
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FruitShop;
