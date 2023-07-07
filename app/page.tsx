import Image from 'next/image'
import FilterRow from './components/listingstuff/FilterRow'
import ListingGrid from './components/listingstuff/ListingGrid'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-[20px] desktop:px-[80px]'>
      <FilterRow />
      <ListingGrid />
    </main>
  )
}
