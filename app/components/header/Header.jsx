'use client'
import { useState, useEffect } from 'react'
import SearchBar from '../fancy/search/SearchBar'
import { BiMenu } from 'react-icons/bi'
import { HiUserCircle } from 'react-icons/hi2'
import { TbWorld } from 'react-icons/tb'
import { HiOutlineSearch } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
import { MdOutlineFilterList } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'

function Header() {
    const [searchFocused, setSearchFocused] = useState(false)

    useEffect(() => {
        const handleWindowScroll = () => setSearchFocused(false)
        if (searchFocused) {
            window.addEventListener('scroll', handleWindowScroll);
        } else {
            window.removeEventListener('scroll', handleWindowScroll);
        }
    }, [searchFocused, setSearchFocused]);

    return (
        <>
            <div className={`relative flex sticky top-0 justify-between px-[20px] laptop:py-0 py-2 border-b-2 desktop:px-[80px] bg-white z-[999]
            ${searchFocused ?
                    "h-[10rem] shadow-lg items-start max-mobile:fixed max-mobile:h-screen max-mobile:right-0 max-mobile:left-0 max-mobile:bg-[#f7f7f7]"
                    : "items-center"}`}>
                {
                    searchFocused ?
                        <button className='mobile:hidden fixed border-2 border-black rounded-full p-2 z-10' onClick={() => setSearchFocused(false)}><IoClose /></button> :
                        <></>
                }
                <div className='hidden mobile:block'>
                    <Link href="/"><img src="/images/Hostshare-Logo-green.png" alt="hostshare logo" className='w-[12rem] hidden laptop:block' /></Link>
                    <Link href="/"><img src="/images/Hostshare-icon.png" alt="hostshare logo" className='w-[3rem] laptop:hidden' /></Link>
                </div>

                {/* search bar expanded */}
                <div className={`mx-auto
                    ${searchFocused ? "slide-down--appear block" : "slide-up--disappear"}
                `}>
                <SearchBar />
                </div>
                {/* search bar button */}
                <button
                    className={`
                    w-full mobile:w-fit px-4 py-[4px] shadow-md bg-white border-2 rounded-full
                    ${searchFocused ? "slide-down--disappear" : "slide-up--appear block"}
                    `}
                    onClick={() => setSearchFocused(true)}
                >
                    <span className='hidden mobile:block'>
                        <span className='flex gap-2 items-center'>
                            <p className='border-r-2 px-2'>Anywhere</p>
                            <p className='border-r-2 px-2'>Anytime</p>
                            <p className='px-2'>Whoever</p>
                            <span
                                className='flex items-center p-2 bg-primarycolor rounded-full text-white'><IoSearch className='w-[18px] h-[18px]' /></span>
                        </span>
                    </span>
                    <span className='mobile:hidden w-full flex items-center text-gray-500'>
                        <span className='pr-4 text-black'><IoSearch /></span>
                        <span className='flex flex-col text-left grow'>
                            <span className='font-semibold text-black text-[1rem]'>Anywhere</span>
                            <span className='text-[0.75rem]'>Add date | Add guests</span>
                        </span>
                        <span className='shrink border-2 rounded-full p-2'><MdOutlineFilterList className='text-black' /></span>
                    </span>
                </button>
                {/* search bar button end */}

                <div className='hidden mobile:block'>
                    <div className="navbar--last flex items-center gap-4">
                        <button className="p-2 rounded-full bg-white text-[1rem] font-semibold hover:bg-gray-100 ease-in-out duration-300">
                            <span>Host your home</span>
                        </button>
                        <button className="rounded-full hover:bg-gray-100 p-2  bg-white ease-in-out duration-300">
                            <TbWorld className="w-[24px] h-[24px]" />
                        </button>
                        <button className="rounded-full p-1 hover:drop-shadow-lg bg-white ease-in-out duration-300 flex items-center gap-2 border-2">
                            <BiMenu className="w-[18px] h-[18px] fill-gray-600" />
                            <HiUserCircle className="w-[32px] h-[32px] fill-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`modal-overlay absolute bottom-0 h-full w-full z-10 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out
                ${searchFocused ?
                        "block opacity-100" : "hidden opacity-0"
                    }`}
                onClick={() => setSearchFocused(false)}
                onScroll={() => setSearchFocused(false)}
            ></div>
        </>
    )
}

export default Header