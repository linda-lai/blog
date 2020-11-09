import React from 'react'
import { Link } from 'gatsby'

import styles from '../styles/button.module.css'

const Button = props => (
  <button className={styles.button}>
    <Link to={props.link}>{props.text}</Link>
  </button>
)

export default Button