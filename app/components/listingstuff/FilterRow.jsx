'use client'
import { useEffect, useRef } from 'react';
import getData from '../../../hooks/Datahook.jsx'
import {HiOutlineChevronRight, HiOutlineChevronLeft} from 'react-icons/hi'
import { RowLoader } from '../loader/Loader.jsx';

function FilterRow() {
    const { listingData, isLoading, isError } = getData();

    if (isLoading) return <RowLoader />
    if (isError) return <div>Error while retrieving data</div>

    const listingCategories = Object.entries(listingData.categories);
    console.log(listingCategories)

    function goBack(){
        let scrollContainer = document.querySelector('.filters');
        scrollContainer.style.scrollBehavior = "smooth"
        scrollContainer.scrollLeft -= 400;
    }

    function goForward(){
        let scrollContainer = document.querySelector('.filters');
        scrollContainer.style.scrollBehavior = "smooth"
        scrollContainer.scrollLeft += 400;
    }

    
    return (
        <div className='filter-row py-4 w-full flex gap-2 relative items-center'>
            <button
            onClick={goBack}
            id='backButton' 
            className='flex items-center border-2 rounded-full text-black flex items-center p-2 max-mobile:hidden'><HiOutlineChevronLeft /></button>
            <div className='flex filters overflow-x-scroll scroll-smooth py-4'>
                {
                    // TODO: Add filter options for categories and price range
                    listingCategories.map((items, index) => {
                        return (
                            <div key={index} className='px-2'>
                                <span className='text-[13px] text-gray-600 whitespace-nowrap'>{items[1].title}</span>
                            </div>
                        )
                    })
                }
            </div>
            <button
            onClick={goForward}
            id='forwardButton' 
            className='flex items-center border-2 rounded-full text-black flex items-center p-2 max-mobile:hidden'><HiOutlineChevronRight /></button>
            <button className='ml-4 border-2 rounded-lg p-2 px-4 text-[13px] max-mobile:hidden'>Filter</button>
        </div>
    )
}

export default FilterRow