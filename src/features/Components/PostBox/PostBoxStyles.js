import styled from "styled-components"
import media from "styled-media-query"

export const PostBoxWrapper = styled.div`
  color: ${props => props.theme.text.color};
  position: relative;
  text-decoration: none;
  width: 48%;

  ${media.lessThan("medium")`
    width: 100%;
  `}

  &:hover .titlewrapper {
    background: ${props => props.theme.layout.highlight};
    color: ${props => props.theme.text.colorInverse};
  }
`

export const TitleWrapper = styled.div`
  border: ${props => props.theme.border.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  padding: 1rem;
  padding-left: 3rem;
  transition: all ease 0.5s;
`

export const ImageWrapper = styled.div`
  position: relative;
  > div {
    border-radius: 50%;
    position: absolute;
    top: -40px;
    overflow: hidden;
  }
`
export const PostTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const PostDescription = styled.div`
  font-size: 0.7rem;
  font-style: italic;
`
export const TimeToReadWrapper = styled.div`
  font-size: 0.6rem;
  padding-top: 1rem;
`
