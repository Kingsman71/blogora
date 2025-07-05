import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
  const [name, setName] = useState(userName || '');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || (!isLoggedIn && !name)) return;

    const newComment = {
      name: isLoggedIn ? userName : name,
      date: new Date(),
      text,
      avatar: null // optional; you can pass a placeholder or user profile
    };

    onSubmit(newComment);
    setText('');
    if (!isLoggedIn) setName('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit} aria-label="Add a comment">
      {!isLoggedIn && (
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="submit-button">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
