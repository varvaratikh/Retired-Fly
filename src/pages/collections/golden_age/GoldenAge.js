import React from 'react';
import './GoldenAge.sass';

import men1 from '../../../../public/images/golden_age/men/image 5.png';
import men2 from '../../../../public/images/golden_age/men/image 3.png';
import men3 from '../../../../public/images/golden_age/men/image 18.png';
import men4 from '../../../../public/images/golden_age/men/image 27.png';
import men5 from '../../../../public/images/golden_age/men/image 41.png';
import men6 from '../../../../public/images/golden_age/men/image 34.png';

import eye from '../../../../public/images/golden_age/eye.png';


 const GoldenAge = () => {
     return (
         <div className="golden-age-container">
             {/* eslint-disable-next-line react/no-unescaped-entities */}
             <h1 className="golden-age-title">"GOLDEN AGE, GOLDEN RHYMES."</h1>

             <img src={eye} alt='eye' className="eye-back"/>

             <div className="images-row">
                 <img src={men1} alt="Image 1" className="men1" />
                 <img src={men2} alt="Image 2" className="men2" />
                 <img src={men3} alt="Image 3" className="men3" />
                 <img src={men4} alt="Image 4" className="men4" />
                 <img src={men5} alt="Image 5" className="men5" />
                 <img src={men6} alt="Image 6" className="men6" />
             </div>

             <div className="text-row">
                 <p className="golden-age-text">
                     This collection was inspired by an ordinary grandfather at the subway station who stood out from the crowd. He was different. We want to make people who are different happier by creating these positions.
                 </p>
             </div>
         </div>
     );
 };

 export default GoldenAge;

