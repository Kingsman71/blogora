import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPostForm from '../components/BlogPostForm';

const CreatePostPage = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    onSubmit(data);  
    navigate('/');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Create New Blog Post</h2>
      <BlogPostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePostPage;
