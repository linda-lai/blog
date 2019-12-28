import React from 'react'
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
// import '../css/blog-post.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title}`}/>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}>
      </div>
    </div>
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