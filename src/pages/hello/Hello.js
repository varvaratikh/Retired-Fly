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

import grandma_photo from "../../../public/images/main_page/granma&pa/second.png";
import grandma_text from "../../../public/images/main_page/granma&pa/grandma_text.png";


import grandfa_photo from "../../../public/images/main_page/granma&pa/first.png";
import grandfa_text from "../../../public/images/main_page/granma&pa/grandfa_text.png";

import fuck_photo from "../../../public/images/main_page/granma&pa/third.png";
import fuck_text from "../../../public/images/main_page/granma&pa/fuck_text.png";


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

                <div className="grandma_pa">
                    <img className="grandma_photo" src={grandma_photo} alt="grandma_photo"/>
                    <img className="grandma_text" src={grandma_text} alt="grandma_text"/>
                </div>

                <div className="grandfa">
                    <img className="grandfa_photo" src={grandfa_photo} alt="grandfa_photo"/>
                    <img className="grandfa_text" src={grandfa_text} alt="grandfa_text"/>
                </div>

                <div className="fuck">
                    <img className="fuck_photo" src={fuck_photo} alt="fuck_photo"/>
                    <img className="fuck_text" src={fuck_text} alt="fuck_text"/>
                </div>

            </div>
        </div>
    );
};

export default Hello;
