import React from "react"
import * as S from "./PostListStyles"

import PostBox from "../PostBox/PostBox"

const PostList = ({ posts }) => {
  return (
    <S.PostListWrapper>
      {posts.map((post, i) => (
        <PostBox key={i} post={post} />
      ))}
    </S.PostListWrapper>
  )
}

export default PostList
