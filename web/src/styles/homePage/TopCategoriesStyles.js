import styled from 'styled-components';

export const TopCategoriesStyles = styled.section`
  padding: 4rem 0 2rem;

  .categories-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }

  .categories-title {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #1f2937;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
    gap: 1.6rem;
  }

  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    background: #ffffff;
    border-radius: 14px;
    padding: 24px 16px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    color: #1f2937;

    &:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);

      .category-icon {
        background: #14b8a6;
        svg {
          color: #ffffff;
        }
      }
    }
  }

  .category-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: #ecfdf5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;

    svg {
      width: 24px;
      height: 24px;
      color: #14b8a6;
      transition: color 0.3s ease;
    }
  }

  .category-name {
    font-size: 1.35rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #374151;
    line-height: 1.3;
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 0 1.5rem;

    .categories-title {
      font-size: 1.7rem;
    }

    .categories-grid {
      grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
      gap: 1.2rem;
    }

    .category-card {
      padding: 20px 12px;
      gap: 10px;
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
`;
