'use client'
import React from 'react'
import getData from '@/hooks/Datahook'
import Slider from '@/app/components/gallery/Slider'
import MasonryGrid from '@/app/components/gallery/MasonryGrid'
import Map from '@/app/components/map/Map'

import { AiFillStar } from 'react-icons/ai';
import { HiOutlineChevronRight } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'

function page({ params }) {
    const { listingData, isLoading, isError } = getData();
    const listingProperty = [];
    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error while retrieving data</div>
    const listingProperties = Object.entries(listingData.data)
    listingProperties.forEach((item) => {
        if (item[1].info.id === params.id) {
            listingProperty.push(item)
        }
    })
    const targetProperty = listingProperty[0][1].info
    console.log(targetProperty);
    return (
        <div className='max-w-6xl mx-auto font-primaryfont'>
            <div className='flex flex-col max-mobile:flex-col-reverse'>
                <div className='header flex flex-wrap py-4 max-mobile:px-4'>
                    <h1 className='basis-full'>{targetProperty.title}</h1>
                    <div className='mobile:basis-3/4 flex gap-2'>
                        <span className='flex items-center'><AiFillStar width={52} height={52} /> {targetProperty.ratings.guestSatisfactionOverall}</span>
                        <span>|</span>
                        <span className='underline font-semibold'>{`${targetProperty.visibleReviewCount} reviews`}</span>
                        <span>|</span>
                        {/* <span>{(targetProperty.host.isSuperhost) ? "Superhost" : ""}</span>
                        <span>|</span> */}
                        <span className='underline font-semibold'>{`${targetProperty.location.city}, ${targetProperty.location.country.title}`}</span>
                    </div>
                    <div className='flex items-center basis-1/4 max-mobile:hidden'>
                        <button><FiShare width={52} height={52} /> <span className='underline'>Share</span></button>
                        <button className='pr-0'><AiOutlineHeart width={52} height={52} /> <span className='underline'>Save</span></button>
                    </div>
                </div>
                <div className=''>
                    <div className='mobile:hidden'>
                        <Slider images={targetProperty.images.data} width={`100%`} height={300} />
                    </div>
                    <div className='max-mobile:hidden'>
                        <MasonryGrid images={targetProperty.images.data} />
                    </div>
                </div>
            </div>
            <div className='mobile:flex flex-row-reverse gap-4 mt-8 max-mobile:px-4'>
                <div className='mobile:w-1/3
                max-mobile:fixed max-mobile:bottom-0 max-mobile:w-screen max-mobile:right-0 max-mobile:left-0
                '>
                    <div className='listing-info-card bg-white shadow-md mobile:sticky mobile:top-[100px] text-gray-600 mobile:p-4 mobile:rounded-lg w-full bg-white mobile:border-2
                    max-mobile:flex max-mobile:items-center max-mobile:justify-between max-mobile:px-4 max-mobile:border-2 max-mobile:h-[80px] max-mobile:z-[999]
                    '>
                        <div className='flex justify-between'>
                            <p><span className='font-bold text-black'>${targetProperty.price}</span> night</p>
                            <span className='flex items-center max-mobile:hidden'><span className='flex items-center text-black'><AiFillStar /> {targetProperty.ratings.guestSatisfactionOverall} </span>| {targetProperty.visibleReviewCount} reviews</span>
                        </div>
                        <div className='max-mobile:hidden'>
                            <span>checkin</span>
                            <span>checkout</span>
                            <span>guests</span>
                        </div>
                        <button className='button button-lg button--outline button--fill mobile:w-full flex'>Reserve</button>
                        <span className='max-mobile:hidden'>you won't be charged yet</span>
                    </div>
                </div>
                <div className='mobile:w-2/3 flex flex-col gap-8'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h1 className='basis-full'>{`Hosted by${targetProperty.host.name}`}</h1>
                            <div className='basis-3/4'>
                                <span>{`${targetProperty.details.data[0].value} ${targetProperty.details.data[0].type} | `}</span>
                                <span>{`${targetProperty.details.data[1].value} ${targetProperty.details.data[1].type} | `}</span>
                                <span>{`${targetProperty.details.data[2].value} ${targetProperty.details.data[2].type} | `}</span>
                                <span>{`${targetProperty.details.data[3].value} ${targetProperty.details.data[3].type}`}</span>
                            </div>
                        </div>
                        <img src={targetProperty.host.avatar.url} alt="host avatar" className='w-[56px] h-[56px] rounded-full' />
                    </div>
                    <hr />
                    <div>
                        <p className='line-clamp-4 mb-4'>{targetProperty.description}</p>
                        <button className='button-md pl-0 underline'>Show more <HiOutlineChevronRight width={52} height={52} /> </button>
                    </div>
                    <hr />
                    <div>
                        <div className='grid grid-cols-2 mb-4'>
                            {
                                targetProperty.amenities.data.slice(0, 6).map((item, index) => {
                                    return (
                                        <p key={index} className='my-2 text-gray-600'>{item.title}</p>
                                    )
                                })
                            }
                        </div>
                        <button className='button--outline button-md'>Show all {targetProperty.amenities.count} amenities</button>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='max-mobile:px-4'>
                <h1>Where you'll be...</h1>
                <div className='w-full h-[20vh]'>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default page