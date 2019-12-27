import React from "react"

import LayoutDefault from "../features/Layouts/LayoutDefault"
import SEO from "../features/Seo"

import * as S from "../features/Styled/GlobalComponents.js"

export default () => (
  <LayoutDefault>
    <SEO
      title="Sobre"
      description="Aqui você encontra algumas informações sobre minha pessoa, em especial um breve textinho de apresentação"
    />
    <S.Section>
      <S.Title marginTop="2rem" marginBottom="2rem">
        Sobre
      </S.Title>
      <S.PageDescription>
        Olá, como você já deve ter visto, me chamo Jaison Schmidt. Trabalho como
        desenvolvedor front-end desde sempre e estou sempre em busca de novos
        conhecimentos, sendo este o objetivo do site, simplesmente anotar e
        compartilhar informações que julgo pertinentes a profissão.
      </S.PageDescription>
      <S.Title marginBottom="2rem">Informações profissionais</S.Title>
      <p>
        Trabalho na Compasso UOL Diveo como desenvolvedor front-end, onde atuo
        mais específicamente com e-commerce e desenvolvimento que envolva
        recursos de fron-end tais como CSS (Less ou Sass), HTML5 e Javascript
        mas sem estar atrelado a frameworks ou tecnologias especificas.
      </p>
      <p>
        Meu foco atual está em frameworks organizacionais (React, Vue e
        Angular), Micro frontend e geradores de conteúdo estático, em especial o
        Gatsby que utilizei para criar este site.
      </p>
      <p>
        Gosto também de tecnologias de backend, em especial NodeJS ou recursos
        Cloud, como AWS, Firebase, Netlify e Heroku. Outra stack que usei por um
        longo tempo foi PHP e MySQL para desenvolvimento de sites dinâmicos.
      </p>
      <p>
        Sinceramente já perdi as contas de quantos projetos já participei, mas
        sintetizei os maiores em meu Linkedin. Inclusive lá você encontra minhas
        experiências, qualificações e certificações.
      </p>
      <p>
        Um breve resumo das tecnologias que gosto: HTML, CSS (Less / Sass),
        JavaScript Puro (jQuery também), React, GIT, NodeJS, PHP, MySQL. Algumas
        tecnologias auxilires que uso com frequência: Gulp, Styled Components,
        Styled Media Queries, Github, AngularJS, Angular e VueJS. Como hobbie
        tenho estudado Flutter e Dart para um projeto pessoal. :-)
      </p>
      <p>
        <S.Btn
          href="https://www.linkedin.com/in/jaison-schmidt-19b80725/"
          target="_blank"
        >
          Acesse meu Linkedin
        </S.Btn>
      </p>
      <S.Title marginBottom="2rem">Informações pessoais</S.Title>
      <p>
        Resido em Passo Fundo no Rio Grande do Sul e tenho 36 anos. Gosto de
        correr, viajar (alguém não gosta?) e cuidar de meus gatos, que por sinal
        são uns quantos hehe. Enfim, se quiser conversar basta enviar um e-mail
        ou whats que estou a disposição. Forte abraço e sucesso!
      </p>
    </S.Section>
  </LayoutDefault>
)
