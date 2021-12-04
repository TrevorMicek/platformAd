import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import FeatureSection from '../components/tailwindComps/FeatureSection'
import FirstSection from '../components/commonComps/MainSectionTitle'
import SecondSection from '../components/pages/frontPage/Benefits'
import info from '../data/frontPage/pageData'

import styles from '../styles/FrontPage/wrapper.css'
const IndexPage = () => (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />


  </Layout>
)
export default IndexPage
