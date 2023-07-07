import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import Slider from '../gallery/Slider';

function ListingCard({ image, link, title, distance, availability, price, rating, imageArray, onClick }) {
    return (
        <div className='card hover:shadow-2xl p-2 rounded-lg relative transition-all ease-in-out duration-500'>
            <label className=''>
                <a href={link} className='space-y-4 text-left'>
                    <div>
                        <img
                            src={image}
                            alt='image'
                            width={275}
                            height={275}
                            className='max-h-[325px] aspect-square rounded-xl w-full object-cover'
                        />
                        {/* <Slider images={imageArray} width={215} height={215}/> */}
                    </div>
                    <div className='relative'>
                        <p className='font-semibold'>{title}</p>
                        <p className='text-gray-500'>{distance}</p>
                        <p className='text-gray-500'>{availability}</p>
                        <p className='text-gray-500'><span className='font-semibold text-black'>${price}</span> night</p>
                        <p className='text-gray-500 flex items-center absolute right-0 top-0'><AiFillStar className='fill-black' /> {rating}</p>
                    </div>
                </a>
            </label>
        </div>
    )
}

export default ListingCard