import styled from 'styled-components';

export const BlogGridStyles = styled.div`
  margin-top: 3.5rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
