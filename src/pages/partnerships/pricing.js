import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"


import '../../styles/ServicesPage/mainStyles.css';
import Pricing from '../../components/tailwindComps/partner/Pricing'

const ServicePage = () => (

  <Layout title="Pricing" text="Affordable packages, small upfront costs & low monthly subscriptions" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" />
    <Pricing />

  </Layout>
)
export default ServicePage