import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  --sb-page-bg: #f8fafc;
  --sb-card-bg: rgba(255, 255, 255, 0.94);
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
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        90deg,
        transparent 0,
        transparent 15.5%,
        rgba(148, 163, 184, 0.12) 15.5%,
        rgba(148, 163, 184, 0.12) 15.62%,
        transparent 15.62%,
        transparent 31.24%
      );
    opacity: 0.55;
    pointer-events: none;
  }

  .single-blog-inner {
    position: relative;
    z-index: 1;
    max-width: 1020px;
    margin: 0 auto;
    width: 92%;
    padding-top: 5.4rem;
  }

  .single-blog-extras {
    position: relative;
    z-index: 1;
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
    font-weight: 600;
    color: var(--sb-blue);
    margin-bottom: 2.8rem;
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
    border-radius: 18px;
    border: 1px solid rgba(229, 231, 235, 0.9);
    box-shadow:
      0 18px 44px rgba(15, 23, 42, 0.05),
      0 1px 2px rgba(0, 0, 0, 0.03);
    padding: 2rem 2rem 2.2rem;
    margin-bottom: 1.5rem;
  }

  .post-card--meta {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.2rem;
    border-radius: 2.2rem;
    padding: 2.2rem 2.2rem 2.4rem;
    backdrop-filter: blur(10px);
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
    font-size: clamp(2.9rem, 4.2vw, 4.4rem);
    font-weight: 800;
    line-height: 1.08;
    color: var(--sb-text);
    margin: 0;
    font-family: 'Poppins', 'Inter', system-ui, sans-serif;
    letter-spacing: -0.03em;
    max-width: none;
    word-break: normal;
  }

  .post-cover-inline {
    margin: 2.2rem 0 1.2rem;
    border-radius: 2rem;
    overflow: hidden;
    max-width: 60rem;
    width: calc(100% - 1.2rem);
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.1);
    border: 1px solid rgba(229, 231, 235, 0.9);
    background: #ffffff;
  }

  .post-cover-inline__image {
    width: 100%;

    .gatsby-image-wrapper {
      width: 100%;
      max-height: 34rem;
    }

    img {
      object-fit: cover;
    }
  }

  .card-divider {
    border: none;
    border-top: 1px solid var(--sb-border);
    margin: 1.8rem 0 1.6rem;
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
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;

    .bodyImage {
      margin: 3.2rem 0;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    }

    .bodyCode {
      margin: 2.6rem 0;
      font-size: 1.4rem;
      border-radius: 14px;
    }

    && p,
    && li {
      font-size: 1.9rem;
      line-height: 1.9;
      color: #243246;
      margin: 0 0 2.2rem;
      font-family: 'Inter', system-ui, sans-serif;
    }

    && li {
      margin-bottom: 1rem;
    }

    && h1,
    && h2,
    && h3,
    && h4 {
      color: var(--sb-text);
      font-family: 'Poppins', 'Inter', system-ui, sans-serif;
      margin: 3rem 0 1.2rem;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }

    && h1 {
      font-size: 3rem;
      font-weight: 800;
    }

    && h2 {
      font-size: 2.5rem;
      font-weight: 800;
    }

    && h3,
    && h4 {
      font-size: 2rem;
    }

    a {
      color: var(--sb-blue);
      text-underline-offset: 0.16em;
    }

    blockquote {
      margin: 3rem 0;
      padding: 2.2rem 2.4rem;
      border-left: 4px solid rgba(37, 99, 235, 0.32);
      background: rgba(255, 255, 255, 0.72);
      border-radius: 1.8rem;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
    }

    #disqus_thread {
      margin-top: 4.2rem;
      padding-top: 2.4rem;
      border-top: 1px solid rgba(229, 231, 235, 0.9);
      background: rgba(255, 255, 255, 0.86);
      border-radius: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
      box-shadow: 0 14px 34px rgba(15, 23, 42, 0.04);
    }
  }

  @media only screen and (max-width: 768px) {
    .single-blog-inner,
    .single-blog-extras {
      width: min(94%, 72rem);
    }

    .single-blog-inner {
      padding-top: 4.9rem;
    }

    .back-link {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    .post-card {
      border-radius: 1.8rem;
      padding: 1.8rem 1.8rem 2rem;
    }

    .post-card--meta {
      margin-bottom: 1.8rem;
      padding: 2rem 1.8rem 2.1rem;
    }

    .post-title {
      font-size: clamp(2.5rem, 5vw, 3.4rem);
      line-height: 1.1;
    }

    .post-cover-inline {
      width: 100%;
      max-width: none;
      border-radius: 1.8rem;
    }

    .post-cover-inline__image .gatsby-image-wrapper {
      max-height: 28rem;
    }

    .meta-row {
      gap: 1rem 1.4rem;
    }

    .meta-item {
      font-size: 1.3rem;
    }

    .post-card--body && p,
    .post-card--body && li {
      font-size: 1.75rem;
      line-height: 1.8;
      margin-bottom: 1.8rem;
    }

    .post-card--body && h1 {
      font-size: 2.6rem;
    }

    .post-card--body && h2 {
      font-size: 2.2rem;
    }

    .post-card--body && h3,
    .post-card--body && h4 {
      font-size: 1.9rem;
    }

    .post-card--body blockquote {
      padding: 1.8rem 1.8rem 1.8rem 2rem;
      margin: 2.4rem 0;
    }

    .post-card--body #disqus_thread {
      margin-top: 3rem;
      border-radius: 1.6rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .single-blog-inner {
      padding-top: 4.8rem;
    }

    .single-blog-extras {
      width: calc(100% - 2.4rem);
      padding-top: 1.8rem;
    }

    .post-card {
      border-radius: 1.6rem;
      padding: 1.4rem 1.4rem 1.7rem;
    }

    .post-card--meta {
      padding: 1.6rem 1.4rem 1.8rem;
      border-radius: 1.8rem;
    }

    .post-title {
      font-size: 2.2rem;
      line-height: 1.12;
    }

    .post-cover-inline {
      margin: 1.8rem 0 1rem;
      border-radius: 1.6rem;
      width: 100%;
      margin-right: 0;
    }

    .post-cover-inline__image .gatsby-image-wrapper {
      max-height: 22rem;
    }

    .meta-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .meta-item {
      font-size: 1.25rem;
    }

    .meta-author-avatar,
    .meta-author-placeholder {
      width: 3.6rem;
      height: 3.6rem;
    }

    .post-card--body && p,
    .post-card--body && li {
      font-size: 1.55rem;
      line-height: 1.75;
      margin-bottom: 1.5rem;
    }

    .post-card--body && h1 {
      font-size: 2.2rem;
    }

    .post-card--body && h2 {
      font-size: 1.95rem;
    }

    .post-card--body && h3,
    .post-card--body && h4 {
      font-size: 1.7rem;
    }

    .post-card--body blockquote {
      padding: 1.5rem 1.3rem 1.5rem 1.5rem;
      border-radius: 1.4rem;
      margin: 2rem 0;
    }

    .post-card--body #disqus_thread {
      margin-top: 2.4rem;
      padding-left: 1.4rem;
      padding-right: 1.4rem;
      padding-bottom: 1.4rem;
      border-radius: 1.4rem;
    }
  }
`;
