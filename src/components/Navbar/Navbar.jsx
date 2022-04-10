import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
// import { MdOutlineRestrauntMenu} from "react-icons/md"
import {MdOutlineMenu} from "react-icons/md"
import images from '../../constants/images';
import './Navbar.css';
import Ubutton from '../ukrainebutton/ubutton';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
        <img src={images.churchuli} alt="logo_churchuli"></img>
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Reviews</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>


    </ul>
    <div className="app__navbar-supportua">
      <Ubutton text={"#StandWithUkraine"} />
    </div>

    <div className='app__navbar-login'>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>

    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu style={{cursor: "pointer"}}color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen_links'>
          <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#home">Home</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#about">About</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#menu">Menu</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#awards">Reviews</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      )}

    </div>
  </nav>
);
}

export default Navbar;
