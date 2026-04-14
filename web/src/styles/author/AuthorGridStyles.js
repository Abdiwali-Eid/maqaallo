import styled from 'styled-components';

export const AuthorGridStyles = styled.div`
  @keyframes homeAuthorReveal {
    from {
      opacity: 0;
      transform: translateY(2.4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  display: grid;
  margin-top: 1.8rem;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  .scroll-reveal & > * {
    opacity: 0;
    transform: translateY(2.4rem);
  }

  .scroll-reveal.is-visible & > *:nth-child(1) {
    animation: homeAuthorReveal 0.65s ease forwards;
    animation-delay: 0.08s;
  }

  .scroll-reveal.is-visible & > *:nth-child(2) {
    animation: homeAuthorReveal 0.65s ease forwards;
    animation-delay: 0.16s;
  }

  .scroll-reveal.is-visible & > *:nth-child(3) {
    animation: homeAuthorReveal 0.65s ease forwards;
    animation-delay: 0.24s;
  }

  .scroll-reveal.is-visible & > *:nth-child(4) {
    animation: homeAuthorReveal 0.65s ease forwards;
    animation-delay: 0.32s;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
