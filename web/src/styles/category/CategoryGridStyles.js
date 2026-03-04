import styled from 'styled-components';

export const CategoryGridStyles = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.6rem;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
