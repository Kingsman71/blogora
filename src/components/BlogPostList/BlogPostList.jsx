import React from 'react';
import BlogPostItem from '../BlogPostItem/BlogPostItem';
import './BlogPostList.css';

const BlogPostList = ({ posts, searchQuery = '' }) => {
  const filteredPosts = posts.filter((post) => {
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q)
    );
  });

  if (!filteredPosts || filteredPosts.length === 0) {
    return <p className="blog-post-empty">No posts found.</p>;
  }

  return (
    <div className="blog-post-list">
      {filteredPosts.map((post) => (
        <BlogPostItem
          key={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          url={post.url}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
