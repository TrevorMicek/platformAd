import React, { useCallback, useEffect, useState } from "react"
import { Link } from 'gatsby'
import { Router, Redirect } from '@reach/router'
import createComponent from '../components/commonComps/createCart'
import HomeButton from '../components/commonComps/storeHeaderButton'



import "../styles/StorePage/app.css"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styles from '../styles/StorePage/wrapper.css'


const App = () => {

const Store = () => {
    const initialTitle = 'Custom Ecommerce'
    const [pageTitle, setPageTitle] = useState(initialTitle)
    const getTitle = (title) =>{

         setPageTitle(title)

    }
   //const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

return (

    <div className={styles.wrapper}>
    <SEO title="Online Store" />


       hi

   </div>
)
}
return <Store />
}
export default App;