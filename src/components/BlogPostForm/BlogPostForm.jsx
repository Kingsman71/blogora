import React, { useState } from 'react';
import './BlogPostForm.css';

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [date, setDate] = useState(post?.date || new Date().toISOString().split('T')[0]);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Title is required';
    if (!content.trim()) newErrors.content = 'Content is required';
    if (!author.trim()) newErrors.author = 'Author is required';
    if (!date) newErrors.date = 'Date is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit({ title, content, author, date });
    }
  };

  return (
    <form className="blog-post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
        />
        {errors.content && <span className="error">{errors.content}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <span className="error">{errors.author}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>

      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BlogPostForm;
