import React, { useCallback, useEffect, useState } from "react"
import { Link } from 'gatsby'
import { Router, Redirect } from '@reach/router'
import Products from "../storePage/storeComponents/Products"
import ProductView from "../storePage/storeComponents/Productview"
import Cart from '../storePage/storeComponents/Cart'
import createComponent from '../components/commonComps/createCart'
import HomeButton from '../components/commonComps/storeHeaderButton'

import { useShopify } from "../storePage/hooks"

import { Provider } from "react-redux"

import "../styles/StorePage/app.css"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styles from '../styles/StorePage/wrapper.css'

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "../storePage/redux/ducks"

const App = () => {
    const Pages = (props) => {
     const {
		createShop,
		createCheckout,
		fetchProducts,
        addVariant
		// fetchCollection,
	} = useShopify()



	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()

		// fetchCollection()
	}, [])




    const CartWrapper = () => (
        <div className="homeButtonWrapper">


    <Cart  title={props.title}  />
 </div>
    )

    return (
        <>

        <Router>
			<Products path="/store" cart={CartWrapper} title={props.title} getTitle={props.getTitle}   />
			<ProductView path='/store/products/:productId' cart={CartWrapper} title={props.getTitle}  />

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
    const rootReducer = combineReducers(reducers);
    const enhancer = compose(applyMiddleware(thunk));
    const store = createStore(rootReducer, enhancer);
return (

    <div className={styles.wrapper}>
    <SEO title="Online Store" />

	<Provider store={store}>
        <Pages title={pageTitle} getTitle={getTitle} />
	</Provider>

   </div>
)
}
return <Store />
}
export default App;