'use client'
import { useState, useEffect } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Link from 'next/link'
import Counter from '@/app/components/counter/Counter'
import Calendar from '@/app/components/calendar/Calendar'

function SearchBar() {
    const [searchFocused, setSearchFocused] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const country = [
        {
            image: '/images/map.jpg',
            title: "North America",
        },
        {
            image: '/images/map.jpg',
            title: "North America",
        },
        {
            image: '/images/map.jpg',
            title: "North America",
        },
    ]

    return (
        <div className='flex flex-col gap-8
        max-mobile:w-full max-mobile:h-full
        '>
            <div className='mx-auto flex gap-4 text-center font-bold'>
                <p>Stays</p>
                <p>Experiences</p>
                <p>Hosts</p>
            </div>
            <div className="z-[999] flex items-center gap-8 justify-center mobile:border-2 mobile:rounded-full bg-gray-100 text-gray-500 mobile:shadow-md transition-all duration-1000 ease-in-out
                max-mobile:flex-col max-mobile:rounded-lg max-mobile:items-stretch max-mobile:h-full max-mobile:justify-start max-mobile:bg-transparent
            " >
                <div className="search-bar__item dropdown dropdown-bottom rounded-full px-8 py-2 hover:bg-white hover:shadow-lg
                    max-mobile:bg-white max-mobile:rounded-lg max-mobile:border-[0.1px] max-mobile:border-black
                ">
                    <label tabIndex={0} className="search__item-label cursor-pointer ">
                        <p className='font-bold text-black'>Where</p>
                        <input type="text" placeholder='Destinations...' onChange={(e) => setSearchValue(e.target.value)} className='bg-transparent outline-none' />
                    </label>
                    <div tabIndex={0} className="dropdown-content mt-4 z-[1] card">
                        <div className='bg-white shadow-lg rounded-[24px] text-black py-4 px-8 space-y-4 border-[1px]'>
                            <p className='font-semibold text-[14px]'>Search by region</p>
                            <div className='flex gap-2'>
                                {
                                    country.map((item, index) => {
                                        return(
                                            <div className=''>
                                                <button className='rounded-lg border-[1px] border-transparent hover:border-black p-0'>
                                                    <img src={item.image} alt='' className='min-w-[125px] overflow-hidden rounded-lg hover:opacity-80 object-cover m-0' />
                                                </button>
                                                <div><span className='text-[14px]'>{item.title}</span></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-bar__item dropdown dropdown-bottom rounded-full px-8 py-2 hover:bg-white hover:shadow-lg
                    max-mobile:bg-white max-mobile:rounded-lg max-mobile:border-[0.1px] max-mobile:border-black
                ">
                    <label tabIndex={0} className="search__item-label cursor-pointer ">
                        <p className='font-bold text-black'>When</p>
                        <p>Add dates</p>
                    </label>
                    <div tabIndex={0} className="dropdown-content mt-4 z-[1] card">
                        <div className='card-body bg-white rounded-[24px] shadow-lg border-[1px]'>
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div className="search-bar__item dropdown dropdown-bottom rounded-full px-8 py-2 hover:bg-white hover:shadow-lg
                    max-mobile:bg-white max-mobile:rounded-lg max-mobile:border-[0.1px] max-mobile:border-black
                ">
                    <label tabIndex={0} className="search__item-label cursor-pointer ">
                        <p className='font-bold text-black'>Who</p>
                        <p>Add Guests</p>
                    </label>
                    <div tabIndex={0} className="dropdown-content mt-4 z-[1] card">
                        <div className='card-body bg-white flex flex-col gap-4 items-stretch rounded-[24px] shadow-lg border-[1px]'>
                            <Counter label="Adult" />
                            <hr />
                            <Counter label="Children" />
                            <hr />
                            <Counter label="Infants" />
                            <hr />
                            <Counter label="Pets" />
                        </div>
                    </div>
                </div>
                {/* absolute right-0 mr-[1rem] */}
                
                <button className='text-white font-bold search-bar__submit bg-primarycolor max-mobile:w-full rounded-full p-2 mr-2
                max-mobile:bottom-[15px] max-mobile:right-[15px] max-mobile:rounded-lg'>
                    <Link href={`/search/${searchValue}`} className='flex items-center space-x-2 text-center'>
                        <HiOutlineSearch className='w-[18px] h-[18px]' />
                        <span>Search</span>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default SearchBar