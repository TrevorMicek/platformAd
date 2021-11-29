import React from 'react';

import storeStyles from '../../styles/StorePage/storeStyles.css'
import secondStyles from './secondaryHeader.css';
import firstStyles from '../../styles/FrontPage/headerStyles.css';
const Header = (props) => {

  const firstTitle = 'Small Business Web Design & Development'
  const secondaryTitles = ['Services & Pricing', 'About Us', 'Contact Us']

  const getSecondaryTitle = (curTitle) => {
    for (let i=0;i<secondaryTitles.length;i++) {
      if (curTitle === secondaryTitles[i]) {
        return secondaryTitles[i]
      }
    }
  }
  const secondTitle = getSecondaryTitle(props.title)
  const HomeHeader = () => (
    <section class="headerPictureWrapper">

    <section class="gradient"></section>

      <div class="headerBorder">
      <h1 class="headerTitle">
          <span>{props.title}</span>
      </h1>
      <h2 class="headerText">For retailers & professional services</h2>
      </div>

    </section>
  )
  const SecondaryHeader = () => (
    <section class="headerPictureWrapper">
   <div class="headerBorder">
   <h1 class="headerTitle">
   {props.title}
   </h1>

   </div>
   </section>
  )
  const StoreHeader = () => (
    <section class="headerPictureWrapper">
   <div class="headerBorder">
   <h1 class="headerTitle">
   {props.title}
   </h1>

   </div>
   </section>
  )
  const SwitchHeader = () => {
    switch(props.title) {
        case firstTitle:
          return <HomeHeader />
        case secondTitle:
          return <SecondaryHeader />
        default:
          return <StoreHeader />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;