import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0
    }
    html {
        min-height: 100%;
        background: var(--primary);
        background-color: var(--primary);
    }
    *, botton, input {
        text-align: center;
        border: 0;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
        text-decoration:none;
    }

    :root {
        --primary: #252628;
        --black: #181818;
        --orange: #F08153;
        --white: #fff;
    }
`;