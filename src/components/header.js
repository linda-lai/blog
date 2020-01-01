import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.headerContainer}>
    <div className={styles.headerWrapper}>
      <div className={styles.navigationLeft}>
        <h1 className={styles.headerTitle}>
          <Link to="/" className={styles.headerTitleLink} >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className={styles.navigationRight}>
        <h2 className={styles.headerLink}>
          <Link to='/about' className={styles.headerTitleLink}> About</Link>
        </h2>
        <h2 className={styles.headerLink}>
          <Link to='/archive' className={styles.headerTitleLink}>About</Link>
        </h2>
        <h2 className={styles.headerLink}>
          <Link to='/tags' className={styles.headerTitleLink}>Tags</Link>
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
