import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);

  svg {
    font-size: 2.5rem;

    path {
      stroke: white;
    }
  }
`;
