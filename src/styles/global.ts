import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.2s ease-out;
        font-family: ${theme.fontFamily.primary};
        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background-color: ${theme.colors.bgLight};
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
`

export default GlobalStyle
