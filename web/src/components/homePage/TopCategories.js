import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import {
  MdComputer,
  MdBrush,
  MdBusinessCenter,
  MdEco,
  MdCampaign,
  MdLightbulb,
  MdSchool,
  MdSportsSoccer,
  MdFavorite,
  MdPublic,
  MdMenuBook,
  MdCategory,
} from 'react-icons/md';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import ScrollReveal from '../ScrollReveal';

const categoryIcons = {
  technology: MdComputer,
  tech: MdComputer,
  tiknoolajiyada: MdComputer,
  design: MdBrush,
  naqshad: MdBrush,
  business: MdBusinessCenter,
  ganacsi: MdBusinessCenter,
  lifestyle: MdEco,
  nolol: MdEco,
  marketing: MdCampaign,
  suuqgeyn: MdCampaign,
  innovation: MdLightbulb,
  hal_abuur: MdLightbulb,
  education: MdSchool,
  waxbarasho: MdSchool,
  'aqoon guud': MdMenuBook,
  fikir: MdFavorite,
  sports: MdSportsSoccer,
  ciyaaraha: MdSportsSoccer,
  world: MdPublic,
  adduunka: MdPublic,
};

function getCategoryIcon(title) {
  const key = title.toLowerCase().trim();
  return categoryIcons[key] || MdCategory;
}

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;

  if (!categories || categories.length === 0) return null;

  return (
    <TopCategoriesStyles>
      <ScrollReveal
        className="categories-heading"
        threshold={0.01}
        rootMargin="0px 0px 35% 0px"
      >
        <div className="categories-header">
          <h2 className="categories-title">Qaybaha Maqaallada</h2>
          <Link to="/categories" className="categories-viewall">
            View All &rarr;
          </Link>
        </div>
      </ScrollReveal>
      <ScrollReveal
        className="categories-grid-anim"
        threshold={0.01}
        rootMargin="0px 0px 35% 0px"
      >
        <div className="categories-grid">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.title);
            return (
              <Link
                key={cat.id}
                to={`/categories/${cat.slug.current}`}
                className="category-card"
              >
                <div className="category-icon">
                  <Icon />
                </div>
                <span className="category-name">{cat.title}</span>
              </Link>
            );
          })}
        </div>
      </ScrollReveal>
    </TopCategoriesStyles>
  );
}

export default TopCategories;
