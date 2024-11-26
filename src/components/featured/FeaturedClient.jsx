'use client';

import React, { useRef } from 'react';
import saree from '../../../public/images/saree.webp';
import hoodie from '../../../public/images/hoodie.webp';
import plazu from '../../../public/images/pant.webp';
import jacket from '../../../public/images/jacket.webp';
import { useScroll } from '@/hooks/useScroll';
import SectionHeader from '../SectionHeader/SectionHeader';
import Products from '../products/Products';

export const featuredProducts = [
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
            <Products products={featuredProducts} scrollRef={scrollRef} />

            <div className=' flex justify-center mt-10'>
                <button className='bg-[#7e53d4] hover:bg-transparent border border-[#7e53d4] hover:text-[#7e53d4] text-white p-2 w-36 rounded-lg'>See more</button>
            </div>
        </section>
    );
}
