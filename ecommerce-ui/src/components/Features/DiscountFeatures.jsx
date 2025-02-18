import React from "react";

const DiscountFeatures = () => {
  const discountfeature = [
    {
      image: "src/images/featur-1.jpg",
      title: "Fresh Apples",
      description: "20% OFF",
    },
    {
      image: "src/images/featur-2.jpg",
      title: "Tasty Fruits",
      description: "Free delivery",
    },
    {
      image: "src/images/featur-3.jpg",
      title: "Exotic Vegitable",
      description: "Discount 30$",
    },
  ];
  return (
    <>
      <div className="discountfeatures py-28">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
            {discountfeature.map((discount, index) => (
              <div
                key={index}
                className={`discountbox border ${
                  index === 0
                    ? "border-default-gold"
                    : index === 1
                    ? "border-[#45595b]"
                    : index === 2
                    ? "border-default-green"
                    : ""
                } rounded-lg overflow-hidden`}
              >
                <img src={discount.image} alt="featur" className="w-full" />
                <div
                  key={index}
                  className={`discount-container ${
                    index === 0
                      ? "bg-default-gold"
                      : index === 1
                      ? "bg-[#45595b]"
                      : index === 2
                      ? "bg-default-green"
                      : "" // Default case if no condition is met
                  }`}
                >
                  <div
                    key={index}
                    className={`discount-content p-4 w-[250px] h-[130px] m-auto rounded-lg text-center relative top-0  translate-x-[0] translate-y-[-50%] ${
                      index === 0
                        ? "bg-default-green"
                        : index === 1
                        ? "bg-white"
                        : index === 2
                        ? "bg-default-gold"
                        : ""
                    }`}
                  >
                    <h3
                      key={index}
                      className={` ${
                        index === 1
                          ? "text-default-green text-xl font-semibold"
                          : "text-white text-xl font-semibold"
                      }`}
                    >
                      {discount.title}
                    </h3>
                    <h4 className="text-gray-600 text-3xl font-semibold">
                      {discount.description}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountFeatures;
