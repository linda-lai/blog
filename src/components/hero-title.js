import React from 'react'
import styles from '../styles/hero-title.module.css'

const HeroTitle = props => {
  const { title, description } = props
  return (
    <header className={styles.heroTitle}>
      <h1>{title}</h1>
      {
        description ?
          <h2>{description}</h2>
          : null
      }
    </header >
  )
}

export default HeroTitle
