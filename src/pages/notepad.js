import React from "react"
import { graphql } from "gatsby"

import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

import PostList from "../features/Components/PostList/PostList"

import * as S from "../features/Styled/GlobalComponents.js"

export default ({ data }) => {
  const posts = data.posts.edges
  return (
    <LayoutDefault>
      <SEO
        title="Notepad"
        description="Notepad são dicas rápidas e breves anotações sobre tecnologias, frameworks e afins!"
      />

      <S.Section>
        <S.Title marginTop="2rem">Notepad</S.Title>
        <S.PageDescription>
          Nesta seção você encontra pequenas dicas e posts rápidos contendo,
          geralmente, dicas e anotações que seguido necessitamos!
        </S.PageDescription>
        <PostList posts={posts} />
      </S.Section>
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "notepad" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY", locale: "pt-br")
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
          timeToRead
        }
      }
    }
  }
`
