'use client'

import React from 'react'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

function getData(){
    const {data, error, isLoading} = useSWR(`/api/search/`, fetcher);

    return {
        listingData: data,
        isLoading,
        isError: error
    }
}

export default getData;