import React, { Suspense } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const Store = React.lazy(() => import('../storePage/store'))

const IndexPage = () => {

    return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />
    <Suspense fallback={<div>...loading</div>}>
        <Store />
        </Suspense>


  </Layout>
)
    }
export default IndexPage
