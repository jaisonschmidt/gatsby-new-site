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

  > .labeltitle {
    font-size: 0.8rem;
  }

  > .maintitle {
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 1.5rem;
    padding-top: 0.2rem;
  }

  .ptext {
    font-size: 0.85rem;
    line-height: 1.2rem;
    padding-top: 1rem;
    text-align: justify;

    &:first-of-type {
      padding-top: 0;
    }
  }
`
