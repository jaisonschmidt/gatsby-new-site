import styled from "styled-components"

export const LayoutDefault = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`
export const AsideWrapper = styled.div`
  background: #fff;
  margin-right: 1rem;
  width: 160px;
`

export const ContentWrapper = styled.div`
  background: #fff;
  flex-grow: 1;
  overflow: auto;
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
    background-color: #fcfcfc;
  }
  &:last-of-type a {
    border-bottom: 1px solid #f5f5f5;
  }
`

export const NavLink = styled.a`
  border-top: 1px solid #f5f5f5;
  color: #333;
  display: block;
  font-size: 0.9rem;
  padding: 1rem;
  position: relative;
  text-align: center;
  text-decoration: none;

  &.active:before {
    background: #ff714a;
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
