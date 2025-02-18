import React from "react";
import CategorySidebar from "../components/Sidebar/CategorySidebar";
import Breadcumbs from "../components/Breadcumbs/Breadcumbs";
import VegitablesShop from "../components/Sliders/VegitableShop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RatingForm from "../components/Form/RatingForm";
const ShopDetails = () => {
  return (
    <>
      <Breadcumbs />
      <div className="single-page py-32">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-x-10 md:block lg:gap-x-5">
            <div className="single-product-details col-span-9">
              <div className="grid grid-cols-2 items-start sm:block">
                <div className="product-img rounded-lg overflow-hidden border border-gray-300 mr-5 sm:mr-0 sm:mb-5">
                  <img
                    src="src/images/featur-3.jpg"
                    alt="single-prrdcut-img"
                    className="w-full h-full"
                  />
                </div>
                <div className="single-product-container font-sans">
                  <h2 className="text-2xl font-bold">Brocoli</h2>
                  <span className="my-4 block capitalize text-lg">
                    category : Vegetables
                  </span>
                  <div className="price">
                    <span className="font-bold text-2xl">3.35 $</span>
                  </div>
                  <div className="rating my-4">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="descitption">
                    <p className="text-lg">
                      The generated Lorem Ipsum is therefore always free from
                      repetition injected humour, or non-characteristic words
                      etc. Susp endisse ultricies nisi vel quam suscipit.
                      Sabertooth peacock flounder; chain pickerel hatchetfish,
                      pencilfish snailfish
                    </p>
                  </div>
                  <div className="quantity my-4">
                    <button className="minus-btn px-2 py-1 rounded-full bg-theme-gray text-sm">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      type="text"
                      name="quantityInput"
                      id="quantityInput"
                      defaultValue={1}
                      className="w-[5%] pr-2 pl-2 mx-2 lg:w-[10%] text-center"
                    />
                    <button className="minus-btn px-2 py-1 rounded-full bg-theme-gray text-sm">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <Link
                    to="/"
                    className="rounded-full border border-default-gold px-3 py-2 hover:bg-default-gold duration-300 transition-all text-default-green  hover:text-white inline-block mt-5"
                  >
                    <FontAwesomeIcon icon={faLock} color="#81c408" />
                    <span className="pl-3 font-semibold">Add to cart</span>
                  </Link>
                </div>
              </div>
              <div className="rating-div my-14">
                <h2 className="text-2xl font-semibold mb-10">Leave a Reply</h2>
                <RatingForm />
              </div>
            </div>
            <div className="sidebar col-span-3">
              <CategorySidebar />
            </div>
          </div>
        </div>
      </div>
      <VegitablesShop />
    </>
  );
};

export default ShopDetails;
