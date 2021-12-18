import  React from 'react';

import styles from '../../../styles/AboutPage/mainStyles.css'
const Section = (props) => (
  <div>
    <h3 class="FirstTitle">
      {props.title}
    </h3>
    <div class="FirstText">
      <p>{props.firstP}
      {props.secondP}
      {props.thirdP}</p>
    </div>
  </div>
)
export default Section;