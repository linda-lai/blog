import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '../styles/navigation.module.css'

const Navigation = () => (
  <nav className={styles.siteNav}>
    <ul className={styles.siteNavList}>
      <li className={styles.siteNavListItem}>
        <Link to='/' className={styles.siteNavListLink}>Home</Link>
      </li>
      <li className={styles.siteNavListItem}>
        <Link to='/about' className={styles.siteNavListLink}>About</Link>
      </li>
      <li className={styles.siteNavListItem}>
        <Link to='/archive' className={styles.siteNavListLink}>Archive</Link>
      </li>
      <li className={styles.siteNavListItem}>
        <Link to='/tags' className={styles.siteNavListLink}>Tags</Link>
      </li>
    </ul>
  </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
