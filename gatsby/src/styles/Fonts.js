import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/Raleway-VariableFont_wght.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Raleway', sans-serif;
    src: url(${font}) format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


  :root {
    --headings-font: "Raleway", Helvetica, Arial, sans-serif;
    --body-font: 'Open Sans', sans-serif;
  }

  body {
    font-family: var(--body-font);
    color: var(--black);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--headings-font);
    font-weight: normal;
    margin: 0;
  }

  a {
    /* color: var(--black); */
    text-decoration: none;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    &:hover {
      /* color: var(--black); */
      text-decoration: none;
    }
  }
  .text-link {
    color: var(--black);
    text-decoration: underline;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    &:hover {
      color: var(--black);
      text-decoration: none;
    }
  }
  mark, .mark {
    background: var(--yellow);
    padding: 2px 5px;
    margin: 0;
    border-radius:3px;
    box-shadow: 1px 1px 10px -2px rgba(0,0,0,0.8);
  }

  .title {
    text-align: center;
    margin: -20px auto 80px auto;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: #ffb23e;
    background-image: linear-gradient(
      268.67deg,
      #fff 3.43%,
      #fff066 15.69%,
      #ffa31a 55.54%,
      #ff0073 99%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: max-content;
  }
  .page-title {
    color: var(--white);
    text-shadow: 2px 2px var(--darkGrey);
    text-align: center;
    margin: -20px auto 20px auto;
    font-size: 3rem;
    letter-spacing: 2px;
    text-decoration: underline;
  }
  @media (max-width: 812px) {
    .title {
      font-size: 2rem;
      margin: 40px auto;
      width: auto;
    }
    #intro {
      font-size:1.5rem;
    }
  }
`;

export default Typography;
