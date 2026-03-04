import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        _rawExcerpt
        slug {
          current
        }
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
      }
    }
  }
`;

function Reletes({ data }) {
  // const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO title="Blogs" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Blog Posts"
            description="This month will bring about the 88th Academy Awards. Starting in 1928, this prestigious award ceremony..."
          />
          <BlogGrid blogs={blogs} />
        </div>
      </PageSpace>
    </>
  );
}

export default Reletes;
