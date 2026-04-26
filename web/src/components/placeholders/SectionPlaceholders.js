import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const PlaceholderStyles = styled.div`
  --skeleton-base: rgba(226, 232, 240, 0.82);
  --skeleton-highlight: rgba(255, 255, 255, 0.78);
  --skeleton-border: rgba(148, 163, 184, 0.16);

  .skeleton-line,
  .skeleton-block,
  .skeleton-circle,
  .skeleton-pill {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--skeleton-base), rgba(240, 253, 250, 0.9));
  }

  .skeleton-line::after,
  .skeleton-block::after,
  .skeleton-circle::after,
  .skeleton-pill::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      var(--skeleton-highlight),
      transparent
    );
    animation: ${shimmer} 1.45s ease-in-out infinite;
  }

  .skeleton-line {
    height: 1.3rem;
    border-radius: 999px;
  }

  .skeleton-pill {
    height: 2.8rem;
    border-radius: 999px;
  }

  .section-placeholder-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 2.8rem;
  }

  .section-placeholder-copy {
    width: min(100%, 56rem);
  }

  .section-placeholder-title {
    width: min(22rem, 64%);
    height: 2.6rem;
    margin-bottom: 1.4rem;
  }

  .section-placeholder-text {
    width: 100%;
    max-width: 48rem;
    margin-bottom: 1rem;
  }

  .section-placeholder-text.short {
    width: 72%;
  }

  .section-placeholder-action {
    width: 9rem;
    flex: 0 0 auto;
  }

  .category-placeholder-grid,
  .blog-placeholder-grid,
  .author-placeholder-grid {
    display: grid;
  }

  .category-placeholder-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.8rem;
  }

  .category-placeholder-card {
    min-height: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    padding: 2.8rem 1.6rem;
    border-radius: 20px;
    border: 1px solid var(--skeleton-border);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(240, 253, 250, 0.78));
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.05);
  }

  .category-placeholder-icon {
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 18px;
  }

  .category-placeholder-name {
    width: 62%;
  }

  .blog-placeholder-grid {
    margin-top: 3.5rem;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .blog-placeholder-card,
  .author-placeholder-card {
    overflow: hidden;
    border-radius: 24px;
    border: 1px solid var(--skeleton-border);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.92));
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.07);
  }

  .blog-placeholder-media {
    height: 23rem;
    border-radius: 0;
  }

  .blog-placeholder-body {
    padding: 2.2rem;
  }

  .blog-placeholder-title {
    width: 90%;
    height: 1.8rem;
    margin-bottom: 1.2rem;
  }

  .blog-placeholder-title.second {
    width: 64%;
  }

  .blog-placeholder-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    padding-top: 1.8rem;
    margin-top: 1.8rem;
    border-top: 1px solid rgba(226, 232, 240, 0.9);
  }

  .blog-placeholder-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 0;
  }

  .blog-placeholder-avatar,
  .author-placeholder-avatar {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    flex: 0 0 auto;
  }

  .blog-placeholder-name {
    width: 8rem;
  }

  .blog-placeholder-link {
    width: 7.4rem;
  }

  .author-placeholder-grid {
    margin-top: 3rem;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }

  .author-placeholder-card {
    position: relative;
    display: flex;
    min-height: 24rem;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    text-align: center;
  }

  .author-placeholder-card::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 8.5rem;
    background: linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(251, 191, 36, 0.08));
  }

  .author-placeholder-avatar {
    position: relative;
    width: 8.6rem;
    height: 8.6rem;
    margin-bottom: 1.8rem;
    box-shadow: 0 18px 30px rgba(20, 184, 166, 0.12);
  }

  .author-placeholder-name {
    width: 62%;
    height: 1.8rem;
    margin-bottom: 1.2rem;
  }

  .author-placeholder-bio {
    width: 88%;
    margin-bottom: 1rem;
  }

  .author-placeholder-bio.short {
    width: 58%;
    margin-bottom: 1.8rem;
  }

  .author-placeholder-link {
    width: 8.6rem;
  }

  @media only screen and (max-width: 1024px) {
    .blog-placeholder-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
    }

    .author-placeholder-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 768px) {
    .section-placeholder-head {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 1.8rem;
    }

    .category-placeholder-grid {
      grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
      gap: 1.2rem;
    }

    .category-placeholder-card {
      min-height: 11.2rem;
      padding: 2rem 1.2rem;
      border-radius: 16px;
    }

    .category-placeholder-icon {
      width: 4.4rem;
      height: 4.4rem;
      border-radius: 12px;
    }

    .blog-placeholder-media {
      height: 18rem;
    }

    .blog-placeholder-body {
      padding: 1.6rem;
    }

    .author-placeholder-card {
      padding: 2.4rem 1.6rem;
    }

    .author-placeholder-avatar {
      width: 7.2rem;
      height: 7.2rem;
    }
  }

  @media only screen and (max-width: 640px) {
    .blog-placeholder-grid,
    .author-placeholder-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .section-placeholder-title {
      width: 18rem;
      height: 2.2rem;
    }

    .category-placeholder-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .category-placeholder-card {
      padding: 1.6rem 1rem;
    }

    .blog-placeholder-card,
    .author-placeholder-card {
      border-radius: 20px;
    }

    .blog-placeholder-media {
      height: 19rem;
    }

    .blog-placeholder-body {
      padding: 1.5rem 1.4rem;
    }

    .author-placeholder-avatar {
      width: 6.6rem;
      height: 6.6rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .skeleton-line::after,
    .skeleton-block::after,
    .skeleton-circle::after,
    .skeleton-pill::after {
      animation: none;
    }
  }
`;

