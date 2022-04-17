import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";
import './SpecialMenu.css';

const SpecialMenu = () => {
  const { langId } = useParams();
  const menuMainEng = data.menuMainEng
  const menuMainRus = data.menuMainRus
  const menuMainGeo = data.menuMainGeo
  const content = langId === "eng" ? menuMainEng : langId ==="geo" ? menuMainGeo : menuMainRus  

return(

  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={content[0].palette} />
      <h1 className="headtext__cormorant">{content[0].special}</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">{content[0].wine} </p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">{content[0].cocktails} </p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
    <a href="https://drive.google.com/file/d/1WnZ-zBbnLJE9tDzQroND2XHqNi6cSsXn/view?usp=sharing"type="button" className="custom__button">{content[0].button}</a>
    </div>
  </div>
)
};

export default SpecialMenu;
