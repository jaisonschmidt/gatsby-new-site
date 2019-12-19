// https://lmpixels.com/demo/kerge-html/version-1/#about-me

// TODO home - banner principal
// TODO home - listar últimos posts
// TODO Listar posts com páginação
// TODO página de POST

import React from "react"
// import { graphql } from "gatsby"

import SEO from "../features/Seo"
import LayoutDefault from "../features/Layouts/LayoutDefault"

import BannerPhoto from "../features/Components/BannerPhoto/BannerPhoto"

export default ({ data }) => {
  //const posts = data.allMarkdownRemark.edges

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

/*
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
*/
