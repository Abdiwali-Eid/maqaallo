import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  .author-header {
    position: relative;
    text-align: center;
    padding: 4rem 2rem 2.4rem;
    border-radius: 3rem;
    overflow: hidden;
    background:
      radial-gradient(circle at top right, rgba(255, 255, 255, 0.28), transparent 24%),
      linear-gradient(135deg, rgba(76, 129, 184, 0.18), rgba(15, 118, 110, 0.12));
    border: 1px solid rgba(148, 163, 184, 0.18);
    box-shadow: 0 24px 50px rgba(15, 23, 42, 0.08);
    backdrop-filter: blur(10px);
  }

  .author-header {
    &::before {
      content: '';
      position: absolute;
      width: 18rem;
      height: 18rem;
      top: -5rem;
      right: -4rem;
      border-radius: 999px;
      background: rgba(76, 129, 184, 0.16);
      filter: blur(4px);
      pointer-events: none;
    }
  }

  .footer__socialList {
    margin-top: 1.8rem;
    padding-bottom: 0.4rem;

    li {
      display: inline-block;
      margin: 0 0.55rem;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        border-radius: 999px;
        color: #334155;
        background: rgba(255, 255, 255, 0.62);
        border: 1px solid rgba(255, 255, 255, 0.55);
        transition: transform 0.25s ease, background 0.25s ease,
          color 0.25s ease;
      }

      &:hover {
        a {
          color: #ffffff;
          background: linear-gradient(135deg, #14b8a6, #0f766e);
          transform: translateY(-2px);
        }
      }
    }
  }

  .profileImage {
    height: 15rem;
    width: 15rem;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 2rem;
    margin-top: 0;
    overflow: hidden;
    border: 5px solid rgba(255, 255, 255, 0.72);
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
  }

  .name {
    margin-bottom: 1rem;
    color: #10231d;
    font-size: clamp(3.2rem, 4vw, 4.4rem);
    letter-spacing: -0.03em;
  }

  .bio {
    margin: 0 auto;
    max-width: 58rem;

    p {
      font-size: 1.8rem;
      line-height: 1.8;
      color: #475569;
    }
  }

  .hr {
    margin: 3rem 0;
    color: rgba(100, 116, 139, 0.45);
  }

  @media only screen and (max-width: 768px) {
    .author-header {
      padding: 3rem 1.6rem 2rem;
      border-radius: 2.2rem;
    }

    .profileImage {
      height: 12rem;
      width: 12rem;
      margin-bottom: 1.6rem;
    }

    .bio p {
      font-size: 1.6rem;
      line-height: 1.7;
    }
  }

  @media only screen and (max-width: 480px) {
    .author-header {
      padding: 2.2rem 1.2rem 1.6rem;
      border-radius: 1.8rem;
    }

    .author-header::before {
      width: 12rem;
      height: 12rem;
      top: -3rem;
      right: -3rem;
    }

    .profileImage {
      height: 9.6rem;
      width: 9.6rem;
      margin-bottom: 1.2rem;
      border-width: 4px;
    }

    .name {
      margin-bottom: 0.8rem;
      font-size: 2.5rem;
      line-height: 1.1;
    }

    .bio p {
      font-size: 1.45rem;
      line-height: 1.65;
    }

    .footer__socialList {
      margin-top: 1.4rem;

      li {
        margin: 0 0.35rem;

        a {
          width: 3.4rem;
          height: 3.4rem;
        }
      }
    }

    .hr {
      margin: 2.2rem 0;
    }
  }
`;
