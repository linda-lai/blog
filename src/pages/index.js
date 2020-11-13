import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

import { Helmet } from 'react-helmet'

import BlogPostCard from '../components/blog-card'

const Home = ({ data }) => {
  let { edges: posts } = data.allMarkdownRemark

  // Blog posts starting at index[0], up to (but not including) index[7]
  // posts = posts.slice(0, 7)

  const pageTitle = 'Home'
  const siteName = 'Linda Lai'
  const siteDescription = 'Hi, hello, hey.'

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Helmet title={data.site.siteMetadata.title} />
      <HeroTitle
        title={siteName}
      // description={siteDescription}
      />
      <Content>
        {
          posts.length === 0 && (
            <article>
              No posts :(
            </article>
          )
        }
        {
          posts.length > 0 && (
            <React.Fragment>
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <BlogPostCard
                      key={post.id}
                      post={post}
                    />
                  )
                })}
            </React.Fragment>
          )
        }
      </Content>
    </Layout >
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              preview: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    src: PropTypes.string.isRequired
                  })
                })
              })
            })
          })
        })
      ).isRequired
    })
  })
}

export default Home

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "aest")
            path
            hero {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
