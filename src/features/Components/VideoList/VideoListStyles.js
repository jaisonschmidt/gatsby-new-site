import styled from "styled-components"
import media from "styled-media-query"

export const VideoListWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
