import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const HomeStyles = styled.div`
  color: white;
  #intro {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 700px;
    margin: auto;
  }
  ul {
    margin: 50px auto;
    text-align: center;
    width: fit-content;
  }
  li {
    list-style: none;
    letter-spacing: 2px;
    width: 100%;
    background-image: linear-gradient(
      182deg,
      rgb(255, 255, 255) 15%,
      rgb(255, 240, 102),
      rgb(255, 163, 26)
    );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: rgb(255, 204, 51);
    font-weight: bold;
    padding: 10px;
    &:hover {
      opacity: 0.7;
    }
    a {
      font-weight: 900;
    }
  }
`;

// markup
const IndexPage = () => (
  <Layout>
    <SEO />
    <HomeStyles>
      <h1 className="title underline_svg">Frontend Challenges</h1>
      <p id="intro">
        This website centralize all the frontend challenges (frontend mentor,
        Freecodecamp...) i've done for learning purpose, practicing or just fun
        🤓
      </p>
      <ul>
        <li>
          <Link to="/challenge1">Order Summary</Link>
        </li>
        <li>
          <Link to="/disneyClone">Disney+ Clone</Link>
        </li>
        <li>
          <Link to="/fccQuoteMachine">Freecodecamp Random Quote Machine</Link>
        </li>
        <li>
          <Link to="/markdownPreviewer">Freecodecamp Markdown Previewer</Link>
        </li>
        <li>
          <Link to="/drumMachine">Freecodecamp Drum Machine</Link>
        </li>
        <li>
          <Link to="/tags">Itw challenge - User input tags</Link>
        </li>
      </ul>
    </HomeStyles>
  </Layout>
);

export default IndexPage;
