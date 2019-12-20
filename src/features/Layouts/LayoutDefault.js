import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeProvider } from "styled-components"

import Config from "../../config"
import GlobalStyle from "../../GlobalStyle"
import * as S from "./LayoutDefaultStyles"

import FacebookIcon from "../../images/social/facebook.svg"
import InstagramIcon from "../../images/social/instagram.svg"
import LinkedinIcon from "../../images/social/linkedin.svg"
import GithubIcon from "../../images/social/github.svg"
import DarkIcon from "../../images/dark-icon.svg"
import LightIcon from "../../images/light-icon.svg"

import Avatar from "../Components/Avatar/Avatar"

export default ({ children }) => {
  let storageTheme = localStorage.getItem("jaisoncombr-lastTheme")

  const [theme, setTheme] = useState(
    storageTheme === null ? Config.themeDefault : parseInt(storageTheme)
  )

  useEffect(() => {
    localStorage.setItem("jaisoncombr-lastTheme", theme)
  }, [theme])

  return (
    <ThemeProvider theme={Config.themes[theme].scheme}>
      <S.LayoutDefault>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <S.AsideWrapper>
          <S.AvatarWrapper>
            <Avatar />
          </S.AvatarWrapper>

          <S.BlogTitle>Jaison Schmidt</S.BlogTitle>

          <S.NavList role="navigation" aria-label="Menu Principal">
            {Config.menuItens.map((item, i) => (
              <S.NavItem key={i}>
                <S.NavLink
                  as={AniLink}
                  paintDrip
                  duration={0.4}
                  hex={Config.themes[theme].scheme.body.bg}
                  to={item.to}
                  activeClassName="active"
                >
                  {item.label}
                </S.NavLink>
              </S.NavItem>
            ))}
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

          <S.ThemeWrapper>
            {theme === 0 && (
              <S.BtnTheme
                onClick={() => setTheme(1)}
                title="Alterar para dark mode"
              >
                <img src={DarkIcon} alt="Dark mode" />
              </S.BtnTheme>
            )}

            {theme === 1 && (
              <S.BtnTheme
                onClick={() => setTheme(0)}
                title="Alterar para light mode"
              >
                <img src={LightIcon} alt="Light mode" />
              </S.BtnTheme>
            )}
          </S.ThemeWrapper>
        </S.AsideWrapper>

        <S.ContentWrapper>{children}</S.ContentWrapper>
        <GlobalStyle />
      </S.LayoutDefault>
    </ThemeProvider>
  )
}
