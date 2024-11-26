'use client';

import React, { useRef } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useScroll } from '@/hooks/useScroll';
import Image from 'next/image';
import StarIcon from '@/utils/StarIcon';
import products from '../../assets/products.json'
import StarRating from '@/utils/StarRating';


const ProductList = ({ scrollRef, productData }) => {


    return (
        <ul ref={scrollRef} className="flex gap-10 overflow-x-scroll mt-10">
            {productData.map((product, i) => (
                <li key={i} className="p-2 flex flex-col gap-4 bg-white rounded-2xl">
                    <div className="relative h-80 w-72 bg-[#f6f5fe] rounded-[8px]">
                        <div className=' absolute right-5 rounded-br-full rounded-bl-full font-manrope font-bold flex justify-end bg-[#7e53d4] text-center px-2 w-14 h-20 text-white'>
                            Up to 40%
                        </div>
                        <Image
                            className="absolute object-contain"
                            src={product.image}
                            alt={product.name}
                            fill
                        />
                    </div>
                    
                    {console.log('image', product)}

                    {/* Ratings */}
                    <div className='flex gap-2 items-center'>
                        <StarRating
                            rating={product.ratings.reduce((acc, curr) => acc + curr.rating, 0) / product.ratings.length}
                        />
                        <p className="font-nunitoSans">
                            ({product.ratings.length})
                        </p>
                    </div>

                    <div className="flex justify-between items-center font-manrope">
                        <p>{product.name}</p>
                        <p className=' font-semibold'>
                            BDT {product.price}
                        </p>
                    </div>
                    <button className="p-2 font-manrope hover:text-white hover:bg-[#7e53d4] rounded-[8px] border border-[#7e53d4] text-[#7e53d4]">
                        Add to Cart
                    </button>
                </li>
            ))}
        </ul>
    );
};


export default function SummerDealClient() {
    const { scroll } = useScroll(320);

    const scrollRef1 = useRef(null);
    const scrollRef2 = useRef(null);

    const handleScroll = (direction) => {
        scroll(direction, scrollRef1);
        scroll(direction, scrollRef2);
    };

    return (
        <div className="px-5 md:px-10 pb-20">
            {/* Heading, Subheading, Arrows */}
            <SectionHeader
                title="SUMMER"
                subtitle="Big Deal"
                onLeftArrowClick={() => handleScroll('left')}
                onRightArrowClick={() => handleScroll('right')}
            />

            {/* Product List */}
            <ProductList scrollRef={scrollRef1} productData={products.products} />
            <ProductList scrollRef={scrollRef2} productData={products.products} />

            <div className=' flex justify-center mt-10'>
                <button className='bg-[#7e53d4] hover:bg-transparent border border-[#7e53d4] hover:text-[#7e53d4] text-white p-2 w-36 rounded-lg'>See more</button>
            </div>
        </div>
    );
}
