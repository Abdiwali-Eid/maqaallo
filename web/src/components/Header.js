import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import clsx from 'clsx';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import { menu } from '../constants/menu';
import { SearchModalContext } from '../contexts/searchModalContext';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { openSearchModal } = useContext(SearchModalContext);
  const location = useLocation();

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isNavOpen]);

  const handleSearchModalOpen = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
    openSearchModal();
  };

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const handleKeyActivate = (event, callback) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div
                  className="searchIcon__wrapper"
                  onClick={handleSearchModalOpen}
                  onKeyDown={(event) =>
                    handleKeyActivate(event, handleSearchModalOpen)
                  }
                  tabIndex={0}
                  role="button"
                  aria-label="Fur raadinta"
                >
                  <MdSearch />
                </div>
              </div>
              <ActionButton
                className="mobileMenuBtn"
                onKeyDown={(event) =>
                  handleKeyActivate(event, () => setIsNavOpen(true))
                }
                onClick={() => setIsNavOpen(true)}
                aria-label="Fur menu-ga"
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                aria-label="Close Menu"
                role="button"
                tabIndex={0}
                className="mobileNavBg"
                onKeyDown={(event) =>
                  handleKeyActivate(event, () => setIsNavOpen(false))
                }
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={(event) =>
                  handleKeyActivate(event, () => setIsNavOpen(false))
                }
                aria-label="Xir menu-ga"
              >
                <MdClose />
              </ActionButton>
              <div className="mobile-nav-head">
                <span className="mobile-nav-label">Maqaallo</span>
                <p className="mobile-nav-text">
                  Sahami qoraallo ku saabsan fikir, tazkiyo, iyo taariikh.
                </p>
              </div>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={handleNavItemClick}
                      className={clsx(
                        location.pathname === item.path && 'active'
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="searchIcon">
                  <div
                    className="searchIcon__wrapper"
                    onClick={handleSearchModalOpen}
                    onKeyDown={(event) =>
                      handleKeyActivate(event, handleSearchModalOpen)
                    }
                    tabIndex={0}
                    role="button"
                    aria-label="Fur raadinta"
                  >
                    <MdSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
