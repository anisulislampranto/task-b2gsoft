'use client';

import Image from 'next/image';
import React from 'react';
import mainImage from '../../../public/images/details-1.webp'
import smallOne from '../../../public/images/details-2.webp'
import smallTwo from '../../../public/images/details-3.webp'
import smallThree from '../../../public/images/details-4.webp'
import arrowRight from '../../../public/images/arrow-right-02.svg'
import StarRating from '@/utils/StarRating';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";



const smallImages = [
    smallOne,
    smallTwo,
    smallThree,
    smallThree,
]

const sizes = [
    's', 'm', 'l', 'xl'
]

export default function ProductOverviewClient({productDetails}) {
    const averageRating = productDetails.ratings.reduce((acc, curr) => acc + curr.rating, 0) / productDetails.ratings.length;

    const ratingCounts = Array(5).fill(0);
    productDetails.ratings.forEach((rating) => {
        ratingCounts[rating.rating - 1] += 1;
    });

    const totalRatings = productDetails.ratings.length;

    const getPercentage = (count) => ((count / totalRatings) * 100).toFixed(1);

    console.log('productDetails', productDetails);
    

    return (
        <section className='flex flex-col xl:flex-row'>
            {/* ProductImage */}
            <div className=' flex flex-col items-center xl:items-start gap-5 w-full xl:w-[50%] mt-5'>
                {/* Big Image */}
                <div className='relative bg-[#f6f5fe] h-[25rem] sm:h-[30rem] w-full sm:w-[35rem] flex justify-center '>
                    
                    {/* Left Arrow */}
                    <button className=' left-2 top-[50%] z-30 relative h-9 w-9 border rounded-full border-[#7e53d4] p-3'>
                        <Image className=' absolute object-contain' src={arrowRight} alt='image' fill />
                    </button>

                    <div className=' relative h-full sm:h-[30rem] w-full sm:w-[35rem]'>
                        <Image className=' absolute object-cover' src={mainImage} alt='image' fill />
                    </div>  

                    {/* Right Arrow */}
                    <button className=' rotate-180 right-2 top-[50%] relative h-9 w-9 border rounded-full border-[#7e53d4] p-3'>
                        <Image className=' absolute object-contain' src={arrowRight} alt='image' fill />
                    </button>
                </div>

                {/* Small images */}
                <ul className=' hidden xl:flex gap-2 overflow-scroll'>
                    {
                        smallImages?.map((image) =>
                            // <li className={`relative  border`}>
                            //     <Image className='absolute object-contain' src={image} alt='image' fill />
                            // </li>
                            <li className='relative bg-[#eeecfb] h-28 w-32 flex justify-center rounded-md '>
                                <div className=' relative h-28 w-32'>
                                    <Image className=' absolute object-cover' src={image} alt='image' fill />
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* Product details */}
            <div className=' w-full xl:w-[50%] font-manrope space-y-3 mt-10 xl:mt-0'>

                {/* Name, type, price, rating */}
                <div className=' border-b-2 border-dotted border-[#cecece] space-y-3 pb-5'>
                    <button className=' font-semibold bg-[#2f1c59] rounded-lg p-2 px-10 text-white'>New Arrival</button>
                    <h3 className=' capitalize font-semibold text-3xl'>{productDetails.name}</h3>
                    <div className=' flex items-center gap-3'>
                        <div className='flex items-center gap-2'>
                            <StarRating
                                rating={averageRating}
                                starHeight={16}
                                starWidth={16} 
                                />
                            <p className='font-manrope font-semibold text-sm'>({averageRating.toFixed(1)})</p>  
                        </div>
                        <p className='text-[#7e53d4]'>{totalRatings} Reviews</p>
                    </div>
                    <p className=' font-semibold text-3xl'> BDT {productDetails.price}</p>
                </div>

                {/* Variants */}
                <div className=' grid grid-cols-2 items-start justify-between py-10 border-b-2 border-dotted border-[#cecece]'>
                    <div className=''>
                        <p className=' font-semibold text-xl'>Available Size</p>
                        <ul className=' flex gap-2 mt-3'>
                            {
                                sizes.map((el) => 
                                    <li className=' bg-[#f6f5fe] rounded-md first:border-2 border-[#7e53d4] p-1 px-3 uppercase' key={el}>
                                        {el}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <p className=' font-semibold text-xl'>Available Color</p>
                        <div className=' mt-3 flex items-center gap-3'>
                            <div className="w-6 h-6 bg-white rounded-full border border-[#7e53d4]"></div>
                            <p className=' font-normal'>Off White</p>
                            <div className="w-5 h-5 bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Quantity, Buy Now, Add To Cart */}
                <div className=' py-5'>
                    <p className=' font-bold'>Quantity</p>
                    <div className=' mt-3 rounded-3xl w-32 p-2 px-4 flex justify-between items-center gap-3 font-semibold text-lg bg-[#ece9fe]'>
                        <FiMinus className=' w-4 h-4' /> 1 <FiPlus className=' w-4 h-4' />
                    </div>

                    <div className='flex flex-col gap-5 lg:flex-row justify-between items-center font-semibold mt-10'>
                        <button className=' rounded-lg w-full lg:w-[49%] border-2 border-[#7e53d4] bg-[#7e53d4] text-white p-2 px-4'>Buy Now</button>
                        <button className=' rounded-lg w-full lg:w-[49%] border-2 border-[#7e53d4] text-black p-2 px-4'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
