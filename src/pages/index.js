import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../templates/layout'
import styles from '../styles/index.module.css'

import Intro from '../components/intro'

const Home = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <Intro />
      <div className={styles.blogFeed}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <article className={styles.blogPostPreview} key={post.id}>
                <div className={styles.blogPostTitleContainer}>
                  <h2 className={styles.blogPostTitle}>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                </div>
                <h5 className={styles.blogDate}>
                  {post.frontmatter.date}
                </h5>
                <Link to={post.frontmatter.path}>
                  <img src='https://source.unsplash.com/random/768x400' alt=''/>
                </Link>
                {/* <img src={post.frontmatter.hero.childImageSharp.fluid.src} alt=''/> */}
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link
                  to={post.frontmatter.path}
                  className={styles.blogPostLink} >
                  More...
                </Link>
              </article>
            )
          })}
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            path
            hero {
              childImageSharp {
                fluid(maxWidth: 800) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`
