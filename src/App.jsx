import React from 'react';
import BlogPostList from './components/BlogPostList/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    content: `
      <p>React is a popular JavaScript library for building user interfaces. It encourages the creation of reusable UI components that present data as it changes over time.</p>
      <h2>Why Use React?</h2>
      <ul>
        <li>Component-based structure</li>
        <li>Declarative syntax</li>
        <li>Fast rendering with Virtual DOM</li>
      </ul>
      <p>To get started, check out the <a href="https://reactjs.org/docs/getting-started.html" target="_blank">official documentation</a>.</p>
    `,
    author: 'Jane Doe',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    content: `
      <p>CSS Grid and Flexbox are two layout models that provide flexibility and control over your website’s structure.</p>
      <h2>CSS Grid</h2>
      <p>Best for two-dimensional layouts (rows and columns).</p>
      <h2>Flexbox</h2>
      <p>Best for one-dimensional layouts (rows or columns).</p>
      <p>Here’s a quick comparison:</p>
      <table border="1" cellpadding="8">
        <thead><tr><th>Feature</th><th>Grid</th><th>Flexbox</th></tr></thead>
        <tbody>
          <tr><td>Direction</td><td>2D</td><td>1D</td></tr>
          <tr><td>Use Case</td><td>Page layout</td><td>Navbars, cards</td></tr>
        </tbody>
      </table>
    `,
    author: 'John Smith',
    date: '2023-02-15',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: `
      <p>Web accessibility ensures that websites are usable by people with disabilities. This includes users who rely on screen readers, keyboard navigation, or voice commands.</p>
      <h2>Best Practices</h2>
      <ol>
        <li>Use semantic HTML (e.g., <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>).</li>
        <li>Ensure good color contrast for readability.</li>
        <li>Add alt text to all images.</li>
        <li>Make forms accessible with labels.</li>
      </ol>
      <p>Learn more at <a href="https://www.w3.org/WAI/" target="_blank">W3C Web Accessibility Initiative</a>.</p>
    `,
    author: 'Alice Johnson',
    date: '2023-03-10',
  }
];


// 👇 Helper function to get post ID from current URL path
const getPostIdFromPath = () => {
  const match = window.location.pathname.match(/^\/posts\/(\d+)/);
  return match ? match[1] : null;
};

const App = () => {
  const postId = getPostIdFromPath();
  const post = samplePosts.find(p => p.id === postId);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Blog Posts</h1>
      {postId ? (
        <BlogPostDetail
          title={post?.title}
          content={post?.content}
          author={post?.author}
          date={post?.date}
        />
      ) : (
        <BlogPostList posts={samplePosts.map(p => ({
          ...p,
          url: `/posts/${p.id}` // Ensures correct link is passed
        }))} />
      )}
    </div>
  );
};

export default App;
