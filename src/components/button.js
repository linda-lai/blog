import React from 'react'
import { Link } from 'gatsby'

import styles from '../styles/button.module.css'

const Button = props => {
  const { link, text } = props

  return (
    <button className={styles.button}>
      <Link to={link}>{text}</Link>
    </button>
  )
}

export default Button
