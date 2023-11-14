'use client'
import React from 'react'
import getData from '@/hooks/Datahook'
import Map from '@/app/components/map/Map'
import LocationDetailHeader from '@/app/components/listingstuff/ListingDetailHeader';
import { AnimatePresence, motion } from 'framer-motion'
import { Loader } from '@/app/components/loader/Loader'
import ListingDetailHeader from '@/app/components/listingstuff/ListingDetailHeader'
import ListingGallery from '@/app/components/listingstuff/ListingGallery'
import ListingCard from '@/app/components/listingstuff/ListingCard'
import ListingDetails from '@/app/components/listingstuff/ListingDetails'
import HostAvatar from '@/app/components/host/HostAvatar'
import HostName from '@/app/components/host/HostName'
import ListingDescription from '@/app/components/listingstuff/ListingDescription'
import ListingAmenities from '@/app/components/listingstuff/ListingAmenities'


function page({ params }) {
    const { listingData, isLoading, isError } = getData();
    const listingProperty = [];

    if (isLoading) return <Loader />
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='max-w-6xl mx-auto font-primaryfont mobile:px-4'>
                <div className='flex flex-col max-mobile:flex-col-reverse'>
                    <ListingDetailHeader
                        listingName={targetProperty.title}
                        rating={targetProperty.ratings.guestSatisfactionOverall}
                        reviewCount={targetProperty.visibleReviewCount}
                        locationCity={targetProperty.location.city}
                        locationCountry={targetProperty.location.country.title}
                    />
                    {/* listing gallery */}
                    <ListingGallery images={targetProperty.images.data} />
                </div>
                <div className='mobile:flex flex-row-reverse gap-4 mt-8 max-mobile:px-4'>
                    <div className='mobile:w-1/3
                max-mobile:fixed max-mobile:bottom-0 max-mobile:w-screen max-mobile:right-0 max-mobile:left-0
                '>
                        <ListingCard
                            price={targetProperty.price}
                            guestSatisfactionOverall={targetProperty.ratings.guestSatisfactionOverall}
                            visibleReviewCount={targetProperty.visibleReviewCount}
                        />
                    </div>
                    <div className='mobile:w-2/3 flex flex-col gap-8'>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h1 className='basis-full'>
                                    <HostName host_name={targetProperty.host.name} />
                                </h1>
                                <ListingDetails details={targetProperty.details} />
                            </div>
                            <HostAvatar
                                image_url={targetProperty.host.avatar.url}
                            />
                        </div>
                        <hr />
                        <div>
                            <ListingDescription description={targetProperty.description} />
                        </div>
                        <hr />
                        <div>
                            <h2>What this place offers</h2>
                            <ListingAmenities amenities_data={targetProperty.amenities} />
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
        </motion.div>
    )
}

export default page