'use client'
import FilterRow from '../components/listingstuff/FilterRow'
import ListingGrid from '../components/listingstuff/ListingGrid'

function Search() {
    return (
        <main className='flex flex-col items-center px-[80px]'>
            <FilterRow />
            <ListingGrid />
        </main>
    )
}

export default Search