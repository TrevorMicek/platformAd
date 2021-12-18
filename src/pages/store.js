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
    const Pages = (props) => {


    const [cart, setCart] = useState([])
    const [cartAmount, setCartAmount] = useState(0)
    const [linkUrl, setLinkUrl] = useState('/')
    const getUrl = (url) => setLinkUrl(url)
	const addToCart = (cartItem) => setCart([...cart, cartItem])
    const getCart = () => setCartAmount(cart.length)

    const storage = () => JSON.parse(window.localStorage.getItem('cart')) || {}


    const handleClick = (url) => getUrl(url)
    const ContinueShopping = () => (
        <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Continue Shopping" onClick={() => handleClick('../../')} />
    )
    const CartButton = () => (
        <HomeButton linkUrl={linkUrl} geturl={getUrl} title="To Store" onClick={() => handleClick('../')} />
    )
    const MainHomeButton = () => (
        <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Main Website" onClick={() => handleClick('/')} />
    )

    const switchButton = () => {
        switch(linkUrl) {
            case '/':
                return <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Main Website" onClick={() => handleClick('/')} />
            case '../../':
                return <HomeButton linkUrl={linkUrl} geturl={getUrl} title="Continue Shopping" onClick={() => handleClick('../../')} />
        }
    }

    const CartWrapper = () => (
        <div className="homeButtonWrapper">
    {switchButton()}


 </div>
    )

    return (
        <>
hi
        <Router>


        </Router>
        </>
    )
}
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


        <Pages title={pageTitle} getTitle={getTitle} />


   </div>
)
}
return <Store />
}
export default App;