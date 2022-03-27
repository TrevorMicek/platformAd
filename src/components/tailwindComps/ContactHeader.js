import React, { useState, useEffect } from 'react'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import { Link } from 'gatsby'
import eclipse from '../../images/eclipseResize.jpg'

import '../commonComps/style.css'
import waveImg from '../../images/newWaveCrop.png'
import { Gradient } from '../commonComps/Gradient'

// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas

export default function Example() {

  useEffect(() => {
    setTimeout(() => {
      gradient.initGradient('#gradient-canvas')
    }, 2500)




  }, [])

  return (
    <div className="-top-16 pb-10 relative overflow-hidden" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
      <canvas id="gradient-canvas" className="absolute -top-30 z-10 transform scale-x-150" data-transition-in>
  </canvas>
  <img src={waveImg} height="100px" width="auto" className="absolute  h-96 z-0 transform " />



    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="relative z-30 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
                <Link to="/">
              <img
                className="h-11 w-auto"
                src={eclipse}
                alt="Workflow"
              />
              </Link>
            </div>
            <div className="mt-0">


              <div>
                <a href="#" className="inline-flex space-x-4">
                  <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-orange tracking-wide uppercase">
                    Notify me
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-white space-x-1">
                    <span>Coming early 2023</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                  Eclipse Builder
                </h1>
                <h2 className="text-2xl font-normal text-white tracking-tight sm:text-5xl">
                  Join our beta!
                </h2>

              </div>


            </div>

          </div>

        </div>

      </div>
    </div>
    </div>
  )
}
