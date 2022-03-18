import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Helmet } from "react-helmet"
import Header from '../components/tailwindComps/Header'
import Features from '../components/tailwindComps/FeatureSection'
import CTA from '../components/tailwindComps/CTA'

const IndexPage = () => (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto"}}>
    <SEO title="Home" />

    <Header />
    <Features />
    <CTA />
  </Layout>
)
export default IndexPage
