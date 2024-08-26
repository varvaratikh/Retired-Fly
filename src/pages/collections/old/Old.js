import React from 'react';
import './Old.sass';

import eye from "../../../../public/images/old/eye.png";
import babyskka1 from "../../../../public/images/old/women/image 24.png";
import babyskka2 from "../../../../public/images/old/women/image 22.png";
import babyskka3 from "../../../../public/images/old/women/image 37.png";
import babyskka4 from "../../../../public/images/old/women/image 39.png";
import babyskka5 from "../../../../public/images/old/women/image 42.png";
import babyskka6 from "../../../../public/images/old/women/image 42-1.png";



const Old = () => {
    return (
        <div className="old-container">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className="old-title">"Old doesn't mean out of style."</h1>

            <img src={eye} alt='eye-old' className="eye-back-old"/>

            <div className="images-row">
                <img src={babyskka6} alt="Image 1" className="babyskka1" />
                <img src={babyskka2} alt="Image 2" className="babyskka2" />
                <img src={babyskka3} alt="Image 3" className="babyskka3" />
                <img src={babyskka4} alt="Image 4" className="babyskka4" />
                <img src={babyskka5} alt="Image 5" className="babyskka5" />
                <img src={babyskka1} alt="Image 6" className="babyskka6" />
            </div>

            <div className="text-row">
                <p className="old-text">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    If you don't want to admit your age numbers, then this collection is for you. Who said that style has an age? If you want to be a hip-hop goddess, then take all the positions!!                </p>
            </div>
        </div>
    );
};

export default Old;
