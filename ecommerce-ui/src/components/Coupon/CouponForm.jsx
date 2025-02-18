import React from "react";

const CouponForm = () => {
  return (
    <>
      <div className="coupon-code my-12">
        <form action="" method="post" className="sm:grid sm:grid-cols-2">
          <input
            type="text"
            name="coupon"
            id="name"
            required
            placeholder="Coupon Code"
            className="border-b rounded-xl p-2 py-4 focus-visible:outline-none focus:shadow-form-shadow mr-5"
          />
          <button
            type="submit"
            className="capitalize w-auto ml-auto bg-white border border-default-gold inline-block px-8 py-4 rounded-full text-default-green font-semibold hover:text-white hover:bg-default-gold duration-300 transition-all"
          >
            apply coupon
          </button>
        </form>
      </div>
    </>
  );
};

export default CouponForm;
