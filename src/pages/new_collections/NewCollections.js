import React from 'react';
import './NewCollections.sass';
import eye1 from '../../../public/images/new_collection/eyes/eye1.png';
import eye2 from '../../../public/images/new_collection/eyes/eye2.png'
import eye3 from '../../../public/images/new_collection/eyes/eye3.png'
import eye4 from '../../../public/images/new_collection/eyes/eye4.png'
import eye5 from '../../../public/images/new_collection/eyes/eye5.png'

import people1 from '../../../public/images/new_collection/people/people1.png'
import people2 from '../../../public/images/new_collection/people/people2.png'
import people3 from '../../../public/images/new_collection/people/people3.png'
import people4 from '../../../public/images/new_collection/people/people4.png'
import people5 from '../../../public/images/new_collection/people/people5.png'
import people6 from '../../../public/images/new_collection/people/people6.png'


const NewCollactions = () => {
    return (
        <div className="newCollactions_container">
            <div className="rectan">
            </div>
            <div className="new_coll_high">
                <span className="regular">NEW COLLECTION! </span>
                <span className="bold">NEW COLLECTION </span>
                <span className="regular">NEW COLLECTION! </span>
                <span className="bold">NEW COLLECTION </span>
                <span className="regular">NEW COLLECTION!</span>
            </div>


            <div className="new_coll_low">
                <span className="regular">NEW COLLECTION! </span>
                <span className="bold">NEW COLLECTION </span>
                <span className="regular">NEW COLLECTION! </span>
                <span className="bold">NEW COLLECTION </span>
                <span className="regular">NEW COLLECTION!</span>
            </div>

            <div className="eyes">
                <img className="eye1" src={eye1} alt="eye1 1 - background"/>
                <img className="eye2" src={eye2} alt="eye1 2 - background"/>
                <img className="eye3" src={eye3} alt="eye1 3 - background"/>
                <img className="eye4" src={eye4} alt="eye1 4 - background"/>
                <img className="eye5" src={eye5} alt="eye1 5 - background"/>
            </div>

            <div className="people">
                <img className="people1" src={people1} alt="people1"/>
                <img className="people2" src={people2} alt="people2"/>
                <img className="people3" src={people3} alt="people3"/>
                <img className="people4" src={people4} alt="people4"/>
                <img className="people5" src={people5} alt="people5"/>
                <img className="people6" src={people6} alt="people6"/>
            </div>

            <div className="number">
                <span className="number1">( 1 )</span>
                <span className="number2">( 2 )</span>
                <span className="number3">( 3 )</span>
                <span className="number4">( 4 )</span>
                <span className="number5">( 5 )</span>
                <span className="number6">( 6 )</span>

            </div>
        </div>
    );
};

export default NewCollactions;
