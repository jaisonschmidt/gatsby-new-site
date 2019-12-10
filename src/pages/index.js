// https://lmpixels.com/demo/kerge-html/version-1/#about-me

// TODO Criar LayoutDefault - menu lateral e central
// TODO criar paginas - home, notepad, guidedstudies, videos , about
// TODO implementar transição entre as páginas
// TODO

import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../features/Seo"
import LayoutDefault from "../features/Layouts/LayoutDefault"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <LayoutDefault>
      <SEO title="Home" description="breve descrição da página" />
      <p>Home</p>
      <img src="https://via.placeholder.com/400x200" alt="" />

      {posts.map((post, i) => (
        <div key={i}>
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          <div>{post.node.frontmatter.date}</div>
        </div>
      ))}
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY - HH:MM", locale: "pt-br")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
