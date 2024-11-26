'use client';

import React, { useRef } from 'react';
import { featuredProducts } from '../featured/FeaturedClient';
import { NavArrows } from '../SectionHeader/SectionHeader';
import Products from '../products/Products';
import { useScroll } from '@/hooks/useScroll';
import ProductReviewsClient from '../ProductReviews/ProductReviewsClient';
import ProductOverviewClient from '../ProductOverview/ProductOverviewClient';

export default function ProductDetailsClient({ productDetails }) {
    const { scroll } = useScroll(320);
    const scrollRef = useRef();


    return (
        <div className='px-5 md:px-10 py-20 bg-[#f4f8ff]'>
            {/* Product Overview */}
            <ProductOverviewClient productDetails={productDetails} />

            {/* details, review & rating, discussion */}
            <ProductReviewsClient productDetails={productDetails} />

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
