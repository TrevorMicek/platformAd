import React, { useState, useRef } from 'react'
import { Switch } from '@headlessui/react'
import emailjs from 'emailjs-com';

import Confirm from './Confirmation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [hear, setHear] = useState('')
  const [location, setLocation] = useState('')
  const [industry, setIndustry] = useState('')

  const [message, setMessage] = useState('')

  const [validateName, setValidateName] = useState(undefined)
  const [validateEmail, setValidateEmail] = useState(undefined)
  const [validateNumber, setValidateNumber] = useState(undefined)
  const [validateHear, setValidateHear] = useState(undefined)
  const [validateLocation, setValidateLocation] = useState(undefined)
  const [validateIndustry, setValidateIndustry] = useState(undefined)

  const form = useRef()

const handleChange = (e) => {
  switch(e.target.name) {
      case 'email':
           if (validateEmail !== undefined) {
               setValidateEmail(undefined)
           }
          setEmail(e.target.value)
          break;
      case 'name':
          if (validateName !== undefined) {
              setValidateName(undefined)
          }
          setName(e.target.value)
          break;

      case 'location':
          if (validateLocation !== undefined) {
              setValidateLocation(undefined)
          }
          setLocation(e.target.value)
          break;
      case 'hear':
            if (validateHear !== undefined) {
                setValidateHear(undefined)
            }
            setHear(e.target.value)
            break;
      case 'industry':
            if (validateIndustry !== undefined) {
                setValidateIndustry(undefined)
            }
           setIndustry(e.target.value)
           break;


    }
}
const validateError = (label, which) => {
  const errorMessage = () => (
      <div className="text-red-500">
      * {which} input is empty
      </div>
  )
  console.log(label)
 switch (label) {
     case name:
          setValidateName(errorMessage)
          break;
     case email:
         setValidateEmail(errorMessage)
         break;

      case location:
          setValidateLocation(errorMessage)
          break;
      case industry:
          setValidateIndustry(errorMessage)
          break;


 }
}
const onSubmit = (e) => {
  switch ('') {
      case name:
          validateError(name, 'name');
          e.preventDefault()
          break;
      case email:
          validateError(email, 'email')
          e.preventDefault()
          break;

        case location:
            validateError(location, 'email')
            e.preventDefault()
            break;
            case industry:
          validateError(industry, 'industry');
          e.preventDefault()
          break;



      default:
         /* setURL() */
         setConfirm(true)
         //emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
         e.preventDefault()
  }
}
const confirmMessage = ['Thanks for reaching out to Websites By Trevor!', 'We will respond ASAP']

  return (
    <div style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>

<div className="bg-indigo-50 absolute z-10 top-72  h-52 w-full " style={{transform: 'skewY(9deg)'}} />
    <div className="relative z-20 bg-indigo-50  px-4  overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto" >
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ready for your free website?</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We're giving every beta tester a free website after they're done testing! Fill out this form to get on our list.
          </p>
        </div>
        <div className="mt-12">
        {confirm ? <Confirm prompt="false" message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
          <form ref={form} onSubmit={onSubmit} className="sm:grid-cols-2 sm:gap-x-8">
            <div>

              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label> {validateName}

              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  value={name}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter name..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email {validateEmail}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter email..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone Number (leave as US if country not listed) {validateNumber}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 mb-6 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Where are you located? {validateLocation}
              </label>
              <div className="mt-1">
                <input
                  id="location"
                  name="location"
                  type="location"
                  autoComplete="location"
                  value={location}
                  onChange={handleChange}
                  key='location'
                  placeholder="Enter location..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                How did you hear about us? {validateHear}
              </label>
              <div className="mt-1">
                <input
                  id="hear"
                  name="hear"
                  type="hear"
                  autoComplete="hear"
                  value={hear}
                  onChange={handleChange}
                  key='hear'
                  placeholder="Enter how you heard about us..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                What industry are you in? {validateIndustry}
              </label>
              <div className="mt-1">
                <input
                  id="industry"
                  name="industry"
                  type="industry"
                  autoComplete="industry"
                  value={industry}
                  onChange={handleChange}
                  key='industry'
                  placeholder="Enter industry..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={handleChange}
                  key='name'
                  placeholder="Feel free to add anything else you want us to know!"
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"

                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Join our beta!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}