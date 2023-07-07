'use client'
import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Link from 'next/link'
import Counter from '@/app/components/counter/Counter'
import Calendar from '@/app/components/calendar/Calendar'

function SearchBar() {
    const [searchFocused, setSearchFocused] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    return (
        <div className='flex flex-col gap-8
        max-mobile:w-full max-mobile:h-full
        '>
            <div className='mx-auto flex gap-4 text-center font-bold'>
                <p>Stays</p>
                <p>Experiences</p>
                <p>Hosts</p>
            </div>
            <div className="z-[999] flex items-center gap-8 justify-center mobile:border-2 mobile:rounded-full bg-white text-gray-500 mobile:shadow-md transition-all duration-1000 ease-in-out
                max-mobile:flex-col max-mobile:rounded-lg max-mobile:items-stretch max-mobile:h-full max-mobile:justify-start max-mobile:bg-transparent
            " >
                <div className="search-bar__item dropdown dropdown-bottom rounded-full px-8 py-2 hover:bg-gray-200 hover:shadow-lg
                    max-mobile:bg-white max-mobile:rounded-lg shadow-sm max-mobile:border-[0.1px] max-mobile:border-black
                ">
                    <label tabIndex={0} className="search__item-label cursor-pointer ">
                        <p className='font-bold text-black'>Where</p>
                        <input type="text" placeholder='Destinations...' onChange={(e) => setSearchValue(e.target.value)} className='bg-transparent outline-none' />
                    </label>
                    <div tabIndex={0} className="dropdown-content mt-4 z-[1] card">
                        <div className='card-body bg-white rounded-[24px] shadow-lg'>
                            <p className='card-title'>stuff</p>
                        </div>
                    </div>
                </div>
                <div className="search-bar__item dropdown dropdown-bottom rounded-full px-8 py-2 hover:bg-gray-200 hover:shadow-lg
                    max-mobile:bg-white max-mobile:rounded-lg shadow-sm max-mobile:border-[0.1px] max-mobile:border-black
                ">
                    <label tabIndex={0} className="search__item-label cursor-pointer ">
                        <p className='font-bold text-black'>When</p>
                        <p>Add dates</p>
                    </label>
                    <div tabIndex={0} className="dropdown-content mt-4 z-[1] card">
                        <div className='card-body bg-white rounded-[24px] shadow-lg'>
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div className="search-bar__item dropdown dropdown-bottom rounded-full px-8 py-2 hover:bg-gray-200 hover:shadow-lg
                    max-mobile:bg-white max-mobile:rounded-lg shadow-sm max-mobile:border-[0.1px] max-mobile:border-black
                ">
                    <label tabIndex={0} className="search__item-label cursor-pointer ">
                        <p className='font-bold text-black'>Who</p>
                        <p>Add Guests</p>
                    </label>
                    <div tabIndex={0} className="dropdown-content mt-4 z-[1] card">
                        <div className='card-body bg-white flex flex-col gap-4 items-stretch rounded-[24px] shadow-lg'>
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
                <div className='search-bar__submit bg-primarycolor rounded-full p-2 mr-2
                    max-mobile:fixed max-mobile:bottom-[15px] max-mobile:right-[15px] max-mobile:rounded-lg
                '>
                    <button className='text-white font-bold'>
                        <Link href={`/search/${searchValue}`} className='flex items-center'>
                            <HiOutlineSearch className='w-[18px] h-[18px]' />
                            <span>Search</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar