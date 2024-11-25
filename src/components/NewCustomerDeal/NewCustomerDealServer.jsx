import Image from 'next/image'
import React from 'react'
import coupleImage from '../../assets/couple.webp'
import arrowUpRight from '../../assets/arrow-up-right-01.svg'


export default function NewCustomerDealServer() {
    return (
        <section className=' md:px-10 py-10'>
            <div className=' bg-[#eeecfb] relative flex flex-col lg:flex-row items-center justify-around px-10'>
                <div className=' flex flex-col text-center lg:text-start gap-5 items-center lg:items-start py-10'>
                    <p className=' font-pacifico text-[#6f42c1] text-2xl'>Big Deal</p>
                    <h3 className=' text-3xl md:text-5xl font-manrope'><span className=' text-[#6f42c1]'>30% Off</span> for New Customers</h3>
                    <div className="flex items-center justify-center mt-2">
                        <button className="bg-[#9071e1] rounded-full px-5 p-2 text-white">Shop Now</button>
                        <button className="bg-[#9071e1] rounded-full p-2">
                            <Image src={arrowUpRight} width={20} height={20} alt="Arrow Up Right Icon" />
                        </button>
                    </div>
                </div>
                <div className=' -left-10 relative h-[25rem] w-[24rem]'>
                    <Image className=' absolute object-cover' src={coupleImage} alt='coupleImage' fill />
                </div>
            </div>
        </section>
    )
}
