import styled from 'styled-components';

export const SingleCategoryStyles = styled.div`
  position: relative;

  .pageHeader {
    position: relative;
    padding: 4rem 0 2.6rem;
    margin-bottom: 1.8rem;
    z-index: 1;
    overflow: hidden;

    &:before,
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    &:before {
      border-radius: 3rem;
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.3), transparent 24%),
        linear-gradient(135deg, rgba(76, 129, 184, 0.16), rgba(15, 118, 110, 0.12));
      border: 1px solid rgba(148, 163, 184, 0.2);
      box-shadow: 0 24px 50px rgba(15, 23, 42, 0.08);
      backdrop-filter: blur(10px);
    }

    &:after {
      inset: 1.4rem auto auto -3rem;
      width: 16rem;
      height: 16rem;
      border-radius: 999px;
      background: rgba(76, 129, 184, 0.12);
      filter: blur(6px);
    }

    .coverImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  .pageHeader > div {
    max-width: 78rem;
    margin: 0;
    padding: 0 3.2rem;
  }

  @media only screen and (max-width: 768px) {
    .pageHeader {
      padding: 3rem 0 2rem;
      margin-bottom: 1.2rem;

      &:before {
        border-radius: 2.2rem;
      }
    }

    .pageHeader > div {
      padding: 0 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .pageHeader {
      &:after {
        display: none;
      }
    }
    .coverImage {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    .pageHeader {
      padding: 2.2rem 0 1.6rem;
      margin-bottom: 1rem;

      &:before {
        border-radius: 1.8rem;
      }
    }

    .pageHeader > div {
      padding: 0 1.3rem;
    }
  }
`;
