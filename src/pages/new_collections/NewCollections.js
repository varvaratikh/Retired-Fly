import React from 'react';
import './NewCollections.sass';


const NewCollactions = () => {
    return (
        <div className="newCollactions_container">
            <div className="rectan">
                <div className="new_coll_high">
                    <span className="regular">NEW COLLECTION!</span>
                    <span className="bold">NEW COLLECTION</span>
                    <span className="regular">NEW COLLECTION!</span>
                    <span className="bold">NEW COLLECTION</span>
                    <span className="regular">NEW COLLECTION!</span>
                </div>


                <div className="new_coll_low">
                    <span className="regular">NEW COLLECTION!</span>
                    <span className="bold">NEW COLLECTION</span>
                    <span className="regular">NEW COLLECTION!</span>
                    <span className="bold">NEW COLLECTION</span>
                    <span className="regular">NEW COLLECTION!</span>
                </div>

            </div>
        </div>
    );
};

export default NewCollactions;
