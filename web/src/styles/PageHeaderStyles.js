import styled from 'styled-components';

export const PageHeaderStyles = styled.div`
  margin: 0;
  max-width: 72rem;

  h2 {
    color: #10231d;
    padding-left: 0;
    margin-bottom: 1rem;
    font-size: clamp(3.2rem, 5vw, 5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  p {
    color: #5b6778;
    padding-left: 0;
    font-size: 1.8rem;
    line-height: 1.8;
    font-family: 'Inter', sans-serif;
    max-width: 60rem;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 2.8rem;
      line-height: 1.12;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.7;
    }
  }

  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.45rem;
    }
  }
`;
