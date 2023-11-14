import React from 'react'
import ImageSlider from 'react-simple-image-slider'
import { motion } from 'framer-motion'

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

function Slider({ images, width, height }) {
    console.log(images)
    return (
        <div className='w-full bg-gray-500 aspect-video overflow-hidden'>
            {/* <ImageSlider
                width={width}
                height={height}
                images={images}
                showNavs={true}
                showBullets={false}
            /> */}
            <div className='image-track flex overflow-x-scroll w-full snap-x snap-mandatory'>
                {
                    images.map((item, index) => {
                        return <img src={item.url} className='w-full object-cover snap-always'/>
                    })
                }
            </div>
        </div>
    )
}

export default Slider