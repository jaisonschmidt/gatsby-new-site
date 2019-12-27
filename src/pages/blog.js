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
        title="Blog"
        description="Aqui você encontra uma listagem completa de todos os posts do blog."
      />

      <S.Section>
        <S.Title marginTop="2rem">Blog</S.Title>

        <S.PageDescription>
          Nesta seção você encontra posts mais completos, contendo informações
          mais detalhadas sobre frameworks, front-end e tudo mais!
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
      filter: { frontmatter: { type: { eq: "blogpost" } } }
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
