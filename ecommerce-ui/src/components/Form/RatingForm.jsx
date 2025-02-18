import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RatingForm = () => {
  return (
    <>
      <div className="rating-form">
        <form action="" method="post">
          <div className="grid grid-cols-2 gap-5">
            <div className="input-group mb-10">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name *"
                className="w-full border-b rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
              />
            </div>
            <div className="input-group mb-10">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Email *"
                className="w-full border-b rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
              />
            </div>
          </div>
          <div className="input-group mb-10">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={8}
              placeholder="Your review *"
              className="w-full border-b rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <span className="capitalize">
              please rate: <FontAwesomeIcon icon={faStar} />
            </span>
            <button
              type="submit"
              className="capitalize w-auto ml-auto bg-white border border-default-gold inline-block px-8 py-4 rounded-full text-default-green font-semibold hover:text-white hover:bg-default-gold duration-300 transition-all"
            >
              post comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RatingForm;
