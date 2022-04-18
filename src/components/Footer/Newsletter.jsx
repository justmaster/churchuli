import React from 'react';
import { toast } from 'react-toastify';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import { data } from '../../constants';
import { useParams }from "react-router-dom";

const Newsletter = () => { 
  const notify = () => {
    toast.success(<h className='app__newsletter-toast'>Done</h>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
};

  const { langId } = useParams();
  const NewsEng = data.NewsEng
  const NewsRus = data.NewsRus
  const NewsGeo = data.NewsGeo
  const content = langId === "eng" ? NewsEng : langId ==="geo" ? NewsGeo : NewsRus  




return(
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title={content[0].head}/>
      <h1 className="headtext__cormorant">{content[0].body}</h1>
      <p className="p__opensans">{content[0].subbody}</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder={content[0].email}/>
      <button onClick={notify} type="button" className="custom__button">{content[0].subscribe}</button>
    </div>
  </div>
)
};

export default Newsletter;
