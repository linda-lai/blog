import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

import styles from '../styles/archive.module.css'

const Archive = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title='Archive' />
      <HeroTitle
        title="Archive"
      />
      <Content>
        <h1>Archive</h1>
        <h4>{posts.length} posts</h4>
        <div className={styles.archiveTagsLink}>
          <Link to='/tags'>All Tags</Link>
        </div>
        <br />
        {posts.map(post => {
          const { frontmatter } = post.node
          return (
            <div className={styles.archivePostLink}>
              <Link to={frontmatter.path}>
                <h3>{frontmatter.title}</h3>
              </Link>
              <h4>{frontmatter.date}</h4>
            </div>
          )
        })}
      </Content>
    </Layout>
  )
}

Archive.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
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

export default Archive

export const archiveQuery = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            path
          }
        }
      }
    }
  }
`
