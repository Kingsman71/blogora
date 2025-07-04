import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPostDetail from '../components/BlogPostDetail/BlogPostDetail';
import CommentList from '../components/CommentList/CommentList';
import CommentForm from '../components/CommentForm/CommentForm';

const PostPage = ({ post, onDelete }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className="post-page">
      <BlogPostDetail {...post} />

      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>

      <Link to={`/edit/${post.id}`}>
        <button className="edit-button">Edit</button>
      </Link>

      <section className="comments-section">
        <h2>Comments</h2>
        <CommentList comments={comments} />
        <CommentForm
          onSubmit={handleAddComment}
          isLoggedIn={false}
          userName=""
        />
      </section>
    </div>
  );
};

export default PostPage;
