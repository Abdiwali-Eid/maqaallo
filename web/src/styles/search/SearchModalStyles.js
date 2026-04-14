import styled from 'styled-components';

export const SearchModalStyles = styled.div`
  position: fixed;
  z-index: 2000;
  min-height: 100vh;
  width: 100%;
  inset: 0;

  .modal__backdrop {
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.58);
    backdrop-filter: blur(10px);
  }

  .modal__container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 88px;
    max-height: calc(100% - 124px);
    width: min(92%, 58rem);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.96),
      rgba(247, 250, 252, 0.94)
    );
    padding: 2rem;
    border-radius: 2.4rem;
    border: 1px solid rgba(255, 255, 255, 0.58);
    box-shadow: 0 28px 70px rgba(15, 23, 42, 0.18);
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .modal__head {
      padding-right: 4.8rem;
      margin-bottom: 1.4rem;
    }

    .modal__eyebrow {
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #0f766e;
      margin-bottom: 0.5rem;
    }

    .modal__title {
      font-size: 2.3rem;
      line-height: 1.12;
      color: #10231d;
      font-family: 'Poppins', sans-serif;
      letter-spacing: -0.03em;
    }

    .close {
      position: absolute;
      top: 1.4rem;
      right: 1.4rem;
      border-color: rgba(148, 163, 184, 0.2);
      background: rgba(255, 255, 255, 0.82);
      color: #334155;
      backdrop-filter: blur(10px);

      &:hover {
        background-color: #10231d;
        color: #ffffff;
      }
    }

    .search__result {
      margin-top: 1.6rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      overflow-y: auto;
      padding-right: 0.2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .modal__container {
      top: 7rem;
      max-height: calc(100% - 8.8rem);
      width: calc(100% - 2rem);
      padding: 1.6rem;
      border-radius: 2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .modal__container {
      top: 1rem;
      max-height: calc(100% - 2rem);
      width: calc(100% - 1.2rem);
      padding: 1.4rem;
      border-radius: 1.6rem;
    }

    .modal__container .modal__head {
      padding-right: 4rem;
      margin-bottom: 1rem;
    }

    .modal__container .modal__title {
      font-size: 1.85rem;
      line-height: 1.2;
    }

    .modal__container .modal__eyebrow {
      font-size: 1rem;
    }

    .modal__container .close {
      top: 1rem;
      right: 1rem;
    }

    .modal__container .search__result {
      margin-top: 1.2rem;
      gap: 0.8rem;
    }
  }
`;
