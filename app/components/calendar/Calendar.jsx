'use client'
import React, {useState} from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Calendar() {
    function handleSelect(ranges) {
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    return (
        <>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                rangeColors={["rgb(50, 154, 154)"]}
            />
        </>
    )
}

export default Calendar