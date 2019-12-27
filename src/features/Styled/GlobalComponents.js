import styled from "styled-components"

export const Btn = styled.a`
  border: 2px solid ${props => props.theme.layout.highlight};
  color: ${props => props.theme.text.color};
  cursor: pointer;
  display: inline-block;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  padding: 1rem 1.5rem;
  transition: all ease 0.5s;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.layout.highlight};
    color: ${props => props.theme.text.colorInverse};
  }
`

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
export const PageDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  padding: 1rem 0;
`
