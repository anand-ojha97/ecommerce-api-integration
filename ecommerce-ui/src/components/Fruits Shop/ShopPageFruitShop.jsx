import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ShoppageFruitShop = () => {
  const products = [
    {
      id: 1,
      title: "Red Grapes",
      category: "Fruits",
      price: "$4.99 / kg",
      weight: "2 kg",
      description:
        "Fresh and sweet red grapes, perfect for snacking or adding to fruit salads.",
      image: "src/images/fruite-item-1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Raspberries",
      category: "Fruits",
      price: "$5.99 / kg",
      weight: "1.5 kg",
      description:
        "Deliciously sweet and tart raspberries, great for desserts or smoothies.",
      image: "src/images/fruite-item-2.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Organic Carrots",
      category: "Vegetables",
      price: "$2.49 / kg",
      weight: "1.8 kg",
      description:
        "Fresh organic carrots, packed with vitamins and perfect for soups or salads.",
      image: "src/images/fruite-item-3.jpg", // Replace with actual image path
    },
  ];
  return (
    <>
      <div className="shorting text-right mb-10 rounded-xl bg-theme-gray p-5 w-max ml-auto sm:w-full sm:text-center">
        <label htmlFor="shorting-label" className="font-sans">Default Shorting:</label>
        <select name="short-list" id="shortlist" className="bg-theme-gray ml-5">
            <option value="Oraganic">Oraganic</option>
            <option value="Popularity">Popularity</option>
            <option value="Fantastic">Fantastic</option>
            <option value="Nothing">Nothing</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 lg:grid-cols-2">
        {products.map((productItem , index) => (
          <div key={index} className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-gold">
            <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
              <img
                src={productItem.image}
                alt="fruite-item-5"
                className="hover:scale-120 max-w-full transition-all duration-300 w-full"
              />
              <div className="category text-white bg-default-gold px-4 py-1 absolute top-5 left-5 rounded-xl">
                {productItem.category}
              </div>
            </div>
            <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
              <h4 className="text-2xl font-semibold">{productItem.title}</h4>
              <p className="text-gray-600 py-5">
               {productItem.description}
              </p>
              <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                <span className="font-semibold text-xl">{productItem.price}</span>
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
    </>
  );
};

export default ShoppageFruitShop;
