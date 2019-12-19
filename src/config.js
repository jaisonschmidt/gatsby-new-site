const Config = {
  menuItens: [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Videoaulas",
      to: "/videoaulas/",
    },
    {
      label: "Estudo dirigido",
      to: "/estudo-dirigido/",
    },
    {
      label: "Notepad",
      to: "/notepad/",
    },
    {
      label: "Sobre",
      to: "/sobre/",
    },
    {
      label: "Contato",
      to: "/contato/",
    },
  ],
  themes: [
    {
      label: "Light",
      scheme: {
        text: {
          color: "#000",
        },
        border: {
          primary: "1px solid #f5f5f5",
        },
        body: {
          bg: "#f5f5f5",
        },
        layout: {
          sidebar: "#FFF",
          content: "#FFF",
          highlight: "#ff714a",
        },
        clickable: {
          primary: {
            bg: "#FFF",
            color: "#000",
            hover: "#fcfcfc",
          },
        },
        home: {
          bgBanner: "#fcfcfc",
        },
      },
    },
    {
      label: "Dark",
      scheme: {
        text: {
          color: "#FFF",
        },
        border: {
          primary: "1px solid rgba(0,0,0,0.2)",
        },
        body: {
          bg: "rgb(45, 56, 60)",
        },
        layout: {
          sidebar: "rgb(25, 36, 40);",
          content: "rgb(25, 36, 40);",
          highlight: "#ff714a",
        },
        clickable: {
          primary: {
            bg: "rgb(25, 36, 40);",
            color: "#FFF",
            hover: "rgba(0, 0, 0, 0.2)",
          },
        },
        home: {
          bgBanner: "rgba(0, 0, 0, 0.2)",
        },
      },
    },
  ],
  themeDefault: 0,
}

export default Config
