import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Maqaallo waa meel lagu wadaago qoraallo ku saabsan fikir, tazkiyo,
          taariikh, iyo aqoon waxtar leh oo kobcisa fahamka, akhlaaqda, iyo
          baraaruga bulshada.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          (c) Maqaallo {new Date().getFullYear()}. Dhammaan xuquuqdu way
          xafidan tahay
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
