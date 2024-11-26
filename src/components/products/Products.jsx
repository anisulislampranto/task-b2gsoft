import Image from 'next/image'
import React from 'react'

export default function Products({products, scrollRef}) {
    return (
        <ul
            ref={scrollRef}
            className='flex gap-10 overflow-x-scroll mt-10'
        >
            {products.map((el, index) => (
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
    )
}
