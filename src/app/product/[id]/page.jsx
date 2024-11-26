'use client';

import { featuredProducts } from '@/components/featured/FeaturedClient';
import Products from '@/components/products/Products';
import { NavArrows } from '@/components/SectionHeader/SectionHeader'
import { useScroll } from '@/hooks/useScroll';
import React, { useRef } from 'react'

export default function ProductDetailsPage() {
  const { scroll } = useScroll(320);
  const scrollRef = useRef();

  return (
    <div className=' px-5 md:px-10 py-20'>
      

      {/* Related Products */}
      <div>
        <div className=' flex justify-between'>
          <p className=' font-manrope font-bold text-3xl'>Related Products</p>
          <NavArrows
            onLeftArrowClick={() => scroll('left', scrollRef)}
            onRightArrowClick={() => scroll('right', scrollRef)}
          />
        </div>
        <Products products={featuredProducts} scrollRef={scrollRef} />
      </div>
      
    </div>
  )
}
