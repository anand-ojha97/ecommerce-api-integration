import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="checkout-section my-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-12">Billing details</h1>
          <div className="grid grid-cols-12 gap-10 md:block">
            <div className="blilingform col-span-7">
              <form action="" method="post">
                <div className="grid grid-cols-2 gap-5">
                  <div className="input-group mb-5">
                    <label htmlFor="fname" className="mb-3 block">
                      First Name <sup className="text-red-500">*</sup>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      required
                      className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                    />
                  </div>
                  <div className="input-group mb-5">
                    <label htmlFor="lname" className="mb-3 block">
                      Last Name <sup className="text-red-500">*</sup>
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      required
                      className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                    />
                  </div>
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="companyname" className="mb-3 block">
                    Company Name <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    id="companyname"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="companyname" className="mb-3 block">
                    Address <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    placeholder="House Number Street Number"
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="town" className="mb-3 block">
                    Town/City <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="town"
                    id="town"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="country" className="mb-3 block">
                    Country <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="postcode" className="mb-3 block">
                    Postcode/Zip <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="country" className="mb-3 block">
                    Mobile <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="email" className="mb-3 block">
                    Email Address <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-check-group mb-5 flex items-baseline gap-2 border-b">
                  <input
                    type="checkbox"
                    name="create-account"
                    id="checkbox"
                    required
                    className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                  />
                  <label htmlFor="create-account" className="mb-3 block">
                    Create an account?
                  </label>
                </div>
                <div className="input-check-group mb-5 flex items-baseline gap-2">
                  <input
                    type="checkbox"
                    name="shipping"
                    id="checkbox"
                    required
                    className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                  />
                  <label htmlFor="shipping" className="mb-3 block">
                    Ship to a different address?
                  </label>
                </div>
                <div className="input-group mb-10">
                  <textarea
                    name="ordernote"
                    id="ordernote"
                    cols={30}
                    rows={8}
                    placeholder="Order Notes (Optional)"
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
              </form>
            </div>
            <div className="col-span-5">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-lg table-fixed text-gray-500 sm:table-auto md:table-auto">
                  <thead>
                    <tr className="border-b border-b-slate-600 font-medium">
                      <th className="px-4 py-2 font-medium">Products</th>
                      <th className="px-4 py-2 font-medium" colSpan={2}>
                        Name
                      </th>
                      <th className="px-4 py-2 font-medium">Price</th>
                      <th className="px-4 py-2 font-medium">Quantity</th>
                      <th className="px-4 py-2 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">
                        <img
                          src="src/images/fruite-item-3.jpg"
                          alt="fruite-item-3"
                          className="w-[80px] h-[80px] rounded-full"
                        />
                      </td>
                      <td className="px-4 py-2" colSpan={2}>
                        Big Banana
                      </td>
                      <td className="px-4 py-2">2.99 $</td>
                      <td className="px-4 py-2">
                        <div className="quantity my-4 text-center">
                          <input
                            type="text"
                            name="quantityInput"
                            id="quantityInput"
                            defaultValue={1}
                            className="w-[20%] mx-2 sm:w-[45px]"
                            readOnly
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2">2.99 $</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div className="amounts py-12 text-right border-b">
                  <span>Subtotal </span>
                  <span className="inline-block px-3 py-5 border-y">
                    $414.00
                  </span>
                </div>
                <div className="shiping-types flex gap-10 items-center justify-center py-12 border-b">
                  <span>Shipping</span>
                  <div className="shipings">
                    <div className="input-check-group flex items-baseline gap-2">
                      <input
                        type="checkbox"
                        name="freeShipping"
                        id="checkbox"
                        required
                        className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                      />
                      <label htmlFor="shipping" className="mb-3 block">
                        Free Shipping
                      </label>
                    </div>
                    <div className="input-check-group flex items-baseline gap-2">
                      <input
                        type="checkbox"
                        name="freeShipping"
                        id="checkbox"
                        required
                        className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                      />
                      <label htmlFor="shipping" className="mb-3 block">
                        Flat rate: $15.00
                      </label>
                    </div>
                    <div className="input-check-group flex items-baseline gap-2">
                      <input
                        type="checkbox"
                        name="freeShipping"
                        id="checkbox"
                        required
                        className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                      />
                      <label htmlFor="shipping" className="mb-3 block">
                        Local Pickup: $8.00
                      </label>
                    </div>
                  </div>
                </div>
                <div className="shiping-types flex gap-10 items-center justify-center py-12 border-b">
                  <span>Total</span>
                  <span></span>
                  <span className="inline-block px-3 py-5 border-y">
                    $414.00
                  </span>
                </div>
                <div className="shipings">
                  <div className="bankpayment py-8 border-b">
                    <div className="input-check-group flex items-baseline gap-2">
                      <input
                        type="checkbox"
                        name="bank"
                        id="checkbox"
                        required
                        className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                      />
                      <label htmlFor="shipping" className="mb-3 block">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                  <div className="input-check-group py-8 border-b flex items-baseline gap-2">
                    <input
                      type="checkbox"
                      name="checkpayment"
                      id="checkbox"
                      required
                      className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                    />
                    <label htmlFor="shipping" className="mb-3 block">
                      Check Payments
                    </label>
                  </div>
                  <div className="input-check-group py-8 border-b flex items-baseline gap-2">
                    <input
                      type="checkbox"
                      name="cod"
                      id="checkbox"
                      required
                      className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                    />
                    <label htmlFor="shipping" className="mb-3 block">
                      Cash On Delivery
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-white border border-default-gold p-4 rounded-xl w-full text-default-green font-semibold hover:text-white hover:bg-default-gold duration-300 transition-all mt-5 uppercase"
                >
                  place order
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Checkout;
