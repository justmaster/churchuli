import React from 'react';
import './ubutton.css'

function Ubutton({text}) {
    return (
        <div className="buttonDoubleGradient">
            <a  href="https://voices.org.ua/en/donat/">{text}</a>
        </div>
    );
}

export default Ubutton;