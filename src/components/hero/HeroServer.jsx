import Image from 'next/image';
import React from 'react';
import heroImage2 from '../../assets/hero-image-2.webp';
import heroImage from '../../assets/hero-image.webp';
import truckIcon from '../../assets/truck-delivery.svg'
import exchangeIcon from '../../assets/exchange-01.svg'
import paymentIcon from '../../assets/payment-02.svg'
import CTAButton from '@/utils/CTAButton';

const heroData = [
    {
        icon: truckIcon,
        heading: 'FREE SHIPPING',
        subHeading: 'BUY BDT 3000+ & GET FREE DELIVERY'
    },
    {
        icon: exchangeIcon,
        heading: '7 DAYS EXCHANGE',
        subHeading: 'EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS'
    },
    {
        icon: paymentIcon,
        heading: '100% PAYMENT SECURE',
        subHeading: 'CASH ON DELIVERY AND SECURED ONLINE PAYMENT'
    },
]

export default function HeroServer() {
    return (
        <section className='font-manrope text-[#ffffff] '>
            <div className="relative h-[37rem] w-full ">
                {/* Hero Bg Image */}
                <Image
                    src={heroImage}
                    className=" z-20 absolute object-cover [object-position:50%_20%]"
                    alt="hero-image"
                    fill
                />
                
                {/* Shadow over Hero Bg Image */}
                <div className="absolute inset-0 bg-black opacity-50 z-30"></div>

                {/* Text Over Hero Bg Image */}
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 text-center">
                    <h1 className="text-4xl md:text-5xl">Elevate Your Everyday Style</h1>
                    <p className="md:text-lg">Discover the Latest Trends in Sustainable Fashion</p>
                    <CTAButton />
                </div>
            </div>


            {/* Section below heroImage */}
            <div className='relative h-[18rem] lg:h-[7rem] w-full px-8 md:px-20'>
                <Image
                    src={heroImage2}
                    className=" z-30 absolute object-cover [object-position:50%_20%]"
                    alt="hero-image"
                    fill
                />
                <div className="absolute inset-0 bg-[#6441C2E5] opacity-100 z-30"></div>

                <div className=' flex items-center justify-center h-[18rem] lg:h-[7rem]'>
                    <ul className=' flex flex-col gap-10 lg:flex-row items-start justify-between '>    
                        {heroData.map((el) =>
                            <li key={el.heading} >
                                <div className=' flex gap-5 items-start relative z-40'>
                                    <div className=' relative h-10 w-10'>
                                        <Image src={el.icon} className=' absolute object-contain' alt='Icon' fill />
                                    </div>
                                    <div>
                                        <h3>{el.heading}</h3>
                                        <p className=' text-sm'>{el.subHeading}</p>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

        </section>
    );
}
