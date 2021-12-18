import React from 'react';

import info from '../../../data/frontPage/benefitData';
import styles from '../../../styles/FrontPage/benefit.css'
import CreateComponent from '../../commonComps/createComponent';

const Benefit = (props) => (
<div class="benefitWrapper">
          <img src={props.icon} alt={props.alt} width="50px" height="50px" />
          <h3 class="FirstTitle">
            {props.title}
          </h3>
          <p class="FirstText">
          {props.text}
          </p>
        </div>
)
const BenefitSection = () => (
    <section class="secondSection">
      <CreateComponent component={Benefit} data={info} />
    </section>
)
export default BenefitSection