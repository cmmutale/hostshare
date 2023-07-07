'use client'
import React, { useState } from 'react'


function Counter({ label }) {
    const [count, setCount] = useState(0)

    return (
        <div className='flex items-center justify-between gap-8 relative'>
            <p className='font-bold text-black'>{label}</p>
            <div className='flex items-center gap-2 font-semibold relative'>
                <button
                    className='border-[1px] rounded-full !text-black flex items-center'
                    disabled={!(count > 0)}
                    onClick={() => setCount(prevCount => prevCount - 1)}>
                    <span>-</span>
                </button>
                <span>{count}</span>
                <button
                    className='border-[1px] rounded-full !text-black flex items-center'
                    onClick={() => setCount(prevCount => prevCount + 1)}>
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

export default Counter