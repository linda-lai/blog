import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import kebabCase from 'lodash/kebabCase'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

import Button from '../components/button'

import styles from '../styles/tags.module.css'

const Tags = ({
  data: {
    allMarkdownRemark: { group },
  }
}) => {

  const pageTitle = "All Tags"
  return (
    <Layout>
      <SEO title={pageTitle} />
      <HeroTitle title={pageTitle} />
      <Content>
        <div className={styles.tagsList}>
          {group.map(tag => (
            <Button
              key={tag.fieldValue}
              link={`/tags/${kebabCase(tag.fieldValue)}/`}
              text={`"${tag.fieldValue}" [${tag.totalCount}]`}
            />
          ))}
        </div>
      </Content>
    </Layout >
  )
}

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
