import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '../styles/navigation.module.css'

const Navigation = () => (
  <nav className={styles.siteNav}>
    <ul className={styles.siteNavList}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/archive'>Archive</Link>
      </li>
      <li>
        <Link to='/tags'>Tags</Link>
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
