/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/utils.css"
import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {
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
    <section className={styles.blogSiteContainer}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.mainContainer}>
        {children}
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}{` `}
        <a
          href="https://www.linda-lai.com"
          target="_blank"
          rel='noreferrer noopener'>
          Linda Lai
        </a>,
        Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel='noreferrer noopener'>
          Gatsby
        </a>
      </footer>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
