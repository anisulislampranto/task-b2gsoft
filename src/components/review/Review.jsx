import Image from 'next/image'
import React from 'react'
import like from '../../../public/images/thumbs-up.svg'

export default function ReviewServer({data}) {
    
    return (
        <div className=' flex flex-col gap-5'>
            {/* Image, name, Rating */}
            <div>
                <div className=' relative h-10 w-10'>
                    <Image className=' absolute object-contain rounded-full' src={data.userDp} alt='thumbsUp' fill />
                </div>
                <div></div>
            </div>

            {/* comment */}
            <p className=' font-manrope font-bold'>{data.comment}</p>

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
