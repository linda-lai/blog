import React from 'react'
import styles from '../styles/hero-title.module.css'

const HeroTitle = props => {
  return (
    <header className={styles.heroTitle}>
      <h1>{props.title}</h1>
      {
        props.description ?
          <h2>{props.description}</h2>
          : null
      }
    </header >
  )
}

export default HeroTitle
