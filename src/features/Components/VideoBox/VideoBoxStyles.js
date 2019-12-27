import styled from "styled-components"
import media from "styled-media-query"

export const VideoBoxWrapper = styled.a`
  margin-bottom: 2rem;
  position: relative;
  width: 30%;

  ${media.lessThan("medium")`
    width: 100%;
  `}

  > img {
    width: 100%;
  }

  &:hover .coursetitle {
    background: ${props => props.theme.layout.highlight};
    color: ${props => props.theme.text.colorInverse};
  }
`
export const CourseTitle = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: table;
  font-weight: 600;
  left: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  top: 0.5rem;
  transition: all ease 0.5s;
`
