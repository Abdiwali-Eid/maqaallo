import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';

function extractBioText(rawBio) {
  if (!rawBio || !rawBio.length) return '';
  return rawBio
    .map((block) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child) => child.text).join('');
    })
    .join(' ');
}

function AuthorItem({ name, slug, profileImage, bio }) {
  const bioText = extractBioText(bio);

  return (
    <AuthorItemStyles>
      <div className="author-avatar-ring">
        <GatsbyImage
          image={profileImage.asset.gatsbyImageData}
          alt={profileImage.alt || name}
          className="profileImage"
        />
      </div>
      <h3 className="author-name">{name}</h3>
      {bioText && <p className="author-bio">{bioText}</p>}
      <Link to={`/authors/${slug.current}`} className="author-link">
        View Profile &rarr;
      </Link>
    </AuthorItemStyles>
  );
}

export default AuthorItem;
