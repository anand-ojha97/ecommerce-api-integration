import { faCarSide ,faUserShield ,faRightLeft,faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HomeFeatures = () => {

    const features = [
        {
            icon :faCarSide,
            title:'Free Shipping',
            description :'Free on order over $300',
        },
        {
            icon : faUserShield,
            title:'Security Payment',
            description:'100% security payment',
        },
        {
            icon:faRightLeft,
            title:'30 Day Return',
            description:'30 day money guarantee'
        },
        {
            icon:faPhone,
            title:'30 Day Return',
            description:'30 day money guarantee'
        }
    ];

    return (
        <>
            <div className="homefeatures py-28">
                <div className="container mx-auto px-4">
                    <div className='grid grid-cols-4 gap-8 sm:grid-cols-1 gap-x-5 md:grid-cols-2'>
                        {/* Map through the features array and render each feature */}
                            {features.map((feature, index) => (
                                <div key={index} className="feature-box bg-theme-gray p-8 rounded-xl text-center">
                                    <div className="custom-before relative iconbox rounded-full bg-default-gold w-[120px] h-[120px] m-auto flex items-center align-middle justify-center">
                                        <FontAwesomeIcon icon={feature.icon} size='3x' color='#fff' />
                                    </div>
                                    <div className="featurecontent mt-12">
                                        <span className='text-xl'>{feature.title}</span>
                                        <p className='text-sm'>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFeatures