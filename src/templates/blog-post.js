import React from "react"
import { graphql } from "gatsby"
import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <LayoutDefault>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
      excerpt
    }
  }
`
