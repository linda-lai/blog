import React from 'react'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

import styles from '../styles/about.module.css'
import logo from '../images/logo-lindalogical.png'

const About = () => {
  const pageTitle = 'About'
  return (
    <Layout>
      <SEO title={pageTitle} />
      <HeroTitle
        title={pageTitle}
      />
      <Content>
        <p>
          Lorem ipsum dolor amet truffaut lyft farm-to-table, sartorial chartreuse jianbing subway tile offal cold-pressed sriracha <span>stumptown</span> drinking vinegar. Kombucha pitchfork drinking vinegar, chia gentrify salvia typewriter waistcoat keytar vape messenger bag etsy kickstarter intelligentsia blog. Tumblr brooklyn whatever try-hard authentic. Salvia hella bespoke, keffiyeh echo park beard everyday carry semiotics scenester pitchfork roof party. Offal deep v meh tbh. Gentrify 90's vice selvage shaman, neutra pour-over. Chartreuse franzen jianbing, succulents pok pok air plant freegan humblebrag.

        </p>
        <p>
          Lorem ipsum dolor amet truffaut lyft farm-to-table, sartorial chartreuse jianbing subway tile offal cold-pressed sriracha <span>stumptown</span> drinking vinegar. Kombucha pitchfork drinking vinegar, chia gentrify salvia typewriter waistcoat keytar vape messenger bag etsy kickstarter intelligentsia blog. Tumblr brooklyn whatever try-hard authentic. Salvia hella bespoke, keffiyeh echo park beard everyday carry semiotics scenester pitchfork roof party. Offal deep v meh tbh. Gentrify 90's vice selvage shaman, neutra pour-over. Chartreuse franzen jianbing, succulents pok pok air plant freegan humblebrag.

        </p>
        <img src={logo} alt="Logo for Linda Lai" className={styles.aboutLogo} />
      </Content>
    </Layout>
  )
}

export default About
