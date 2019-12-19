import React from "react"
import { graphql } from "gatsby"
import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

export default ({ data }) => {
  const files = data.allFile.edges
  console.log(files)
  return (
    <LayoutDefault>
      <SEO
        title="Contato"
        description="pagina de contato para clientes usarem o contato do site"
      />
      <p>Contato</p>
      {files.map(({ node: { name } }, i) => (
        <div key={i}>{name}</div>
      ))}
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          base
          accessTime
          prettySize
          name
        }
      }
    }
  }
`
