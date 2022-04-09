import React from 'react';
import {useRef, useEffect} from "react";
import {TweenMax, Expo} from 'gsap'

import './Curtain.css'


import { images } from '../../constants';

function Curtain()  {
    let overlay = useRef(null);
    let overlay_h1 = useRef(null);
    let overlay_span = useRef(null);
    
    
    useEffect(() => {

        TweenMax.to(
            overlay,
            2,
            {
                delay: 1,
                opacity: 1, 
                top: "-110%", 
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
        TweenMax.to(
            overlay_span,
            2,
            {
                delay: .3,
                opacity: 0, 
                y: -60, 
                ease: Expo.easeInOut
            }
        )
    })
    

return (
    <div ref={el => {overlay = el}} className="overlay">
        <div ref={el => {overlay_h1 = el}} className='app__curtain-logo'>
            <img src={images.churchuli}></img>
        </div>
        <span ref={el => {overlay_span = el}} className="curtainspan">Детский Садик</span>
    </div>
)};

export default Curtain;
