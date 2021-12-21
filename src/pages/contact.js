import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Form from '../components/tailwindComps/Contact'

const IndexPage = () => (
  <Layout title="Contact" text="We would love to hear from you!">
    <SEO title="Home" />
    <Form />

  </Layout>
)
export default IndexPage