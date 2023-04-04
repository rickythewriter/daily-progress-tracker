import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import './CommentForm.css'

export default function CommentForm({ user, teacherComments, setTeacherComments }) {

    const commenter = user.name ?? "Staff";
    const [body, setBody] = useState('');
    const [commentCreated, setCommentCreated] = useState(false);
    const [commentError, setCommentError] = useState(false);

    if (!commentCreated) {
        return (
            <div id="teacher-comment-form" className='form-row student-form-row'>
                <div className='teacher-comment-form-row'>
                    <textarea
                        id="teacher-comment-input"
                        className={commentError && 'error'}
                        placeholder="Comment on your student's performance today"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </div>
                <div id="teacher-comment-controls" className='teacher-comment-form-row'>
                    <p><span id="add-comment-as">Add comment as:</span><br /><span className='commenter-name'>{user.name}</span></p>
                    <FeatherIcon
                        icon="plus-square"
                        size="44"
                        className='comment-control-button'
                        onClick={() => {
                            if (body.length !== 0){
                                setTeacherComments([...teacherComments, {
                                    commenter,
                                    body,
                                }]);
                                setCommentCreated(true);
                                setCommentError(false);
                            } else {
                                setCommentError(true);
                            }
                        }}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div id="teacher-comment-form" className='form-row student-form-row'>
                <div id="teacher-comment-controls" className='teacher-comment-form-row'>
                    <p><span id="add-comment-as">Edit comment as:</span><br /><span className='commenter-name'>{user.name}</span></p>
                    <FeatherIcon
                        icon="edit"
                        size="44"
                        id="edit-comment-button"
                        className='comment-control-button'
                        onClick={() => {
                            let comments = teacherComments.slice(0, -1);
                            setTeacherComments(comments);
                            setCommentCreated(false);
                        }}
                    />
                    <FeatherIcon
                        icon="trash"
                        size="44"
                        className='comment-control-button'
                        onClick={() => {
                            let comments = teacherComments.slice(0, -1);
                            setBody('');
                            setTeacherComments(comments);
                            setCommentCreated(false);
                        }}
                    />
                </div>
            </div>
        )
    }

    
}