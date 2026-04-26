import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import AuthorGrid from '../author/AuthorGrid';
import { AuthorSectionPlaceholder } from '../placeholders/SectionPlaceholders';
import ScrollReveal from '../ScrollReveal';

const TopAuthorsStyles = styled.section`
  padding: 2rem 0 0.4rem;

  .authors-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 0.5rem;
  }

  .authors-title {
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #10231d;
    letter-spacing: -0.03em;
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

  .authors-copy {
    margin-top: 1rem;
    max-width: 56rem;
    font-size: 1.55rem;
    line-height: 1.8;
    color: #475569;
  }

  @media only screen and (max-width: 768px) {
    .authors-header {
      align-items: flex-start;
      flex-direction: column;
    }

    .authors-title {
      font-size: 2rem;
    }

    .authors-copy {
      font-size: 1.45rem;
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

  if (!authors || authors.length === 0) {
    return (
      <TopAuthorsStyles>
        <AuthorSectionPlaceholder />
      </TopAuthorsStyles>
    );
  }

  return (
    <TopAuthorsStyles>
      <ScrollReveal className="authors-heading">
        <div className="authors-header">
          <h2 className="authors-title">Popular Authors</h2>
          <Link to="/authors" className="authors-viewall">
            View All &rarr;
          </Link>
        </div>
        <p className="authors-copy">
          Baro qoraayaasha Maqaallo ee wax ka qora mowduucyada kala duwan ee kobcinaya garaadka bulshada. 
        </p>
      </ScrollReveal>
      <ScrollReveal className="authors-grid-anim">
        <AuthorGrid authors={authors} />
      </ScrollReveal>
    </TopAuthorsStyles>
  );
}

export default TopAuthors;
