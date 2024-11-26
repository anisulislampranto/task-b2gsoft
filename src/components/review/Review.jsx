import Image from 'next/image'
import React from 'react'
import like from '../../../public/images/thumbs-up.svg'
import StarRating from '@/utils/StarRating'

export default function ReviewServer({data}) {

    return (
        <div className=' flex flex-col gap-5'>
            {/* Image, name, Rating */}
            <div className=' flex gap-2 items-center'>
                <div className=' relative h-9 w-9'>
                    <Image className=' absolute object-contain rounded-full' src={data.userDp} alt='thumbsUp' fill />
                </div>
                <div className=' space-y-1'>
                    <div className=' font-manrope flex items-center gap-4'> <p className=' font-bold text-lg'>{data.name}</p> <p className=' text-[#656565]'>3 days</p> </div>
                    <StarRating starWidth={17} starHeight={17} rating={data.rating} />
                </div>
            </div>

            {/* comment */}
            <p className=' font-manrope font-bold'>{data.comment} !!</p>

            {/* Likes */}
            <div className=' flex gap-1 items-center'>
                <div className=' relative h-4 w-4'>
                    <Image className=' absolute object-contain' src={like} alt='thumbsUp' fill />
                </div>
                <p className=' text-sm'>10</p>
            </div>
        </div>
    )
}
