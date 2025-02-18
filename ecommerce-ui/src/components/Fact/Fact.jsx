import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Fact = () => {

    const factsdata = [
        {
            icon :faUsers,
            title:'satisfied customers',
            numbers: 1963,
        },
        {
            icon :faUsers,
            title:'quality of service',
            numbers: 99,
        },
        {
            icon :faUsers,
            title:'quality certificates',
            numbers: 33,
        },
        {
            icon :faUsers,
            title:'Available Products',
            numbers: 789,
        }
    ]
    return (
        <>
            <div className="fact-section py-20 md:py-8">
                <div className="container mx-auto px-4">
                    <div className="bg-theme-gray p-12 rounded-xl sm:p-8">
                        <div className="grid grid-cols-4 gap-10 sm:grid-cols-1 md:grid-cols-2">
                            {factsdata.map((factItem , index) => (
                                <div key={index} className="bg-white p-5 rounded-xl text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faUsers} size='4x' color='#ffb524'/>
                                    </div>
                                    <h5 className='uppercase text-3xl text-default-green font-semibold my-5 mb-3'>{factItem.title}</h5>
                                    <h4 className='text-4xl font-semibold'>{index === 1 ? `${factItem.numbers}%` : factItem.numbers}
                                    </h4>                            
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fact