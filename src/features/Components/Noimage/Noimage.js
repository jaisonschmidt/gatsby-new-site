import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  const { noimage } = useStaticQuery(graphql`
    query {
      noimage: file(relativePath: { eq: "picture.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img fixed={noimage.childImageSharp.fixed} />
    </div>
  )
}
