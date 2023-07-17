import React from 'react'

function MasonryGrid({ images }) {
    return (
        <div className='relative flex gap-2 max-h-[600px] px-4'>
            <div className='basis-1/2'>
                <img src={images[0].url} alt="listing image" className='w-full h-full rounded-l-xl object-cover' />
            </div>
            <div className='basis-1/4 inline flex flex-col gap-2'>
                <div className='h-1/2'>
                    <img src={images[7].url} alt="listing image" className='w-full h-full  object-cover' />
                </div>
                <div className='h-1/2'>
                    <img src={images[8].url} alt="listing image" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='basis-1/4 inline flex flex-col gap-2'>
                <div className='h-1/2'>
                    <img src={images[9].url} alt="listing image" className='w-full h-full object-cover rounded-tr-xl' />
                </div>
                <div className='h-1/2'>
                    <img src={images[10].url} alt="listing image" className='w-full h-full object-cover rounded-br-xl' />
                </div>
            </div>
        </div>
    )
}

export default MasonryGrid