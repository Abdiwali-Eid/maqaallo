import styled from 'styled-components';

export const HeroSectionStyles = styled.section`
  @keyframes heroFadeUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes heroFloat {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, -14px, 0) scale(1.04);
    }
  }

  padding: 100px 0 40px;

  .hero-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    min-height: 620px;
    display: flex;
    align-items: flex-end;
    border: 1px solid rgba(255, 255, 255, 0.16);
    box-shadow: 0 34px 80px rgba(15, 23, 42, 0.18);
    isolation: isolate;
  }

  .hero-glow {
    position: absolute;
    border-radius: 999px;
    filter: blur(8px);
    opacity: 0.8;
    z-index: 1;
    animation: heroFloat 8s ease-in-out infinite;
  }

  .hero-glow--one {
    width: 18rem;
    height: 18rem;
    top: 4rem;
    right: 4rem;
    background: rgba(251, 191, 36, 0.16);
  }

  .hero-glow--two {
    width: 12rem;
    height: 12rem;
    bottom: 9rem;
    right: 32%;
    background: rgba(45, 212, 191, 0.14);
    animation-delay: 1.5s;
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
        125deg,
        rgba(8, 30, 27, 0.78) 0%,
        rgba(11, 63, 57, 0.68) 38%,
        rgba(17, 24, 39, 0.44) 72%,
        rgba(15, 23, 42, 0.26) 100%
      );
      z-index: 1;
    }
  }

  .hero-content {
    position: relative;
    z-index: 3;
    padding: 48px 56px;
    width: 100%;
    max-width: 700px;
    margin: 0 0 4.2rem 4.2rem;
    border-radius: 3rem;
    background: linear-gradient(180deg, rgba(8, 30, 27, 0.34), rgba(8, 30, 27, 0.18));
    border: 1px solid rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.14);
  }

  .hero-kicker,
  .hero-badges,
  .hero-title,
  .hero-excerpt,
  .hero-bottom {
    opacity: 0;
    animation: heroFadeUp 0.8s ease forwards;
  }

  .hero-kicker {
    display: inline-flex;
    align-items: center;
    padding: 8px 14px;
    border-radius: 999px;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    font-size: 1.15rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.84);
    animation-delay: 0.05s;
  }

  .hero-badges {
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    animation-delay: 0.12s;
  }

  .hero-badge {
    display: inline-block;
    background: rgba(20, 184, 166, 0.92);
    color: #ffffff;
    font-size: 1.05rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 20px;
    letter-spacing: 0.1em;
    line-height: 1.3;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
  }

  .hero-badge--featured {
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(8px);
  }

  .hero-title {
    font-size: clamp(3.4rem, 4.3vw, 5.2rem);
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.05;
    margin-bottom: 18px;
    max-width: 13ch;
    letter-spacing: -0.03em;
    animation-delay: 0.2s;

    a {
      color: #ffffff;
      transition: color 0.3s ease;

      &:hover {
        color: #a7f3d0;
      }
    }
  }

  .hero-excerpt {
    font-size: 1.58rem;
    font-family: 'Inter', sans-serif;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
    margin-bottom: 2.6rem;
    max-width: 50rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    animation-delay: 0.28s;
  }

  .hero-bottom {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    flex-wrap: wrap;
    animation-delay: 0.44s;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #14b8a6, #0f766e);
    color: #ffffff;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    padding: 16px 28px;
    border-radius: 30px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    line-height: 1;
    box-shadow: 0 18px 30px rgba(20, 184, 166, 0.24);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 24px 34px rgba(20, 184, 166, 0.3);
    }

    .cta-arrow {
      font-size: 1.6rem;
      transition: transform 0.25s ease;
    }

    &:hover .cta-arrow {
      transform: translateX(4px);
    }
  }

  .hero-author {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0.9rem 1.3rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(8px);
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
      min-height: 560px;
    }

    .hero-content {
      padding: 36px 40px;
      margin: 0 0 3rem 3rem;
    }

    .hero-glow--two {
      right: 12%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 72px 0 20px;
    display: flex;
    align-items: stretch;

    .container {
      display: flex;
      align-items: stretch;
    }

    .hero-card {
      min-height: clamp(56rem, 76svh, 68rem);
      flex: 1;
      align-items: center;
      border-radius: 18px;
    }

    .hero-content {
      padding: 28px 24px;
      margin: 0 1.6rem;
      border-radius: 2.2rem;
      max-width: none;
    }

    .hero-badges {
      margin-bottom: 16px;
    }

    .hero-badge {
      font-size: 1rem;
      padding: 5px 12px;
    }

    .hero-title {
      font-size: 3.1rem;
      max-width: 14ch;
      margin-bottom: 12px;
    }

    .hero-excerpt {
      font-size: 1.55rem;
      margin-bottom: 24px;
      -webkit-line-clamp: 2;
    }

    .hero-cta {
      font-size: 1.45rem;
      padding: 12px 22px;
    }

    .hero-author-avatar {
      width: 36px;
      height: 36px;
    }

    .hero-bottom {
      align-items: stretch;
      gap: 16px;
    }

    .hero-cta,
    .hero-author {
      width: 100%;
      justify-content: center;
    }

    .hero-date {
      display: none;
    }
  }

  @media only screen and (max-width: 640px) {
    .hero-card {
      min-height: clamp(54rem, 75svh, 66rem);
    }

    .hero-content {
      padding: 24px 20px;
      margin: 0 1.2rem;
    }

    .hero-title {
      font-size: 2.8rem;
      max-width: 12ch;
    }

    .hero-excerpt {
      font-size: 1.45rem;
      line-height: 1.65;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 480px) {
    .hero-kicker,
    .hero-badge--featured {
      display: none;
    }

    .hero-badges {
      margin-bottom: 12px;
    }

    .hero-title {
      font-size: 2.55rem;
      max-width: 12ch;
      line-height: 1.08;
    }

    .hero-card {
      min-height: clamp(52rem, 74svh, 64rem);
      border-radius: 16px;
    }

    .hero-content {
      padding: 20px 16px;
      margin: 0 0.8rem;
      border-radius: 1.8rem;
    }

    .hero-badge {
      font-size: 0.95rem;
      padding: 0.5rem 1rem;
    }

    .hero-excerpt {
      font-size: 1.4rem;
      margin-bottom: 16px;
    }

    .hero-cta {
      font-size: 1.35rem;
      padding: 1.2rem 1.6rem;
      border-radius: 1.6rem;
    }

    .hero-author {
      padding: 0.8rem 1rem;
      justify-content: flex-start;
    }

    .hero-author-name {
      font-size: 1.35rem;
    }

    .hero-author-meta {
      font-size: 1.15rem;
    }

    .hero-bottom {
      gap: 16px;
    }
  }
`;
