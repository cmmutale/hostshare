import React from 'react'
import ImageSlider from 'react-simple-image-slider'

function Slider({images, width, height}) {
    return (
        <div>
            <ImageSlider 
                width={width}
                height={height}
                images={images}
                showNavs={true}
                showBullets={true}
            />
        </div>
    )
}

export default Slider