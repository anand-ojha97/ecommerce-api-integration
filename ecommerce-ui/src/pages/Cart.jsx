import React from "react";
import Breadcumbs from "../components/Breadcumbs/Breadcumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import CouponForm from "../components/Coupon/CouponForm";

const Cart = () => {
  return (
    <>
      <Breadcumbs />
      <div className="cart-item py-20">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-lg table-fixed text-gray-500 sm:table-auto">
              <thead>
                <tr className="border-b border-b-slate-600">
                  <th className="px-4 py-2">Products</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    <img
                      src="src/images/fruite-item-3.jpg"
                      alt="fruite-item-3"
                      className="w-[80px] h-[80px] rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">Big Banana</td>
                  <td className="px-4 py-2">2.99 $</td>
                  <td className="px-4 py-2">
                    <div className="quantity my-4 flex items-center justify-start sm:justify-center">
                      <button className="minus-btn px-2 py-1 rounded-full bg-theme-gray text-sm">
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input
                        type="text"
                        name="quantityInput"
                        id="quantityInput"
                        defaultValue={1}
                        className="w-[20%] pr-2 pl-2 mx-2 text-center sm:w-[45px]"
                      />
                      <button className="plus-btn px-2 py-1 rounded-full bg-theme-gray text-sm">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2">2.99 $</td>
                  <td className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={faXmark}
                      color="red"
                      className="px-[12px] py-[10px] bg-theme-gray rounded-full cursor-pointer"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <CouponForm />
          <div className="cart-total p-5 bg-theme-gray max-w-[415px] ml-auto rounded-lg">
            <h3 className="text-4xl capitalize font-semibold mb-5">
              <strong className="font-extrabold">cart</strong> total
            </h3>
            <div className="subtotal flex justify-between text-xl font-sans my-4 gap-2">
              <span className="font-semibold">Subtotal :</span>
              <span className="total-price">$96.00</span>
            </div>
            <div className="subtotal flex justify-between text-xl font-sans my-4 pb-5 gap-2">
              <span className="font-semibold">Shipping :</span>
              <span className="total-price text-right">
                Flat rate: $3.00
                <br />
                Shipping to Ukraine.
              </span>
            </div>
            <div className="subtotal flex justify-between text-xl font-sans my-4 border-y border-gray-300 py-5 gap-2">
              <span className="font-semibold">Total :</span>
              <span className="total-price">$96.00</span>
            </div>
            <button
              type="submit"
              className="uppercase w-auto ml-auto bg-theme-gray border border-default-gold inline-block px-8 py-4 rounded-full text-default-green font-semibold hover:text-white hover:bg-default-gold duration-300 transition-all mt-3"
            >
              proceed checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
