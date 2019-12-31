---
date: 2015-09-17 15:45:05
title: Dica JavaScript - Como selecionar um objeto SELECT através de seu value?
description: Vamos aprender como selecionar um objeto SELECT através de seu valor ou value.
category: Dicas de JavaScript
type: notepad
image: "../../static/assets/img/September2015/55fae00148c29-javascript.jpg"
---

Salve pessoal, vamos a uma dica rápida. Algumas vezes necessitamos selecionar um elemento **select** baseado em seu atributo **value**, ou até mesmo baseado em qualquer outro atributo do campo, segue o código **jQuery** responsável por essa seleção.

```jsx
$("#ID_ELEMENTO option[ATRIBUTO=VALOR]").prop("selected", true)
```

Exemplo

```jsx
$("#select_campoSexo option[value=MASCULINO]").prop("selected", true)
```
