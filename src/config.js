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
      label: "Blog",
      to: "/blog/",
    },
    {
      label: "Notepad",
      to: "/notepad/",
    },
    {
      label: "Sobre",
      to: "/about/",
    },
  ],
  themes: [
    {
      label: "Light",
      scheme: {
        text: {
          color: "#333",
          colorInverse: "#FFF",
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
          colorInverse: "#000",
        },
        border: {
          primary: "1px solid rgba(255,255,255,0.1)",
        },
        body: {
          bg: "#2d383c",
        },
        layout: {
          sidebar: "#192428",
          content: "#192428",
          highlight: "#ff714a",
        },
        clickable: {
          primary: {
            bg: "#192428",
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
