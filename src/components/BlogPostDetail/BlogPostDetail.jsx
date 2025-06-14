import React from 'react';
import './BlogPostDetail.css';

const BlogPostDetail = ({ title, content, author, date }) => {
  if (!title || !content || !author || !date) {
    return <p className="blog-post-not-found">Blog post not found.</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="blog-post-detail">
      <h1 className="post-title">{title}</h1>
      <p className="post-author">By {author}</p>
      <p className="post-date">Published on {formattedDate}</p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogPostDetail;
