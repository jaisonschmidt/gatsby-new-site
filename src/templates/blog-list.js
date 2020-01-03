import React from "react"
import { graphql } from "gatsby"

import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

import PostList from "../features/Components/PostList/PostList"
import Pagination from "../features/Components/Pagination/Pagination"

import * as S from "../features/Styled/GlobalComponents.js"

export default ({ data, pageContext }) => {
  const posts = data.posts.edges

  const { currentPage, numPagesBlog } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPagesBlog
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

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

        <Pagination
          isFirst={isFirst}
          prevPage={prevPage}
          alias="blog"
          isLast={isLast}
          nextPage={nextPage}
          numPages={numPagesBlog}
          currentPage={currentPage}
        />
      </S.Section>
    </LayoutDefault>
  )
}

export const query = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: $limit
      skip: $skip
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
