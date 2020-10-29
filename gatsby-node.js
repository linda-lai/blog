const path = require('path')
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`src/templates/tag.js`)

  const result = await graphql(`
  {
    postsRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          frontmatter {
            tags
            path
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
    })
  })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}