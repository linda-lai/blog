import React from 'react'
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
// import '../css/blog-post.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (

    <Layout>
      <SEO title="Page two" />
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title}`}/>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}>
        </div>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`