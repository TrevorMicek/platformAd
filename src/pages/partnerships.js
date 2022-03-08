import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FeatureSection from '../components/tailwindComps/partner/FeatureSection'
const IndexPage = () => (
  <Layout title="partnerships" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />
<FeatureSection />


  </Layout>
)
export default IndexPage
