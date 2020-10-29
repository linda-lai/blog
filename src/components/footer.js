import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      By
      {` `}
      <a
        href='https://www.linda-lai.com'
        target='_blank'
        rel='noreferrer noopener'>
        Linda Lai
      </a>
      ,
      {` `}
      say 👋 on
      {` `}
      <a
        href='https://github.com/linda-lai'
        target='_blank'
        rel='noreferrer noopener'>
        GitHub
      </a>
      ,
      {` `}
      <a
        href='https://twitter.com/lindalogical'
        target='_blank'
        rel='noreferrer noopener'>
        Twitter
      </a>
      {` `}
      or
      {` `}
      <a
        href='https://www.linkedin.com/in/lindalai'
        target='_blank'
        rel='noreferrer noopener'>
        LinkedIn
      </a>
    </footer>
  )
}

export default Footer
