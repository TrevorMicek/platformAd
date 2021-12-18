import React, { useState } from 'react';

import styles from '../../../styles/ServicesPage/package.css';
import Benefits from './TierBenefits';

const Package = (props) => {
  const [benefit, setBenefit] = useState(true)
  const switchButton = () => setBenefit(!benefit)
return (
  <section class="pricingSection">
    <div>
         <div class="price">
           <div class="pricingTitle">
             <span>
             {props.title}
             </span>
             <span>
           {props.pages}
         </span>
          </div>
           <h3>
             <span class="dollarsign">$</span><span class="priceTitle">{props.price}<br /> <span style={{fontSize: "1.5rem"}}>+ ${props.maintain === '0' ? '0' : '40'}</span></span> <span class="month">/MO OR just ${props.monthly} /MO</span>
           </h3>
           </div>
           <div class="featureSwitch">
           <button class={benefit === true ? styles.benefitButtonActive : styles.benefitButton} onClick={switchButton}>benefits</button>
            <button class={benefit === false ? styles.featureButtonActive : styles.featureButton} onClick={switchButton}>features</button>
           </div>
           <Benefits title={benefit === true ? props.benefitOne : props.featureOne}  />
           <Benefits title={benefit === true ? props.benefitTwo : props.featureTwo } />
           <Benefits title={benefit === true ? props.benefitThree: props.featureThree} />
           <Benefits title={benefit === true ? props.benefitFour : props.featureFour} />
       </div>
       </section>
)
}
export default Package;