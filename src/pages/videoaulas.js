import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

import VideoList from "../features/Components/VideoList/VideoList"

import * as S from "../features/Styled/GlobalComponents.js"

export default ({ data }) => {
  const videoaulas = [
    {
      title: "Codeigniter",
      link: "http://google.com",
      img: data.codeigniter,
    },
    {
      title: "JavaScript",
      link: "http://google.com",
      img: data.javascript,
    },
    {
      title: "PHP",
      link: "http://google.com",
      img: data.php,
    },
    {
      title: "PHP",
      link: "http://google.com",
      img: data.php,
    },
  ]
  return (
    <LayoutDefault>
      <SEO
        title="Videoaulas"
        description="Conheça os cursos que produzi e estão disponíveis para visualização."
      />
      <S.Section>
        <S.Title marginTop="2rem">Videoaulas</S.Title>
        <S.PageDescription>
          Aqui você encontra alguns cursos em videoaula que produzi. Os mesmos
          estão hospedados na Udemy e alguns são gratuítos mas outros são pagos.
          Basta se cadastrar realizar os cursos.
        </S.PageDescription>

        <VideoList videos={videoaulas} />
      </S.Section>
    </LayoutDefault>
  )
}

export const query = graphql`
  query {
    codeigniter: file(relativePath: { eq: "videoaula/codeigniter.png" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    javascript: file(relativePath: { eq: "videoaula/javascript.png" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    php: file(relativePath: { eq: "videoaula/php.png" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
