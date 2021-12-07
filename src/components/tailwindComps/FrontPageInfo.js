import React from 'react'

export default function Example() {
    return (
      <div className="relative bg-white pr-4" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
        <div className="lg:absolute lg:inset-0 ">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Process</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              perfect for retailers & business services
              </h3>
              <p className="mt-8 max-w-2xl text-lg text-gray-500">
                Our main focus is small businesses that have a website they made with a page builder, yet are looking for something that isn't so slow, isn't so templated, & isn't so expensive.
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <p className="max-w-2xl">
                  We are actively trying to bridge the gap between page built websites that are great for starting out, and websites you'd see at a mid-sized business.
                  When you need something better there's only expensive options. This is where we excel & this is why we do what we do; to make fast, high quality websites that are affordable to small businesses like you.
                </p>
                <ul role="list">
                  <li>Our websites often score two to three times as fast on page load times.</li>
                  <li>Every website we make is uniquely hand coded to your liking & branding.</li>
                  <li>Our prices are roughly half the cost of other designers & developers.</li>
                </ul>
                <p className="max-w-2xl">
                  We achieve these three feats through our single page applications, which are known for having better user experience, faster pages and are great for bigger websites, like an online store. We also spend a lot of time creating new designs for each client, as well as our unique pricing model that makes our bigger upfront costs very affordable for any client.
                </p>
                <p className="max-w-2xl">
                  Each client is directed to <a href="https://html5up.net">This Site</a> to pick out a design they like. We then ask for 3-5 websites they have found that they like. We then do competitor analysis to find commonality between your competitors.
                  We then recreate the design you picked with many elements of the other websites including your current website so that we have a brand new, completely unique website.
                </p>
                <p className="max-w-2xl">
                  We will have multi-weekly meetings to discuss the design and direction of the website to further tailor the site to your business.
                </p>


                <h3>How we’re different</h3>
                <p className="max-w-2xl">
                  What makes Websites By Trevor truly unique, aside from the above, is that we genuinely care and have built an entire business model around helping small businesses access better websites. Our process is very unique and is always evolving to be even better for our clients.
                </p>
                <p className="max-w-2xl">
                  Another reason we are unique is because we aren't just selling websites to small businesses. One of our main goals is to create a community where we can all connect and help each other out. We are actively looking for partnerships with business service companies that work directly with you in order to offer even more affordable packages and helpful knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }