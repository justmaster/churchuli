import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";
import './Footer.css';

const Footer = () => {
  
  const { langId } = useParams();
  const FooterEng = data.FooterEng
  const FooterRus = data.FooterRus
  const FooterGeo = data.FooterGeo
  const content = langId === "eng" ? FooterEng : langId ==="geo" ? FooterGeo : FooterRus  

  
return (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">{content[0].contact}</h1>
        <p className="p__opensans">{content[0].address}</p>
        <p className="p__opensans">{content[0].number}</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.churchuli} alt="footer_logo" />
        <p className="p__opensans">{content[0].quote}</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/profile.php?id=100078234852072'> <FiFacebook /></a>
          <a href='https://www.instagram.com/churchuli_official/'><FiTwitter /></a>
          <a href='https://www.instagram.com/churchuli_official/'><FiInstagram /></a>

         
          
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">{content[0].title}</h1>
        <p className="p__opensans">{content[0].monday}</p>
        <p className="p__opensans">15:00 am - 01:00 am</p>
        <p className="p__opensans">{content[0].saturday}</p>
        <p className="p__opensans">14:00 am - 01:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{content[0].rights}</p>
    </div>

  </div>
)};

export default Footer;
