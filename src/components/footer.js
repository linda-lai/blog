import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}{` `}
      <a
        href="https://www.linda-lai.com"
        target="_blank"
        rel='noreferrer noopener'>
        Linda Lai
      </a>,
      Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel='noreferrer noopener'>
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
