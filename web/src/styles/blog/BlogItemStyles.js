import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.94));
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.07);
  transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(20, 184, 166, 0.04), transparent 22%);
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 26px 55px rgba(15, 23, 42, 0.12);
    transform: translateY(-10px);
    border-color: rgba(20, 184, 166, 0.24);

    .img-wrapper [data-main-image] {
      transform: scale(1.08);
    }

    .img-wrapper::after {
      opacity: 1;
    }

    .card-readmore {
      gap: 10px;
    }
  }

  .img-wrapper {
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(15, 23, 42, 0) 35%, rgba(15, 23, 42, 0.18) 100%);
      opacity: 0.7;
      transition: opacity 0.35s ease;
      pointer-events: none;
    }

    .img {
      height: 230px;
      width: 100%;

      [data-main-image] {
        transition: transform 0.55s ease;
      }
    }

    .img--placeholder {
      height: 230px;
      width: 100%;
      background: linear-gradient(
        135deg,
        #e0e7ff 0%,
        #cffafe 50%,
        #fef3c7 100%
      );
    }
  }

  .card-badge {
    position: absolute;
    top: 18px;
    left: 18px;
    background: rgba(20, 184, 166, 0.95);
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    letter-spacing: 0.08em;
    z-index: 2;
    line-height: 1.4;
    box-shadow: 0 12px 24px rgba(20, 184, 166, 0.2);

    a {
      color: #ffffff;
    }
  }

  .card-date {
    position: absolute;
    top: 18px;
    right: 18px;
    background: rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(8px);
    color: #374151;
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    z-index: 2;
    line-height: 1.4;
  }

  .card-content {
    position: relative;
    padding: 2.2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-title {
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #10231d;
    line-height: 1.4;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    a {
      color: #10231d;
      transition: color 0.25s ease;

      &:hover {
        color: #14b8a6;
      }
    }
  }

  .card-excerpt {
    font-size: 1.4rem;
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

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.6rem;
    border-top: 1px solid rgba(226, 232, 240, 0.9);
  }

  .card-author {
    display: flex;
    align-items: center;
    gap: 10px;

    .author-avatar {
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .author-name {
      font-size: 1.3rem;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      color: #334155;
    }
  }

  .card-readmore {
    font-size: 1.3rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #14b8a6;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: gap 0.25s ease, color 0.25s ease;
  }

  @media only screen and (max-width: 768px) {
    .img-wrapper .img,
    .img-wrapper .img--placeholder {
      height: 180px;
    }

    .card-content {
      padding: 16px;
    }

    .card-title {
      font-size: 1.5rem;
    }

    .card-excerpt {
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 480px) {
    border-radius: 20px;

    .card-badge,
    .card-date {
      top: 12px;
    }

    .card-badge {
      left: 12px;
      font-size: 0.95rem;
      padding: 0.45rem 0.9rem;
    }

    .card-date {
      right: 12px;
      font-size: 1.05rem;
      padding: 0.45rem 0.8rem;
    }

    .img-wrapper .img,
    .img-wrapper .img--placeholder {
      height: 190px;
    }

    .card-content {
      padding: 1.5rem 1.4rem;
    }

    .card-title {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }

    .card-excerpt {
      -webkit-line-clamp: 3;
      margin-bottom: 1.4rem;
    }

    .card-footer {
      gap: 1rem;
      align-items: flex-start;
      flex-direction: column;
    }

    .card-readmore {
      font-size: 1.25rem;
    }
  }
`;
