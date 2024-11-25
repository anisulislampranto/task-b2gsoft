import Image from 'next/image'
import React from 'react'
import logoDark from '../../assets/logo-dark.svg'
import facebook from '../../assets/Facebook.svg'
import linkedIn from '../../assets/Linkedin.svg'
import x from '../../assets/Twitter.svg'
import Link from 'next/link'

const navData = {
    contact: 'support@we5ive.com',
    navLinks: [
        {
            url: '/about-us',
            label: 'About Us'
        },
        {
            url: '/contact-us',
            label: 'Contact Us'
        },
        {
            url: '/privacy-policy',
            label: 'Privacy policy'
        },
        {
            url: '/terms-and-condition',
            label: 'Terms & Condition'
        },
    ],
    socialLinks: [
        {
            url: '',
            icon:  facebook
        },
        {
            url: '',
            icon:  linkedIn
        },
        {
            url: '',
            icon:  x
        },
    ]
}

export default function FooterServer() {
    return (
        <footer>
            <div className='py-10  px-5 sm:px-10 font-manrope bg-[#1d1d1d] text-[#ffffff]'>

                {/* Logo, Subheading, Newsletter signUp */}
                <div className=' flex flex-col lg:flex-row items-center gap-4 lg:items-end justify-between '>
                    <div className=' flex flex-col max-w-lg'>
                        <div className=' relative h-14 sm:h-20 w-36 sm:w-44'>
                            <Image src={logoDark} className=' absolute object-contain' alt='LogoDark' fill />
                        </div>
                        <p>Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
                    </div>

                    <div className=' flex flex-col max-w-lg gap-4'>
                        <h3 className=' text-xl'> <strong>Sign Up For Our Newsletter!</strong> </h3>
                        <p>Get notified about updates and be the first to get early access to new Podcast episodes.</p>
                        <form action="">
                            <div className=' flex w-full'>
                                <input type="text" placeholder='Your email address' className=' text-black rounded-tl-lg rounded-bl-lg p-2 w-[75%]' />
                                <button className=' bg-[#7e53d4] p-2 rounded-tr-lg rounded-br-lg w-[25%]'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Contact, NavLinks, socialLinks */}
                <ul className=' flex gap-4  flex-col items-start sm:flex-row justify-between pt-10'>
                    <li>
                        <p><strong>Contact Us</strong></p>
                        <p className=' mt-2'>{navData.contact}</p>
                    </li>
                    <li className=' grid grid-cols-1 gap-3 items-start sm:grid-cols-2 sm:w-[40%]'>
                        {
                            navData.navLinks.map((el) => 
                                <Link href={el.url} key={el.url}>
                                    {el.label}
                                </Link>
                            )
                        }
                    </li>
                    <li>
                        <p><strong>Social Links</strong></p>
                        <div className=' flex gap-5 mt-2'>
                            {navData.socialLinks.map((el) =>
                                <Link href={el.url} className=' relative h-7 w-7 '>
                                    <Image src={el.icon} className=' absolute object-contain rounded-full' alt='socialMedia' fill />
                                </Link>
                            )}
                        </div>
                    </li>
                </ul>
            </div>

            <div className=' text-center bg-[#7e53d4] text-white p-3 font-nunitoSans'> © {new Date().getFullYear()} | We5ive </div>
        </footer>
    )
}
