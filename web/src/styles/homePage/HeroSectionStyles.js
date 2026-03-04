import styled from 'styled-components';

export const HeroSectionStyles = styled.section`
  padding: 100px 0 40px;

  .hero-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    min-height: 480px;
    display: flex;
    align-items: flex-end;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(15, 80, 65, 0.88) 0%,
        rgba(30, 60, 50, 0.75) 40%,
        rgba(40, 55, 45, 0.6) 70%,
        rgba(50, 50, 40, 0.5) 100%
      );
      z-index: 1;
    }
  }

  .hero-content {
    position: relative;
    z-index: 2;
    padding: 48px 56px;
    width: 100%;
    max-width: 720px;
  }

  .hero-badges {
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .hero-badge {
    display: inline-block;
    background: #14b8a6;
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 20px;
    letter-spacing: 0.8px;
    line-height: 1.3;
  }

  .hero-badge--featured {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
  }

  .hero-title {
    font-size: 4.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.2;
    margin-bottom: 16px;
    max-width: 650px;

    a {
      color: #ffffff;
      &:hover {
        color: #a7f3d0;
      }
    }
  }

  .hero-excerpt {
    font-size: 1.55rem;
    font-family: 'Inter', sans-serif;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 560px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .hero-bottom {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #14b8a6;
    color: #ffffff;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 30px;
    transition: background 0.3s ease, transform 0.2s ease;
    line-height: 1;

    &:hover {
      background: #0d9488;
      transform: translateY(-1px);
    }

    .cta-arrow {
      font-size: 1.6rem;
      transition: transform 0.2s ease;
    }

    &:hover .cta-arrow {
      transform: translateX(4px);
    }
  }

  .hero-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hero-author-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.4);
    flex-shrink: 0;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  .hero-author-info {
    display: flex;
    flex-direction: column;
  }

  .hero-author-name {
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.3;
  }

  .hero-author-meta {
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.3;
  }

  .hero-date {
    font-size: 1.25rem;
    font-family: 'Inter', sans-serif;
    color: rgba(255, 255, 255, 0.5);
    margin-left: auto;
  }

  @media only screen and (max-width: 1024px) {
    padding: 90px 0 32px;

    .hero-card {
      min-height: 420px;
    }

    .hero-content {
      padding: 36px 40px;
    }

    .hero-title {
      font-size: 3.4rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 80px 0 24px;

    .hero-card {
      min-height: 380px;
      border-radius: 18px;
    }

    .hero-content {
      padding: 28px 24px;
    }

    .hero-badges {
      margin-bottom: 16px;
    }

    .hero-badge {
      font-size: 1rem;
      padding: 5px 12px;
    }

    .hero-title {
      font-size: 2.6rem;
      margin-bottom: 12px;
    }

    .hero-excerpt {
      font-size: 1.35rem;
      margin-bottom: 24px;
      -webkit-line-clamp: 2;
    }

    .hero-cta {
      font-size: 1.35rem;
      padding: 12px 22px;
    }

    .hero-author-avatar {
      width: 36px;
      height: 36px;
    }

    .hero-date {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    .hero-title {
      font-size: 2.2rem;
    }

    .hero-bottom {
      gap: 16px;
    }
  }
`;
