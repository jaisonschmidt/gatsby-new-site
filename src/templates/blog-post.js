import React from "react"
import Img from "gatsby-image"
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
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <S.BlogPostWrapper>
        <G.Btn onClick={() => window.history.back()} marginTop="1rem">
          Voltar
        </G.Btn>
        <h1>{post.frontmatter.title}</h1>
        <S.ImageWrapper>
          <Img
            fluid={post.frontmatter.image.childImageSharp.fluid}
            alt={`imagem principal do post ${post.frontmatter.title}`}
          />
        </S.ImageWrapper>
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
        image {
          childImageSharp {
            fluid(maxWidth: 580) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      excerpt
    }
  }
`
