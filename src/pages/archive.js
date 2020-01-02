import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from '../styles/archive.module.css'

const Archive = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="container">
        <SEO title="Archive" />
        <h1>Archive</h1>
        <h4>{posts.length} posts</h4>
        <div className={styles.archiveTagsLink}>
          <Link to="/tags">All Tags</Link>
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
      </div>
    </Layout>
  )
}

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

export default Archive