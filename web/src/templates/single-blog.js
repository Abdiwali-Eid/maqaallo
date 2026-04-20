import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Disqus from 'gatsby-plugin-disqus';
import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { BiCategory } from 'react-icons/bi';
import { FiArrowLeft, FiCalendar, FiUser } from 'react-icons/fi';
import PageSpace from '../components/PageSpace';
import MyPortableText from '../components/MyPortableText';
import SEO from '../components/seo';
import Releted from '../components/homePage/Releted';
import Fikir from '../components/homePage/Fikir';
import PostAudioPlayer from '../components/blog/PostAudioPlayer';
import RelatedArticles from '../components/blog/RelatedArticles';
import SubscribePoster from '../components/SubscribePoster';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';

export const postQuery = graphql`
  query SingleBlogQuery($slug: String!) {
    sanityBlog(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      publishedAt
      _rawBody
      audio {
        asset {
          url
          originalFilename
        }
      }
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        id
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
            gatsbyImageData
          }
        }
      }
    }
    relatedCandidates: allSanityBlog(
      filter: { slug: { current: { ne: $slug } } }
      sort: { fields: publishedAt, order: DESC }
      limit: 24
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
          id
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

function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  const pageurl = typeof window !== 'undefined' ? window.location.href : '';
  const disqusConfig = {
    url: pageurl,
    identifier: blog.slug?.current || blog.title,
    title: blog.title,
  };

  const authorSlug = blog.author?.slug?.current;
  const authorName = blog.author?.name;
  const hasProfileImage = blog.author?.profileImage?.asset?.gatsbyImageData;

  const currentSlug = blog.slug.current;
  const currentCategoryIds = useMemo(
    () => (blog.categories || []).map((c) => c.id),
    [blog.categories]
  );

  return (
    <div>
      <SingleBlogStyles>
        <SEO title={blog.title} />
        <PageSpace top={24} bottom={80}>
          <div className="single-blog-inner">
            <Link to="/blogs" className="back-link">
              <FiArrowLeft aria-hidden />
              Ku laabo bogga hore
            </Link>

            <article className="post-card post-card--meta">
              {blog.categories?.length > 0 && (
                <div className="category-badges">
                  {blog.categories.map((cat) => (
                    <Link
                      key={cat.slug.current}
                      to={`/categories/${cat.slug.current}`}
                      className="category-badge"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="post-title">{blog.title}</h1>
              {blog.coverImage?.asset?.gatsbyImageData && (
                <div className="post-cover-inline">
                  <GatsbyImage
                    image={blog.coverImage.asset.gatsbyImageData}
                    alt={blog.coverImage.alt || blog.title}
                    className="post-cover-inline__image"
                  />
                </div>
              )}
              <hr className="card-divider" />

              <div className="meta-row">
                {blog.author && (
                  <div className="meta-item meta-author">
                    {hasProfileImage ? (
                      <div className="meta-author-avatar">
                        <Link to={`/authors/${authorSlug}`}>
                          <GatsbyImage
                            image={
                              blog.author.profileImage.asset.gatsbyImageData
                            }
                            alt={
                              blog.author.profileImage.alt || authorName || ''
                            }
                          />
                        </Link>
                      </div>
                    ) : (
                      <div className="meta-author-placeholder" aria-hidden>
                        <FiUser />
                      </div>
                    )}
                    {authorSlug ? (
                      <Link to={`/authors/${authorSlug}`}>{authorName}</Link>
                    ) : (
                      <span>{authorName}</span>
                    )}
                  </div>
                )}

                {blog.categories?.length > 0 && (
                  <div className="meta-item meta-categories">
                    <BiCategory aria-hidden />
                    <span>
                      {blog.categories.map((item, index) => (
                        <span key={item.slug.current}>
                          <Link to={`/categories/${item.slug.current}`}>
                            {item.title}
                          </Link>
                          {index < blog.categories.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </span>
                  </div>
                )}

                {blog.publishedAt && (
                  <div className="meta-item meta-date">
                    <FiCalendar aria-hidden />
                    <time dateTime={blog.publishedAt}>
                      {format(new Date(blog.publishedAt), 'MMM dd, yyyy')}
                    </time>
                  </div>
                )}
              </div>
            </article>

            <PostAudioPlayer
              audioUrl={blog.audio?.asset?.url}
              fileName={blog.audio?.asset?.originalFilename}
              title={blog.title}
            />

            <div className="post-card post-card--body">
              <MyPortableText value={blog._rawBody} />
              <Disqus config={disqusConfig} />
            </div>
          </div>

          <div className="single-blog-extras">
            <RelatedArticles
              currentSlug={currentSlug}
              currentCategoryIds={currentCategoryIds}
              candidates={data.relatedCandidates?.nodes}
            />
            <SubscribePoster />
          </div>
        </PageSpace>
      </SingleBlogStyles>
      {blog.categories.map((item) => (
        <span key={item.slug.current}>
          {item.title === 'Fikir' ? (
            <Fikir />
          ) : item.title === 'Aqoon guud' ? (
            <Releted />
          ) : (
            <p>" "</p>
          )}
        </span>
      ))}
    </div>
  );
}

export default SingleBlog;
