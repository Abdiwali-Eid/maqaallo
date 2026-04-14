import { Link } from 'gatsby';
import styled from 'styled-components';

export const SearchResultItemStyles = styled(Link)`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.96),
    rgba(248, 250, 252, 0.94)
  );
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 1.6rem;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  transition: transform 0.22s ease, box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(20, 184, 166, 0.24);
    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
  }

  .img {
    width: 5.8rem;
    height: 4.6rem;
    border-radius: 1rem;
    overflow: hidden;
    flex-shrink: 0;
  }

  .title {
    font-size: 1.5rem;
    color: #10231d;
    line-height: 1.4;
  }

  .categoriesText {
    font-size: 1.25rem;
    color: #64748b;

    a {
      color: #0f766e;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .authorProfileImg {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  @media only screen and (max-width: 480px) {
    padding: 0.85rem;
    border-radius: 1.3rem;
    gap: 0.85rem;

    .img {
      width: 4.8rem;
      height: 4rem;
    }

    .title {
      font-size: 1.35rem;
    }

    .categoriesText {
      font-size: 1.15rem;
    }

    .authorProfileImg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;
