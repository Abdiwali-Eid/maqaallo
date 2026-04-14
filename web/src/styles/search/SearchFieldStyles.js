import styled from 'styled-components';

export const SearchFieldStyles = styled.label`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    font-size: 1.7rem;
    padding: 1.4rem 4.4rem 1.4rem 1.4rem;
    border-radius: 1.6rem;
    color: var(--darkBlue);
    font-family: Poppins;
    border: 1px solid rgba(203, 213, 225, 0.95);
    outline: none;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);

    &:focus {
      border-color: rgba(20, 184, 166, 0.48);
      box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.12);
    }

    &::placeholder {
      color: #8c98ab;
    }
  }

  .searchIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #4c81b8;
  }

  @media only screen and (max-width: 768px) {
    input {
      font-size: 1.6rem;
      padding: 1.2rem 4rem 1.2rem 1.2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    input {
      font-size: 1.45rem;
      border-radius: 1.3rem;
      padding: 1.05rem 3.7rem 1.05rem 1.05rem;
    }

    .searchIcon {
      right: 14px;
      width: 17px;
      height: 17px;
    }
  }
`;
