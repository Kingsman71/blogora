import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostForm from '../components/BlogPostForm';
import './EditButton.css'

const EditPostPage = ({ posts, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  const handleSubmit = (updatedData) => {
    onUpdate(id, updatedData);
    navigate(`/posts/${id}`);
  };

  if (!post) {
    return <p style={{ textAlign: 'center' }}>Post not found.</p>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Edit Blog Post</h2>
      <BlogPostForm post={post} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPostPage;
