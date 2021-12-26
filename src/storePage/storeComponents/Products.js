import React, { useState, useEffect } from "react"

import Product from "./Product"

import Layout from '../../components/layout/layout'
export default (props) => {


	return (
		<>


				<div >

		<div className="Products-wrapper">



			<Product
				history={props.history}
				title={props.title}
				getTitle={props.getTitle}
			/>

		</div>
		</div>
		</>
	)
}
