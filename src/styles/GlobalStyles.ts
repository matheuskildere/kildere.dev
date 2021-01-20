import { createGlobalStyle } from 'styled-components'

import ArcaMajora32 from '../assets/fonts/ArcaMajora3-Bold.eot'
import ArcaMajora33 from '../assets/fonts/ArcaMajora3-Bold.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'arca-majora-3-bold';
        src:local('ArcaMajora32'),local('ArcaMajora33'),
        url(${ArcaMajora32}) format('eot'),
        url(${ArcaMajora33}) format('woff');
        font-weight: 300;
        font-style: bold;
    }

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
        font-family: "arca-majora-3-bold", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
        text-decoration:none;
    }

    :root {
        --primary: #252628;
        --greySocialNetworks: #44494D;
        --black: #181818;
        --orange: #F08153;
        --white: #fff;
    }
`;