---
date: 2017-07-31 13:57:49
title: Como adicionar GIT e Bitbucket em um projeto já existente?
description: Como adicionar um repositório GIT em um projeto já existente.
category: Tutoriais
type: notepad
image: "../../static/assets/img/July2017/dicarapida-cmdgit.jpg"
---

Olá, como vai?

Imagine a seguinte situação, você possuí um projeto já existente (seja PHP, front-end, etc) e deseja realizar as seguintes tarefas: adicionar um repositório GIT e enviar o mesmo para o Bitbucket, como faz?

É óbvio que você precisa já ter um conhecimento pré-existente de GIT e ter o mesmo instalado em sua máquina, ou seja, vou partir do pressuposto que você ja conhece isso. Sendo assim, execute os seguintes comandos para realizar a atividade proposta: (os comandos devem ser executados na pasta do projeto)

1.  git init (inicializa um repositório GIT)
2.  git add --all (adiciona todos os arquivos ao GIT)
3.  git remote add origin LINK_PARA_REPOSITORIO (este link você consegue no próprio Bitbucket na página do projeto)
4.  git commit -m "Commit inicial" (cria um commit inicial)
5.  git push -u origin master (envia seu projeto para a branch master, se tive routra branch, mude o nome)

É isso!

Criei este post pois nunca lembro desta sequência de comandos!
