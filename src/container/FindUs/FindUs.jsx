import React from 'react';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";

const FindUs = () => {
  const { langId } = useParams();
  const ContactEng = data.ContactEng
  const ContactRus = data.ContactRus
  const ContactGeo = data.ContactGeo
  const content = langId === "eng" ? ContactEng : langId ==="geo" ? ContactGeo : ContactRus  

return(
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title={content[0].contact}/>
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>{content[0].find}</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">{content[0].street}</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>{content[0].hours}</p>
        <p className="p__opensans">{content[0].Monfr}</p>
        <p className="p__opensans">{content[0].StSn}</p>
      </div>
      <a href="https://www.google.com/maps/place/Churchuli+bar/@41.7078028,44.7708707,17z/data=!3m1!4b1!4m5!3m4!1s0x40440ddbeacf3cb3:0x54e3d23dc17179ce!8m2!3d41.7077988!4d44.7730594"type="button" className="custom__button">Visit Us</a>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
)
};
export default FindUs;
