import styled from "styled-components"

export const BannerWrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.home.bgBanner};
  display: flex;
`
export const ImageWrapper = styled.div`
  width: 40%;
  > img {
    width: 100%;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
`
export const TextContent = styled.div`
  max-width: 80%;
`
