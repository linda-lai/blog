import React from "react"
import PropTypes from "prop-types"

import Layout from '../templates/layout'
import styles from '../styles/tags.module.css'

import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <div className={styles.allTag}>
          <Link to="/tags">All Tags</Link>
        </div>
        <br />
        <div >
          {edges.map(({ node }) => {
            const { title, path, date } = node.frontmatter
            return (
              <div key={path} className={styles.taggedArticle}>
                <Link to={path}>
                  <h3>
                    {title}
                  </h3>
                </Link>
                <h4>{date}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`
