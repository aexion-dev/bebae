import { createGlobalStyle } from 'styled-components';

import EngraversGothicBT from './assets/fonts/EngraversGothicBT.otf';
import EngraversGothicBold from './assets/fonts/EngraversGothicBold.otf';
import AvenirBook from './assets/fonts/AvenirBook.ttf';

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

  @font-face {
    font-family: 'Avenir Book';
    font-style: normal;
    font-weight: normal;
    src:
      url('${AvenirBook}') format('truetype');
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    position: relative;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;
