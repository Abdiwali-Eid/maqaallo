import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: {}) {
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
                  gatsbyImageData(width: 64, height: 64)
                }
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
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
  const allBlogs = data.allSanityFeatured.nodes[0].blogs;
  const featuredBlogs = allBlogs.slice(1);

  if (!featuredBlogs || featuredBlogs.length === 0) return null;

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>lastest Blogs</SectionTitle>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
