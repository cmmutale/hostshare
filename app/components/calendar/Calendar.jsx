'use client'
import React, { useState } from 'react'
import { DateRangePicker, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';

function Calendar() {
    // const [state, setState] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: null,
    //         key: 'selection'
    //     }
    // ]);

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);


    return (
        <DateRange
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="backwards"
        // editableDateInputs={true}
        // onChange={item => setState([item.selection])}
        // moveRangeOnFirstSelection={false}
        // ranges={state}
        />
    )
}

export default Calendar