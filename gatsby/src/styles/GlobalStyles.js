import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
    --darkGrey: #0E0000;
    --lightGrey: #F4F4F4;
    --red: #eb624d;
    --darkOrange: #fc7d3a;
    --orange: #fea433;
    --yellow: #ffc600;
    --violet: #955c90;
    --pink: #c65f6b;
    --blueGrey: #4e5b6c;
    --lightGreen: #6bac22;
    --darkGreen: #3e7520;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  html {
    background-size: cover;
    min-height: 100vh;
    font-size:10px;
  }

  body {
    background-color: transparent;
    font-size: 1.8rem;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    min-height:100vh;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  .underline_svg {
    position: relative;
    margin-left: 5px;
    &::after {
      content: '';
    position: absolute;
    bottom: -2.5rem;
    left: 26%;
    right: 0;
    height: 2.5rem;
    width: 45%;
    z-index: -1;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg);
    background-repeat: no-repeat;
    background-size: cover;
    }
  }
`;

export default GlobalStyles;
