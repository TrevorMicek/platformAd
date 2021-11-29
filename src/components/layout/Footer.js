import React from 'react';
import { Link } from 'gatsby';

import styles from './footerStyles.css'
const Footer = () => {
  var year = new Date()


return (
<footer class="footer">
        <div class="waveContainer">
        <div class="wave"></div>
        </div>

      <div class="footerContainer">

        <div class="footerTop">
   <section class="leftSideFooter">

        <div>
          <h4>
            Follow Me!
          </h4>

        </div>
      </section>
      <section class="rightSideFooter">

        <div class="flaticon">
        <div>Icons made by <a href={'www.flaticon.com/authors/flat-icons'} title={'Flat Icons'}>Flat Icons</a> from <a href={'www.flaticon.com/'} title={'Flaticon'}>www.flaticon.com</a></div>
        </div>
      </section>
      </div>
      <section class="footerBottom">

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/store/">Store</Link></li>
          <li><Link to="/contact">Contact</Link></li>


        </ul>
        <div class="copyright">
        <h4>
        © {
          year.getFullYear()
        }, Websites By Trevor LLC
        </h4>
        </div>
      </section>


    </div>
    </footer>
    )
      }
    export default Footer;