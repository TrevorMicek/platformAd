import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Form from '../components/tailwindComps/Contact'
import Main from '../components/pages/ContactPage/contactForm'

const IndexPage = () => (
  <Layout title="Contact">
    <SEO title="Home" />
    <Form />
  </Layout>
)
export default IndexPage