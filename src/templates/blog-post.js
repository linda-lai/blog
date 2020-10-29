import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import { Helmet } from 'react-helmet'
import styles from '../styles/blog-post.module.css'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

const BlogTemplate = ({
  data, // this prop will be injected by the GraphQL query
}) => {
  const { markdownRemark: post } = data
  let featuredImgFluid = post.frontmatter.hero.childImageSharp.fluid
  deckDeckGoHighlightElement()

  return (
    <Layout>
      <SEO title={`${post.frontmatter.title}`} />
      <HeroTitle
        title={post.frontmatter.title}
      />
      <Content>
        <Helmet title={`${post.frontmatter.title}`} />
        <Img fluid={featuredImgFluid} />
        <div
          className={styles.blogTemplateBody}
          dangerouslySetInnerHTML={{ __html: post.html }}>
        </div>
      </Content>
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
    })
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
        hero {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
