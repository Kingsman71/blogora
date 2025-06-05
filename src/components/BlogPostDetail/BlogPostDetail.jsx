import React from 'react';
import './BlogPostDetail.css';

const BlogPostDetail = ({ title, content, author, date }) => {
  if (!title || !content || !author || !date) {
    return <p className="not-found">Blog post not found.</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="blog-post-detail">
      <h1 className="title">{title}</h1>
      <p className="author">By {author}</p>
      <p className="date">Published on {formattedDate}</p>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPostDetail;
