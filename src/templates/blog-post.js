import React from 'react'
import { graphql, Link } from "gatsby"
// import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import styles from '../styles/blog-post.module.css'

import Layout from "./layout"
import SEO from "../components/seo"

const Template = ({
  data, // this prop will be injected by the GraphQL query
}) => {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (

    <Layout>
      <SEO title={`${post.frontmatter.title}`} />
      <div className={styles.blogTemplateContainer}>
        <Helmet title={`${post.frontmatter.title}`}/>
        <div
          className={styles.blogTemplateContent}
          dangerouslySetInnerHTML={{ __html: post.html }}>
        </div>
        <Link to="/" className={styles.homeLink}>
            Home
        </Link>
      </div>
  </Layout>
  )
}

export default Template

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
