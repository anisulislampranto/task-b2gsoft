'use client';

import Image from 'next/image';
import React from 'react'
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/search-01.svg'
import avatar from '../../assets/user.svg'
import cart from '../../assets/shopping.svg'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import menu from '../../assets/menu-02.svg'

const navLinks = [
    {
        url: '/',
        label: 'Home'
    },
    {
        url: '/shop',
        label: 'Shop'
    },
    {
        url: '/deals',
        label: 'Deals'
    },
    {
        url: '/what-is-new',
        label: "What's New"
    },
]

export default function HeaderClient() {
    const pathname = usePathname()


    return (
        <nav className=' flex justify-between items-center px-10 bg-[#f5f3ff]'>
            <div className=' flex items-center gap-5'>
                <div className=' block lg:hidden relative h-10 w-10'>
                    <Image src={menu} className=' absolute object-contain' alt='menu' fill />
                </div>
                <div className=' relative object-cover h-20 w-44'>
                    <Image className=' absolute object-contain' src={logo} alt='logo' fill />
                </div>
            </div>

            <div className=' hidden gap-10 lg:flex'>
                {
                    navLinks.map((el) => 
                        <Link href={el.url} className={`${pathname === el.url ? 'text-[#581fc1]' : 'text-[#646464]'}`}>{el.label}</Link>
                    )
                }
            </div>

            <div className=' flex gap-5 items-center'>
                <div className=' flex items-center relative'>
                    <div className='-mr-8 h-5 w-5 relative'>
                        <Image src={searchIcon} className=' absolute object-cover' alt=' searchIcon' fill />
                    </div>
                    <input type="text" placeholder='Search' className=' rounded-full p-2 pl-10' />
                </div>

                <div className=' flex gap-5'>
                    <div className='  h-8 w-8 relative'>
                        <Image src={cart} className=' absolute object-cover' alt=' searchIcon' fill />
                    </div>
                    <div className=' h-8 w-8 relative'>
                        <Image src={avatar} className=' absolute object-cover' alt=' searchIcon' fill />
                    </div>
                </div>
            </div>
        </nav>
    )
}
