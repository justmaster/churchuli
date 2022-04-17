import React from 'react';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const { langId } = useParams();
  const LaurelsEng = data.LaurelsEng
  const LaurelsRus = data.LaurelsRus
  const LaurelsGeo = data.LaurelsGeo
  const content = langId === "eng" ? LaurelsEng : langId ==="geo" ? LaurelsGeo : LaurelsRus  

  
return(
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title={content[0].awards} />
      <h1 className="headtext__cormorant">{content[0].reviews}</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_laurels">
      <img src={images.church} alt="laurels_img" />
    </div>
  </div>
)};

export default Laurels;
