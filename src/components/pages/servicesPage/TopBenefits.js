import React from 'react';

import '../../../styles/ServicesPage/topBenefits.css'
const checkmark = require('../../../images/checkmark.jpg')

const Benefits = (props) => (
  <section class="secondSection">
    <div>
    <div class="imgWrapper">
     <img src={checkmark} alt="small blue checkmark icon" class="firstGraphic" width="30px" height="30px" />
     </div>
     <div class="serviceWrapper">
     <h3 class="SecondSectionTitle">
       {props.title}
     </h3>
     <p class="FirstText">
      {props.text}
     </p>
     </div>
   </div>
   </section>
)
export default Benefits;