import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import PageIntro from "../components/page-intro"

export default function Home({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="blog-posts">
        <PageIntro />
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
                <Link to={post.frontmatter.path}>
                  <img src="https://source.unsplash.com/random/400x200" alt=""/>
                </Link>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
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