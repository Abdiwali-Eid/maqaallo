import React from 'react';
import { Link } from 'gatsby';
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
import MyPortableText from '../MyPortableText';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';

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
  salaadda: MdMenuBook,
  dahaaradda: MdPublic,
  sakadda: MdFavorite,
  soonka: MdEco,
};

function getCategoryIcon(title) {
  const key = title.toLowerCase().trim();
  return categoryIcons[key] || MdCategory;
}

function CategoryItem({ title, description, slug }) {
  const Icon = getCategoryIcon(title);

  return (
    <CategoryItemStyles>
      <div className="cat-top">
        <div className="cat-icon">
          <Icon />
        </div>
        <h3 className="cat-title">{title}</h3>
      </div>
      {description && (
        <div className="cat-description">
          <MyPortableText value={description} />
        </div>
      )}
      <Link to={`/categories/${slug.current}`} className="cat-link">
        Explore Category &rarr;
      </Link>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
