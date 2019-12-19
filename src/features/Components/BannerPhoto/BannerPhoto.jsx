import React from "react"

import * as S from "./BannerPhotoStyles"

import ImageBanner from "../../../images/img-home.jpg"

const BannerPhoto = () => {
  return (
    <S.BannerWrapper>
      <S.ImageWrapper>
        <img src={ImageBanner} width="100%" alt="imagem imbassai" />
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.TextContent>
          <div>Desenvolvedor Front-end</div>
          <div>Jaison Schmidt</div>
          <div>
            <p>
              Seja bem-vindo ao meu site! Aqui procuro compartilhar informações
              e materiais que julgo interessantes para quem trabalha com
              desenvolvimento web. Embora meu foco seja front-end, as
              informações aqui contidas não se resumem a esta vertente, pois
              julgo importante estarmos alinhados com tecnologias diversas.
            </p>
            <p>
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
