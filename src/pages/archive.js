import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Archive = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="container">
        <SEO title="Archive" />
        <h1>Archive</h1>
        <h4>{posts.length} posts</h4>
        {posts.map(post => {
          const { frontmatter } = post.node
          return (
            <div className="">
              <Link to={frontmatter.path}>
                <h2>{frontmatter.title}</h2>
              </Link>
              <h4>{frontmatter.date}</h4>
              <Link to={frontmatter.path}>
                <img src="https://source.unsplash.com/random/400x200" alt=""/>
              </Link>
            </div>
          )
        })}
        <Link to="/">Go back to the homepage</Link>
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
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

export default Archive