import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./BannerPhotoStyles"

// import ImageBanner from "../../../images/img-home.jpg"

const BannerPhoto = () => {
  const { ImagemPhoto } = useStaticQuery(graphql`
    query {
      ImagemPhoto: file(relativePath: { eq: "img-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 580) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <S.BannerWrapper>
      <S.ImageWrapper>
        <Img fluid={ImagemPhoto.childImageSharp.fluid} />
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.TextContent>
          <div className="labeltitle">Desenvolvedor Front-end</div>
          <div className="maintitle">Jaison Schmidt</div>
          <div>
            <p className="ptext">
              Seja bem-vindo ao meu site! Aqui procuro compartilhar informações
              e materiais que julgo interessantes para quem trabalha com
              desenvolvimento web. Embora meu foco seja front-end, as
              informações aqui contidas não se resumem a esta vertente, pois
              julgo importante estarmos alinhados com tecnologias diversas.
            </p>
            <p className="ptext">
              Sendo assim, compartilho informações genéricas e pertinentes.
              Aproveite para assistir algumas videoaulas ou realizar os estudos
              dirigidos. Caso tenha alguma sugestão ou dúvida basta entrar em
              contato!
            </p>
          </div>
        </S.TextContent>
      </S.TextWrapper>
    </S.BannerWrapper>
  )
}

export default BannerPhoto
