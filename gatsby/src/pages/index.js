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
  }
  ul {
    margin: 50px auto;
    text-align: center;
    width: fit-content;
  }
  li {
    list-style: decimal-leading-zero;
    color: var(--lightGreen);
    font-weight: bold;
    padding: 10px;
    a {
      font-weight: bold;
    }
  }
`;

// markup
const IndexPage = () => (
  <Layout>
    <SEO />
    <HomeStyles>
      <h1 className="title underline_svg">Frontend Mentor Challenges</h1>
      <p id="intro">
        This website centralize all the frontend mentor challenges
      </p>
      <ul>
        <li>
          <Link to="/challenge1">Order Summary</Link>
        </li>
        <li>
          <Link to="/disneyClone">
            Disney+ Clone (not frontend mentor challenge)
          </Link>
        </li>
      </ul>
    </HomeStyles>
  </Layout>
);

export default IndexPage;
