import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '../styles/header.module.css'

const Header = () => (
  <header className={styles.headerContainer}>
    <nav className={styles.headerWrapper}>
      <h1 className={styles.headerTitle}>
        <Link to='/' className={styles.headerSiteTitle} >
          &lt;<span className={styles.headerLogo}>LindaLogical</span> /&gt;
        </Link>
      </h1>
      <div className={styles.navigation}>
        <h2 className={styles.headerLink}>
          <Link to='/about' className={styles.headerTitleLink}>
            About
          </Link>
        </h2>
        <h2 className={styles.headerLink}>
          <Link to='/archive' className={styles.headerTitleLink}>
            Archive
          </Link>
        </h2>
        <h2 className={styles.headerLink}>
          <Link to='/tags' className={styles.headerTitleLink}>
            Tags
          </Link>
        </h2>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
