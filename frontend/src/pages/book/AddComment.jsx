import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './addComment.css';

export default function AddComment({ bookId, userId }) {
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('http://localhost:3000/book/addComments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    livroId: bookId,
                    userId: userId,
                    comment: comment,
                }),
            });
            toast.success("Deu bom")
            setTimeout(() => {
                window.location.href = `/books/${bookId}`;
            }, 2000);
        } catch (error) {
            toast.error('Error adding comment. Please try again.');
        }
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <div className="container-comment mb-5">
            <div id='comment-add' className="cardt">
                <form onSubmit={handleSubmit}>
                    <label id='label-add-comment' className='label-control mb-3 text-white'>Add Comment</label>
                    <input id='input-comment' className='form-control mb-3' type='text' name='comment' value={comment} onChange={handleChange} />
                    <input type='hidden' name='livroId' value={bookId} />
                    <input type='hidden' name='userId' value={userId} />
                    <button id='send-comment' type='submit' className='btn btn-success'>Send</button>
                </form>
            </div>
        </div>
    );
}
