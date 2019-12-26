import React from "react"
import { graphql } from "gatsby"
import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

import * as S from "./blog-post-styles"
import * as G from "../features/Styled/GlobalComponents"

export default props => {
  const post = props.data.markdownRemark
  console.log(props)
  return (
    <LayoutDefault>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <S.BlogPostWrapper>
        <G.Btn onClick={() => window.history.back()} marginTop="1rem">
          Voltar
        </G.Btn>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <G.Btn onClick={() => window.history.back()} marginTop="1rem">
          Voltar
        </G.Btn>
      </S.BlogPostWrapper>
    </LayoutDefault>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      html
      excerpt
    }
  }
`
