import React from 'react'
import arrowUpRight from '../assets/arrow-up-right-01.svg'
import Image from 'next/image'

export default function CTAButton() {
    return (
        <div className={`flex items-center justify-center mt-2 text-white`}>
            <button className="bg-[#9071e1] rounded-full px-5 p-2 font-manrope">Shop Now</button>
            <button className="bg-[#9071e1] rounded-full p-2">
                <Image src={arrowUpRight} width={20} height={20} alt="Arrow Up Right Icon" />
            </button>
        </div>
    )
}
