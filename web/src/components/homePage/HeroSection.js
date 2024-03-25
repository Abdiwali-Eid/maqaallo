import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Hoyga aqoonta guud</h1>
            <ParagraphText className="hero__text">
           Website-kaan waxaad ka helaysaa maqaallo qiima badan oo ku saabsan mowduucyada kala duwan.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Arag maqaallada
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              // src="https://virtualcomputing.nl/wp-content/uploads/2020/07/image.png"
              src="../../images/hero (1).jpg"
              alt="vr guy"
              placeholder="blurred"
              // objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
