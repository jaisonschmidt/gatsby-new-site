// https://lmpixels.com/demo/kerge-html/version-1/#about-me

// TODO Adiconar Netlify CMS
// TODO finalizar home

import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../features/Seo"
import LayoutDefault from "../features/Layouts/LayoutDefault"

import BannerPhoto from "../features/Components/BannerPhoto/BannerPhoto"

import Noimage from "../features/Components/Noimage/Noimage"

export default ({ data }) => {
  const posts = data.posts.edges

  console.log(posts)

  return (
    <LayoutDefault>
      <SEO
        title="Home"
        description="Blog sobre tecnologia, videoaulas, dicas e curriculum de Jaison Schmidt - desenvolvedor front-end residente em Passo Fundo - RS - Brazil"
      />
      <BannerPhoto />

      {posts.map(post => (
        <div key={post.node.id}>
          {post.node.frontmatter.image && (
            <Img fixed={post.node.frontmatter.image.childImageSharp.fixed} />
          )}

          {!post.node.frontmatter.image && <Noimage />}

          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </div>
      ))}
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { type: { eq: "blogpost" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY - HH:MM", locale: "pt-br")
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
        }
      }
    }
    notepad: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { type: { eq: "notepad" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY - HH:MM", locale: "pt-br")
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
        }
      }
    }
    estudodirigido: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
      filter: { frontmatter: { type: { eq: "estudodirigido" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY - HH:MM", locale: "pt-br")
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
        }
      }
    }
  }
`
