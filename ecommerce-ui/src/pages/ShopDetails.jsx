import React, { useState, useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
import RatingForm from "../components/Form/RatingForm";
import singleProductApi from "../api/singleProductApi";

const ShopDetails = () => {
  const [singleproduct, setSingleproduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleproduct = async () => {
      try {
        const singleproductdata = await singleProductApi(id);
        console.log(singleproductdata);
        setSingleproduct(singleproductdata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleproduct();
  }, [id]);

  const renterstars = (rating) => {
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


  if (!singleproduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="single-page py-32">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-x-10 md:block lg:gap-x-5">
            <div className="single-product-details col-span-9">
              <div className="grid grid-cols-2 items-start sm:block">
                <div className="product-img rounded-lg overflow-hidden mr-5 sm:mr-0 sm:mb-5">
                  {/* Dynamically load product image */}
                  <img
                    src={singleproduct.image || "fallback-image.jpg"} // Fallback if no image is provided
                    alt="single-product-img"
                    className="w-full h-full"
                  />
                </div>
                <div className="single-product-container font-sans">
                  <h2 className="text-2xl font-bold">{singleproduct.title}</h2>
                  <span className="my-4 block capitalize text-lg">
                    category : {singleproduct.category}
                  </span>
                  <div className="price">
                    <span className="font-bold text-2xl">
                      $ {singleproduct.price}
                    </span>
                  </div>
                  <div className="rating my-4">
                    {renterstars(singleproduct.rating.rate)}
                    (<span> {singleproduct.rating.count}</span>)
                  </div>
                  <div className="descitption">
                    <p className="text-lg">{singleproduct.description}</p>
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
