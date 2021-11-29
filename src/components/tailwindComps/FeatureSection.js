import React from 'react'

import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: '100% Custom Code',
    description:
    "All of our sites are made from scratch using our own code. This allows us full control over the design and functionality for you or your clients. Meaning our sites are higher quality and always faster to load from less files and KB. Other developers, custom or page built, can't compete with our quality.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Optimization',
    description:
      "A simple and easy to use website is a priority, but optimization & speed is our driving force for a high quality site. The number one reason visitors will leave your website is if it's too slow, or not user-friendly. But optimization also includes making every site accessible and SEO friendly to rank higher on Google.",
    icon: ScaleIcon,
  },
  {
    name: 'Subscription OR Upfront',
    description:
      "I personally have created a new pricing model so you can choose between our unique subscription w/ NO SETUP FEE, or the normal website pricing of 50% down & 50% when the site is all done, with almost no monthly cost. Either way you enjoy affordable packages, simple contracts, & no hidden fees.",
    icon: LightningBoltIcon,
  },
  {
    name: 'Wholesale Websites',
    description:
      "We work directly with business consultants, SEO specialists, graphic designers, and other professional services to bring high quality websites to small businesses. If that's you, our wholesale websites are perfect for you and your clients. We also offer high quality retail sites directly to product and service businesses if that's you.",
    icon: AnnotationIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="py-12 bg-white" style={{minWidth:"96.5vw",gridColumn:"span 5", gridRowStart:"first", gridRowEnd:"second"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">web design & development</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl min-w-full pr-20">
          For retailers and business services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto pr-12">
            There are a few key differences you will find between me and other developers, as well as page builders.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}