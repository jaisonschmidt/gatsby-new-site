---
date: 2017-08-04 12:29:56
title: NodeJS e NPM - como baixar pacotes usando HTTP no lugar de HTTPS?
description:
category: Tutoriais
type: notepad
image: "../../static/assets/img/August2017/dicarapida-changehttpsnpm.jpg"
---

Como vai?

Em alguns momentos estamos trabalhando atrás de um firewall ou em uma rede onde várias 'coisas' são bloqueadas e, devido a isso, o gerenciador de pacotes [NPM](https://www.npmjs.com/) não funciona direito, o que podemos fazer?

Claro que cada caso é um caso. Em minha situação, o firewall estava bloqueado conexões HTTPS, ou seja, não conseguia baixar os pacotes via NPM. Para este tipo de situação é possível trocar o protocolo, configurando o NPM para baixar os pacotes sem HTTPS. Como faz?

Muito simples, vai no prompt de comando e digita o seguinte código:

```html
npm config set registry http://registry.npmjs.org/
```

Simples, não? Espero ter ajudado!
