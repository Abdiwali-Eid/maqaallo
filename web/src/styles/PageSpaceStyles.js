import styled from 'styled-components';

export const PageSpaceStyles = styled.div`
  padding-top: ${(props) => props.top || 100}px;
  padding-bottom: ${(props) => props.bottom || 100}px;

  @media only screen and (max-width: 768px) {
    padding-top: ${(props) => Math.max((props.top || 100) - 16, 56)}px;
    padding-bottom: ${(props) => Math.max((props.bottom || 100) - 20, 56)}px;
  }

  @media only screen and (max-width: 480px) {
    padding-top: ${(props) => Math.max((props.top || 100) - 24, 48)}px;
    padding-bottom: ${(props) => Math.max((props.bottom || 100) - 28, 48)}px;
  }
`;
