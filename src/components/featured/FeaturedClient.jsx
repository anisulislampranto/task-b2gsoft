'use client';

import React, { useRef } from 'react';
import saree from '../../assets/saree.webp';
import hoodie from '../../assets/hoodie.webp';
import plazu from '../../assets/pant.webp';
import jacket from '../../assets/jacket.webp';
import Image from 'next/image';
import { useScroll } from '@/hooks/useScroll';
import SectionHeader from '../SectionHeader/SectionHeader';

const featuredProducts = [
    {   
        id: 10,
        name: 'Indian Saree',
        price: '2,300',
        image: saree
    },
    {
        id: 11,
        name: 'Hoodie',
        price: '2,300',
        image: hoodie
    },
    {
        id: 12,
        name: 'Plazu',
        price: '2,300',
        image: plazu
    },
    {
        id: 13,
        name: 'Jacket',
        price: '2,300',
        image: jacket
    },
    {
        id: 14,
        name: 'Indian Saree',
        price: '2,300',
        image: saree
    },
    {
        id: 15,
        name: 'Hoodie',
        price: '2,300',
        image: hoodie
    },
];

export default function FeaturedClient() {
    const { scroll } = useScroll(320);
    const scrollRef = useRef();


    return (
        <section className='px-5 md:px-10 py-20 font-manrope'>

            {/* Heading, Subheading, Arrows */}
            <SectionHeader
                title="FEATURED PRODUCT"
                subtitle="New Arrivals"
                onLeftArrowClick={() => scroll('left', scrollRef)}
                onRightArrowClick={() => scroll('right', scrollRef)}
            />

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
                            <p className=' font-semibold'>BDT {el.price}</p>
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
