import styled from "styled-components"

export const Section = styled.section`
  margin: 0 auto;
  max-width: 90%;
`

export const Title = styled.h2`
  border-bottom: 2px solid ${props => props.theme.layout.highlight};
  color: ${props => props.theme.text.color};
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  padding: 0.5rem 0;
`
