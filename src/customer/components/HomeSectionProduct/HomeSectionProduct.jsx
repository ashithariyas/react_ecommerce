


import React from 'react'


const HomeSectionProduct = (props) => {

    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full'src="https://images.jdmagicbox.com/rep/b2b/men-shirts/men-shirts-60.jpg" alt=""
                />
            </div>


            <div className='p-4'>
                <h3 className='text-lg font-medium text-grey-900'>{props.item.firstName}</h3>
                <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
                
            </div>
        </div>
    )
}

export default HomeSectionProduct;