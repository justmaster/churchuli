import React, { useEffect } from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";
import './Header.css'
import Ubutton from '../../components/ukrainebutton/ubutton';



const Header = () => {
  const { langId } = useParams();
  const IntroEng = data.IntroEng
  const IntroRus = data.IntroRus
  const IntroGeo = data.IntroGeo
  const content = langId === "eng" ? IntroEng : langId ==="geo" ? IntroGeo : IntroRus  


return(
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <div className='app__header-supportua'>
        <Ubutton text={"#StandWithUkraine"}/>
      </div>
      <SubHeading title={content[0].subheading}/>
      <h1 className="app__header-h1">{content[0].header}</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>{content[0].body}</p>
      <a href="https://drive.google.com/file/d/1WnZ-zBbnLJE9tDzQroND2XHqNi6cSsXn/view?usp=sharing"type="button" className="custom__button">{content[0].menu}</a>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.main} alt="header img" />
    </div>
  </div>
);
}
export default Header;
