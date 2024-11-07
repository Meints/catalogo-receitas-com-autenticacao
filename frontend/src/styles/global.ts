import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 3px ${(props) => props.theme['green-500']};
    }

    body {
        background-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-800']};
        -webkit-font-smoothing: antialiased;
    }

    border-style, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`
