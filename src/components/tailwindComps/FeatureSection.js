import React from 'react'

import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'No code page building',
    description: "The foundation of any platform is a no code builder, but ours is a little bit different because we don't have huge confusing menus.",
  },
  {
    name: 'Higher conversions',
    description: 'No more slow websites that turn away customers. Get more conversions more easily with our lightning fast load times that are perfect for products or services.',
  },
  {
    name: 'Beautiful components',
    description: 'Get instant access to dozens of custom & mobile-friendly, pre-built  components and sections to easily create a site with excellent user experience that fits with your branding',
  },
  {
    name: 'Quality customer support',
    description: "With us, you can always get on the phone or chat with a real person that will have real solutions.",
  },
  {
    name: 'More traffic',
    description: 'Our sites get more traffic, leading to more conversions than other page builders because of the quality of our design & development.',
  }
]

export default function Example() {
  return (
    <div className="relative overflow-hidden -mt-16" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>

    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-blue">A better page builder</h2>
          <p className="mt-4 text-lg text-gray-500">
            Other platforms are a great starting point, but when you outgrow them, your options are limited. We are aiming to be the next step.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-orange" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-blue">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  )
}
