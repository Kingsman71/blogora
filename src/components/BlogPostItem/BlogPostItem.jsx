import React from 'react';
// import { Link } from 'react-router-dom';
import './BlogPostItem.css';

const BlogPostItem = ({ title, summary, date, url }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="blog-post-item">
      <a to={url} className="blog-post-title">
        <h2>{title}</h2>
      </a>
      <p className="blog-post-summary">{summary}</p>
      <p className="blog-post-date">Published on {formattedDate}</p>
    </div>
  );
};

export default BlogPostItem;