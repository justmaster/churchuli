import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">Discover Best Hookah</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Enojoy delisious hookah with different flavours, delivered by the professionals of industry</p>
      <a href="https://drive.google.com/file/d/1WnZ-zBbnLJE9tDzQroND2XHqNi6cSsXn/view?usp=sharing"type="button" className="custom__button">Explore Menu</a>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.main} alt="header img" />
    </div>
  </div>
);

export default Header;
