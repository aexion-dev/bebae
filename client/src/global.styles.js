import { createGlobalStyle } from 'styled-components';

import EngraversGothicBT from './assets/fonts/EngraversGothicBT.otf';
import EngraversGothicBold from './assets/fonts/EngraversGothicBold.otf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Engravers Gothic';
    font-style: normal;
    font-weight: normal;
    src:
      url('${EngraversGothicBT}') format('opentype');
  }

  @font-face {
    font-family: 'Engravers Gothic';
    font-style: normal;
    font-weight: bold;
    src:
      url('${EngraversGothicBold}') format('opentype');
  }

  * {
    box-sizing: border-box;
  }

  body {
    padding: 20px 35px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;
