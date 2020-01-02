import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import styles from '../styles/index.module.css'

import PageIntro from "../components/page-intro"

export default function Home({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <PageIntro />
      <div className={styles.blogFeed}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <article className={styles.blogPostPreview} key={post.id}>
                <div className={styles.blogPostTitleContainer}>
                  <h2 className={styles.blogPostTitle}>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                </div>
                <h5 className={styles.blogDate}>
                  {post.frontmatter.date}
                </h5>
                <Link to={post.frontmatter.path}>
                  <img src="https://source.unsplash.com/random/768x350" alt=""/>
                </Link>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link
                  to={post.frontmatter.path}
                  className={styles.blogPostLink} >
                  More...
                </Link>
              </article>
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
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            path
          }
        }
      }
    }
  }
`