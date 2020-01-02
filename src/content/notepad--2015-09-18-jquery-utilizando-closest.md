---
date: 2015-09-18 04:11:02
title: Dica jQuery - Utilizando closest() em jQuery
description:
category: Dicas de jQuery
type: notepad
image: "../../static/assets/img/September2015/jquery.jpg"
---

**Dica de jQuery - Utilizando closest() para pegar elementos acima do elemento selecionado**

Imagine o seguinte cenário: você possui um elemento HTML e precisa varrer toda a árvore DOM de elementos até chegar o elemento de topo, ou seja, você vai varrer a árvore de elementos DOM “para cima”.

Neste sentido surge o closest() que tem por finalidade varrer a árvore elementos DOM até encontrar um elemento ancestral que se adeque ao seletor informado. Pense na seguinte estrutura:

```html
<div id="queroeste">
  <div>
    <div>
      <div id="estouaqui">Olá!</div>
    </div>
  </div>
</div>
```

Ou seja, você possui o elemento _\$(“#estouaqui”)_ e quer pegar o elemento _\$(“#queroeste”)_. Você pode utilizar o parent() mas este tem por finalidade pegar o elemento pai do _\$(“estouaqui”)_.

A seguinte expressão vai retornar para nós o \$(“#queroeste”):

```jsx
$("#estouaqui").closest("#queroeste")
```

Simples não? _“Bla bla bla eu faria de outro jeito”_, claro que sempre existem outras formas de se obter o mesmo resultado, estou mostrando uma delas!

Abraço a todos!
