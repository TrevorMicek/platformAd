import React from 'react';

import './styles/mainSection.css';

const Title = (props) => (
    <section class="firstSection">

        <section class="firstSectionWrapper">


        <div class="firstSectionTitle">

          <h3>
            {props.title}
          </h3>
          {props.imgSrc === undefined ? null :
          <img src={props.imgSrc} alt="colorful desktop icon" class="firstSectionGraphic" width="100px" height="100px" />
          }
        </div>
        <div>
          <article class="firstSectionText">
            <p>
              {props.text}

            </p>
          </article>
        </div>
        </section>
      </section>
)
export default Title;