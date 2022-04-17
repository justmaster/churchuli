import React from 'react';
import {useRef, useEffect} from "react";
import {TweenMax, Expo} from 'gsap'

import './Curtain.css'


import { images } from '../../constants';

function Curtain()  {
    let overlay = useRef(null);
    let overlay_h1 = useRef(null);
    
    
    useEffect(() => {

        TweenMax.to(
            overlay,
            2,
            {
                delay: 1,
                opacity: 1, 
                top: "-120%", 
                ease: Expo.easeInOut
            }
        )
        TweenMax.to(
            overlay_h1,
            3.2,
            {
                opacity: 0, 
                y: -70, 
                ease: Expo.easeInOut
            }
        )
    })
    

return (
    <div ref={el => {overlay = el}} className="overlay">
        <div ref={el => {overlay_h1 = el}} className='app__curtain-logo'>
            <img src={images.churchuli}></img>
        </div>
    </div>
)};

export default Curtain;
