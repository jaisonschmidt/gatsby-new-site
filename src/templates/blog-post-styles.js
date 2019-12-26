import styled from "styled-components"

export const BlogPostWrapper = styled.section`
  margin: 0 auto;
  max-width: 680px;
  width: 100%;

  a,
  a:active,
  a:visited {
    color: ${props => props.theme.text.color};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 1.5rem 0;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    line-height: 1.4;
  }

  p,
  .gatsby-highlight {
    margin-bottom: 2rem;
  }
`
