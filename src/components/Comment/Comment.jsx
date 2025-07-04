import React from 'react';
import './Comment.css';

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleString(undefined, options);
};

const Comment = ({ name, date, text, avatar }) => {
  return (
    <div className="comment">
      {avatar && (
        <img className="avatar" src={avatar} alt={`${name}'s avatar`} />
      )}
      <div className="comment-content">
        <div className="comment-header">
          <strong className="comment-name">{name}</strong>
          <span className="comment-date">{formatDate(date)}</span>
        </div>
        <p className="comment-text">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
