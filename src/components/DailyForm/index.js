import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import './DailyForm.css'

export default function DailyForm() {

    const [date, setDate] = useState(/* date.now in format MM/DD/YYYY */)

    return (
        <>
            <img
                className="logo"
                src="https://github.com/rickythewriter/daily-progress-tracker/blob/containing-component/public/logo-tutoring_center.png?raw=true"
                alt="Tutoring Center Logo"
            />
            <h1>Daily Progress Tracker</h1>
            <label>Date:</label>
            <input type="text" placeholder='MM/DD/YYYY'></input>
            {/* Student Component */}
            <FeatherIcon icon="plus-circle" size="44"/>
        </>
    )
}