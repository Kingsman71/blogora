
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import CreatePostPage from './pages/CreatePostPage';

const LOCAL_STORAGE_KEY = 'my-blog-posts';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts([
        {
          id: '1',
          title: 'Getting Started with React',
          summary: 'Learn the basics of React and build your first application.',
          content: '<p>This is a full guide on getting started with React.</p>',
          author: 'Sai Prasad',
          date: '2023-01-01',
          url: '/posts/1',
        },
        {
          id: '2',
          title: 'CSS Grid vs. Flexbox',
          summary: 'A comparison of two powerful layout systems in CSS.',
          content: '<p>CSS Grid and Flexbox each have their strengths. Here’s how to choose.</p>',
          author: 'Sai Prasad',
          date: '2023-02-15',
          url: '/posts/2',
        },
        {
          id: '3',
          title: 'Accessibility in Web Development',
          summary: 'Tips for making your web applications more accessible.',
          content: '<p>Accessibility is essential for inclusivity. Follow these practices.</p>',
          author: 'Sai Prasad',
          date: '2023-03-10',
          url: '/posts/3',
        }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    const newId = (posts.length + 1).toString();
    const postWithId = {
      ...newPost,
      id: newId,
      summary: newPost.content.slice(0, 100) + '...',
      url: `/posts/${newId}`,
    };
    setPosts([postWithId, ...posts]);
  };

  return (
    <div>
      <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} />} />
        <Route path="/posts/:id" element={<PostWrapper posts={posts} />} />
        <Route path="/create" element={<CreatePostPage onSubmit={addPost} />} />
      </Routes>
    </div>
  );
};

const PostWrapper = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Blog post not found.</p>;
  }

  return (
    <BlogPostDetail
      title={post.title}
      content={post.content}
      author={post.author}
      date={post.date}
    />
  );
};

export default App;
