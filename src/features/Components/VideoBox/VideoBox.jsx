import React from "react"
import Img from "gatsby-image"

import * as S from "./VideoBoxStyles"

const VideoBox = ({ video }) => {
  console.log(video)
  return (
    <S.VideoBoxWrapper href={video.link} target="_blank">
      <Img
        fluid={video.img.childImageSharp.fluid}
        alt={`imagem para o curso de ${video.title}`}
      ></Img>
      <S.CourseTitle className="coursetitle">{video.title}</S.CourseTitle>
    </S.VideoBoxWrapper>
  )
}

export default VideoBox
