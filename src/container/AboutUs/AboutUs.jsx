
import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
            Churchuli Bar & Restraunt is a place that serves hookah, hand crafted cocktails, and chef-inspired food--all with a focus on local & regional sources. 
            Here, professionally trained bartenders mix your cocktails, combined with house-made components. The cocktail menu is regularly updated with fresh & innovative creations that change with the seasons to delight and surprise your senses!
            Browse our extensive hookah flavours, while enjoying art collection made by Tbilisi's best talents.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Churchuli is an idea born by restaurant business professionals and talented artists from all over the world.
                                    Churchuli is a dream to step beyond usual bar & restaurant experience, by providing combinination of  unique culture, taste and traditional values</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
