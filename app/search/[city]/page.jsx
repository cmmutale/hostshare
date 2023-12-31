'use client'
import React from 'react'
import getData from '@/hooks/Datahook'
import ListingCard from '@/app/components/cards/ListingCard';
import Map from '@/app/components/map/Map';
import FilterRow from '@/app/components/listingstuff/FilterRow';
import { CardLoader } from '@/app/components/loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';

function page({ params }) {
    const { listingData, isLoading, isError } = getData();
    const searchListingData = [];

    if (isLoading) return (
        <div className='relative laptop:w-[60%] grid gap-2 gap-y-4 mobile:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3'>
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
        </div>
    )
    if (isError) return <div>Error while retrieving data</div>

    const listingProperties = Object.entries(listingData.data)
    listingProperties.forEach((item) => {
        if (item[1].info.location.city.toLowerCase() === params.city.toLowerCase()) {
            searchListingData.push(item)
        }
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <main className='py-4  px-[20px]'>
                <FilterRow />
                <div className='flex gap-4 flex-col-reverse laptop:flex-row'>
                    <div className='relative laptop:w-[60%] grid gap-2 gap-y-4 mobile:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3'>
                        {
                            searchListingData.map((items, index) => {
                                return (
                                    <div key={index}>
                                        <ListingCard
                                            link={`/listing/${items[1].info.id}`}
                                            image={items[1].info.mainImage.url}
                                            title={items[1].info.location.city}
                                            price={items[1].info.price}
                                            rating={items[1].info.ratings.guestSatisfactionOverall}
                                            imageArray={items[1].info.images.data}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='laptop:w-[40%] h-[50vh] laptop:h-[100vh]'>
                        <Map />
                    </div>
                </div>
            </main>
        </motion.div>
    )
}

export default page