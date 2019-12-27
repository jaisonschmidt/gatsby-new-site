import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Noimage from "../Noimage/Noimage"

import * as S from "./PostBoxStyles"

const PostBox = props => {
  const { post } = props
  return (
    <S.PostBoxWrapper as={Link} to={post.node.fields.slug} key={post.node.id}>
      <S.TitleWrapper className="titlewrapper">
        <S.PostTitle>{post.node.frontmatter.title}</S.PostTitle>
        <S.PostDescription>
          {post.node.frontmatter.description}
        </S.PostDescription>
        <S.TimeToReadWrapper>
          {post.node.frontmatter.date} - Leia em {post.node.timeToRead} minuto
          {post.node.timeToRead > 1 && "s"}
        </S.TimeToReadWrapper>
      </S.TitleWrapper>
      <S.ImageWrapper>
        {post.node.frontmatter.image && (
          <Img fixed={post.node.frontmatter.image.childImageSharp.fixed} />
        )}

        {!post.node.frontmatter.image && <Noimage />}
      </S.ImageWrapper>
    </S.PostBoxWrapper>
  )
}

export default PostBox
