import React from 'react';


import firstStyles from '../../../styles/FrontPage/headerStyles.css';
const Header = (props) => (


    <section class="headerPictureWrapper">

    <section class="firstSectionOverlay"></section>
    <div class="firstTransition"></div>
      <div class="headerBorder">
      <h1 class="headerTitle">
          <span>{props.title}</span>
      </h1>
      <h2 class="headerText">Websites By Trevor</h2>
      </div>

    </section>
  )
export default Header;