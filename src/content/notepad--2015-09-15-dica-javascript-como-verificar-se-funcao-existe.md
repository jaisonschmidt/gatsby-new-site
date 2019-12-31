---
date: 2015-09-15 02:15:35
title: Dica de JavaScript - Como verificar se uma função existe?
description: Neste post aprenderemos como verificar se uma função existe utilizando a ferramenta _typeof_ do JavaScript.
category: Dicas de JavaScript
type: notepad
image: "../../static/assets/img/September2015/javascript.jpg"
---

**Neste post aprenderemos como verificar se uma função existe utilizando a ferramenta _typeof_ do JavaScript.**

Na verdade é um problema bastante simples de ser resolvido, basta efetuar a seguinte verificação:

```jsx
if (typeof nomeDaSuaFuncao == "function") {
  nomeDaSuaFuncao()
}
```

Este código faz o seguinte: Verifica se a função existe, se existir, chama a função. Fácil não? Abraço!
