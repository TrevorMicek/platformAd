import React from 'react'
import { Gradient } from './Gradient.js'

// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas
const Mesh = () =>{
     gradient.initGradient('#gradient-canvas')
    return (
        <canvas className="absolute w-full h-full" width="300" height="500" class="gradient-canvas" data-transition-in>
              </canvas>
    )
}

export default Mesh