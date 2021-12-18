import React from 'react';

const userIcon = require('../../images/user.svg')
const optimizeIcon = require('../../images/optimization.svg')
const responsiveIcon = require('../../images/responsive-design.svg')
const subscriptionIcon = require('../../images/subscription.svg')

const subscriptionText = () => {
    return (
      <>
        I personally have created a new pricing model so you can choose between our unique subscription w/ <span> NO SETUP FEE</span>, or the normal website pricing of 50% down & 50% when the site is all done, with almost no monthly cost. Either way you enjoy affordable packages, simple contracts, & no hidden fees.

    </>
    )
  }

const data = {
    one: {
        title: '100% Custom Code',
        text: "All of our sites are made from scratch using our own code. This allows us full control over the design and functionality for you or your clients. Meaning our sites are higher quality and always faster to load from less files and KB. Other developers, custom or page built, can't compete with our quality.",
        icon: userIcon,
        alt: 'user in front of desktop with a colorful layout'

    },
    two: {
        title: 'Optimization',
        text: "A simple and easy to use website is a priority, but optimization & speed is our driving force for a high quality site. The number one reason visitors will leave your website is if it's too slow, or not user-friendly. But optimization also includes making every site accessible and SEO friendly to rank higher on Google.",
        icon: optimizeIcon,
        alt: 'bar graph showing increases'

    },
    three: {
        title: 'Subscription OR Upfront',
        text: subscriptionText(),
        icon: subscriptionIcon,
        alt: 'blue envelope icon'

    },
    four: {
        title: 'Wholesale Websites',
        text: "We work directly with business consultants, SEO specialists, graphic designers, and other professional services to bring high quality websites to small businesses. If that's you, our wholesale websites are perfect for you and your clients. We also offer high quality retail sites directly to product and service businesses if that's you.",
        icon: responsiveIcon,
        alt: 'blue desktop and phone icon'
    }
}
export default data;