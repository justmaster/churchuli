import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Tbilisi Vake. Paliashvili Street 28</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 15:00 am - 01:00 am</p>
        <p className="p__opensans">Sat - Sun: 14:00 am - 01:00 am</p>
      </div>
      <a href="https://www.google.com/maps/place/Churchuli+bar/@41.7078028,44.7708707,17z/data=!3m1!4b1!4m5!3m4!1s0x40440ddbeacf3cb3:0x54e3d23dc17179ce!8m2!3d41.7077988!4d44.7730594"type="button" className="custom__button">Visit Us</a>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
