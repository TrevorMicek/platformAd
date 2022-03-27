import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Helmet } from "react-helmet"
import Header from '../components/tailwindComps/ContactHeader'
import Features from '../components/tailwindComps/FeatureSection'
import Contact from '../components/tailwindComps/Contact'

import '../components/commonComps/style.css'
const IndexPage = () => {



  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto"}}>
    <SEO title="Home" />


    <Header />
    <Contact />
  </Layout>
  )
}
export default IndexPage
