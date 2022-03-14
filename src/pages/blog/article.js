import React from "react"
import { useMatch } from "@reach/router"

import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
const IndexPage = () => {
  const id = useMatch("/blog/:article").article
  return (
  <Layout title={id.title} pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />


  </Layout>
  )
}
export default IndexPage
