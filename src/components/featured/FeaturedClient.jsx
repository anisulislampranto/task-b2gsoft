'use client';

import React, { useRef } from 'react';
import saree from '../../assets/saree.webp';
import hoodie from '../../assets/hoodie.webp';
import plazu from '../../assets/pant.webp';
import jacket from '../../assets/jacket.webp';
import Image from 'next/image';
import ArrowIcon from '@/utils/ArrowIcon';

const featuredProducts = [
    {
        name: 'Indian Saree',
        price: '2,300',
        image: saree
    },
    {
        name: 'Hoodie',
        price: '2,300',
        image: hoodie
    },
    {
        name: 'Plazu',
        price: '2,300',
        image: plazu
    },
    {
        name: 'Jacket',
        price: '2,300',
        image: jacket
    },
    {
        name: 'Indian Saree',
        price: '2,300',
        image: saree
    },
    {
        name: 'Hoodie',
        price: '2,300',
        image: hoodie
    },
];

export default function FeaturedClient() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 320
            if (direction === 'left') {
                scrollRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else if (direction === 'right') {
                scrollRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section className='px-5 md:px-10 py-20 '>

            {/* Heading, Subheading, Arrows */}
            <div className='flex justify-between'>
                <div>
                    <p className='font-manrope text-lg text-[#7e53d4]'>FEATURED PRODUCT</p>
                    <p className='font-manrope text-[28px]'><strong>New Arrivals</strong></p>
                </div>
                <div className='flex items-center gap-2'>
                    <div
                        onClick={() => scroll('left')}
                        className='cursor-pointer flex items-center p-1 group h-9 w-9 border-[1.5px] rounded-full border-[#7e53d4] hover:bg-[#7e53d4]'
                    >
                        <ArrowIcon />
                    </div>
                    <div
                        onClick={() => scroll('right')}
                        className='cursor-pointer rotate-180 flex items-center p-1 group h-9 w-9 border-[1.5px] rounded-full border-[#7e53d4] hover:bg-[#7e53d4]'
                    >
                        <ArrowIcon />
                    </div>
                </div>
            </div>

            {/* Products */}
            <ul
                ref={scrollRef}
                className='flex gap-10 overflow-x-scroll mt-10'
            >
                {featuredProducts.map((el, index) => (
                    <li key={index} className='p-2 flex flex-col gap-4 bg-white rounded-2xl'>
                        <div className='relative h-80 w-72 bg-[#f6f5fe] rounded-[8px]'>
                            <Image className='absolute object-contain' src={el.image} alt='productImage' fill />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>{el.name}</p>
                            <p><strong>BDT {el.price}</strong></p>
                        </div>
                        <button className='p-2 hover:text-white hover:bg-[#7e53d4] rounded-[8px] border border-[#7e53d4] text-[#7e53d4]'>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <div className=' flex justify-center mt-10'>
                <button className='bg-[#7e53d4] hover:bg-transparent border border-[#7e53d4] hover:text-[#7e53d4] text-white p-2 w-36 rounded-lg'>See more</button>
            </div>
        </section>
    );
}
