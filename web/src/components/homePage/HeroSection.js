import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';

function extractExcerpt(rawExcerpt) {
  if (!rawExcerpt || !rawExcerpt.length) return '';
  return rawExcerpt
    .map((block) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child) => child.text).join('');
    })
    .join(' ');
}

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
            _rawExcerpt
            categories {
              title
              slug {
                current
              }
            }
            author {
              name
              slug {
                current
              }
              profileImage {
                alt
                asset {
                  gatsbyImageData(width: 88, height: 88)
                }
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const blogs = data.allSanityFeatured.nodes[0]?.blogs;
  if (!blogs || blogs.length === 0) return null;

  const heroBlog = blogs[0];
  const excerpt = extractExcerpt(heroBlog._rawExcerpt);

  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero-card">
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <div className="hero-bg">
            <GatsbyImage
              image={heroBlog.coverImage.asset.gatsbyImageData}
              alt={heroBlog.coverImage.alt || heroBlog.title}
              style={{ height: '100%' }}
            />
          </div>
          <div className="hero-content">
            <span className="hero-kicker">Maqaallo</span>
            <div className="hero-badges">
              {heroBlog.categories &&
                heroBlog.categories.map((cat) => (
                  <span key={cat.slug.current} className="hero-badge">
                    {cat.title}
                  </span>
                ))}
              <span className="hero-badge hero-badge--featured">
                Qoraal Muuqda
              </span>
            </div>
            <h1 className="hero-title">
              <Link to={`/blogs/${heroBlog.slug.current}`}>
                {heroBlog.title}
              </Link>
            </h1>
            {excerpt && <p className="hero-excerpt">{excerpt}</p>}
            <div className="hero-bottom">
              <Link
                to={`/blogs/${heroBlog.slug.current}`}
                className="hero-cta"
              >
                Akhri Qoraalka{' '}
                <span className="cta-arrow">&rarr;</span>
              </Link>
              {heroBlog.author && (
                <div className="hero-author">
                  {heroBlog.author.profileImage && (
                    <div className="hero-author-avatar">
                      <GatsbyImage
                        image={
                          heroBlog.author.profileImage.asset.gatsbyImageData
                        }
                        alt={
                          heroBlog.author.profileImage.alt || heroBlog.author.name
                        }
                      />
                    </div>
                  )}
                  <div className="hero-author-info">
                    <span className="hero-author-name">
                      {heroBlog.author.name}
                    </span>
                    {heroBlog.publishedAt && (
                      <span className="hero-author-meta">
                        {format(new Date(heroBlog.publishedAt), 'MMM dd, yyyy')}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
