import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }

  body {
    font-size: 1rem;
    font-family: Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-fontSmoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.grey[900]};
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export default GlobalStyles
