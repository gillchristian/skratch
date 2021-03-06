import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #FAFAFA;
    font-family: monospace;
    font-weight: 400;
    color: #444;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background: #FF8A65;
  }
`
