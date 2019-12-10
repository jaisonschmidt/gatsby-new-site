import React from "react"
import { graphql } from "gatsby"

import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

export default ({ data }) => (
  <LayoutDefault>
    <SEO title="About" description="página de about jesus maria josé" />
    <p>{data.site.siteMetadata.title}</p>
    <p>About</p>
  </LayoutDefault>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
