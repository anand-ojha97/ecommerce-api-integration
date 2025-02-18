import React, { useState } from 'react';
import { faSearch, faUser, faBagShopping, faEnvelope, faLocationPin, faBars, faMarker, faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [isOpen, SetisOpen] = useState(false);
  const toggleMenu = () => {
    SetisOpen(!isOpen);
  };

  return (
    <div className="header-section bg-white pb-2 md:top-0 shadow-2xl sticky top-[-55px] z-50 sm:top-0 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="md:hidden topbar bg-default-green p-4 rounded-tl-[100px] rounded-br-[100px] rounded-bl-[40px] rounded-tr-[40px] sm:pt-7 sm:rounded-tl-[100px] sm:rounded-br-[100px] sm:hidden">
          <div className="topbar-row flex items-center justify-between px-4 sm:block">
            <div className="contact-info text-center">
              <div className="email flex gap-4 sm:block sm:w-full sm:pb-4">
                <Link to="" target="_blank" rel="noopener noreferrer" className='text-white sm:block text-sm'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} color='#ffb524' /> 123 Street, New York
                </Link>
                <Link to="mailto:Email@Example.com" className='text-white text-sm'>
                  <FontAwesomeIcon icon={faEnvelope} color='#ffb524' /> Email@Example.com
                </Link>
              </div>
            </div>
            <div className="breadcumbs text-sm">
              <Link to="#" className='text-white mr-2'>Privacy Policy / </Link>
              <Link to="#" className='text-white mr-2'>Terms of Use / </Link>
              <Link to="#" className='text-white'>Sales and Refunds</Link>
            </div>
          </div>
        </div>
        <div className="header flex justify-between items-center py-4">
          <div className="logo">
            <Link to='/'>
              <h1 className='font-bold text-4xl text-default-green sm:text-3xl'>
                Fruitables
              </h1>
            </Link>
          </div>
          <div className="menu-item sm:order-2">
            <div className="toggle-btn">
              <button className="menu-toggle rounded-lg 2xl:hidden sm:block" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size='2x' color='#81C408' />
              </button>
            </div>
            <div className={`p-3 absolute top-20 left-0 w-full bg-white border rounded-md shadow-lg transform transition-all duration-300 ${isOpen ? 'scale-100 block' : 'scale-95 hidden'}`}>
              <ul className='flex space-x-7 capitalize sm:space-x-0 sm:block'>
                <li className='sm:p-2'><Link to="/">Home</Link></li>
                <li className='sm:p-2'><Link to="/shop">Shop</Link></li>
                <li className='sm:p-2'><Link to="/shop-details">shop details</Link></li>
                <li className="group relative sm:p-2">
                  <Link to="#">Pages</Link>
                  <ul className="absolute left-0 hidden group-hover:block bg-gray-200 shadow-md max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden p-5 rounded-md ">
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/cart">Cart</Link></li>
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/checkout">Checkout</Link></li>
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/testimonial">Testimonial</Link></li>
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/404">404 Page</Link></li>
                  </ul>
                </li>
                <li className='sm:p-2'><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>
            <div className="menu-items sm:hidden">
              <ul className='flex space-x-7 capitalize sm:space-x-0 sm:block'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/shop-details">shop details</Link></li>
                <li className="group relative">
                  <Link to="#">Pages</Link>
                  <ul className="absolute left-0 hidden group-hover:block bg-gray-200 shadow-md max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden rounded-md">
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/cart">Cart</Link></li>
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/checkout">Checkout</Link></li>
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/testimonial">Testimonial</Link></li>
                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><Link to="/404">404 Page</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
          <div className="account flex gap-5 items-center md:gap-2">
            <div className="circle rounded-full pl-3 pr-3 p-2 border border-default-gold hover:bg-default-gold duration-300 cursor-pointer transition-all">
              <FontAwesomeIcon icon={faSearch} size='1x' color="#81c408" />
            </div>
            <div className="products-count relative mr-2">
              <FontAwesomeIcon icon={faBagShopping} size='2x' color="#81c408" />
              <span className='count absolute px-2 left-4 bottom-4 bg-default-gold rounded-full'>3</span>
            </div>
            <FontAwesomeIcon icon={faUser} size='2x' color="#81c408" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
