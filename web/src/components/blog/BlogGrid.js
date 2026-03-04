import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function extractExcerpt(rawExcerpt) {
  if (!rawExcerpt || !rawExcerpt.length) return '';
  return rawExcerpt
    .map((block) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child) => child.text).join('');
    })
    .join(' ');
}

function BlogGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            author={blog.author}
            publishedAt={blog.publishedAt}
            excerpt={extractExcerpt(blog._rawExcerpt)}
            image={{
              imageData: blog.coverImage.asset.gatsbyImageData,
              altText: blog.coverImage.alt,
            }}
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
