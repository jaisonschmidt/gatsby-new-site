---
date: 2015-10-01 02:17:50
title: CSS – selecionando um elemento por atributo em CSS
description: Aprenda como selecionar objetos em CSS através de seu atributo
category: Dicas de CSS
type: notepad
image: "../../static/assets/img/October2015/560c97cdc6f6c-css.jpg"
---

**Aprenda como selecionar objetos em CSS através de seu atributo**

Quando trabalhamos com desenvolvimento, seguidamente nos deparamos com problemas novos, mesmo as vezes sendo meio bobinhos (tanto o desenvolvedor quanto o problema hehe).

**O problema:** os campos de formulário que fossem obrigatórios deveriam ser marcados como obrigatório, somente isso. Mas queria uma forma simples, fácil e eficiente de fazer isso, então optei por, no campo de formulário que fosse obrigatório, apenas colocar um atributo “required”, somente isso, por exemplo:

```html
<input type="text" required />
```

Somente isso formataria o campo. Via javascript e jQuery seria realmente muito fácil, mas como fazer isso via CSS?

A solução final é muito fácil (também em CSS)!

Basta em CSS fazer o seguinte:

```css
[required] {
  // sua formatação CSS!
  border: 1px solid red;
}
```

Este simples trecho de código permite que você formate todos os elementos que possuem o atributo required em sua declaração! Abraço e até a próxima!
