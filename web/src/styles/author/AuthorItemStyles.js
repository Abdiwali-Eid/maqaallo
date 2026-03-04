import styled from 'styled-components';

export const AuthorItemStyles = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  .author-avatar-ring {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, #14b8a6, #a7f3d0);
    margin-bottom: 16px;
  }

  .profileImage {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .author-name {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .author-role {
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #14b8a6;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .author-bio {
    font-size: 1.3rem;
    font-family: 'Inter', sans-serif;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }

  .author-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 1.3rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #1f2937;
    transition: gap 0.2s ease, color 0.2s ease;

    &:hover {
      gap: 10px;
      color: #14b8a6;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 24px 16px;

    .author-avatar-ring {
      width: 68px;
      height: 68px;
    }

    .author-name {
      font-size: 1.5rem;
    }

    .author-bio {
      font-size: 1.2rem;
    }
  }
`;
