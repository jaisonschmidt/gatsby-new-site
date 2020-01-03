const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })

    // console.log(slug)

    let tmpSlug = slug.replace("post--", "")
    tmpSlug = tmpSlug.replace("estudodirigido--", "")
    tmpSlug = tmpSlug.replace("notepad--", "")

    // console.log(tmpSlug)

    createNodeField({
      node,
      name: `slug`,
      value: `/${tmpSlug.slice(12)}`,
    })

    fmImagesToRelative(node)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const resultBlogPosts = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const resultNotepadPosts = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "notepad" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  let posts = result.data.allMarkdownRemark.edges
  let blogPosts = resultBlogPosts.data.allMarkdownRemark.edges
  let notepadPosts = resultNotepadPosts.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create blog post list pages
  const postsPerPage = 8
  const numPagesBlog = Math.ceil(blogPosts.length / postsPerPage)
  const numPagesNotepad = Math.ceil(notepadPosts.length / postsPerPage)

  Array.from({ length: numPagesBlog }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPagesBlog,
        currentPage: i + 1,
      },
    })
  })

  Array.from({ length: numPagesNotepad }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/notepad` : `/notepad/${i + 1}`,
      component: path.resolve("./src/templates/notepad-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPagesNotepad,
        currentPage: i + 1,
      },
    })
  })
}
