import React from 'react'
import CategorySidebar from '../components/Sidebar/CategorySidebar'
import Breadcumbs from '../components/Breadcumbs/Breadcumbs'
import ShoppageFruitShop from '../components/Fruits Shop/ShoppageFruitShop'

const Shop = () => {
    return (
        <>
        <Breadcumbs />
        <div className="shop-page-section py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-x-8 sm:grid-cols-1 sm:gap-0">
                    <div className="col-span-3 md:col-span-12">
                        <h2 className="font-semibold text-2.5xl mb-4 xl:text-2xl">Fresh fruits shop</h2>
                        <CategorySidebar />
                    </div>
                    <div className="col-span-9 mt-[75px] md:col-span-12 xl:mt-[45px]">
                        <ShoppageFruitShop />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shop