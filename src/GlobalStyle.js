import media from "styled-media-query"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
	*/
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		font-size: 100%;
		font: inherit;
		font-family: 'Poppins', sans-serif;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	html, body {
		background: ${props => props.theme.body.bg};
		height: 100%;
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	#___gatsby, #gatsby-focus-wrapper, .tl-edges, .tl-wrapper {
		height: 100%;
	}

	a,
  a:active,
  a:visited {
    color: ${props => props.theme.text.color};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 1.5rem 0;
  }

  h1 {
    font-size: 2.5rem;

		${media.lessThan("medium")`
			font-size: 1.5rem;
  	`}
  }

  h2 {
    font-size: 2.25rem;

		${media.lessThan("medium")`
			font-size: 1.4rem;
  	`}
  }

  h3 {
    font-size: 2rem;
		${media.lessThan("medium")`
			font-size: 1.3rem;
  	`}
  }

  h4 {
    font-size: 1.75rem;
		${media.lessThan("medium")`
			font-size: 1.2rem;
  	`}
  }

  h5 {
    font-size: 1.5rem;
		${media.lessThan("medium")`
    	font-size: 1.1rem;
  	`}
  }

  h6 {
    font-size: 1rem;
  }

  p {
    line-height: 1.4;
  }

  p,
  .gatsby-highlight {
    margin-bottom: 2rem;
  }

	strong {
		font-weight: 600;
	}
`
