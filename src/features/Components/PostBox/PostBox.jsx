import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Noimage from "../Noimage/Noimage"

import * as S from "./PostBoxStyles"

const PostBox = props => {
  const { post } = props
  return (
    <S.PostBoxWrapper as={Link} to={post.node.fields.slug} key={post.node.id}>
      <S.TitleWrapper>
        <S.PostTitle>{post.node.frontmatter.title}</S.PostTitle>
        <S.PostDescription>
          {post.node.frontmatter.description}
        </S.PostDescription>
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
