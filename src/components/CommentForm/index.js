import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import './CommentForm.css'

export default function CommentForm({ user, teacherComments, setTeacherComments }) {

    const commenter = user.name ?? "Staff";
    const [body, setBody] = useState('');

    return (
        <div id="teacher-comment-form" className='form-row student-form-row'>
            <div className='teacher-comment-form-row'>
                <textarea 
                    id="teacher-comment-input"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </div>
            <div id="teacher-comment-controls" className='teacher-comment-form-row'>
                <p><span id="add-comment-as">Add comment as:</span><br /><span className='commenter-name'>{user.name}</span></p>
                <FeatherIcon 
                    icon="plus-square" 
                    size="44" 
                    className='add-comment-button' 
                    onClick={() => {
                        setTeacherComments([...teacherComments, {
                            commenter,
                            body,
                        }]);
                    }}
                />
            </div>
        </div>
    )
}