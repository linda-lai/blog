import React from 'react'
import styles from '../styles/hero-title.module.css'

const HeroTitle = (props) => {
  return (
    <header className={styles.heroTitle}>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </header >
  )
}

export default HeroTitle
