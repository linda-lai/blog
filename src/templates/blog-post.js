import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { Helmet } from 'react-helmet'
import styles from '../styles/blog-post.module.css'

import Layout from './layout'
import SEO from '../components/seo'

const BlogTemplate = ({
  data, // this prop will be injected by the GraphQL query
}) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      {console.log(data)}
      <SEO title={`${post.frontmatter.title}`} />
      <div className={styles.blogTemplateContainer}>
        <Helmet title={`${post.frontmatter.title}`}/>
        <div
          className={styles.blogTemplateContent}
          dangerouslySetInnerHTML={{ __html: post.html }}>
        </div>
        <Link to='/' className={styles.homeLink}>
            Home
        </Link>
      </div>
  </Layout>
  )
}

export default BlogTemplate

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      })
    }).isRequired
  })
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
