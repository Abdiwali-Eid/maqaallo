import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import { SectionTitle } from '../typography/Title';

function Releted() {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog(
        filter: { categories: { elemMatch: { title: { eq: "Aqoon guud" } } } }
      ) {
        nodes {
          title
          id
          publishedAt
          _rawExcerpt
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
          categories {
            title
            slug {
              current
            }
          }
          slug {
            current
          }
        }
      }
    }
  `);
  // console.log(data);
  const featuredBlogs = data.allSanityBlog.nodes;
  console.log(featuredBlogs);

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Qoraallo la xiriira</SectionTitle>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default Releted;
