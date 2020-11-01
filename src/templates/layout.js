import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../styles/utils.css'

import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {

  return (
    <section className={styles.blogSiteContainer}>
      <Navigation />
      {children}
      <Footer />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
