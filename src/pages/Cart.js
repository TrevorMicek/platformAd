import React from "react"

import Layout from "../components/layout/layout"
import Cart from '../storePage/storeComponents/Cart'
import SEO from "../components/layout/seo"
import FeatureSection from '../components/tailwindComps/FeatureSection'
import MoreInfo from '../components/tailwindComps/FrontPageInfo'
const IndexPage = () => (
  <Layout title="Cart" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />


  </Layout>
)
export default IndexPage
