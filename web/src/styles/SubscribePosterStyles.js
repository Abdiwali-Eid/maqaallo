import styled from 'styled-components';

export const SubscribePosterStyles = styled.section`
  margin-top: 3.2rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    135deg,
    #1e40af 0%,
    #2563eb 42%,
    #0d9488 100%
  );
  box-shadow:
    0 10px 40px rgba(37, 99, 235, 0.25),
    0 4px 12px rgba(0, 0, 0, 0.08);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 85% 20%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 45%
    );
    pointer-events: none;
  }

  .subscribe-inner {
    position: relative;
    z-index: 1;
    padding: 2.8rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2.4rem;
      padding: 3.2rem 3.6rem;
    }
  }

  .subscribe-copy {
    flex: 1;
    min-width: 0;
  }

  .subscribe-kicker {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 0.6rem;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .subscribe-title {
    font-size: clamp(2rem, 4vw, 2.6rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
    margin: 0 0 0.8rem;
    font-family: 'Poppins', 'Inter', system-ui, sans-serif;
  }

  .subscribe-desc {
    font-size: 1.5rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.92);
    margin: 0;
    max-width: 36ch;
    font-family: 'Inter', system-ui, sans-serif;
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
    gap: 0.8rem;
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
    padding: 1.2rem 1.4rem;
    font-size: 1.5rem;
    font-family: 'Inter', system-ui, sans-serif;
    color: #111827;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
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
    padding: 1.2rem 1.8rem;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Inter', system-ui, sans-serif;
    color: #fff;
    background: linear-gradient(180deg, #f97316 0%, #ea580c 100%);
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 4px 14px rgba(234, 88, 12, 0.45);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(234, 88, 12, 0.5);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .subscribe-note {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
    line-height: 1.4;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
`;
