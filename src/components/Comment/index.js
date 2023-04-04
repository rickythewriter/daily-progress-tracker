import React from 'react';
import './Comment.css'

export default function Comment({ comment }) {
    return (
        <div className='form-row student-form-row'>
            <h3 className='commenter-name'>{comment.commenter}</h3>
            <p>{comment.body}</p>
        </div>
    )
}