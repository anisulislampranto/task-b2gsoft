'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/search-01.svg'
import avatar from '../../assets/user.svg'
import cart from '../../assets/shopping.svg'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import menu from '../../assets/menu-02.svg'
import { RxCross2 } from "react-icons/rx";
import SearchModal from '../ui/SearchModal';


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
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false)


    return (
        <>
            <nav className=' flex justify-between items-center px-10 bg-[#f5f3ff]'>
                <div className=' flex items-center gap-5'>

                    {/* SmallScreen: Menu Icon */}
                    <div onClick={() => setOpen(!open)} className=' block lg:hidden relative h-9 w-9'>
                        {
                            open ? <RxCross2 className=' w-9 h-9' /> :
                            <Image src={menu} className=' absolute object-contain' alt='menu' fill />
                        }
                    </div>

                    {/* Logo */}
                    <div className=' relative object-cover h-20 w-44'>
                        <Image className=' absolute object-contain' src={logo} alt='logo' fill />
                    </div>
                </div>

                <div className=' hidden gap-10 lg:flex'>
                    {
                        navLinks.map((el) => 
                            <Link key={el.label} href={el.url} className={`${pathname === el.url ? 'text-[#581fc1]' : 'text-[#646464]'}`}>{el.label}</Link>
                        )
                    }
                </div>

                <div className=' flex gap-5 items-center'>
                    {/* Search  */}
                    <div className=' flex items-center relative'>
                        {/* SmallScreen: search modal */}
                        <button onClick={() => setSearchOpen(!searchOpen)} className=' block md:hidden md:-mr-8 h-7 w-7 relative'>
                            <Image src={searchIcon} className=' absolute object-cover' alt=' searchIcon' fill />
                        </button>

                        <div className=' hidden md:block -mr-8 h-6 w-6 relative'>
                            <Image src={searchIcon} className=' absolute object-cover' alt=' searchIcon' fill />
                        </div>
                        <input type="text" placeholder='Search' className=' rounded-full p-2 pl-10 hidden md:block' />
                    </div>

                    {/* Cart and user */}
                    <div className=' flex gap-5'>
                        <div className='  h-8 w-9 relative'>
                            <Image src={cart} className=' absolute object-cover' alt=' searchIcon' fill />
                        </div>
                        <div className=' h-8 w-8 relative'>
                            <Image src={avatar} className=' absolute object-cover' alt=' searchIcon' fill />
                        </div>
                    </div>
                </div>
            </nav>

            {/* SmallScreen: Dropdown */}
            <div 
                className={`bg-[#f5f3ff] z-50 fixed top-20 w-full text-2xl gap-10 text-center flex flex-col ${open ? 'h-screen opacity-100 py-10' : 'h-0 opacity-0'} transition-all duration-300 ease-in-out overflow-hidden`}
            >
                <div className='flex flex-col'>
                    {
                        navLinks?.map((el) => 
                            <Link key={el.url} href={el.url} className={`${pathname === el.url ? 'text-[#581fc1]' : 'text-[#646464]'}`}>{el.label}</Link>
                        )
                    }
                </div>
            </div>
                
            <SearchModal open={searchOpen} setOpen={setSearchOpen} />
        </>
    )
}
