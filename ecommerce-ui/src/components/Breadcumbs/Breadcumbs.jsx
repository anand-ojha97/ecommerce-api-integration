import React, { useEffect, useState } from 'react'

const Breadcumbs = () => {
    const [pageName , setPageName] = useState('');

    useEffect(() => {
         const currentpath = window.location.pathname;
         const pageName = currentpath.split('/').pop();
         setPageName(pageName);
    } ,[]);
    return (
       <>
        <div className="breadcumbs-section bg-breadcumb-background py-12 bg-cover bg-no-repeat bg-center">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="font-extrabold text-white text-2.5xl capitalize">
                         {pageName}
                    </h1>
                    <ol className='flex justify-center items-center gap-2 mt-1 capitalize'>
                        <li className='text-default-green'>Home /</li>
                        <li className='text-default-green'>pages /</li>
                        <li className='text-white'>{pageName}</li>
                    </ol>
                </div>
            </div>
        </div>
       </>
    )
}

export default Breadcumbs