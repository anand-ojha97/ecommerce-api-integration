import React from "react";
import {
  faTwitter,
  faYoutube,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <div className="footer-section bg-footer-bg py-24">
      <div className="container mx-auto px-4">
        <div className="subscribe-section grid grid-cols-12 gap-4 items-center justify-between border-b border-b-default-gold pb-8 sm:block">
          <div className="footerlogo col-span-3">
            <h2 className="text-4xl text-default-green font-semibold">
              Fruitables
            </h2>
            <span className="text-default-gold text-lg">Fresh products</span>
          </div>
          <div className="newslatter col-span-6 sm:my-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id="footerEmal"
              className="p-4 bg-white rounded-full border-none focus:outline-none w-[85%] sm:w-[70%] md:w-[80%]"
            />
            <button
              type="submit"
              className="bg-default-green hover:bg-default-gold rounded-full text-white font-semibold p-4 w-[25%] -m-16 sm:w-[45%] sm:-m-12 md:w-[45%] lg:w-[35%] lg:-m-24"
            >
              Subscribe Now
            </button>
          </div>
          <div className="footerSocialLinks col-span-3 text-right sm:text-center md:flex">
            <Link
              to="#"
              className="hover:bg-default-gold transition-all duration-300 twitter border border-default-gold h-[50px] px-4 text-center py-3 w-[50px] rounded-full inline-block mr-2 sm:inline-block"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                color="#FFB524"
                className="social-icon"
              />
            </Link>
            <Link
              to="#"
              className="hover:bg-default-gold transition-all duration-300 twitter border border-default-gold h-[50px] px-4 text-center py-3 w-[50px] rounded-full inline-block mr-2 sm:inline-block"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                color="#FFB524"
                className="social-icon"
              />
            </Link>
            <Link
              to="#"
              className="hover:bg-default-gold transition-all duration-300 twitter border border-default-gold h-[50px] px-4 text-center py-3 w-[50px] rounded-full inline-block mr-2 sm:inline-block"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                color="#FFB524"
                className="social-icon"
              />
            </Link>
            <Link
              to="#"
              className="hover:bg-default-gold transition-all duration-300 twitter border border-default-gold h-[50px] px-4 text-center py-3 w-[50px] rounded-full inline-block sm:inline-block"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#FFB524"
                className="social-icon"
              />
            </Link>
          </div>
        </div>
        <div className="footerBottomUrls pt-6">
          <div className="menus grid grid-cols-12 sm:grid-cols-1 sm:gap-y-8">
            <div className="col-span-3">
              <div className="readmoreCol">
                <h2 className="text-white text-2xl mb-6">
                  Why People Like us!
                </h2>
                <p className="text-gray-400 leading-loose text-lg">
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker
                  including of Lorem Ipsum.
                </p>
                <Link
                  to="#"
                  className="capitalize py-3 px-6 border duration-300 hover:bg-default-gold transition-all border-default-gold inline-block rounded-full text-default-green font-semibold mt-8 hover:text-white"
                >
                  read more
                </Link>
              </div>
            </div>
            <div className="col-span-3 pl-6 sm:p-0">
              <div className="shop-info">
                <h2 className="text-white text-2xl mb-8 sm:mb-4">Shop Info</h2>
                <ul className="footermenuItems">
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Terms & Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Return Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      FAQs & Help
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 pl-6 sm:p-0">
              <div className="shop-info">
                <h2 className="text-white text-2xl mb-8 sm:mb-4">Account</h2>
                <ul className="footermenuItems">
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      Order History
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-lg pb-1 block">
                      International Orders
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 pl-6 sm:p-0">
              <div className="contactsection">
                <h2 className="text-white text-2xl mb-8 sm:mb-4">Contact</h2>
                <div className="adress text-gray-400 pb-3 text-lg">
                  <span>Address </span>
                  <Link to="#">1429 Netus Rd, NY 48247</Link>
                </div>
                <div className="adress text-gray-400 pb-3 text-lg">
                  <span>Email: </span>
                  <Link to="#">Example@gmail.com</Link>
                </div>
                <div className="adress text-gray-400 pb-3 text-lg">
                  <span>Phone: </span>
                  <Link to="#"> +0123 4567 8910</Link>
                </div>
                <div className="adress text-gray-400 pb-3 text-lg">
                  <span>Payment Accepted</span>
                </div>
              </div>
              <div className="payment">
                <img
                  src="src/images/payment.png"
                  alt="paymnet"
                  className="w-[70%] mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
