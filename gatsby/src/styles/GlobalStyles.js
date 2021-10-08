import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #110D12;
    --white: #fff;
    --grey: #efefef;
    --darkGrey: #252327;
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

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    background-size: cover;
    min-height: 100vh;
    font-size: 1rem;
  }

  body {
    background-color: var(--black);
    /* font-size: 1rem; */
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
    display:block;
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
