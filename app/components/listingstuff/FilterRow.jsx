'use client'
import { useEffect, useRef } from 'react';
import getData from '../../../hooks/Datahook.jsx'
import { RowLoader } from '../loader/Loader.jsx';


import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi'
import { LuSettings2 } from "react-icons/lu";

function FilterRow() {
    const { listingData, isLoading, isError } = getData();
    const filterRow = useRef(null);

    if (isLoading) return <RowLoader />
    if (isError) return <div>Error while retrieving data</div>

    const listingCategories = Object.entries(listingData.categories);

    function goBack() {
        filterRow.current.scrollLeft -= 400;
    }

    function goForward() {
        filterRow.current.scrollLeft += 400;
    }


    return (
        <div className='filter-row py-4 w-full flex gap-2 relative items-center'>
            <button
                onClick={goBack}
                className='btn btn-circle btn-outline max-mobile:hidden'><HiOutlineChevronLeft /></button>
            <div ref={filterRow} className='flex filters overflow-x-scroll scroll-smooth py-4 mx-4'>
                {
                    // TODO: Add filter options for categories and price range
                    listingCategories.map((items, index) => {
                        return (
                            <div key={index} className='px-4'>
                                <span className='text-[13px] text-gray-600 whitespace-nowrap'>{items[1].title}</span>
                            </div>
                        )
                    })
                }
            </div>
            <button
                onClick={goForward}
                className='btn btn-circle btn-outline max-mobile:hidden'><HiOutlineChevronRight /></button>
            <button
                className='ml-4 text-sm btn hidden mobile:flex'>
                <LuSettings2 /> Filter
            </button>
        </div>
    )
}

export default FilterRow