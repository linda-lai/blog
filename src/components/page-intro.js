import React from 'react'
import styles from '../styles/page-intro.module.css'

const PageIntro = () => {
  return (
    <div className={styles.pageIntro}>
      <h1>Hi, hello, hey! I'm Linda.</h1>
      {/* <div>
        <img src="https://source.unsplash.com/random/1600x500" alt=""/>
      </div> */}
      <h2>
        Often, I write code. Occasionally, I write about tech, pop culture, politics or any other flim-flam that piques my interest.
      </h2>
    </div>
  )
}

export default PageIntro