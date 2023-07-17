'use client'
import FilterRow from '../components/listingstuff/FilterRow'
import ListingGrid from '../components/listingstuff/ListingGrid'
// import { AnimatePresence, motion } from 'framer-motion'

function Search() {
    return (
            <main className='flex flex-col items-center px-[20px] desktop:px-[80px]'>
                <FilterRow />
                <ListingGrid />
            </main>
    )
}

export default Search