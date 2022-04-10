import React from 'react';
import './ubutton.css'

function Ubutton({text}) {
    return (
        <div class="buttonDoubleGradient">
            <a href="https://www.unicef.org/emergencies/war-ukraine-pose-immediate-threat-children">{text}</a>
        </div>
    );
}

export default Ubutton;