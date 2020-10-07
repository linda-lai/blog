import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import { Helmet } from 'react-helmet'
import kebabCase from 'lodash/kebabCase'

import Layout from '../templates/layout'
import SEO from '../components/seo'

import styles from '../styles/tags.module.css'

const Tags = ({
  data: {
    allMarkdownRemark: { group },
  }
}) => (
    <Layout>
      <SEO title='Tags' />
      <div>
        <div>
          <h1>Tags</h1>
          <div className={styles.tagList}>
            {group.map(tag => (
              <div key={tag.fieldValue} className={styles.tag}>
                <Helmet title={tag.fieldValue} />
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    })
  })
}

export default Tags

export const tagQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
