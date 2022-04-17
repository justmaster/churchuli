import React from 'react';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";
import './Chef.css';

const Chef = () => {
  const { langId } = useParams();
  const ChefEng = data.ChefEng
  const ChefRus = data.ChefRus
  const ChefGeo = data.ChefGeo
  const content = langId === "eng" ? ChefEng : langId ==="geo" ? ChefGeo : ChefRus  


return (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={content[0].word} />
      <h1 className="headtext__cormorant">{content[0].believe} </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">{content[0].quote1}</p>
        </div>
        <p className="p__opensans"> {content[0].quote2}</p>
      </div>

      <div className="app__chef-sign">
        <p>{content[0].name}</p>
        <p className="p__opensans">{content[0].status}</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
)
};

export default Chef;
