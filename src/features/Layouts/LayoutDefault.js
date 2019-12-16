import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import GlobalStyle from "../../GlobalStyle"
import * as S from "./LayoutDefaultStyles"

import Avatar from "../../images/avatar.jpg"
import FacebookIcon from "../../images/social/facebook.svg"
import InstagramIcon from "../../images/social/instagram.svg"
import LinkedinIcon from "../../images/social/linkedin.svg"
import GithubIcon from "../../images/social/github.svg"

export default ({ children }) => {
  return (
    <S.LayoutDefault>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <S.AsideWrapper>
        <S.AvatarWrapper>
          <img src={Avatar} alt="foto de jaison schmidt" />
        </S.AvatarWrapper>
        <S.BlogTitle>Jaison Schmidt</S.BlogTitle>

        <S.NavList role="navigation" aria-label="Menu Principal">
          <S.NavItem>
            <S.NavLink as={Link} to="/" activeClassName="active">
              Home
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink as={Link} to="/videoaulas/" activeClassName="active">
              Videoaulas
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink
              as={Link}
              to="/estudo-dirigido/"
              activeClassName="active"
            >
              Estudo dirigido
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink as={Link} to="/notepad/" activeClassName="active">
              Notepad
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink as={Link} to="/about/" activeClassName="active">
              Sobre
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink as={Link} to="/contact/" activeClassName="active">
              Contato
            </S.NavLink>
          </S.NavItem>
        </S.NavList>

        <S.SocialWrapper>
          <S.SocialItem href="https://www.facebook.com/jaison.schmidt">
            <img src={FacebookIcon} alt="icone facebook" />
          </S.SocialItem>
          <S.SocialItem href="https://www.instagram.com/jaisonschmidt/">
            <img src={InstagramIcon} alt="icone instagram" />
          </S.SocialItem>
          <S.SocialItem href="https://www.linkedin.com/in/jaison-schmidt-19b80725/">
            <img src={LinkedinIcon} alt="icone Linkedin" />
          </S.SocialItem>
          <S.SocialItem href="https://github.com/jaisonschmidt?tab=repositories">
            <img src={GithubIcon} alt="icone github" />
          </S.SocialItem>
        </S.SocialWrapper>

        <S.ContactInfo>
          <div>Fone: (54) 9 9977 66 48</div>
          <div>Passo Fundo - RS</div>
        </S.ContactInfo>
      </S.AsideWrapper>

      <S.ContentWrapper>{children}</S.ContentWrapper>
      <GlobalStyle />
    </S.LayoutDefault>
  )
}
