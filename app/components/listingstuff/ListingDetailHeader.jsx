import { LuShare, LuHeart, LuStar } from "react-icons/lu";

function ListingDetailHeader({ listingName, ratings, reviewCount, locationCity, locationCountry }) {
    return (
        <div>
            <div className='header py-4 max-mobile:px-4'>
                <h1 className=''>{listingName}</h1>
                <div className="flex justify-between">
                    <div className='mobile:basis-3/4 flex items-center gap-2'>
                        <span className='flex items-center'><LuStar width={52} height={52} /> {ratings}</span>
                        <span className="decoration"></span>
                        <span className='underline font-semibold'>{`${reviewCount} reviews`}</span>
                        <span className="decoration"></span>
                        {/* <span>{(targetProperty.host.isSuperhost) ? "Superhost" : ""}</span>
                        <span>|</span> */}
                        <span className='underline font-semibold'>{`${locationCity}, ${locationCountry}`}</span>
                    </div>
                    <div className='flex items-center mobile:justify-end basis-1/4 max-mobile:hidden'>
                        <button className='btn btn-link'><LuShare width={52} height={52} /> Share</button>
                        <button className='pr-0 btn btn-link'><LuHeart width={52} height={52} /> Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDetailHeader