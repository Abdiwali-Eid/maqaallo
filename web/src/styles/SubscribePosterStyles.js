import styled from 'styled-components';

export const SubscribePosterStyles = styled.section`
  @keyframes posterFloat {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, -8px, 0);
    }
  }

  margin-top: 0.2rem;
  margin-bottom: 1rem;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(circle at top right, rgba(20, 184, 166, 0.16), transparent 26%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(242, 248, 247, 0.92));
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow:
    0 22px 55px rgba(15, 23, 42, 0.08),
    0 8px 18px rgba(15, 23, 42, 0.04);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 28px 62px rgba(15, 23, 42, 0.1),
      0 12px 22px rgba(15, 23, 42, 0.06);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 80% 18%,
      rgba(255, 255, 255, 0.65) 0%,
      transparent 45%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 18rem;
    height: 18rem;
    right: -4rem;
    top: -4rem;
    border-radius: 999px;
    background: rgba(20, 184, 166, 0.12);
    filter: blur(4px);
    animation: posterFloat 8s ease-in-out infinite;
    pointer-events: none;
  }

  .subscribe-inner {
    position: relative;
    z-index: 1;
    padding: 2.2rem 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1.8rem;
      padding: 2.4rem 2.8rem;
    }
  }

  .subscribe-copy {
    flex: 1;
    min-width: 0;
  }

  .subscribe-kicker {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #0f766e;
    margin-bottom: 0.4rem;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .subscribe-title {
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 800;
    color: #10231d;
    line-height: 1.08;
    margin: 0;
    font-family: 'Poppins', 'Inter', system-ui, sans-serif;
    letter-spacing: -0.03em;
  }

  .subscribe-form-wrap {
    flex-shrink: 0;
    width: 100%;

    @media (min-width: 768px) {
      max-width: 340px;
    }
  }

  .subscribe-form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0.9rem;
    border-radius: 1.8rem;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  .subscribe-row {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (min-width: 480px) {
      flex-direction: row;
      align-items: stretch;
    }
  }

  .subscribe-input {
    flex: 1;
    border: none;
    border-radius: 12px;
    padding: 1.15rem 1.3rem;
    font-size: 1.45rem;
    font-family: 'Inter', system-ui, sans-serif;
    color: #111827;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: none;
    outline: none;
    min-width: 0;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.45);
    }
  }

  .subscribe-btn {
    border: none;
    border-radius: 12px;
    padding: 1.15rem 1.6rem;
    font-size: 1.4rem;
    font-weight: 700;
    font-family: 'Inter', system-ui, sans-serif;
    color: #fff;
    background: linear-gradient(135deg, #14b8a6, #0f766e);
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 10px 20px rgba(15, 118, 110, 0.22);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 14px 24px rgba(15, 118, 110, 0.28);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .subscribe-note {
    font-size: 1.05rem;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
    font-family: 'Inter', system-ui, sans-serif;
    padding-left: 0.2rem;
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 480px) {
    border-radius: 2rem;
    margin-bottom: 0.6rem;

    &::after {
      width: 12rem;
      height: 12rem;
      right: -3rem;
      top: -3rem;
    }

    .subscribe-inner {
      padding: 1.6rem 1.4rem;
      gap: 1rem;
    }

    .subscribe-title {
      font-size: 2rem;
      line-height: 1.12;
    }

    .subscribe-form {
      padding: 0.75rem;
      border-radius: 1.4rem;
    }

    .subscribe-row {
      gap: 0.7rem;
    }

    .subscribe-input,
    .subscribe-btn {
      width: 100%;
    }

    .subscribe-input {
      padding: 1rem 1.15rem;
      font-size: 1.35rem;
    }

    .subscribe-btn {
      padding: 1rem 1.2rem;
      font-size: 1.3rem;
    }
  }
`;
