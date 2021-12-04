import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


import '../styles/ServicesPage/mainStyles.css';
import info from '../data/servicesPage/pageData';
import SecondSectionTitle from '../components/commonComps/MainSectionTitle'
import standard from '../data/servicesPage/standard';
import ecom from '../data/servicesPage/ecom';
import Package from '../components/pages/servicesPage/package';
import pricing from '../data/servicesPage/starter';
import ecomPricing from '../data/servicesPage/ecomPricing'
import Benefit from '../components/pages/servicesPage/TopBenefits';
import BenefitData from '../data/servicesPage/BenefitData';
import CreateComponent from '../components/commonComps/createComponent'
import ProductBenefit from "../components/tailwindComps/ProductBenefit";
import Pricing from '../components/tailwindComps/Pricing'

const ServicePage = () => (

  <Layout title="Product" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" />
    <ProductBenefit />

  </Layout>
)
export default ServicePage