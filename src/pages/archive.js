import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

import Button from '../components/button'

import styles from '../styles/archive.module.css'

const Archive = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const pageTitle = 'Archive'

  return (
    <Layout>
      <SEO title={pageTitle} />
      <HeroTitle
        title={`${pageTitle} [${posts.length}]`}
      />
      <Content>
        <Button
          key="tags"
          link="/tags"
          text="All Tags"
        />
        {posts.map(post => {
          const { frontmatter } = post.node
          return (
            <article className={styles.archivedPost}>
              <p className="date">
                <Link to={frontmatter.path}>
                  {frontmatter.date}
                </Link>
              </p>
              <h3 className={styles.archivedPostTitle}>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h3>
              <p></p>
            </article>
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
            date(formatString: "DD MMMM YYYY", locale: "aest")
            path
          }
        }
      }
    }
  }
`
