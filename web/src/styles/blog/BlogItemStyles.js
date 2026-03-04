import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    .img-wrapper [data-main-image] {
      transform: scale(1.05);
    }
  }

  .img-wrapper {
    position: relative;
    overflow: hidden;

    .img {
      height: 220px;
      width: 100%;
      [data-main-image] {
        transition: 0.4s ease transform;
      }
    }
  }

  .card-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: #14b8a6;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    z-index: 2;
    line-height: 1.4;

    a {
      color: #ffffff;
    }
  }

  .card-date {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.9);
    color: #374151;
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 6px;
    z-index: 2;
    line-height: 1.4;
  }

  .card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-title {
    font-size: 1.7rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.4;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    a {
      color: #1f2937;
      &:hover {
        color: #14b8a6;
      }
    }
  }

  .card-excerpt {
    font-size: 1.35rem;
    font-family: 'Inter', sans-serif;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 16px;
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
    padding-top: 16px;
    border-top: 1px solid #f3f4f6;
  }

  .card-author {
    display: flex;
    align-items: center;
    gap: 10px;

    .author-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .author-name {
      font-size: 1.3rem;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      color: #374151;
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
    transition: gap 0.2s ease;

    &:hover {
      gap: 8px;
    }
  }

  @media only screen and (max-width: 768px) {
    .img-wrapper .img {
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
`;
