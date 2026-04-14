import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import BlogGrid from '../components/blog/BlogGrid';
import MyPortableText from '../components/MyPortableText';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { Title } from '../components/typography/Title';
import { SingleAuthorStyles } from '../styles/author/SingleAuthorStyles';
import { socialLinks } from '../constants/socialLinks';

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
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

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;
  return (
    <PageSpace top={112} bottom={100}>
      <SEO title={author.name} />
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt={author.profileImage.alt}
              className="profileImage"
            />
            <Title className="name">{author.name}</Title>
            <div className="bio">
              <MyPortableText value={author._rawBio} />
            </div>
            <ul className="footer__socialList">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="hr" />
          <BlogGrid blogs={blogs} />
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;
