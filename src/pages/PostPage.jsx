import React from 'react';
import BlogPostDetail from '../components/BlogPostDetail';

const singlePost = {
  title: 'Understanding Flexbox',
  content: `<p>Flexbox is a layout model that allows responsive alignment of elements.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank">Learn more on MDN</a></p>`,
  author: 'Sai Prasad',
  date: '2023-04-20',
};

const PostPage = () => {
  return (
    <div>
      <BlogPostDetail {...singlePost} />
    </div>
  );
};

export default PostPage;
