import Image from 'next/image';
import React from 'react';
import heroImage from '../../assets/hero-image.webp';

export default function HeroServer() {
    return (
        <div>
            <div className="relative h-[40rem] w-full">
                <Image
                    src={heroImage}
                    className="absolute object-cover [object-position:50%_20%]"
                    alt="hero-image"
                    fill
                />
            </div>
        </div>
    );
}
