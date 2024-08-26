import React from 'react';
import './AgeNumber.sass';
import eye from "../../../../public/images/age_number/eye.png";
import babyska1 from "../../../../public/images/age_number/women/image 18.png";
import babyska2 from "../../../../public/images/age_number/women/image 21.png";
import babyska3 from "../../../../public/images/age_number/women/image 16.png";



const AgeNumber = () => {
    return (
        <div className="age-container">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className="age-title">"Age is just a number."</h1>

            <img src={eye} alt='eye-old' className="eye-back-age"/>

            <div className="images-row">
                <img src={babyska1} alt="Image 6" className="babyska1" />
                <img src={babyska2} alt="Image 2" className="babyska2" />
                <img src={babyska3} alt="Image 3" className="babyska3" />
            </div>

            <div className="text-row">
                <p className="age-text">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    But if you still want to be a super lady, then take these positions! You look cool and no one will even understand how old you are. Strict, but fashionable!                </p>
            </div>
        </div>
    );
};


export default AgeNumber;