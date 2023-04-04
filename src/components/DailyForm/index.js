import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import './DailyForm.css'

const COMPLETE_DATESTRING_LENGTH = 10;

export default function DailyForm() {

    /* Default Date is Today */
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    const [date, setDate] = useState(`${yyyy}-${mm}-${dd}`);

    return (
        <>
            <img
                className="logo"
                src="https://github.com/rickythewriter/daily-progress-tracker/blob/containing-component/public/logo-tutoring_center.png?raw=true"
                alt="Tutoring Center Logo"
            />
            <h1 
                className="form-title"
            >
                Daily Progress Tracker
            </h1>
            <label>Date:</label>
            <input 
                type="date" 
                placeholder='MM/DD/YYYY'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            >
            </input>
            {/* Student Component */}
            <FeatherIcon icon="plus-circle" size="44"/>
        </>
    )
}