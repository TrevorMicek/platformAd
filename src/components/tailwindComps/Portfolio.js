import React from 'react'
import { Link } from 'gatsby'

const portfolio = [
    {
      name: "Eagle Plume's",
      description:
      "A little piece of history in the high mountains of Colorado, this 100 year old business is now getting more sales online then ever before.",
      img: null,
      link: 'https://www.eagle-plumes.com/'
    },
    {
      name: 'Spotter Fitness',
      description:
        "This fitness app is transforming the way people work out. With their new website, they're able to funnel more customers directly to their app.",
      img: null,
      link: 'https://spotterfitness.com/'
    },
    {
      name: 'Competitive Intelligence & Analytics',
      description:
        "This Colorado marketer is now able to  offer services directly through their website, increasing their reach and sales.",
      img: null,
      link: 'https://www.getmarketintel.com/'
    }
  ]
export default function Example() {
    return (
      <div className="relative bg-indigo-50 pt-16 -mb-8 overflow-hidden sm:pt-24 lg:pt-32" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
        <div className="mx-auto max-w-md px-4  sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
          <h2 className="text-base text-default font-semibold tracking-wide uppercase lg:ml-16">Our Portfolio</h2>
          <p className="mt-2 max-w-3xl text-3xl leading-8 font-extrabold tracking-tight text-gray-900 lg:ml-16">
          Check out some of our clients websites
          </p>
            <p className="mt-5 mb-8 max-w-prose mx-auto text-xl text-gray-500">
              Here are a few examples of our work so you can see firsthand the quality and style of Websites By Trevor.
            </p>
            </div>
            {portfolio.map(example => (
                <>
                <p className=" mt-5  text-base text-default font-semibold tracking-wide uppercase lg:ml-16">
                <Link to={example.link}>{example.name}</Link>
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    {example.description}
                  </p>

                <div className=" flex flex-col justify-between   sm:flex-row lg:inset-y-0 lg:right-0 lg:h-full">
                  <Link to={example.link}>
                      <img
                    className="inset-0 w-8/12 h-60  object-fit rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                    src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                    alt=""
                    width="300px"
                    height="200px"
                  />
                  </Link>
                  <Link to={example.link}>
                  <img
                    className="inset-0 w-full h-full object-cover rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                    src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                    alt=""
                    width="300px"
                    height="200px"
                  />
                  </Link>
                </div>
                </>
            ))}

        </div>
      </div>
    )
  }
