import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';

const NavStyles = styled.div`
  margin: 10px 20px;
  padding: 10px 40px;
`;

const LogoRoundStyles = styled.div`
  width: 80px;
  filter: drop-shadow(3px 3px 13px rgba(255, 255, 255, 0.4));
  transition: all 0.5s;
  &:hover {
    transform: rotate(180deg);
  }
  @media (max-width: 400px) {
    margin-left: 10px;
  }
  @media (max-width: 812px) {
    margin: auto;
  }
`;

const LogoRound = () => {
  const logoSmall = useStaticQuery(graphql`
    query {
      file(name: { eq: "meta_image" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 80, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <LogoRoundStyles>
      <Link to="/">
        <Img fluid={logoSmall.file.childImageSharp.fluid} alt="AlexG logo" />
      </Link>
    </LogoRoundStyles>
  );
};

const Navbar = () => (
  <NavStyles>
    <LogoRound />
  </NavStyles>
);

export default Navbar;
