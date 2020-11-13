import React from 'react'

import locationIcon from '../assets/location.svg'
import githubIcon from '../assets/github.svg'
import linkedInIcon from '../assets/linkedin.svg'
import twitterIcon from '../assets/twitter.svg'

import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerIcons}>
        <a href="https://www.linda-lai.com"
          target='_blank'
          rel='noreferrer noopener'
        >
          <img src={locationIcon} alt="" />
        </a>
        <a href="https://github.com/linda-lai"
          target='_blank'
          rel='noreferrer noopener'
        >
          <img src={githubIcon} alt="" />
        </a>
        <a href="https://twitter.com/lindalogical"
          target='_blank'
          rel='noreferrer noopener'
        >
          <img src={twitterIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/lindalai"
          target='_blank'
          rel='noreferrer noopener'
        >
          <img src={linkedInIcon} alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
