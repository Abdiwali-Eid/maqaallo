import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  --sb-page-bg: #f3f4f6;
  --sb-card-bg: #ffffff;
  --sb-blue: #2563eb;
  --sb-orange: #ea580c;
  --sb-orange-soft: #fff7ed;
  --sb-text: #111827;
  --sb-text-muted: #6b7280;
  --sb-border: #e5e7eb;

  background: var(--sb-page-bg);
  color: var(--sb-text);
  min-height: 100%;
  padding-bottom: 3rem;

  .single-blog-inner {
    max-width: 640px;
    margin: 0 auto;
    width: 92%;
    padding-top: 1.6rem;
  }

  .single-blog-extras {
    max-width: 960px;
    margin: 0 auto;
    width: 92%;
    padding-top: 2.4rem;
  }

  .related-articles {
    margin-bottom: 0.4rem;
  }

  .related-articles__title {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--sb-text);
    margin: 0 0 1.8rem;
    font-family: 'Inter', system-ui, sans-serif;
    letter-spacing: -0.02em;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--sb-blue);
    margin-bottom: 1.8rem;
    text-decoration: none;
    font-family: 'Inter', system-ui, sans-serif;

    svg {
      width: 1.8rem;
      height: 1.8rem;
      flex-shrink: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .post-card {
    background: var(--sb-card-bg);
    border-radius: 16px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.06),
      0 1px 2px rgba(0, 0, 0, 0.04);
    padding: 2rem 2rem 2.2rem;
    margin-bottom: 1.5rem;
  }

  .category-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .category-badge {
    display: inline-block;
    background: var(--sb-orange);
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 0.45rem 1rem;
    border-radius: 8px;
    font-family: 'Inter', system-ui, sans-serif;
    text-decoration: none;

    &:hover {
      filter: brightness(1.05);
    }
  }

  .post-title {
    font-size: clamp(2.2rem, 5vw, 2.8rem);
    font-weight: 700;
    line-height: 1.25;
    color: var(--sb-text);
    margin: 0;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .card-divider {
    border: none;
    border-top: 1px solid var(--sb-border);
    margin: 1.6rem 0 1.4rem;
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.2rem 2rem;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.4rem;
  }

  .meta-author {
    font-weight: 700;
    color: var(--sb-text);

    a {
      color: var(--sb-text);
      text-decoration: none;
      font-weight: 700;

      &:hover {
        color: var(--sb-blue);
      }
    }
  }

  .meta-author-avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: var(--sb-border);

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .meta-author-placeholder {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: var(--sb-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sb-text-muted);
    flex-shrink: 0;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .meta-categories {
    color: var(--sb-orange);
    font-weight: 600;

    svg {
      width: 1.8rem;
      height: 1.8rem;
      color: var(--sb-orange);
      flex-shrink: 0;
    }

    a {
      color: var(--sb-orange);
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .meta-date {
    color: var(--sb-text-muted);
    font-weight: 500;

    svg {
      width: 1.8rem;
      height: 1.8rem;
      color: var(--sb-text-muted);
      flex-shrink: 0;
    }
  }

  .post-card--body {
    padding-top: 2.2rem;
    padding-bottom: 2.4rem;

    .bodyImage {
      margin: 2rem 0;
      border-radius: 12px;
    }

    .bodyCode {
      margin: 2rem 0;
      font-size: 1.4rem;
      border-radius: 8px;
    }

    /* Portable Text uses styled <p>/<h2>; && raises specificity */
    && p,
    && li {
      font-size: 1.6rem;
      line-height: 1.65;
      color: var(--sb-text);
      margin: 0 0 1.2rem;
      font-family: 'Inter', system-ui, sans-serif;
    }

    && li {
      margin-bottom: 0.6rem;
    }

    && h1,
    && h2,
    && h3,
    && h4 {
      color: var(--sb-text);
      font-family: 'Inter', system-ui, sans-serif;
      margin: 1.6rem 0 1rem;
      line-height: 1.3;
    }

    && h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    && h2 {
      font-size: 1.85rem;
      font-weight: 700;
    }

    && h3,
    && h4 {
      font-size: 1.65rem;
    }

    a {
      color: var(--sb-blue);
    }

    #disqus_thread {
      margin-top: 3rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .post-card {
      padding: 1.6rem 1.6rem 1.8rem;
    }

    .meta-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
