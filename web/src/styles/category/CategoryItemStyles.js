import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  background: #ffffff;
  padding: 28px 24px;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);

    .cat-icon {
      background: #14b8a6;
      svg {
        color: #ffffff;
      }
    }
  }

  .cat-top {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 14px;
  }

  .cat-icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
    border-radius: 14px;
    background: #ecfdf5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;

    svg {
      width: 22px;
      height: 22px;
      color: #14b8a6;
      transition: color 0.3s ease;
    }
  }

  .cat-title {
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #1f2937;
    line-height: 1.3;
  }

  .cat-description {
    font-size: 1.35rem;
    font-family: 'Inter', sans-serif;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 20px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    p {
      margin: 0;
    }
  }

  .cat-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 1.35rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #14b8a6;
    transition: gap 0.2s ease;
    align-self: flex-start;

    &:hover {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 22px 20px;

    .cat-icon {
      width: 42px;
      height: 42px;
      min-width: 42px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cat-title {
      font-size: 1.6rem;
    }
  }
`;
