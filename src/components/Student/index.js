import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import './Student.css'

import Comment from '../Comment';
import CommentForm from '../CommentForm';

export default function Student() {

    const [studentName, setStudentName] = useState('');
    const [homeworkComplete, setHomeworkComplete] = useState(false);
    const [extraWorkComplete, setExtraWorkComplete] = useState(false);
    const [teacherComments, setTeacherComments] = useState([
        // {
            // commenter: "Mr. Giles",
            // body: "Buffy does well on practice tests, and her homework is ok. She has been falling asleep during class this week."
        // }
    ]);
    const [user, setUser] = useState({name: "Mr. Ricky"});
    const commenter = user.name ?? "Staff";
    const [body, setBody] = useState('');
    const [buttonPressed, setButtonPressed] = useState(false);
    const [nameError, setNameError] = useState(false);

    return (
        <div className='student-form-container'>
            <div id='student-name-row' className='form-row student-form-row'>
                {
                    nameError ?
                    <>
                        <label
                            for="name"
                            className='label has-right-margin error'>Student:</label>
                        <input
                            name='name'
                            type="input"
                            placeholder='Name of Student'
                            className='error'
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                    </>
                    :
                    <>
                        <label
                            for="name"
                            className='label has-right-margin'>Student:</label>
                        <input
                            name='name'
                            type="input"
                            placeholder='Name of Student'
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                    </>
                }
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
                    return (
                        <Comment comment={comment} key={comment.commenter} />
                    )
                })}
            </div>
            <CommentForm user={{name: "Mr. Ricky"}} teacherComments={teacherComments} setTeacherComments={setTeacherComments}/>
            {
                buttonPressed &&
                <div className='form-row student-form-row'>
                    <div id='demo-purposes'>
                        <p>This form is for demo purposes only.</p>
                    </div>    
                </div>
            }
            <div className='form-row student-form-row'>
                <button 
                    className='droplet-button'
                    onClick={() => {
                        if (!studentName) setNameError(true);
                        setButtonPressed(true);
                    }}
                >
                    Download as PDF
                </button>
            </div>
        </div>
    )
}