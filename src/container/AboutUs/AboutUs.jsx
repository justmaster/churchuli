
import React from 'react';

import { images, data} from '../../constants';
import './AboutUs.css';

import { useParams } from 'react-router-dom';



const AboutUs = () => {
  const { langId } = useParams();
  const AboutUsEng = data.AboutUsEng
  const AboutUsRus = data.AboutUsRus
  const AboutUsGeo = data.AboutUsGeo
  const content = langId === "eng" ? AboutUsEng : langId ==="geo" ? AboutUsGeo : AboutUsRus  


return(
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">{content[0].about}</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{content[0].aboutText}</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">{content[0].history}</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{content[0].historyText}</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
)
};

export default AboutUs;
