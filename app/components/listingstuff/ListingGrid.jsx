'use client'
import getData from '../../../hooks/Datahook';
import ListingCard from '../cards/ListingCard';
import { AnimatePresence, motion } from 'framer-motion';
import { CardLoader } from '@/app/components/loader/Loader'

function ListingGrid() {
    const { listingData, isLoading, isError } = getData();

    if (isLoading) return (
        <div className='relative grid w-full gap-2 gap-y-4 
        desktop-xl:grid-cols-6 desktop:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 mobile:justify-center'>
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
        </div>
    )
    if (isError) return <div>Error while retrieving data</div>

    const listingProperties = Object.entries(listingData.data);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                className='relative grid w-full gap-2 gap-y-4
        desktop-xl:grid-cols-6 desktop:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 mobile:justify-center'>
                {
                    listingProperties.map((items, index) => {
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
        </motion.div>
    )
}

export default ListingGrid