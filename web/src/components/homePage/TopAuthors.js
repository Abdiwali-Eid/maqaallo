import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import AuthorGrid from '../author/AuthorGrid';

const TopAuthorsStyles = styled.section`
  padding: 2rem 0 4rem;

  .authors-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .authors-title {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #1f2937;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .authors-viewall {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 1.4rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #14b8a6;
    transition: gap 0.2s ease;

    &:hover {
      gap: 8px;
    }
  }
`;

function TopAuthors() {
  const data = useStaticQuery(graphql`
    {
      allSanityAuthor {
        nodes {
          id
          name
          slug {
            current
          }
          _rawBio
          profileImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const authors = data.allSanityAuthor.nodes;

  if (!authors || authors.length === 0) return null;

  return (
    <TopAuthorsStyles>
      <div className="authors-header">
        <h2 className="authors-title">Popular Authors</h2>
        <Link to="/authors" className="authors-viewall">
          View All &rarr;
        </Link>
      </div>
      <AuthorGrid authors={authors} />
    </TopAuthorsStyles>
  );
}

export default TopAuthors;
