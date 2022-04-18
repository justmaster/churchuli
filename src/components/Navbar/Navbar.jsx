import React, {useState} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineMenu} from "react-icons/md"
import images from '../../constants/images';
import './Navbar.css';
import Ubutton from '../ukrainebutton/ubutton';
import { data } from '../../constants';
import { useParams, useNavigate} from 'react-router-dom';
import { CDropdown, CDropdownMenu, CDropdownItem, CDropdownToggle} from '@coreui/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {
  const { langId } = useParams();
  const navigate = useNavigate();
  const NavbarEng = data.NavbarEng
  const NavbarRus = data.NavbarRus
  const NavbarGeo = data.NavbarGeo
  const content = langId === "eng" ? NavbarEng : langId ==="geo" ? NavbarGeo : NavbarRus  

  const [toggleMenu, setToggleMenu] = useState(false);

  const setEnglish = () => {
    navigate(`/eng`)
  }

  const setGeorgian = () => {
    navigate(`/geo`)
  }

  const setRussian = () => {
    navigate(`/rus`)
  }

  const notify = () => {
      toast.info(<a className='app__navbar-toast-phone' href="tel:+995 592 007 012">+995 592 007 012</a>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: "📞",
        theme: "dark",
        });
  };
  return(
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
        <img src={images.churchuli} alt="logo_churchuli"></img>
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans-link"><a href="#about">{content[0].about}</a></li>
      <li className="p__opensans-link"><a href="#home">{content[0].home}</a></li>
      <li className="p__opensans-link"><a href="#menu">{content[0].menu}</a></li>
      <li className="p__opensans-link"><a href="#awards">{content[0].review}</a></li>
      <li className="p__opensans-link"><a href="#contact">{content[0].contact}</a></li>
    </ul>


    <div className="app__navbar-supportua">
      <Ubutton text={"#StandWithUkraine"} />
    </div>
  <div className='app__navbar-login'>
      <CDropdown direction="dropdown" className="app__navbar-langbar">
              <CDropdownToggle  shape="rounded-0" color="transparent" >
                <span>{langId}</span>
              </CDropdownToggle>
                <CDropdownMenu style={{backgroundColor: 'black', color: 'white', marginTop: "60%"}}>
                  <CDropdownItem onClick={()=> setEnglish()} href="#">ENG</CDropdownItem>
                  <CDropdownItem onClick={()=> setGeorgian()} href="#">GEO</CDropdownItem>
                  <CDropdownItem onClick={()=> setRussian()} href="#">RUS</CDropdownItem>
                </CDropdownMenu>
      </CDropdown>
      <a className='app__navbar-login-book' href={null} onClick={notify}>{content[0].table}</a>
    </div>


    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu style={{cursor: "pointer"}}color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen_links'>
          <li onClick={() => setToggleMenu(false)} className="p__opensans-link"><a href="#home">{content[0].home}</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans-link"><a href="#about">{content[0].about}</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans-link"><a href="#menu">{content[0].menu}</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans-link"><a href="#awards">{content[0].review}</a></li>
          <li onClick={() => setToggleMenu(false)} className="p__opensans-link"><a href="#contact">{content[0].contact}</a></li>
        </ul>
      </div>
      )}

    </div>
  </nav>
);
}

export default Navbar;
