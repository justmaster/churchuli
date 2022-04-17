import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";
import './ArtGallery.css';

const ArtGallery = () => {
  const scrollRef = React.useRef(null);

  const { langId } = useParams();
  const ArtGalleryEng = data.ArtGalleryEng
  const ArtGalleryRus = data.ArtGalleryRus
  const ArtGalleryGeo = data.ArtGalleryGeo
  const content = langId === "eng" ? ArtGalleryEng : langId ==="geo" ? ArtGalleryGeo : ArtGalleryRus  



  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">{content[0].gallery}</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>{content[0].visit}</p>
        <a href="https://www.instagram.com/churchuli_official/"type="button" className="custom__button">{content[0].button}</a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.Artgallery01, images.Artgallery02, images.Artgallery03, images.Artgallery04,images.Artgallery05,images.Artgallery06,images.Artgallery07].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <a className="gallery__image-icon" href="https://www.instagram.com/churchuli_official/">
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default ArtGallery;
