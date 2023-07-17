import FilterRow from './components/listingstuff/FilterRow'
import ListingGrid from './components/listingstuff/ListingGrid'
import Header from './components/header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center px-[20px] desktop:px-[80px]'>
        <FilterRow />
        <ListingGrid />
      </main>
    </>
  )
}
