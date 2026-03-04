import styled from 'styled-components';

export const AuthorGridStyles = styled.div`
  display: grid;
  margin-top: 2.4rem;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

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
