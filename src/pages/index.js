// https://lmpixels.com/demo/kerge-html/version-1/#about-me

// TODO descobrir como usar uma imagem destaque no markdown e como tratar imagens em posts
// TODO finalizar home

import React from "react"
import { graphql } from "gatsby"

import SEO from "../features/Seo"
import LayoutDefault from "../features/Layouts/LayoutDefault"

import BannerPhoto from "../features/Components/BannerPhoto/BannerPhoto"

export default props => {
  //const posts = props.data.allMarkdownRemark.edges
  console.log(props)

  return (
    <LayoutDefault>
      <SEO
        title="Home"
        description="Blog sobre tecnologia, videoaulas, dicas e curriculum de Jaison Schmidt - desenvolvedor front-end residente em Passo Fundo - RS - Brazil"
      />
      <BannerPhoto />
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { type: { eq: "blogpost" } } }
    ) {
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
    notepad: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { type: { eq: "notepad" } } }
    ) {
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
    estudodirigido: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { type: { eq: "estudodirigido" } } }
    ) {
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