function PlaceholderHead({ showCopy = true }) {
  return (
    <div className="section-placeholder-head">
      <div className="section-placeholder-copy">
        <div className="skeleton-line section-placeholder-title" />
        {showCopy && (
          <>
            <div className="skeleton-line section-placeholder-text" />
            <div className="skeleton-line section-placeholder-text short" />
          </>
        )}
      </div>
      <div className="skeleton-pill section-placeholder-action" />
    </div>
  );
}

export function CategorySectionPlaceholder() {
  return (
    <PlaceholderStyles aria-busy="true" aria-live="polite">
      <PlaceholderHead showCopy={false} />
      <div className="category-placeholder-grid">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="category-placeholder-card" key={index}>
            <div className="skeleton-block category-placeholder-icon" />
            <div className="skeleton-line category-placeholder-name" />
          </div>
        ))}
      </div>
    </PlaceholderStyles>
  );
}

export function BlogSectionPlaceholder() {
  return (
    <PlaceholderStyles aria-busy="true" aria-live="polite">
      <PlaceholderHead />
      <div className="blog-placeholder-grid">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="blog-placeholder-card" key={index}>
            <div className="skeleton-block blog-placeholder-media" />
            <div className="blog-placeholder-body">
              <div className="skeleton-line blog-placeholder-title" />
              <div className="skeleton-line blog-placeholder-title second" />
              <div className="skeleton-line section-placeholder-text" />
              <div className="skeleton-line section-placeholder-text short" />
              <div className="blog-placeholder-meta">
                <div className="blog-placeholder-author">
                  <div className="skeleton-circle blog-placeholder-avatar" />
                  <div className="skeleton-line blog-placeholder-name" />
                </div>
                <div className="skeleton-line blog-placeholder-link" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </PlaceholderStyles>
  );
}

export function AuthorSectionPlaceholder() {
  return (
    <PlaceholderStyles aria-busy="true" aria-live="polite">
      <PlaceholderHead />
      <div className="author-placeholder-grid">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="author-placeholder-card" key={index}>
            <div className="skeleton-circle author-placeholder-avatar" />
            <div className="skeleton-line author-placeholder-name" />
            <div className="skeleton-line author-placeholder-bio" />
            <div className="skeleton-line author-placeholder-bio short" />
            <div className="skeleton-line author-placeholder-link" />
          </div>
        ))}
      </div>
    </PlaceholderStyles>
  );
}
