import React, { useState } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import MainSectionTitle from '../components/commonComps/MainSectionTitle'
import styles from '../styles/ServicesPage/mainStyles.css';
import Categories from '../components/pages/blogPage/BlogCategories'
import CategoryData from '../data/blogPage/CategoryData'
import basics from "../data/blogPage/blogPostData/basics"
import CreateComponent from "../components/commonComps/createComponent"
import Events from "../data/blogPage/Categories";
import blogPosts from '../data/blogPage/blogPosts'
import info from '../data/blogPage/tempData'
const IndexPage = () => {
  const [eventPage, setEventPage] = useState('Basics')

  const SwitchEventPage = () => {
      switch(eventPage) {
          case 'SEO':
              return <>
               <MainSectionTitle {...CategoryData.two} />
              <Events year='SEO' page={eventPage} changeYear={setEventPage} />
              </>
          case 'Web Design & Development':
              return <>
               <MainSectionTitle {...CategoryData.three} />
               <Events year='Web Design & Development' page={eventPage} changeYear={setEventPage} />
               </>
          case 'Ecommerce':
              return <>
               <MainSectionTitle {...CategoryData.four} />
              <Events year='Ecommerce' page={eventPage} changeYear={setEventPage} />
              </>
          default:
              return <>
               <MainSectionTitle {...CategoryData.one} />
              <Events year='Basics' page={eventPage} changeYear={setEventPage} />
              <CreateComponent component={Categories} data={basics} />
              </>
      }
  }
  return (
  <Layout title="Learn About Websites">
    <SEO title="Blog" />
    <div className={styles.secondSection}>

      <SwitchEventPage />

    </div>
  </Layout>
  )
  }
export default IndexPage