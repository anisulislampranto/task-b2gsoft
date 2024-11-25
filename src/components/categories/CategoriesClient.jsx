'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import men from '../../assets/men-featured.webp';
import women from '../../assets/women.webp';
import kid from '../../assets/children.webp';
import CTAButton from '@/utils/CTAButton';

const categories = [
    {
        id: 1,
        heading: 'Men Collection',
        url: '/men',
        image: men,
    },
    {
        id: 2,
        heading: 'Women Collection',
        url: '/women',
        image: women,
    },
    
];

export default function CategoriesClient() {
    const [activeCategoryId, setActiveCategoryId] = useState(1);
    const activeCategory = categories.find(cat => cat.id === activeCategoryId);

    return (
        <section className='py-20 px-5 md:px-10'>
            <div className=" hidden lg:flex flex-col items-start space-y-4 ">
                {/* Display active category */}
                <div className=' flex items-center gap-10'>
                    <div className='relative bg-[#eeecfb] h-[31rem] w-[39rem] flex justify-center '>
                        <div className=' bottom-[5rem] relative h-[36rem] w-[30rem]'>
                            <Image className=' absolute object-cover' src={activeCategory.image} alt='image' fill />
                        </div>
                    </div>
                    <div className=' flex flex-col items-start gap-5'>
                        <h2 className=' font-manrope text-5xl font-semibold'>{activeCategory.heading}</h2>
                        <CTAButton />
                    </div>
                </div>
            </div>

            <ul className=' flex flex-col gap-10 items-center lg:hidden'>
                {categories.map((el) =>
                    <li key={el.id} className=' flex flex-col items-start gap-10'>
                        <div className='relative bg-[#eeecfb] h-[25rem] sm:h-[31rem] w-full sm:w-[28rem] flex justify-center '>
                            <div className=' bottom-[15rem] sm:bottom-[5rem] relative h-[40rem] sm:h-[36rem] w-full sm:w-[25rem]'>
                                <Image className=' absolute object-cover' src={el.image} alt='image' fill />
                            </div>
                        </div>
                        <div className=' flex flex-col items-start gap-5'>
                            <h2 className=' font-manrope text-5xl font-semibold'>{el.heading}</h2>
                            <CTAButton />
                        </div>
                    </li>
                )}
            </ul>

            {/* Dots to navigate categories */}
            <ul className="hidden lg:flex justify-center space-x-2 mt-10">
                {categories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => setActiveCategoryId(category.id)}
                        className={`h-3 rounded-full cursor-pointer duration-200 transition-all ${
                            activeCategoryId === category.id
                                ? 'bg-[#7e53d4] w-12'
                                : 'bg-[#e1dcf8] w-5'
                        }`}
                    ></li>
                ))}
            </ul>
        </section>
    );
}
