import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';

function BlogItem({ path, title, image, categories, author, publishedAt, excerpt }) {
  return (
    <BlogItemStyles>
      <Link to={`/blogs/${path}`} className="img-wrapper">
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="img"
        />
        {categories && categories.length > 0 && (
          <span className="card-badge">
            {categories[0].title}
          </span>
        )}
        {publishedAt && (
          <span className="card-date">
            {format(new Date(publishedAt), 'MMM dd, yyyy')}
          </span>
        )}
      </Link>
      <div className="card-content">
        <div className="card-title">
          <Link to={`/blogs/${path}`}>{title}</Link>
        </div>
        {excerpt && (
          <p className="card-excerpt">{excerpt}</p>
        )}
        <div className="card-footer">
          <div className="card-author">
            {author && author.profileImage && (
              <div className="author-avatar">
                <GatsbyImage
                  image={author.profileImage.asset.gatsbyImageData}
                  alt={author.profileImage.alt || author.name}
                />
              </div>
            )}
            {author && (
              <span className="author-name">{author.name}</span>
            )}
          </div>
          <Link to={`/blogs/${path}`} className="card-readmore">
            Read More &rarr;
          </Link>
        </div>
      </div>
    </BlogItemStyles>
  );
}

export default BlogItem;
