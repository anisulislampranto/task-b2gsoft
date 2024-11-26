'use client';

import React, { useRef } from 'react';
import { featuredProducts } from '../featured/FeaturedClient';
import { NavArrows } from '../SectionHeader/SectionHeader';
import Products from '../products/Products';
import { useScroll } from '@/hooks/useScroll';
import Image from 'next/image';
import arrowDown from '../../../public/images/arrow-down-01.svg';
import ReviewServer from '../review/Review';
import StarRating from '@/utils/StarRating';

export default function ProductDetailsClient({ productDetails }) {
    const { scroll } = useScroll(320);
    const scrollRef = useRef();
    const averageRating = productDetails.ratings.reduce((acc, curr) => acc + curr.rating, 0) / productDetails.ratings.length;

    const ratingCounts = Array(5).fill(0);
    productDetails.ratings.forEach((rating) => {
        ratingCounts[rating.rating - 1] += 1;
    });

    const totalRatings = productDetails.ratings.length;

    const getPercentage = (count) => ((count / totalRatings) * 100).toFixed(1);

    return (
        <div className='px-5 md:px-10 py-20 bg-[#f4f8ff]'>

            {/* details, review & rating, discussion */}
            <section className='py-20'>
                {/* Options */}
                <div className='font-manrope text-lg flex gap-20'>
                    <button>Details</button>
                    <button className='text-[#7e53d4]'>Review & Rating</button>
                    <button>Discussion</button>
                </div>

                {/* Reviews */}
                <div className='mt-10'>
                    <div>
                        <div className='flex flex-col-reverse lg:flex-row justify-between items-start'>

                            <div className=' flex flex-col w-full lg:w-[65%]'>
                                {/* Options to show type of comments */}
                                <div>
                                    <div className="relative inline-block mt-10 lg:mt-0">
                                        <select
                                            name="options"
                                            id="options"
                                            defaultValue={'newest'}
                                            className="font-manrope w-35 pl-5 p-2 pr-10 border-2 text-lg border-[#7e53d4] rounded-lg appearance-none"
                                        >
                                            <option value="newest">Newest</option>
                                            <option value="All">All</option>
                                            <option value="oldest">Oldest</option>
                                        </select>
                                        {/* Custom dropdown arrow */}
                                        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none h-6 w-6">
                                            <Image className='absolute object-contain' src={arrowDown} alt='arrowDown' fill />
                                        </span>
                                    </div>
                                </div>

                                {/* Reviews by user */}
                                <ul className='flex flex-col gap-5 mt-10'>
                                    {productDetails.ratings?.map((el, i) => 
                                        <li key={i} className={`border-b-2 border-[#cecece] border-dotted last:border-b-0 pb-3`}>
                                            <ReviewServer data={el} ratings={productDetails.ratings} />
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* Average ratings and rating breakdown */}
                            <div className='space-y-4 w-full lg:w-[30%]'>
                                <div className='flex gap-20 font-manrope font-semibold'>
                                    <p>Product Review</p>
                                    <p className='text-[#7e53d4]'>{totalRatings} Reviews</p>
                                </div>
                                <div className='flex justify-between items-center border-b-2 border-[#cecece] pb-5 border-dotted'>
                                    <StarRating 
                                        rating={averageRating}
                                        starHeight={40}
                                        starWidth={40} 
                                    />
                                    <p className='font-manrope font-semibold text-lg'>({averageRating.toFixed(1)})</p>
                                </div>

                                {/* Rating breakdown */}
                                <div className='space-y-2'>
                                    {ratingCounts.map((count, index) => (
                                        <div key={index} className='flex items-center gap-2'>
                                            <p className='font-manrope text-lg w-[5%]'>
                                                {5 - index}
                                            </p>
                                            <div className='w-[85%] h-[10px] bg-gray-200 rounded-[5px] overflow-hidden'>
                                                <div
                                                    className='h-[10px] bg-[#ffcf13] rounded-[5px]'
                                                    style={{ width: `${getPercentage(count)}%` }}
                                                ></div>
                                            </div>
                                            <p className='font-manrope font-semibold text-sm text-gray-600 w-[10%]'>
                                                {getPercentage(count)}%
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section>
                <div className='flex justify-between'>
                    <p className='font-manrope font-bold text-3xl'>Related Products</p>
                    <NavArrows
                        onLeftArrowClick={() => scroll('left', scrollRef)}
                        onRightArrowClick={() => scroll('right', scrollRef)}
                    />
                </div>
                <Products products={featuredProducts} scrollRef={scrollRef} />
            </section>
        </div>
    );
}
