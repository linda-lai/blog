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
        title={`Archive (${posts.length})`}
      />
      <Content>
        <button className={styles.archiveTagsButton}>
          <Link to='/tags'>All Tags</Link>
        </button>
        {posts.map(post => {
          const { frontmatter } = post.node
          return (
            <section className={styles.archivedPostLinks}>
              <p>{frontmatter.date}</p>
              <Link to={frontmatter.path}>
                <h3>{frontmatter.title}</h3>
              </Link>
            </section>
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
