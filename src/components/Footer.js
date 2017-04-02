import React from 'react';
import html5 from '../img/html5.svg';
import sass from '../img/sass.svg';
import react from '../img/react.svg';
import nodejs from '../img/nodejs.svg';

export const Footer = (props) => (
    <footer className="footer">
        <h4>Build in :</h4>
        <ul>
            <li className="logo"><img src={html5} alt="html5" /></li>
            <li className="logo"><img src={sass} alt="sass" /></li>
            <li className="logo"><img src={react} alt="react" /></li>
            <li className="logo"><img src={nodejs} alt="nodejs" /></li>
        </ul>
    </footer>
)