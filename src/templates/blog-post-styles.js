import styled from "styled-components"
import media from "styled-media-query"

export const BlogPostWrapper = styled.section`
  margin: 0 auto;
  max-width: 680px;
  width: 100%;

  ${media.lessThan("medium")`
    padding: 1rem;
  `}
`
export const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`
