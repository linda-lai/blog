import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/utils.css'

import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {

  return (
    <section className={styles.blogSiteContainer}>
      <Header />
      <main className={styles.mainContainer}>
        {children}
      </main>
      <Footer />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
