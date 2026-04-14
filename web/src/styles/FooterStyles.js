import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background-color: var(--black-2);
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 600px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--white-1);
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 2rem;

    .footer__text {
      max-width: 48rem;
      line-height: 1.8;
    }

    .footer__menuList {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem 1.6rem;

      li {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 3.2rem 0 1.8rem;

    .footer__text {
      font-size: 1.45rem;
    }

    .footer__menuList {
      margin-top: 1.4rem;
      gap: 0.8rem 1.2rem;

      li a {
        font-size: 1.45rem;
      }
    }

    .footer__socialList {
      margin-top: 1.2rem;
    }

    .copyright {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`;
