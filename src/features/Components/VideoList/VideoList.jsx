import React from "react"
import * as S from "./VideoListStyles"

import VideoBox from "../VideoBox/VideoBox"

const VideoList = ({ videos }) => {
  return (
    <S.VideoListWrapper>
      {videos.map((video, i) => (
        <VideoBox video={video} key={i} />
      ))}
    </S.VideoListWrapper>
  )
}

export default VideoList
