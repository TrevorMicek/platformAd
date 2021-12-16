import React from 'react';

import storeStyles from '../../styles/StorePage/storeStyles.css'
import secondStyles from './secondaryHeader.css';
import firstStyles from '../../styles/FrontPage/headerStyles.css';

const Header = (props) => {

  const firstTitle = 'Small Business Web Design & Development'
  const secondaryTitles = ['Product', 'Pricing', 'About', 'Blog','Contact']

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



    </section>
  )
  const SecondaryHeaderComp = () => (
    <section class="headerPictureWrapper">

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
          return ''
        case secondTitle:
          return ''
        default:
          return <StoreHeader />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;