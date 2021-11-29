import React from 'react';

import styles from '../../../styles/ServicesPage/tierBenefits.css';
const checkmark = require('../../../images/checkmark.jpg')

const Benefits = (props) => (
      props.title === undefined ? null :
      <div class="benefits">
      <div>
    <div class="imgWrapper">
        <img src={checkmark} alt={"mid-sized blue checkmark icon"} class="thirdGraphic" width="35px" height="35px" />
        </div>
    <div class="pricingWrapper">
        <h3 class="benefitTitle">
          {props.title}
        </h3>
        </div>
        </div>
        </div>
    )
export default Benefits;