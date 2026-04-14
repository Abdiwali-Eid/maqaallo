import styled from 'styled-components';

export default styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.8rem 0;

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .nav__wrapper {
    display: flex;
    align-items: center;
    padding: 0.9rem 1rem 0.9rem 1.6rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.52);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
    backdrop-filter: blur(16px);

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;

      li {
        &:hover {
          a {
            color: #10231d;
            background: rgba(255, 255, 255, 0.72);
          }
        }

        a {
          color: #7c7aa6;
          display: inline-block;
          text-decoration: none;
          font-size: 1.55rem;
          font-weight: 600;
          padding: 1rem 1.4rem;
          border-radius: 999px;
          transition: color 0.25s ease, background 0.25s ease,
            transform 0.25s ease;
        }

        a.active {
          color: #10231d;
          background: rgba(255, 255, 255, 0.86);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
        }
      }
    }
  }

  .searchIcon {
    cursor: pointer;
    font-size: 2.3rem;

    .searchIcon__wrapper {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #4c81b8, #3f6d9c);
      color: #ffffff;
      box-shadow: 0 14px 28px rgba(76, 129, 184, 0.25);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .searchIcon__wrapper:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 30px rgba(76, 129, 184, 0.3);
    }
  }

  .mobileMenuCloseBtn,
  .mobileNavBg,
  .mobile-nav-head,
  .mobileIcon,
  .mobileMenuBtn {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 1.2rem 0;

    .header__container {
      gap: 1rem;
    }

    .mobileMenuCloseBtn,
    .mobileNavBg,
    .mobile-nav-head,
    .mobileIcon,
    .mobileMenuBtn {
      display: initial;
    }
    .nav__wrapper {
      padding: 0;
      background: transparent;
      border: none;
      box-shadow: none;
      backdrop-filter: none;

      nav {
        z-index: 1002;
        position: fixed;
        top: 0;
        right: 0;
        width: min(88vw, 34rem);
        transform: translateX(100%);
        background: linear-gradient(180deg, rgba(250, 252, 255, 0.98), rgba(240, 247, 252, 0.98));
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        transition: 0.3s ease transform;
        box-shadow: -24px 0 60px rgba(15, 23, 42, 0.12);
        padding: 8.4rem 2rem 2rem;

        .mobile-nav-head {
          display: block;
          width: 100%;
          margin-bottom: 2rem;
          padding: 1.6rem;
          border-radius: 1.8rem;
          background: linear-gradient(
            135deg,
            rgba(20, 184, 166, 0.12),
            rgba(76, 129, 184, 0.12)
          );
          border: 1px solid rgba(148, 163, 184, 0.18);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
        }

        .mobile-nav-label {
          display: block;
          font-size: 1.9rem;
          font-weight: 800;
          color: #10231d;
          margin-bottom: 0.5rem;
          font-family: 'Poppins', sans-serif;
        }

        .mobile-nav-text {
          font-size: 1.3rem;
          line-height: 1.65;
          color: #5b6778;
        }

        ul {
          width: 100%;
          margin: 0;
          flex-direction: column;
          align-items: stretch;

          li {
            display: block;
            margin: 0.5rem 0;

            &:hover {
              a {
                color: #10231d;
              }
            }

            a {
              width: 100%;
              padding: 1.35rem 1.4rem;
              border-radius: 1.4rem;
              color: #4b5563;
              font-size: 1.7rem;
              background: rgba(255, 255, 255, 0.72);
              border: 1px solid rgba(226, 232, 240, 0.9);
              box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
            }

            a.active {
              color: #10231d;
              background: linear-gradient(
                135deg,
                rgba(20, 184, 166, 0.14),
                rgba(255, 255, 255, 0.95)
              );
              border-color: rgba(20, 184, 166, 0.24);
              box-shadow: 0 14px 26px rgba(20, 184, 166, 0.08);
            }

            &.searchIcon {
              display: none;
            }
          }
        }

        .mobileMenuCloseBtn {
          color: #ef4444;
          position: absolute;
          top: 1.6rem;
          right: 1.6rem;
          border-color: rgba(148, 163, 184, 0.2);
          background: rgba(255, 255, 255, 0.82);
          color: #334155;
          backdrop-filter: blur(12px);

          &:hover {
            color: #ffffff;
            background: #10231d;
          }
        }
      }
      &.open {
        nav {
          transform: translateX(0);
        }
      }
      .mobileNavBg {
        z-index: 1001;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.6s linear 0s;
        background: rgba(15, 23, 42, 0.46);
        backdrop-filter: blur(5px);
      }
    }

    .mobileIcon {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }

    .mobileMenuBtn {
      border-color: rgba(76, 129, 184, 0.3);
      background: rgba(255, 255, 255, 0.58);
      color: #3f6d9c;
      backdrop-filter: blur(12px);

      svg {
        font-size: 2.5rem;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 1rem 0;

    .mobileIcon {
      gap: 0.6rem;
    }

    .searchIcon {
      font-size: 2rem;

      .searchIcon__wrapper {
        width: 4.2rem;
        height: 4.2rem;
        border-radius: 1.2rem;
      }
    }

    .mobileMenuBtn {
      svg {
        font-size: 2.2rem;
      }
    }

    .nav__wrapper nav {
      padding: 7.8rem 1.4rem 1.6rem;

      .mobile-nav-head {
        padding: 1.3rem;
        margin-bottom: 1.4rem;
        border-radius: 1.5rem;
      }

      .mobile-nav-label {
        font-size: 1.7rem;
      }

      .mobile-nav-text {
        font-size: 1.2rem;
      }

      ul li a {
        font-size: 1.55rem;
        padding: 1.15rem 1.15rem;
        border-radius: 1.2rem;
      }
    }
  }
`;
