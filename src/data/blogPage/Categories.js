import React, { useState, useEffect } from 'react';

import styles from '../../styles/BlogPage/categories.css'
import MainSectionTitle from '../../components/commonComps/MainSectionTitle'
import CategoryData from '../../data/blogPage/CategoryData'

const Events = (props) => {

    return (
        <>

        <div className={styles.eventWrapper}>


            <div className={styles.years}>
                <button className={props.page === 'Basics' ? styles.buttonActive : styles.button} onClick={() => props.changeYear('Basics')} disabled={props.page === 'Basics'}>Basics</button>
                <button className={props.page === 'SEO' ? styles.buttonActive : styles.button} onClick={() => props.changeYear('SEO')} disabled={props.page === 'SEO'}>SEO</button>
                <button className={props.page === 'Web Design & Development' ? styles.buttonActive : styles.button} onClick={() => props.changeYear('Web Design & Development')} disabled={props.page === 'Web Design & Development'}>Web Design<br /> & Development</button>
                <button className={props.page === 'Ecommerce' ? styles.buttonActive : styles.button} onClick={() => props.changeYear('Ecommerce')} disabled={props.page === 'Ecommerce'}>Ecommerce</button>
            </div>


        </div>

        </>
    )
}
export default Events;