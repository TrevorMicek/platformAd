import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import FeatureSection from '../components/tailwindComps/FeatureSection'
import MoreInfo from '../components/tailwindComps/FrontPageInfo'
const IndexPage = () => (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />
<FeatureSection />
<MoreInfo />

  </Layout>
)
export default IndexPage
