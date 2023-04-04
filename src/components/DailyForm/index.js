import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import Student from '../Student';
import './DailyForm.css'

export default function DailyForm() {

    const [students, setStudents] = useState([<Student key={0}/>]);

    let handleAddStudent = (e) => {
        setStudents([...students, <Student key={students.length} />]);
    }

    /* Default Date is Today - No Interaction is Optimal Interaction */
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    const [date, setDate] = useState(`${yyyy}-${mm}-${dd}`);

    return (
        <div className='form-container'>
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
            <div className='form-row'>
                <label 
                    for="date"
                    className='label has-right-margin'>Date:</label>
                <input
                    name='date'
                    type="date"
                    placeholder='MM/DD/YYYY'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                >
                </input>
            </div>
            {/* <Student /> */}
            {students}
            <FeatherIcon 
                className='add-student-button' 
                icon="plus-circle" 
                size="44"
                onClick={handleAddStudent}
            />
        </div>
    )
}