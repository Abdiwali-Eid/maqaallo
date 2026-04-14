import styled from 'styled-components';

export default styled.div`
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(15, 118, 110, 0.18), transparent 28%),
    radial-gradient(circle at top right, rgba(245, 158, 11, 0.12), transparent 22%),
    linear-gradient(180deg, #f7fbfa 0%, #eef4f1 42%, #f8fafc 100%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(12px);
    pointer-events: none;
  }

  &::before {
    width: 28rem;
    height: 28rem;
    top: 16rem;
    right: -10rem;
    background: rgba(20, 184, 166, 0.12);
  }

  &::after {
    width: 18rem;
    height: 18rem;
    top: 68rem;
    left: -8rem;
    background: rgba(249, 115, 22, 0.08);
  }

  .home-sections {
    padding-bottom: 4rem;
  }

  .scroll-reveal {
    opacity: 0;
    transform: translateY(2.6rem);
    transition: opacity 0.75s ease, transform 0.75s ease;
    will-change: opacity, transform;
  }

  .scroll-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
