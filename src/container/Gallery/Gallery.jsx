import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import { useParams }from "react-router-dom";
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const { langId } = useParams();
  const GalleryEng = data.GalleryEng
  const GalleryRus = data.GalleryRus
  const GalleryGeo = data.GalleryGeo
  const content = langId === "eng" ? GalleryEng : langId ==="geo" ? GalleryGeo : GalleryRus  



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
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04,images.gallery05,images.gallery06,images.gallery07,images.gallery08,images.gallery09,images.gallery10,].map((image, index) => (
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

export default Gallery;
