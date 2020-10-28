import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

import { Helmet } from 'react-helmet'

import styles from '../styles/index.module.css'

const Home = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  const formatDate = date => new Date(date).toDateString()

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
                  <h2 className={styles.blogDate}>
                    {formatDate(post.frontmatter.date)}
                  </h2>
                  <h2 className={styles.blogPostTitle}>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <div className={styles.blogExcerpt}>
                    <p>{post.excerpt}</p>
                  </div>
                </article>
              )
            })}
        </div>
      </Content>
    </Layout >
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
              path: PropTypes.string.isRequired
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
            date(formatString: "DD MMMM YYYY", locale: "aest")
            path
          }
        }
      }
    }
  }
`
