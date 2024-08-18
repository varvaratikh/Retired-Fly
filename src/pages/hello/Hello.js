import React from 'react';
import './Hello.sass';
import grandma from "../../../public/images/main_page/image 29.png";
import text from "../../../public/images/main_page/text.png";

import folderBlue from "../../../public/images/main_page/folders/folderBlue.png";
import folderBlue_text from '../../../public/images/main_page/22.03.24 party.png';

import folderDarkPink from "../../../public/images/main_page/folders/folderDarkPink.png";
import folderDarkPink_text from '../../../public/images/main_page/xxx.png';

import folderPink from "../../../public/images/main_page/folders/folderPink.png";
import folderPink_text from '../../../public/images/main_page/28.05.24 party2.png';

const Hello = () => {
    return (
        <div className='container_hello'>
            <img className="text" src={text} alt="text" />
            <img className="grandma" src={grandma} alt="GrandMother Photo" />

            <div className="folders">

                <div className="folderBlue">
                    <img className="folder_photo" src={folderBlue} alt="folderBlue"/>
                    <img className="folder_text" src={folderBlue_text} alt="folderBlue_text"/>
                </div>

                <div className="folderDarkPink">
                    <img className="folder_photo_darkPink" src={folderDarkPink} alt="folderDarkPink"/>
                    <img className="folder_text_darkPink" src={folderDarkPink_text} alt="folderDarkPink_text"/>
                </div>

                <div className="folderPink">
                    <img className="folder_photo_pink" src={folderPink} alt="folderPink"/>
                    <img className="folder_text_pink" src={folderPink_text} alt="folderPink_text"/>
                </div>

            </div>

            <div className="granMa_Pa">

            </div>
        </div>
    );
};

export default Hello;
