import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi'



function ListingDetailHeader({listingName, ratings, reviewCount, locationCity, locationCountry}) {
    return (
        <div>
            <div className='header flex flex-wrap py-4 max-mobile:px-4'>
                <h1 className='basis-full'>{listingName}</h1>
                <div className='mobile:basis-3/4 flex gap-2'>
                    <span className='flex items-center'><AiFillStar width={52} height={52} /> {ratings}</span>
                    <span>|</span>
                    <span className='underline font-semibold'>{`${reviewCount} reviews`}</span>
                    <span>|</span>
                    {/* <span>{(targetProperty.host.isSuperhost) ? "Superhost" : ""}</span>
                        <span>|</span> */}
                    <span className='underline font-semibold'>{`${locationCity}, ${locationCountry}`}</span>
                </div>
                <div className='flex items-center mobile:justify-end basis-1/4 max-mobile:hidden'>
                    <button><FiShare width={52} height={52} /> <span className='underline'>Share</span></button>
                    <button className='pr-0'><AiOutlineHeart width={52} height={52} /> <span className='underline'>Save</span></button>
                </div>
            </div>
        </div>
    )
}

export default ListingDetailHeader