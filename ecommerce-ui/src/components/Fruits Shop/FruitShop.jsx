import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const FruitShop = () => {
  const tabs = [
    {
      title: "All Products",
      content: [
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
        {
          id: 4,
          title: "Sourdough Bread",
          category: "Bakery",
          price: "$3.49/loaf",
          weight: "500g",
          description:
            "Crusty sourdough bread with a tangy flavor, perfect for sandwiches or toasts.",
          image: "src/images/Whole Wheat Bread.jpg", // Replace with actual image path
        },
        {
          id: 5,
          title: "Bananas",
          category: "Fruits",
          price: "$1.99 / kg",
          weight: "1 kg",
          description:
            "Ripe bananas, a perfect on-the-go snack or addition to your morning smoothie.",
          image: "src/images/fruite-item-5.jpg", // Replace with actual image path
        },
      ],
    },
    {
      title: "Vegetables",
      content: [
        {
          id: 1,
          title: "Fresh Spinach",
          category: "Vegetables",
          price: "$3.99 / kg",
          weight: "1 kg",
          description:
            "Fresh, leafy spinach, great for salads, sautéing, or adding to smoothies.",
          image: "src/images/fruite-item-1.jpg", // Replace with actual image path
        },
        {
          id: 2,
          title: "Organic Cucumbers",
          category: "Vegetables",
          price: "$2.99 / kg",
          weight: "1.5 kg",
          description:
            "Crisp, organic cucumbers perfect for salads or refreshing snacks.",
          image: "src/images/fruite-item-3.jpg", // Replace with actual image path
        },
      ],
    },
    {
      title: "Fruits",
      content: [
        {
          id: 1,
          title: "Mangoes",
          category: "Fruits",
          price: "$3.49 / kg",
          weight: "1.2 kg",
          description:
            "Juicy, sweet mangoes, ideal for smoothies, salsas, or enjoying fresh.",
          image: "src/images/fruite-item-5.jpg", // Replace with actual image path
        },
        {
          id: 2,
          title: "Pineapples",
          category: "Fruits",
          price: "$2.99 / kg",
          weight: "1.5 kg",
          description:
            "Sweet and tangy pineapples, perfect for fresh fruit salads or tropical juices.",
          image: "src/images/fruite-item-4.jpg", // Replace with actual image path
        },
      ],
    },
    {
      title: "Bakery",
      content: [
        {
          id: 1,
          title: "Whole Wheat Bread",
          category: "Bakery",
          price: "$4.99 / loaf",
          weight: "600g",
          description:
            "Whole wheat bread, rich in fiber and perfect for making healthy sandwiches.",
          image: "src/images/Whole Wheat Bread.jpg", // Replace with actual image path
        },
        {
          id: 2,
          title: "Croissants",
          category: "Bakery",
          price: "$1.99 / piece",
          weight: "100g",
          description:
            "Flaky, buttery croissants, ideal for breakfast or an afternoon snack.",
          image: "src/images/bread.jpg", // Replace with actual image path
        },
      ],
    },
  ];

  const [activeTab, SetActiveTab] = useState(tabs[0].title); // Default to "All"

  const handleTabClick = (tabTitle) => {
    SetActiveTab(tabTitle);
  };
  const currentTab = tabs.find((tab) => tab.title === activeTab);
  console.log(currentTab);
  return (
    <>
      <div className="fruitshop">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center sm:block">
            <div className="main-heading">
              <h2 className="text-4xl font-semibold">Our Organic Products</h2>
            </div>
            <div className="categories col-span-2 mt-4">
              <div className="category-title grid grid-cols-5 gap-3 lg:grid-cols-3 sm:flex sm:justify-center sm:flex-wrap">
                {tabs.map((tab, index) => (
                  <span
                    key={index}
                    onClick={() => handleTabClick(tab.title)}
                    className={`rounded-full px-6 py-2 text-center cursor-pointer transition-all duration-300 ${
                      activeTab === tab.title
                        ? "bg-default-gold text-white" // Active tab styles
                        : "bg-theme-gray hover:bg-default-gold hover:text-white" // Inactive tab styles
                    }`}
                  >
                    {tab.title}
                  </span>
                ))}
              </div>
            </div>
            <div className="products-section col-span-12">
              <div className="products-list my-16">
                <div className="grid grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                  {currentTab.content.map((product) => (
                    <div
                      key={product.id}
                      className="product-box bg-white rounded-lg relative hover:shadow-custom-shadow transition-shadow duration-300 border border-default-gold"
                    >
                      <div className="product-image overflow-hidden rounded-tl-lg rounded-tr-xl">
                        <img
                          src={product.image}
                          alt="fruite-item-5"
                          className="hover:scale-120 max-w-full transition-all duration-300 w-full"
                        />
                        <div className="category text-white bg-default-gold px-4 py-1 absolute top-5 left-5 rounded-xl">
                          {product.category}
                        </div>
                      </div>
                      <div className="products-description text-center p-5 rounded-bl-xl rounded-br-xl">
                        <h4 className="text-2xl font-semibold">
                          {product.title}
                        </h4>
                        <p className="text-gray-600 py-5">
                          {product.description}
                        </p>
                        <div className="price-add-cart text-left flex gap-3 justify-between items-center">
                          <span className="font-semibold text-xl">
                            {product.price}
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
