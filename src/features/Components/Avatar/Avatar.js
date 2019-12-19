import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img fixed={avatar.childImageSharp.fixed} />
    </div>
  )
}
