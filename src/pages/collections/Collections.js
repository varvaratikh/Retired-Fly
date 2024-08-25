import React, { useState } from 'react';
import './Collections.sass';
import Men from '../../../public/images/retired&fly/men.png';
import icecream_women from '../../../public/images/retired&fly/icecream_women.png';
import women_cigaret from '../../../public/images/retired&fly/women_with_sigaret.png';


const Collactions = () => {
    const [activeImage, setActiveImage] = useState('left');

    return (
        <div className="collactions_container">
            <div className="white_container">
                <span className="retried_fly">Retired & Fly</span>

                <div className="name_collactions">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className="golden_age">"Golden age,<br/> golden rhymes."</span>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className="old">"Old doesn't mean <br/>out of style."</span>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className="age">"Age is just a <br/>number."</span>
                </div>

                <div className="images_container">
                    <button
                        className={`image_button ${activeImage === 'left' ? 'active' : ''}`}
                        onClick={() => setActiveImage('left')}
                    >
                        <img src={Men} alt="Left" />
                    </button>
                    <button
                        className={`image_button ${activeImage === 'center' ? 'active' : ''}`}
                        onClick={() => setActiveImage('center')}
                    >
                        <img src={women_cigaret} alt="Center" />
                    </button>
                    <button
                        className={`image_button ${activeImage === 'right' ? 'active' : ''}`}
                        onClick={() => setActiveImage('right')}
                    >
                        <img src={icecream_women} alt="Right" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Collactions;
