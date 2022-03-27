import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="bg-white -mt-24 mb-10" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth"}}>
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-orange">Ready for something better?</span>

          </h2>
            <div className=" rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue hover:bg-orange"
              >
                Join our beta
              </a>
              <div className="mt-4">* all participants get a free website</div>
            </div>

        </div>
      </div>
    )
  }
