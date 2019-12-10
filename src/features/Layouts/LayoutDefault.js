import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Header from "../Header/Header"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <Header headerText={data.site.siteMetadata.title} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>

      {children}
    </>
  )
}
