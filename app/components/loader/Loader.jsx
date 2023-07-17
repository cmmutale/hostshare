import React from 'react'

function Loader() {
    return (
        <><div className='absolute h-full w-full'>
            <div class="h-full max-w-6xl mx-auto">
                <div class="animate-pulse space-y-8">
                    <div class="bg-slate-300 rounded-lg h-[40px] w-3/4"></div>
                    <div className='flex justify-between'>
                        <div className='bg-slate-300 rounded-lg h-[20px] w-1/2'></div>
                        <div className='bg-slate-300 rounded-lg h-[20px] w-1/3'></div>
                    </div>
                    <div className="bg-slate-300 h-[500px] w-full rounded-lg"></div>
                    <div className=''>
                        <div className='space-y-4'>
                            <div className='bg-slate-300 h-5 w-full rounded-full'></div>
                            <div className='bg-slate-300 h-5 w-full rounded-full'></div>
                            <div className='bg-slate-300 h-5 w-full rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

function CardLoader() {
    return (
        <div className='w-[400px] p-4'>
            <div className='animate-pulse space-y-2'>
                <div className='bg-slate-300 h-[250px] w-[275px] rounded-lg'></div>
                <div className='relative space-y-4'>
                    <div className='bg-slate-300 w-2/3 h-[10px] rounded-full'></div>
                    <div className='bg-slate-300 w-1/3 h-[10px] rounded-full'></div>
                    <div className='bg-slate-300 w-1/4 h-[10px] rounded-full'></div>
                </div>
            </div>
        </div >

    )
}

function RowLoader() {
    return(
        <div className='flex gap-4 animate-pulse justify-evenly w-full'>
            {[...Array(10)].map((item) => {
                return (<div key={Math.random()} className='flex items-center space-y-2 flex-col'>
                    <div className='bg-slate-300 h-[25px] w-[25px] rounded-full'></div>
                    <div className='bg-slate-300 w-[50px] h-[8px] rounded-full'></div>
                </div>);
            })}
        </div>
    )
}

export { Loader, CardLoader, RowLoader }