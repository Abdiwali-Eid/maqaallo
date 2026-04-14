import styled from 'styled-components';

export const TopCategoriesStyles = styled.section`
  @keyframes categorySectionReveal {
    from {
      opacity: 0;
      transform: translateY(2.4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  padding: 5rem 0 2rem;

  .categories-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.6rem;
  }

  .categories-title {
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #10231d;
    letter-spacing: -0.03em;
  }

  .categories-viewall {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 1.4rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #14b8a6;
    transition: gap 0.2s ease;

    &:hover {
      gap: 8px;
    }
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.8rem;
  }

  .categories-grid-anim .category-card {
    opacity: 0;
    transform: translateY(2.4rem);
  }

  .categories-grid-anim.is-visible .category-card:nth-child(1) {
    animation: categorySectionReveal 0.6s ease forwards;
    animation-delay: 0.06s;
  }

  .categories-grid-anim.is-visible .category-card:nth-child(2) {
    animation: categorySectionReveal 0.6s ease forwards;
    animation-delay: 0.12s;
  }

  .categories-grid-anim.is-visible .category-card:nth-child(3) {
    animation: categorySectionReveal 0.6s ease forwards;
    animation-delay: 0.18s;
  }

  .categories-grid-anim.is-visible .category-card:nth-child(4) {
    animation: categorySectionReveal 0.6s ease forwards;
    animation-delay: 0.24s;
  }

  .categories-grid-anim.is-visible .category-card:nth-child(5) {
    animation: categorySectionReveal 0.6s ease forwards;
    animation-delay: 0.3s;
  }

  .categories-grid-anim.is-visible .category-card:nth-child(6) {
    animation: categorySectionReveal 0.6s ease forwards;
    animation-delay: 0.36s;
  }

  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(240, 253, 250, 0.9));
    border-radius: 20px;
    padding: 28px 16px;
    text-align: center;
    border: 1px solid rgba(148, 163, 184, 0.16);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.05);
    transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
    color: #1f2937;

    &:hover {
      box-shadow: 0 22px 40px rgba(15, 23, 42, 0.1);
      transform: translateY(-6px);
      border-color: rgba(20, 184, 166, 0.28);

      .category-icon {
        background: linear-gradient(135deg, #14b8a6, #0f766e);
        svg {
          color: #ffffff;
          transform: scale(1.08);
        }
      }
    }
  }

  .category-icon {
    width: 58px;
    height: 58px;
    border-radius: 18px;
    background: #ecfdf5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, transform 0.3s ease;

    svg {
      width: 24px;
      height: 24px;
      color: #14b8a6;
      transition: color 0.3s ease, transform 0.3s ease;
    }
  }

  .category-name {
    font-size: 1.4rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #334155;
    line-height: 1.3;
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 0 1.5rem;

    .categories-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.8rem;
      margin-bottom: 1.8rem;
    }

    .categories-title {
      font-size: 2rem;
    }

    .categories-grid {
      grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
      gap: 1.2rem;
    }

    .category-card {
      padding: 20px 12px;
      gap: 10px;
      border-radius: 16px;
    }

    .category-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .category-name {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 2.4rem 0 1.2rem;

    .categories-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .category-card {
      min-height: 11.2rem;
      padding: 1.6rem 1rem;
    }

    .categories-viewall {
      font-size: 1.3rem;
    }
  }
`;
