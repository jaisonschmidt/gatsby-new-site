import styled from "styled-components"

export const LayoutDefault = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`
export const AsideWrapper = styled.div`
  background: ${props => props.theme.layout.sidebar};
  margin-right: 1rem;
  overflow: auto;
  width: 200px;
`

export const ContentWrapper = styled.div`
  background: ${props => props.theme.layout.content};
  width: 100%;
  overflow: auto;
  position: relative;
`

export const AvatarWrapper = styled.div`
  margin: 20px auto;
  text-align: center;

  > img {
    border-radius: 50%;
    width: 80px;
  }
`

export const BlogTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`

export const NavList = styled.ul``

export const NavItem = styled.li`
  &:hover {
    background-color: ${props => props.theme.clickable.primary.hover};
  }
  &:last-of-type a {
    border-bottom: ${props => props.theme.border.primary};
  }
`

export const NavLink = styled.a`
  border-top: ${props => props.theme.border.primary};
  color: ${props => props.theme.clickable.primary.color};
  display: block;
  font-size: 0.9rem;
  padding: 1rem;
  position: relative;
  text-align: center;
  text-decoration: none;

  &.active:before {
    background: ${props => props.theme.layout.highlight};
    content: " ";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
  }
`
export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`

export const SocialItem = styled.a`
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  width: 28px;

  > img {
    width: 70%;
    transition: width ease 0.2s;

    &:hover {
      width: 85%;
    }
  }
`

export const ContactInfo = styled.address`
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: center;
`
export const ThemeWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
`
export const BtnTheme = styled.button`
  background: ${props => props.theme.body.bg};
  border: transparent;
  padding: 0.4rem 0.8rem;

  > img {
    height: 20px;
    width: 20px;
  }
`
