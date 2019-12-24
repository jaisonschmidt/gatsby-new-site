// https://lmpixels.com/demo/kerge-html/version-1/#about-me

// TODO finalizar home
// TODO criar listagem de POSTS
// TODO criar listagem de Notepad
// TODO criar
// TODO Adiconar Netlify CMS

import React from "react"
import { graphql } from "gatsby"

import SEO from "../features/Seo"
import LayoutDefault from "../features/Layouts/LayoutDefault"

import BannerPhoto from "../features/Components/BannerPhoto/BannerPhoto"
import PostList from "../features/Components/PostList/PostList"

import * as S from "../features/Styled/GlobalComponents.js"

export default ({ data }) => {
  const posts = data.posts.edges
  const notepad = data.notepad.edges

  return (
    <LayoutDefault>
      <SEO
        title="Home"
        description="Blog sobre tecnologia, videoaulas, dicas e curriculum de Jaison Schmidt - desenvolvedor front-end residente em Passo Fundo - RS - Brazil"
      />

      <BannerPhoto />

      <S.Section>
        <S.Title marginTop="2rem" marginBottom="2rem">
          Posts mais recentes
        </S.Title>
        <PostList posts={posts} />
      </S.Section>

      <S.Section>
        <S.Title marginBottom="2rem">Notepad</S.Title>
        <PostList posts={notepad} />
      </S.Section>
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
      filter: { frontmatter: { type: { eq: "blogpost" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY - HH:MM", locale: "pt-br")
            image {
              childImageSharp {
                fixed(width: 90, height: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
      limit: 2
      filter: { frontmatter: { type: { eq: "notepad" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY - HH:MM", locale: "pt-br")
            image {
              childImageSharp {
                fixed(width: 90, height: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
            description
            date(formatString: "DD MMMM, YYYY - HH:MM", locale: "pt-br")
            image {
              childImageSharp {
                fixed(width: 90, height: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
