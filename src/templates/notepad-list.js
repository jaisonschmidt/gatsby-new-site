import React from "react"
import { graphql } from "gatsby"

import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

import PostList from "../features/Components/PostList/PostList"
import Pagination from "../features/Components/Pagination/Pagination"

import * as S from "../features/Styled/GlobalComponents.js"

export default ({ data, pageContext }) => {
  console.log(pageContext)

  const posts = data.posts.edges

  const { currentPage, numPagesNotepad } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPagesNotepad
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

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

        <Pagination
          isFirst={isFirst}
          prevPage={prevPage}
          alias="notepad"
          isLast={isLast}
          nextPage={nextPage}
          numPages={numPagesNotepad}
          currentPage={currentPage}
        />
      </S.Section>
    </LayoutDefault>
  )
}

export const query = graphql`
  query notepadPageQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "notepad" } } }
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
