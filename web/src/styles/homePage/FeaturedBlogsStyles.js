import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding: 5rem 0;

  .section-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
  }

  .section-copy {
    max-width: 56rem;
  }

  .section-copy p {
    margin-top: 1.2rem;
    font-size: 1.55rem;
    line-height: 1.8;
    color: #475569;
  }

  .featured-grid-anim {
    transition-delay: 0.1s;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0;

    .section-head {
      flex-direction: column;
      align-items: flex-start;
    }

    .section-copy p {
      font-size: 1.45rem;
    }
  }
`;
