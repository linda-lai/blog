import React from 'react'

import Layout from '../templates/layout'
import SEO from '../components/seo'

import styles from '../styles/about.module.css'
import logo from '../images/logo-lindalogical.png'

const About = () => {
  return (
    <Layout>
      <SEO title='About' />
      <div className={styles.about}>
        <h1>About Me</h1>
        <p>
          Hi, hello, hey! I'm Linda, a developing developer, code-blooded female and all round Hermione learning (and loving!) to code the software eating the world today. Perpetually curious, relentlessly enthusiastic and unabashedly dorky - that's me. A recent career changer into tech, I dipped my toes into the world of digital/development, found the water was warm, and haven't look back.
        </p>
        <p>
          Programming, puns, politics, pop culture and people - that's my jam.  Here you'll find an assortment of my musings and scribbles.
        </p>
        <img src={logo} alt="Lindalogical logo" className={styles.aboutLogo} />
      </div>
    </Layout>
  )
}

export default About
