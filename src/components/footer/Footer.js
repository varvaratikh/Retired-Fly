import React from 'react';
import './Footer.sass';

import footer from '../../../public/images/footer.png'


const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer-img" src={footer} alt="footer"/>
        </footer>
    );
};

export default Footer;
