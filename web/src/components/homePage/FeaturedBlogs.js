import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ScrollReveal from '../ScrollReveal';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    fragment FeaturedBlogsGridFields on SanityBlog {
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

    query FeaturedBlogsQuery {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            ...FeaturedBlogsGridFields
          }
        }
      }
      allSanityBlog(
        sort: { fields: publishedAt, order: DESC }
        limit: 8
      ) {
        nodes {
          ...FeaturedBlogsGridFields
        }
      }
    }
  `);

  const featuredBlogs =
    data.allSanityFeatured.nodes[0]?.blogs?.filter(Boolean) ?? [];

  let gridBlogs = featuredBlogs.slice(1);

  if (gridBlogs.length === 0 && featuredBlogs.length === 1) {
    const heroId = featuredBlogs[0].id;
    gridBlogs = data.allSanityBlog.nodes
      .filter((b) => b.id !== heroId)
      .slice(0, 3);
  }

  if (!gridBlogs.length) return null;

  return (
    <FeaturedBlogsStyles>
      <ScrollReveal className="section-head">
        <div className="section-copy">
          <SectionTitle>Maqaalladii Ugu Dambeeyay</SectionTitle>
          <p>
            Akhri qoraalladii ugu dambeeyay ee Maqaallo, oo ka hadlaya fikir,
            tazkiyo, taariikh, iyo aqoon dhisaysa qalbi iyo garasho.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal className="featured-grid-anim">
        <BlogGrid blogs={gridBlogs} />
      </ScrollReveal>
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
