import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Features from '../components/tailwindComps/FeatureSection'

const IndexPage = () => (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" />
    <Features />
  </Layout>
)
export default IndexPage
