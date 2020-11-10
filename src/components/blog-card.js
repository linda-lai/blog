import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import styles from '../styles/blog-card.module.css'

const BlogPostCard = props => {
  const formatDate = date => new Date(date).toDateString()
  const { post } = props

  return (
    <article className={styles.blogPostPreview}>
      <p className="date">
        <Link to={post.frontmatter.path}>
          {formatDate(post.frontmatter.date)}
        </Link>
      </p>
      <h3 className={styles.blogPostTitle}>
        <Link to={post.frontmatter.path}>
          {post.frontmatter.title}
        </Link>
      </h3>
      <Link to={post.frontmatter.path} >
        <Img
          className={styles.blogPreviewImg}
          fluid={post.frontmatter.hero.childImageSharp.fluid} />
      </Link>
      <p className={styles.blogExcerpt}>
        {post.excerpt}
      </p>
    </article>
  )
}

export default BlogPostCard