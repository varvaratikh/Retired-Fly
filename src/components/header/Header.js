import React from 'react';
import './Header.sass';
import photo from "../../../public/images/header/some.png";
import apple from "../../../public/images/header/apple.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={apple} alt="Apple Logo" className="header-logo" />
            </div>
            <nav className="header-nav">
                {/*<a className="header-link">Finder</a>*/}
                <a className="finder">Finder</a>
                <a href="#new-collection" className="header-link">New collection</a>
                <a href="#catalog" className="header-link">Catalog</a>
                <a href="#game" className="header-link">Game</a>
            </nav>
            <div className="header-right">
                <img src={photo} alt="User Icon" className="header-photo" />
            </div>
        </header>
    );
};

export default Header;
