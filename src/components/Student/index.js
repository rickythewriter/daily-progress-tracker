import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import './Student.css'

import Comment from '../Comment';

export default function Student() {

    const [studentName, setStudentName] = useState('');
    const [homeworkComplete, setHomeworkComplete] = useState(false);
    const [extraWorkComplete, setExtraWorkComplete] = useState(false);
    const [teacherComments, setTeacherComments] = useState([{
        commenter: "Mr. Giles",
        body: "Buffy does well on practice tests, and her homework is ok. She has been falling asleep during class this week."
    }]);

    return (
        <div className='student-form-container'>
            <div className='form-row student-form-row'>
                <label
                    for="name"
                    className='label has-right-margin'>Student:</label>
                <input
                    name='name'
                    type="input"
                    placeholder='Name of Student'
                    onChange={(e) => setStudentName(e.target.value)}
                />
            </div>
            <div className='form-row student-form-row'>
                <label
                    for="homework-complete"
                    className='label has-right-margin'>Homework Complete?</label>
                <input
                    name='homework-complete'
                    type='checkbox'
                    checked={homeworkComplete}
                    onChange={(e) => setHomeworkComplete(!homeworkComplete)}
                />
            </div>
            <div className='form-row student-form-row'>
                <label
                    for="extra-work-complete"
                    className='label has-right-margin'>Extra Work Complete?</label>
                <input
                    name='extra-work-complete'
                    type="checkbox"
                    checked={extraWorkComplete}
                    onChange={(e) => setExtraWorkComplete(!extraWorkComplete)}
                >
                </input>
            </div>
            <div className='divider form-row label'>
                Teacher Comments
            </div>
            <div className='teacher-comments'>
                {teacherComments.map(comment => {
                    console.log(comment.commenter);
                    console.log(comment.body);
                    return (
                        <Comment comment={comment} key={comment.commenter} />
                    )
                })}
                {/* <CommentForm /> */}
            </div>
            <div className='form-row student-form-row'>
                <button className='droplet-button'
                >
                    Download as PDF
                </button>
            </div>
        </div>
    )
}