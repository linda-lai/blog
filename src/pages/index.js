import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

import { Helmet } from 'react-helmet'
import Img from "gatsby-image"

import styles from '../styles/index.module.css'

const Home = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title='Home' />
      <Helmet title={data.site.siteMetadata.title} />
      <HeroTitle
        title="Linda Lai"
      />
      <Content>
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
                  {/* {console.log(post.frontmatter.hero.childImageSharp.fluid)} */}
                  <h5 className={styles.blogDate}>
                    {post.frontmatter.date}
                  </h5>
                  <Link to={post.frontmatter.path}>
                    <Img
                      className={styles.blogPreviewImg}
                      fluid={post.frontmatter.preview.childImageSharp.fluid} />
                  </Link>
                  <div className={styles.blogExcerpt}>
                    <p>{post.excerpt}</p>
                  </div>
                  <Link
                    to={post.frontmatter.path}
                    className={styles.blogPostLink} >
                    More...
                </Link>
                </article>
              )
            })}
        </div>
      </Content>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              preview: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    src: PropTypes.string.isRequired
                  })
                })
              })
            })
          })
        })
      ).isRequired
    })
  })
}

export default Home

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            path
            preview {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
