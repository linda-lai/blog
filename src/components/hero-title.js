import React from 'react'
import styles from '../styles/hero-title.module.css'

const HeroTitle = (props) => {
  return (
    <div className={styles.heroTitle}>
      <div className="heroTitleWrapper">
        <h1>
          {props.title}
        </h1>
        <h2>{props.description}</h2>
      </div>
    </div >
  )
}

export default HeroTitle
