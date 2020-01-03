import React from 'react'
import Layout from '../templates/layout'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>About Me</h1>
        <p>
          Hi, hello, hey! I'm Linda. Programming, puns and people - that's my jam. After feeling restless and dissatisfied with my career trajectory a few years ago, I began dipping my toes into digital and development eating the world today, found the water was warm, and haven't look back. I took the plunge and recently completed a Diploma of Information Technology at Coder Academy learning full-stack with Ruby/Rails, JavaScript and the MERN stack.
        </p>
      </div>
    </Layout>
  )
}

export default About
