import React from 'react'
import styles from '../styles/tags-button.module.css'
import { Link } from 'gatsby'


const AllTagsButton = () => (
  <button className={styles.allTagsButton}>
    <Link to='/tags'>All Tags</Link>
  </button>
)

export default AllTagsButton