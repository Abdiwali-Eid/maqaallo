import styled from 'styled-components';

export const AuthorItemStyles = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.92));
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 24px;
  padding: 3rem 2rem;
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.06);
  transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 8.5rem;
    background: linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(251, 191, 36, 0.08));
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 26px 55px rgba(15, 23, 42, 0.11);
    transform: translateY(-10px);
    border-color: rgba(20, 184, 166, 0.22);

    .author-avatar-ring {
      transform: translateY(-4px) scale(1.04);
    }
  }

  .author-avatar-ring {
    position: relative;
    width: 8.6rem;
    height: 8.6rem;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, #14b8a6, #a7f3d0, #fbbf24);
    margin-bottom: 1.8rem;
    transition: transform 0.35s ease;
    box-shadow: 0 18px 30px rgba(20, 184, 166, 0.16);
  }

  .profileImage {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  .author-name {
    position: relative;
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #10231d;
    margin-bottom: 0.8rem;
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
    position: relative;
    font-size: 1.35rem;
    font-family: 'Inter', sans-serif;
    color: #64748b;
    line-height: 1.75;
    margin-bottom: 1.8rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }

  .author-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 1.3rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #0f766e;
    transition: gap 0.25s ease, color 0.25s ease;

    &:hover {
      gap: 10px;
      color: #14b8a6;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 24px 16px;

    .author-avatar-ring {
      width: 7.2rem;
      height: 7.2rem;
    }

    .author-name {
      font-size: 1.5rem;
    }

    .author-bio {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 2.2rem 1.4rem;
    border-radius: 20px;

    .author-avatar-ring {
      width: 6.6rem;
      height: 6.6rem;
      margin-bottom: 1.4rem;
    }

    .author-name {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }

    .author-role {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }

    .author-bio {
      font-size: 1.25rem;
      line-height: 1.65;
      margin-bottom: 1.4rem;
    }
  }
`;
