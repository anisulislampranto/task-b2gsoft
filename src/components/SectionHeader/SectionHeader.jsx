import ArrowIcon from '@/utils/ArrowIcon'
import React from 'react'

export default function SectionHeader({title, subtitle, onLeftArrowClick, onRightArrowClick}) {
    return (
        <div className='flex justify-between'>
            <div>
                <p className='font-manrope text-lg text-[#7e53d4]'>{title}</p>
                <p className='font-manrope text-[28px]'><strong>{subtitle}</strong></p>
            </div>
            <div className='flex items-center gap-2'>
                <div
                    onClick={onLeftArrowClick}
                    className='cursor-pointer flex items-center p-1 group h-9 w-9 border-[1.5px] rounded-full border-[#7e53d4] hover:bg-[#7e53d4]'
                >
                    <ArrowIcon />
                </div>
                <div
                    onClick={onRightArrowClick}
                    className='cursor-pointer rotate-180 flex items-center p-1 group h-9 w-9 border-[1.5px] rounded-full border-[#7e53d4] hover:bg-[#7e53d4]'
                >
                    <ArrowIcon />
                </div>
            </div>
        </div>
    )
}
