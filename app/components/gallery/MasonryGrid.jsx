import React from 'react'
import ListingImage from '../ListingImage'

function MasonryGrid({ images }) {
    console.log(images.length)
    return (
        <div className='relative flex w-full gap-2 2xl:aspect-[2/1] aspect-[3/1] overflow-hidden rounded-xl'>
            <div className='basis-1/2'>
                <ListingImage image_url={images[0].url} />
            </div>
            <div className='basis-1/2 grid grid-cols-2 gap-2'>
                <ListingImage image_url={images[7].url} />
                <ListingImage image_url={images[8].url} />
                <ListingImage image_url={images[9].url} />
                <ListingImage image_url={images[10].url} />
            </div>
            {/* <a href='#' className='btn btn-primary absolute bottom-0 right-0 m-4 shadow-lg'>Show all photos</a> */}
            <div className="drawer absolute bottom-0 left-0 text-right z-[1000]">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button m-4">Show all photos</label>
                </div>
                <div className="drawer-side transition-all duration-500">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu relative p-4 w-3/4 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <RowGallery images={images}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RowGallery({ images }) {
    return <div className='grid grid-cols-5 gap-2'>
        {
            images.map((item, index) => {
                return <img src={item.url} className='aspect-auto' />
            })
        }
    </div>
}

export default MasonryGrid