import { createGlobalStyle, ThemeProvider } from 'styled-components'
import TopMenu from '../components/TopMenu';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --offwhite: #dfdfdf;
    --dark-gray: #333;
    --gray: #888;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input:focus {
    outline:0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TopMenu />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
