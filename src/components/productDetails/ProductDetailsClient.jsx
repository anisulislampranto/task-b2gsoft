'use client';

import React, { useRef } from 'react'
import { featuredProducts } from '../featured/FeaturedClient';
import { NavArrows } from '../SectionHeader/SectionHeader';
import Products from '../products/Products';
import { useScroll } from '@/hooks/useScroll';
import Link from 'next/link';
import Image from 'next/image';
import arrowDown from '../../../public/images/arrow-down-01.svg'
import ReviewServer from '../review/Review';

export default function ProductDetailsClient({productDetails}) {
    const { scroll } = useScroll(320);
    const scrollRef = useRef();



    return (
        <div className=' px-5 md:px-10 py-20'>

            {/* details, review & rating, discussion */}
            <section className=' py-20'>
                {/* Options */}
                <div className=' font-manrope text-lg flex gap-20'>
                    <button>Details</button>
                    <button  className=' text-[#7e53d4]'>Review & Rating</button>
                    <button>Discussion</button>
                </div>

                {/* Reviews */}
                <div className=' mt-10'>
                    <div>
                        <div className="relative inline-block">
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
                                <Image className=' absolute object-contain' src={arrowDown} alt='arrowDown' fill />
                            </span>
                        </div>

                        
                        <div>
                            <ul className=' flex flex-col gap-5 mt-10'>
                                {productDetails.ratings.map((el, i) => 
                                    <li key={i} className={`border-b border-dotted last:border-b-0`}>
                                        <ReviewServer data={el} />
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Related Products */}
            <section>
                <div className=' flex justify-between'>
                <p className=' font-manrope font-bold text-3xl'>Related Products</p>
                <NavArrows
                    onLeftArrowClick={() => scroll('left', scrollRef)}
                    onRightArrowClick={() => scroll('right', scrollRef)}
                />
                </div>
                <Products products={featuredProducts} scrollRef={scrollRef} />
            </section>
        </div>
    )
}
