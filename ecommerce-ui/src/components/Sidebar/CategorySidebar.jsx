import { faAppleAlt, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const CategorySidebar = () => {
    const [price, SetPrice] = useState(10);

    const handleRangeChange = (e) =>{
        const value = e.target.value;
        SetPrice(value)
    }   
    return (
        <>
            <div className="category-sidebar-section">
                <div className="search-section flex border rounded-lg mb-8">
                    <input type="text" name="search" id="searchBox" className='w-full border focus:shadow-form-shadow focus-visible:outline-none rounded-lg rounded-r-none pl-4' placeholder='keywords' />
                    <div className="searchicon p-4 bg-theme-gray border">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
                <div className="categories-section mb-8">
                    <h3 className='text-2xl capitalize font-semibold'>categories</h3>
                    <div className="cate-list flex justify-between items-center mt-2 text-default-green font-sans">
                        <span><FontAwesomeIcon icon={faAppleAlt} className='pr-2'/>Apples</span>
                        <span className='count text-gray-500'>(3)</span>
                    </div>
                    <div className="cate-list flex justify-between items-center mt-2 text-default-green font-sans">
                        <span><FontAwesomeIcon icon={faAppleAlt} className='pr-2'/>Oranges</span>
                        <span className='count text-gray-500'>(3)</span>
                    </div>
                    <div className="cate-list flex justify-between items-center mt-2 text-default-green font-sans">
                        <span><FontAwesomeIcon icon={faAppleAlt} className='pr-2'/>Banana</span>
                        <span className='count text-gray-500'>(3)</span>
                    </div>
                </div>
                <div className="price-filter mb-8">
                    <h3 className='text-2xl capitalize font-semibold'>price</h3>
                    <div className="range">
                        <input type="range" name="range" id="range" className='h-2 w-full appearance-none cursor-pointer focus:ring-0 bg-theme-gray rounded-full mb-3' min={10} max={1000} value={price} onChange={handleRangeChange} />
                        <output id='amount' name='range-price' className='font-sans text-xl'>${price}</output>
                    </div>
                </div>
                <div className="additional-secction mb-8">
                    <h3 className='text-2xl capitalize font-semibold mb-2'>Additional</h3>
                    <div className="radiobtns font-sans">
                        <div className="mb-2">
                            <input type="radio" name="radioBtn" id="radioBtn" className='mr-2'/>
                            <label htmlFor="category">Organic</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio" name="radioBtn" id="radioBtn" className='mr-2'/>
                            <label htmlFor="category">Fresh</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio" name="radioBtn" id="radioBtn" className='mr-2'/>
                            <label htmlFor="category">Sales</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio" name="radioBtn" id="radioBtn" className='mr-2'/>
                            <label htmlFor="category">Discount</label>
                        </div>
                    </div>
                </div>
                <div className="features-products mb-8">
                    <h3 className='text-2xl capitalize font-semibold mb-2'>Featured products</h3>
                    <div className="feature-products-list">
                        <div className="flex">
                            <div className="w-[100px] h-[100px] mr-4">
                                <img src="src/images/featur-1.jpg" alt="feature" />
                            </div>
                            <div className="product-content">
                                <h4 className='font-semibold'>Big Banana</h4>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="prices text-xl font-bold">
                                    <span className='discount-price pr-2'>2.99 $</span>
                                    <span className='regular-price text-red-600 line-through'>2.99 $</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[100px] h-[100px] mr-4">
                                <img src="src/images/featur-2.jpg" alt="feature" />
                            </div>
                            <div className="product-content">
                                <h4 className='font-semibold'>Big Banana</h4>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="prices text-xl font-bold">
                                    <span className='discount-price pr-2'>2.99 $</span>
                                    <span className='regular-price text-red-600 line-through'>2.99 $</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[100px] h-[100px] mr-4">
                                <img src="src/images/featur-3.jpg" alt="feature" />
                            </div>
                            <div className="product-content">
                                <h4 className='font-semibold'>Big Banana</h4>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="prices text-xl font-bold">
                                    <span className='discount-price pr-2'>2.99 $</span>
                                    <span className='regular-price text-red-600 line-through'>2.99 $</span>
                                </div>
                            </div>
                        </div>
                        <button
                        type="submit"
                        className="mt-4 bg-white border border-default-gold p-4 rounded-full w-full text-default-green font-semibold hover:text-white hover:bg-default-gold duration-300 transition-all capitalize"
                        >
                        View more
                        </button>
                    </div>
                </div>
                <div className="banner-section-sidebar">
                    <div className="banner-img relative">
                        <img src="src/images/banner-fruits.jpg" alt="banner-fruits" className='rounded-xl w-full'/>
                        <div className="absolute top-40 right-2 lg:top-28 md:top-64 sm:top-40">
                            <h3 className='text-default-gold font-bold text-3xl md:text-5xl'>Fresh <br/>Fruits <br/>Banner</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategorySidebar