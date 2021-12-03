import React from 'react'

import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Web Design & Development',
    description: 'Websites are built with over 100 hours of design, development, and testing',
  },
  { name: 'Fully Maintained Site', description: "We do monthly maintenance, so you don't have to worry about an outdated site" },
  {
    name: 'Fully Customized Site',
    description: 'Since every website is hand coded, we can customize every aspect of your website',
  },
  { name: 'Hosting Fees Included', description: 'All hosting fees are built right into the subscription' },
  { name: 'Google Analytics', description: 'We use metrics such as Google Analytics to keep track of website growth' },
  { name: 'Full Customer Support', description: 'You can call anytime during normal business hours and reach me directly' }
]

export default function ProductBenefit() {
  return (
    <div className="bg-white" style={{gridColumn: 'span 7'}}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Everything you need</h2>
          <p className="mt-2 max-w-2xl text-3xl font-extrabold text-gray-900 mr-8">For a better website than your competitor's</p>
          <p className="mt-4 text-lg text-gray-500">
          Speed: 2x-4x Faster Than WordPress<br />

Cost: 50% upfront & 50% when you're 100% happy with your site OR 0% upfront & a monthly subscription; either way, our prices can't be beat by other custom developers<br />

Growth: Quality Websites Lead To More Organic Growth
        </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}