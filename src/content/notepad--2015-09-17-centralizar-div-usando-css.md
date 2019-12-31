---
date: 2015-09-17 15:55:29
title: Dica JavaScript - Como centralizar uma DIV usando CSS?
description: Vamos aprender como centralizar uma DIV utilizando a propriedade margin com CSS.
category: Dicas de JavaScript
type: notepad
image: "../../static/assets/img/September2015/55fae27199f30-javascript.jpg"
---

**Vamos aprender como centralizar uma DIV utilizando a propriedade margin com CSS.**

Perceba que a centralização é relativa ao elemento que estiver acima da DIV, ou seja, seu elemento pai.

O seguinte código já é suficiente para **centralizar** uma **DIV** que está abaixo do elemento BODY

```css
<div style="width: 940px; display: block; border: 1px solid black; margin-left: auto; margin-right: auto;"></div></pre>
```

Eu sei, coloquei o código no style e o certo seria um arquivo CSS externo “bla bla bla” sei disso, o que importa aqui é o uso do margin-left e margin-right que centraliza a DIV, mas isso também depende do elemento pai do objeto.

Abraço!
