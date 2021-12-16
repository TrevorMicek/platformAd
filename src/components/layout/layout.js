/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";



import "./layoutGrid.css"
import "./layout.css"
import { Provider } from "react-redux"
const Layout = ({children, title, pageLayout}) => {


  /*
  const rootReducer = combineReducers(reducers);

  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(rootReducer, enhancer);
 */
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (


      <div
        style={{
          margin: `0 0`,
        }}
      >

      hi
      </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
