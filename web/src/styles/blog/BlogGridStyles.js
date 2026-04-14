import styled from 'styled-components';

export const BlogGridStyles = styled.div`
  @keyframes homeBlogReveal {
    from {
      opacity: 0;
      transform: translateY(2.4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  margin-top: 3.5rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);

  .scroll-reveal & > * {
    opacity: 0;
    transform: translateY(2.4rem);
  }

  .scroll-reveal.is-visible & > *:nth-child(1) {
    animation: homeBlogReveal 0.65s ease forwards;
    animation-delay: 0.08s;
  }

  .scroll-reveal.is-visible & > *:nth-child(2) {
    animation: homeBlogReveal 0.65s ease forwards;
    animation-delay: 0.16s;
  }

  .scroll-reveal.is-visible & > *:nth-child(3) {
    animation: homeBlogReveal 0.65s ease forwards;
    animation-delay: 0.24s;
  }

  .scroll-reveal.is-visible & > *:nth-child(4) {
    animation: homeBlogReveal 0.65s ease forwards;
    animation-delay: 0.32s;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
